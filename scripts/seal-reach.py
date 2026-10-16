#!/usr/bin/env python3
"""Append one reach reading per UTC day. GET only. Never invents a missing counter."""
import json
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

KEYS = {
    "rebuild": {
        "webHits": "bd-wezzo72-rebuild-webhits",
        "pageVisits": "bd-wezzo72-rebuild-visits",
        "downloads": "bd-wezzo72-rebuild-downloads",
    },
    "archive": {
        "webHits": "bd-wezzo72-archive-webhits",
        "pageVisits": "bd-wezzo72-archive-visits",
        "downloads": "bd-wezzo72-archive-downloads",
    },
    "church": {"webHits": "bd-wezzo72-church-webhits"},
    "publishingHouse": {"webHits": "bd-wezzo72-publishing-webhits"},
}

PATH = Path("data/reach-ledger.json")


def get_value(key):
    url = "https://countapi.mileshilliard.com/api/v1/get/" + key
    req = urllib.request.Request(url, headers={"User-Agent": "BarrandodgerReach/1.0", "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=20) as response:
            data = json.load(response)
    except urllib.error.HTTPError as error:
        if error.code == 404:
            return None
        raise
    if data.get("value") is None:
        return None
    return int(data["value"])


def main():
    doc = json.loads(PATH.read_text()) if PATH.exists() else {
        "record": "Reach ledger. A count is not a finding. A reading is not a verdict.",
        "readings": [],
    }
    now = datetime.now(ZoneInfo("Australia/Sydney"))
    today = now.date().isoformat()
    for row in doc.get("readings", []):
        if row.get("sealedSydneyDate") == today:
            print("already sealed", today)
            return
    reading = {
        "sealed": datetime.now(ZoneInfo("UTC")).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "sealedSydney": now.strftime("%d %B %Y").lstrip("0"),
        "sealedSydneyDate": today,
        "source": "countapi.mileshilliard.com",
        "method": "GET only. A missing key is null. Null is not zero and is not a historical audience.",
        "note": "Daily seal. Web hits are page openings. Visits are not added into web hits. Downloads are separate. Unique visitors and referral sources are not recorded by this counter.",
        "rebuild": {},
        "archive": {},
        "church": {},
        "publishingHouse": {},
    }
    for part, fields in KEYS.items():
        for field, key in fields.items():
            reading[part][field] = get_value(key)
    doc.setdefault("readings", []).append(reading)
    PATH.parent.mkdir(parents=True, exist_ok=True)
    PATH.write_text(json.dumps(doc, indent=2) + "\n")
    print("sealed", reading["sealed"])


if __name__ == "__main__":
    main()

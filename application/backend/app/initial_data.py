#!/usr/bin/env python3
import os
from app.db.session import get_db
from app.db.session import SessionLocal


def init() -> None:
    db = SessionLocal()

    # Optional: Initialize database records here
    # ...


if __name__ == "__main__":
    init()

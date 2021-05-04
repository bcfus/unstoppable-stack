from fastapi import APIRouter, Request, Depends, Response, encoders

from slowapi import Limiter
from slowapi.util import get_remote_address

import typing as t

from app.db.session import get_db
from app.db.crud import (
    get_notes,
    delete_note,
    create_note,
)
from app.db.schemas import Note, NoteCreate, NoteDelete, NoteOut
import app

notes_router = r = APIRouter()


@r.get(
    "/notes",
    response_model=t.List[Note],
    response_model_exclude_none=True,
)
async def note_list(
    request: Request,
    response: Response,
    db=Depends(get_db),
):
    """
    Get all notes
    """
    notes = get_notes(db)
    return notes


@r.post("/notes", response_model=NoteOut, response_model_exclude_none=True)
async def note_create(
    request: Request, response: Response, note: NoteCreate, db=Depends(get_db)
):
    """
    Create a new note
    """
    new_note = create_note(db, note)
    return new_note


@r.delete(
    "/notes/{note_id}", response_model=Note, response_model_exclude_none=True
)
async def note_delete(request: Request, note_id: int, db=Depends(get_db)):
    """
    Delete existing note
    """
    return delete_note(db, note_id)

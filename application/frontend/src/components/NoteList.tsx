import React, { FC, useState, useEffect, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardActions, IconButton, Paper, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

import { getNotes, createNote, deleteNote } from '../utils/api';
import { create } from 'node:domain';
import { EventType } from '@testing-library/dom';
import { Autocomplete } from '@material-ui/lab';

import _ from "lodash";


const useStyles = makeStyles((theme) => ({
    note: {
        border: '1px solid #DDD',
        borderRadius: '2px',
        background: '#EEE',
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
        margin: '2px',
        padding: '2px 10px',
        fontSize: '0.75rem',
        textAlign: 'left',
    },
    noteList: {
        maxHeight: '250px',
        overflow: 'auto',
    }
}));
  
const Note: FC<{ noteId: string, text: string, onDelete: React.MouseEventHandler<HTMLButtonElement>}> = ({noteId, text, onDelete}) => {
    const classes = useStyles();

    return (
        <Card className={classes.note} variant="outlined">
        <Box id={noteId} display="flex" alignItems="center">
            <Box flexGrow={1}>
            {text}
            </Box>
            <Box>
            <IconButton 
                onClick={onDelete} 
                data-note-id={noteId} 
                size="small" 
                aria-label="delete">
                <ClearIcon />
            </IconButton>
            </Box>
        </Box>
        </Card>
    );
};

interface INote {
    id: string;
    text: string;
}

export const NoteList: FC = () => {
    const [notes, setNotes] = useState<INote[]>([]);
    const [text, setText] = useState<string>('');

    const classes = useStyles();
    const endOfListRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getNotes();
            setNotes(result);
        };
        
        fetchData();
    }, []);

    useEffect(() => {
        scrollToBottom()
      }, [notes]);

    const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setText(event.target.value);
    };

    const callCreateNote = useCallback(async (event) => {
        const newNote = await createNote(text);
        setText('');
        setNotes([...notes, newNote]);
    }, [text]);

    const scrollToBottom = () => {
        endOfListRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const callDeletNote = useCallback(async (event: React.SyntheticEvent<HTMLButtonElement>) => {
        const noteId = event.currentTarget.dataset.noteId;
        if(noteId) {
            await deleteNote(noteId);
            setNotes(notes.filter(n => n.id != noteId));
        }
    }, [notes]);

    return (
        <Card>
            <Box m={1} className={classes.noteList}>
                {notes.map((note) => (
                    <Note 
                        key={note.id}
                        noteId={note.id} 
                        text={note.text}
                        onDelete={callDeletNote}
                    />
                ))}
                <div ref={endOfListRef}/>
            </Box>

            <CardActions>
                <TextField 
                value={text}
                onChange={onTextChange}
                margin="dense"
                size="small"
                id="outlined-basic" 
                label="Note" 
                variant="outlined"
                fullWidth
                />
                <Button
                onClick={callCreateNote}
                variant="contained"
                color="primary"
                endIcon={<AddIcon/>}
                disableElevation
                >
                Add
                </Button>
            </CardActions>

        </Card>
    );
};
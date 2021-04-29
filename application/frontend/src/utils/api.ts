import { BACKEND_URL } from '../config';

export const getMessage = async () => {
  const response = await fetch(BACKEND_URL);

  const data = await response.json();

  if (data.message) {
    return data.message;
  }

  return Promise.reject('Failed to get message from backend');
};

export const getNotes = async () => {
  const url = `${BACKEND_URL}/notes`;
  const response = await fetch(url);

  const data = await response.json();
  if(data) {
    return data;
  }

  return Promise.reject('Failed to get notes from backend');
};

export const createNote = async (noteText: string) => {
  const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: noteText}),
  };
  const url = `${BACKEND_URL}/notes`;
  const response = await fetch(url, settings);

  const data = await response.json();
  if(data) {
    return data;
  }

  return Promise.reject('Failed to get notes from backend');
};

export const deleteNote = async (noteId: string) => {
  const settings = {
      method: 'DELETE',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
  };
  const url = `${BACKEND_URL}/notes/${noteId}`;
  const response = await fetch(url, settings);

  const data = await response.json();
  if(data) {
    return data;
  }

  return Promise.reject('Failed to delete note on backend');
};

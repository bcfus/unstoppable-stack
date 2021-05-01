import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Divider from '@material-ui/core/Divider';

import { getMessage } from '../utils/api';
import { NoteList } from '../components/NoteList';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '750px',
  },
  h1: {
    fontFamily: "'Roboto Mono', monospace",
    letterSpacing: '-0.1rem',
    fontSize: '2.5em',
  },
  link: {
    color: '#8D8741',
    textDecoration: 'none',
    margin: '0px 0.25rem',
  },
  ping: {
    fontSize: '1rem',
  },
  divider: {
    margin: '16px',
  }
}));

export const Home: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const classes = useStyles();

  const pingBackend = async () => {
    try {
      const message = await getMessage();
      setMessage(message);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Box m={2} className={classes.main}>
      <h1 className={classes.h1}>Unstoppable Stack</h1>
      
      <Grid 
        container 
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item sm={10}>
          <>
            <span>
              The frontend of this site is being served from <b>Skynet</b>.
              To ping the backend running on <b>Akash</b>, 
            </span>

            <a className={classes.link} href="#" onClick={() => pingBackend()}>
              click here
            </a>
          </>

          {message && (
            <p className={classes.ping}>
              <code>{message}</code>
            </p>
          )}

          {error && (
            <p className={classes.ping}>
              Error: <code>{error}</code>
            </p>
          )}
        </Grid>

        <Grid item sm={10}>
          <Divider className={classes.divider} variant="middle"/>
          <p>
            This <b>React</b> component is backed by a Python <b>FastAPI</b> application and a <b>PostgreSQL</b> database, both running on <b>Akash</b>.
          </p>
        </Grid>

        <Grid item sm={10}>
          <NoteList/>
        </Grid>

        <Grid item sm={10}>
          <Divider className={classes.divider} variant="middle"/>
          Step-by-step guide on how this application was built and deployed <a className={classes.link} href="https://github.com/bcfus/unstoppable-stack">https://github.com/bcfus/unstoppable-stack</a>.
        </Grid>
      </Grid>
    </Box>

    
  );
};

import React, { useState } from 'react';
import './App.css';
import ChatPage from './components/chatbot.component';
import LoginPage from './components/login.component';
import AccountPage from './components/account.component';

import { AppBar, Container, Tab, Tabs, Box, Typography, createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

  export default function App() {




    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };



    const theme = createMuiTheme({
      palette: {
        type: "dark",
      }
    });

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container style={{paddingTop: '10vh', color: 'white'}}>
            <Typography  variant="h3">ChatBot thing</Typography>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              <Tab label="Login" />
              <Tab label="Chatbot" />
              <Tab label="Account Info" />
            </Tabs>
            <Typography index={0} hidden={value !== 0}>
                  <LoginPage style={{ paddingTop: '5em' }}/>
              </Typography>
              <Typography index={1} hidden={value !== 1}>
                  <ChatPage />
              </Typography>
              <Typography index={2} hidden={value !== 2}>
                  <AccountPage />
              </Typography>
            
        </Container>
      </ThemeProvider>

    );
    }

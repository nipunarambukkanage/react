import './App.css';
import React, {useState} from 'react';
import { Avatar, Typography, Paper, IconButton, CssBaseline, AppBar, Toolbar } from '@mui/material';
import { AddAPhoto, Satellite, YouTube, TaxiAlert, Headphones, Gamepad, 
  Recycling } from '@mui/icons-material';

function App() {
  return (
    <div className='App'>
    <CssBaseline />
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap>

            Nipuna Rambukkanage

        </Typography>
      </Toolbar>
    </AppBar>

   
   </div>
  );
}
export default App;

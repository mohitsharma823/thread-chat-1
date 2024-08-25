import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import SearchBar from '../components/SearchBar';
import MessageListItem from './MessageListItem';
import { Grid } from '@mui/material';
import ChatScreen from '../chat-screen/ChatScreen';


const MessageList = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container 
            sx={{ height: '100vh', paddingTop: '1%' }}
            spacing={1}
            >
                <Grid item xs={3}>
                    <SearchBar />
                    <MessageListItem />
                </Grid>
                <Grid item xs={8}>
                    <ChatScreen />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};


export default MessageList;
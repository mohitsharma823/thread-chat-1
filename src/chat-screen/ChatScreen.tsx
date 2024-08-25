import { Avatar, Grid, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import InputText from './InputText';
import MessageScreen from './MessageScreen';
import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';

export type MessageType = {
    message: string;
    time: string;
    id: string;
    userName: string;
};

const ChatScreen = () => {
    const [messages, setMessages] = React.useState<MessageType[]>([{
        message: "Good Day to All..!!",
        time: 'Jan 9, 2014',
        id: Date.now().toString(36),
        userName: 'Mohit Sharma'
    }]);
    return (
        <Grid container>
            <Grid item xs={12}>
                <Toolbar sx={{ backgroundColor: '#FAF9F6', boxShadow: '5px 10px 5px 5px grey' }}>
                <Avatar >
                    <Face6TwoToneIcon fontSize='medium' />
                </Avatar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1,  }}>
                        <strong> {'Mohit Sharma'} </strong>
                    </Typography>
                </Toolbar>
                <MessageScreen messageList={messages} />
            </Grid>
            <Grid item xs={12} sx={{ position: 'fixed', bottom: 0, width: '110vh', paddingBottom: '1%' }}>
                <InputText updateMessages={setMessages} />
            </Grid>
        </Grid>
    );

}

export default ChatScreen;
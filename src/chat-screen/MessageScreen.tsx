import { Avatar, Grid, List, ListItem, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThreadModal from '../thread-screen/ThreadModal';
import { MessageType } from './ChatScreen';
import React from 'react';


const MessageScreen = ({ messageList }: { messageList: MessageType[] }) => {
    const handleMessageClick = (msg: MessageType) => {
        console.log("Message : ", msg)
    }
    return (
        <List sx={{ bgcolor: 'background.paper', maxHeight: 800, overflow: 'auto' }}>
            {messageList.map((msg: MessageType) =>
                <Grid container alignItems={'center'} spacing={0.5}>
                    <Grid item xs={1}>
                        <Avatar >
                            <AccountCircleIcon />
                        </Avatar>
                    </Grid>
                    <Grid item xs={7} >
                        <ListItem key={msg.message} sx={{
                            margin: '1%',
                            border: '1px solid black',
                            borderRadius: '30px',
                            bgcolor: '#ADD8E6',
                            maxWidth: 600,
                            boxShadow: '1px 1px 10px 1px grey'
                        }} onFocus={() => handleMessageClick(msg)}>
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <span style={{color:"grey" , textShadow:'1px 1px 2px grey'}}>{msg.userName}</span>
                                        <br/>
                                        <span>{msg.message}</span>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <p style={{textAlign:'start'}}><span >{msg.time}</span></p>
                                    </React.Fragment>
                                } />
                            <ThreadModal info={msg} />
                        </ListItem>

                    </Grid>
                </Grid>
            )}
        </List>
    )
};

export default MessageScreen;
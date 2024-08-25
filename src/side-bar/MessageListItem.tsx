import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { Stack, styled } from '@mui/material';
import { MessageType } from '../types/types';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function MessageListItem() {
    return (
        <List sx={{ width: '99%', bgcolor: 'background.paper', margin: '1%' }}>
            <Stack>
                {MessageList.map((message: MessageType) =>
                    <>
                        <Item>
                            <ListItem alignItems="center">
                                <ListItemAvatar>
                                    <Avatar alt={message.userName} src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <strong>{message.userName}</strong>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            {message.message}
                                            {message.time}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </Item>
                        <Divider variant="inset" component="li" />
                    </>
                )}
            </Stack>
        </List>
    );
};

const MessageList: MessageType[] = [
    {
        userName: 'Bruno',
        message: "I'll be in your neighborhood doing errands this…",
        time: 'Now'
    },
    {
        userName: 'Chris',
        message: "I'll be in your neighborhood doing errands this…",
        time: 'Now'
    },
    {
        userName: 'Mira',
        message: "I'll be in your neighborhood doing errands this…",
        time: 'Now'
    },
    {
        userName: 'Nani',
        message: "I'll be in your neighborhood doing errands this…",
        time: 'Now'
    },
    {
        userName: 'Lina',
        message: "I'll be in your neighborhood doing errands this…",
        time: 'Now'
    },
    {
        userName: 'David',
        message: "I'll be in your neighborhood doing errands this…",
        time: 'Now'
    },
    {
        userName: 'Rony',
        message: "I'll be in your neighborhood doing errands this…",
        time: 'Now'
    },
];

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Grid, IconButton, InputBase, List, Paper, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Anchor, ReplyType } from '../types/types';


const ThreadModal = (inputProps: any) => {
    const [state, setState] = React.useState({
        right: false,
    });
    const [replyMessage, setReply] = React.useState('');

    const [replies, setReplies] = React.useState<ReplyType[]>([]);

    const generateReplies = (reply: ReplyType) => (
        <Grid container alignItems={'center'} spacing={5}>
            <Grid item xs={1}>
                <Avatar >
                    <AccountCircleIcon />
                </Avatar>
            </Grid>
            <Grid item xs={10}>
                <ListItem key={reply.reply} sx={{
                    margin: '1%',
                    border: '1px solid black',
                    borderRadius: '30px',
                    bgcolor: '#FFFFFF',
                    maxWidth: 600,
                    boxShadow: '1px 1px 10px 1px grey',
                    maxHeight: 400,
                    overflow: 'auto'
                }} >
                    <ListItemText
                        primary={
                            <React.Fragment>
                                {reply.reply}
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                                {reply.time}
                            </React.Fragment>}
                    />
                </ListItem>
            </Grid>
        </Grid>
    );

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({ ...state, [anchor]: open });
                console.log(inputProps);
            };
    const handleSendReply = () => {
        setReplies(prevState => [...prevState, {
            reply: replyMessage,
            time: new Date().toDateString(),
        }]);
        setReply('');
    };

    const list = (anchor: Anchor, messageComp: any) => (
        <Box
            role="presentation"
            sx={{ width: 550 }}
        >
            <Grid container alignItems={'center'} spacing={5}>
                <Grid item xs={12}>
                    <Toolbar sx={{ backgroundColor: '#FAF9F6', boxShadow: '10px 0px 10px 0px grey' }}>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, padding: '5%' }}>
                            <strong>Thread</strong>
                        </Typography>
                    </Toolbar>
                </Grid>
                <Grid item xs={10}>
                    <ListItem key={messageComp.info.message} sx={{
                        margin: '1%',
                        border: '1px solid black',
                        borderRadius: '30px',
                        bgcolor: '#FFFFF0',
                        maxWidth: 600,
                        boxShadow: '1px 1px 10px 1px grey'
                    }} >
                        <ListItemText
                            primary={messageComp.info.message}
                            secondary={messageComp.info.time}
                        />
                    </ListItem>
                    <Grid container >
                        <Grid item xs={2} spacing={.5}>
                            <span style={{ color: 'GrayText', paddingLeft: '20%' }}>{replies.length + " Reply"}</span>
                        </Grid>
                        <Grid item xs={10}>
                            <hr />
                        </Grid>
                    </Grid>
                    <List sx={{ bgcolor: 'background.paper', maxHeight: 800, overflow: 'auto' }}>
                        {replies.map((reply: ReplyType) => (
                            generateReplies(reply)
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12}>
                    <Paper
                        component="form"
                        sx={{ p: '5px 4px 5px 5px', display: 'flex', alignItems: 'center' }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Type Message..."
                            inputProps={{ 'aria-label': 'search' }}
                            value={replyMessage}
                            onChange={(e) => {
                                setReply(e.target.value);
                            }}
                            onKeyDown={
                                (e)=>{
                                    if(e.key==='Enter'){
                                        handleSendReply();
                                        e.preventDefault();
                                    }
                                }
                            }
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSendReply}>
                            <SendRoundedIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <ReplyTwoToneIcon />
                    </Button>
                    <Drawer
                        anchor={'right'}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor, inputProps)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default ThreadModal;
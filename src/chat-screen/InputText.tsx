import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useState } from 'react';

export default function InputText({ updateMessages }: { updateMessages: Function }) {
    const [message, setMessage] = useState<string>('');
    const handleSendMessage = () => {
        const messageObj = {
            message: message,
            time: new Date().toDateString(),
            id: Date.now().toString(36),
            userName: 'Mohit Sharma',
        };
        updateMessages((prevState: any) => [...prevState, messageObj]);
        setMessage('');
    };
    return (
        <Paper
            component="form"
            sx={{ p: '5px 4px 5px 5px', display: 'flex', alignItems: 'center' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Type Message..."
                inputProps={{ 'aria-label': 'search' }}
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
                onKeyDown={(e)=>{
                    if(e.key ==='Enter'){
                       handleSendMessage();
                       e.preventDefault();
                    }
                }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSendMessage}>
                <SendRoundedIcon />
            </IconButton>
        </Paper>
    );
}
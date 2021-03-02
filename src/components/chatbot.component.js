import React, { useState } from 'react';
import { Input, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import 'axios';
import ChatBubble from './tiles/chatBubbleUser.tile';
import { Send } from '@material-ui/icons';
import axios from 'axios';


export default function ChatPage(props) {
    const [messages, addMessages] = useState([]);

    const [typedMessage, editMessage] = useState('');


    const sendMessage = event => {
        event.preventDefault();
        let message = typedMessage;
        editMessage('');
        addMessages(messages.concat(
            {
                message,
                from: 'user'
            },
        ));
        axios.post('/api/bot/sendmessage', {inputText: message})
            .then(res => {
                if(res.status === 200) { // Good response
                   
                    addMessages(messages.concat(
                        {
                            message,
                            from: 'user'
                        },
                        {
                            message: res.data,
                            from: 'bot'
                        }
                    ));
                }
                else {
                    console.error(res.data);
                }
            })
            .catch(err => {
                console.error(err);
            })
        

        
    }

    const useStyles = makeStyles({
        root: {
            maxHeight: '60vh',
            minHeight: '60vh',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                width: '0.4em'
              },
              '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                outline: '1px solid slategrey'
              }
        },
        inputText: {
            // position: 'absolute',
            // bottom: '50%',
            color: 'white',
            borderColor: 'white',
            float: 'left'
        },
        sendButton: {
            backgroundColor: '#FF5733',
            color: '#fff',
            float: 'right',
            "&:hover": {
                backgroundColor: '#D32D31'
            }
        },
        form: {
            marginTop: '1.5em',
        }
    });
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                {messages.map((message, index) => {
                    if (message.from === 'bot') {
                        return (
                            <ChatBubble
                                key={message.message}
                                floatSide='left'
                                textColor="#fff"
                                color="#745296"
                                message={message.message}
                            />
                        );
                    }
                    else {
                        return (
                            <ChatBubble
                                key={message.message}
                                floatSide='right'
                                textColor="#fff"
                                color="#8B9EB7"
                                message={message.message}
                            />
                        );
                    }
                })}
                
            </div>


            <form className={classes.form} onSubmit={sendMessage}>
                <Input 
                    fullWidth={true} 
                    InputProps=
                        {{
                            className: classes.inputText,
                        }} 
                    variant="outlined" 
                    endAdornment={<InputAdornment position="end"><IconButton type="submit"><Send /></IconButton></InputAdornment>}
                    label="Type Message" 
                    className={classes.inputText} 
                    value={typedMessage} 
                    onChange={ e => editMessage(e.target.value)} 
                />
                
            </form>
   
        
        </>
    );
}
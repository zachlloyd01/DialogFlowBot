import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


export default function ChatBubble(props) {
    const useStyles = makeStyles({
        chatBubble: {
            clear: 'both',
            backgroundColor: props.color,
            borderRadius: '15px',
            height: 'fit-content',
            width: 'fit-content',
            padding: '1em',
            color: props.textColor,
            float: props.floatSide,
            display: 'block',
            position: 'relative',
            marginBottom: '.75em'
        },
        text: {
            fontSize: '1.2em'
        }
    });
    const classes = useStyles();
    return (
        <React.Fragment>
           
           <div className={classes.chatBubble}>
               <Typography variant="p" className={classes.text}>{props.message}</Typography>
           </div>
           
        </React.Fragment>
    );
}
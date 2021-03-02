import { Button, TextField, makeStyles, Grid } from "@material-ui/core";

export default function (props) {

    const useStyles = makeStyles({
        button: {
            backgroundColor: '#745296',
            margin: '2em'
        }
    });
    const classes = useStyles();


    return (
        <>
            <Grid container direction="column" style={{ paddingTop: '7em' }}justify="center">
                <TextField fullWidth type="email" variant="outlined" label="Email"/>
                <TextField fullWidth type="password" variant="outlined" label="Password" style={{marginTop: '2em'}} />
                <Grid item>
                    <Button className={classes.button} style={{float: 'right'}}>Submit</Button>
                </Grid>
            </Grid>
            
        </>
    );
}
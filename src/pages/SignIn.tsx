import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        backgroundColor: '#1DA1F2',
    },
    loginSide: {},
}));

const SignIn = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <ul>
                    <li>
                        <Typography>Читайте о том, что вам интересно.</Typography>
                    </li>
                    <li>
                        <Typography>Узнайте, о чем говорят.</Typography>
                    </li>
                    <li>
                        <Typography>Присоединяйтесь к общению.</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <TwitterIcon/>
                <Typography>Узнайте, что происходит в мире прямо сейчас</Typography>
                <Typography>Присоединяйтесь прямо сейчас</Typography>
                <Button variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                <Button variant="outlined" color="primary" fullWidth>Войти</Button>
            </section>
        </div>
    );
};

export default SignIn;
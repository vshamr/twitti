import {Button, FormControl, Typography, FormGroup, makeStyles, TextField} from "@material-ui/core";
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import {Modal} from "../components/Modal";
import React, {useState} from "react";

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '53%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20,
    },
    loginSideField: {
        marginBottom: 18,
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
}));

export const SignIn = () => {
    const classes = useStylesSignIn();
    const [open, setOpen] = useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setOpen('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setOpen('signUp');
    };

    const handleClose = (): void => {
        setOpen(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color='primary' className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                            <SearchIcon className={classes.blueSideListInfoIcon}/>
                            ?????????????? ?? ??????, ?????? ?????? ??????????????????.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                            <PeopleIcon className={classes.blueSideListInfoIcon}/>
                            ??????????????, ?? ?????? ??????????????.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>?????????????????????????????? ?? ??????????????.</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.loginSideTwitterIcon}/>
                    <Typography className={classes.loginSideTitle}>
                        ??????????????, ?????? ???????????????????? ?? ???????? ?????????? ????????????
                    </Typography>
                    <Typography>
                        <b>?????????????????????????????? ?????????? ????????????</b>
                    </Typography>
                    <br/>
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: 20}} variant="contained"
                            color="primary" fullWidth>
                        ????????????????????????????????????
                    </Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
                        ??????????
                    </Button>
                    <Modal
                        open={open === 'signIn'}
                        onClose={handleClose}
                        classes={classes}
                        title="?????????? ?? ??????????????">
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    label="Email"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="password"
                                    label="????????????"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button onClick={handleClose} variant="contained" color="primary" fullWidth>
                                    ??????????
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </Modal>
                    <Modal
                        open={open === 'signUp'}
                        onClose={handleClose}
                        classes={classes}
                        title="???????????????? ?????????????? ????????????">
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="name"
                                    label="??????"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="name"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="email"
                                    label="Email"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="password"
                                    label="????????????"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button onClick={handleClose} variant="contained" color="primary" fullWidth>
                                    ??????????
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </Modal>
                </div>
            </section>
        </div>
    );
};
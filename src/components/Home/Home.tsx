import {Grid, IconButton, Typography, makeStyles, Container, withStyles, Paper, Avatar} from "@material-ui/core";
import {createStyles, InputBase} from "@mui/material";
import classNames from 'classnames';
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/BookmarkBorder";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/PersonOutline";
import CommentIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import grey from "@material-ui/core/colors/grey";


const useStylesHome = makeStyles(() => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        fontSize: 36,
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 25,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweet: {
      '&: hover': {
       backgroundColor: 'rgb(245, 248, 250)',
      },
    },
    tweetsFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450,
    },
    tweetsUserName: {
        color: grey[500],
    },
}));

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0,
        }
    }))(InputBase);

export const Home = () => {
    const classes = useStylesHome();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logo} aria-label="delete" color="primary">
                                <TwitterIcon className={classes.logoIcon}/>
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <SearchIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <MailIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <BookmarkIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <ListIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <PersonIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                        </li>
                    </ul>

                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
                            <Grid container spacing={3}>
                                <Grid item xs={1}>
                                    <Avatar
                                        alt="User Avatar"
                                        src="http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png"
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography>
                                        <b>Maksym</b> <span className={classes.tweetsUserName}>@maksym24</span>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        В моем роду было целое поколение художников от рождения. Они все умерли от
                                        алкоголизма. Ген художника мне не передался, как видите, а вот...
                                    </Typography>
                                    <div className={classes.tweetsFooter}>
                                        <div>
                                            <IconButton>
                                                <CommentIcon style={{fontSize: 20}}/>
                                            </IconButton>
                                            <span>1</span>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <RepeatIcon style={{fontSize: 20}}/>
                                            </IconButton>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <LikeIcon style={{fontSize: 20}}/>
                                            </IconButton>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <ReplyIcon style={{fontSize: 20}}/>
                                            </IconButton>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        placeholder="Поиск по Твиттеру"
                        fullWidth/>
                </Grid>
            </Grid>
        </Container>
    );
};
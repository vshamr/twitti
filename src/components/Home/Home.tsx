import {Grid, IconButton, Typography, makeStyles, Container} from "@material-ui/core";
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/PersonOutline';

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
    }
}))

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

                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </Container>
    );
};
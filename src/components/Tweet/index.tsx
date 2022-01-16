import {ReactElement} from "react";

import classNames from "classnames";
import {useStylesHome} from "../Home/Home";

import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";

interface TweetProps {
    classes: ReturnType<typeof useStylesHome>;
    text: string;
    user: {
        fullName: string;
        userName: string;
        avatarUrl: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({classes, text, user}: TweetProps): ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar
                        alt="User Avatar"
                        src={user.avatarUrl}
                    />
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullName}</b>
                        <span className={classes.tweetsUserName}>@{user.userName}</span>&nbsp;
                        <span className={classes.tweetsUserName}>·1ч</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
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
    );
};

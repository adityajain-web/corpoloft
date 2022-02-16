import React from 'react'
import { Icon, Typography, makeStyles } from '@material-ui/core';
import './Sass/MediaObject.css';

const useStyles = makeStyles(theme => ({
    mediaTitle: { fontSize: "1.25rem", fontWeight: 700 },
    mediaText: { fontSize: "1.125rem" }
}))

const MediaObject = ({ icon, title, description }) => {
    const classes = useStyles()
    return (
        <>
            <div className="media py-3 mediaObject">
                <Icon className="mr-3">{icon}</Icon>
                <div className="media-body">
                    <Typography className={classes.mediaTitle} variant='h3' gutterBottom>{title}</Typography>
                    <Typography className={classes.mediaText}>{description}</Typography>
                </div>
            </div>
        </>
    )
}

export default MediaObject
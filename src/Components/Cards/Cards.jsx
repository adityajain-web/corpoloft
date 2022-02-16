import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardActionArea, CardContent, CardActions, Icon, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    DeskDes: { fontSize: "1.125rem", color: "#454545" },
    AboutSecCardTitleDesk: { fontSize: "1.75rem", fontWeight: 700 },
    AboutSecCardTitleMob: { fontSize: "1.438rem", fontWeight: 700 },
}))

const Cards = ({ icon, title, description, cls }) => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    const classes = useStyles();
    return (
        <>
            <Card className={`shadow ${cls} ${title === "S Corporation" ? "mt-md-n5" : null} rounded-lg`}>
                <CardActionArea>
                    <CardContent>
                        <Box py={2}>
                            <Icon>{icon}</Icon>
                        </Box>
                        <Typography variant='h3' align='center' className={width > 576 ? classes.AboutSecCardTitleDesk : classes.AboutSecCardTitleMob} gutterBottom>{title}</Typography>
                        <Typography align='center' className={classes.DeskDes} >{description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Box py={2} className="d-flex w-100 justify-content-center
                                                                         align-items-center">
                            <Button size='large' className='justify-self-center customBtn rounded-pill' variant='contained'>Read More</Button>
                        </Box>
                    </CardActions>
                </CardActionArea>
            </Card>
        </>
    )
}

export default Cards
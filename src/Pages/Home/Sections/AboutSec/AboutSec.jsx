import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography, Card, CardContent, makeStyles } from '@material-ui/core';
import { Computer, PeopleAltOutlined, AssessmentOutlined } from '@material-ui/icons';
import { BsShield } from 'react-icons/bs';
import { GrFormAdd } from 'react-icons/gr'
import { XMasonry, XBlock } from "react-xmasonry";
import CountUp from 'react-countup';
import { Cards, SectionalContent } from '../../../../Components/Components';
import './Sass/AboutSec.css'


const useStyles = makeStyles(theme => ({
    counter: { fontSize: "2.813", fontWeight: 700 },
    counterTitle: { fontSize: "1.125rem", fontWeight: 700 },
}))

const AboutSec = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" id="aboutSec">
                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={10} lg={10} className="mx-auto">
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={4} md={5} lg={5} className="d-flex flex-column justify-content-center">
                                        <SectionalContent head="We’re creating the simplest way to start and run a successful business." para={["At Corporateloft, our goal is to make the dream of starting a new business accessible to everyone across the country. We’re a small business empowering the next generation of small businesses to be successful."]} subTitle="ABOUT US" btn={false} sec="about" />
                                        <Box py={2}>
                                            <XMasonry>
                                                {
                                                    [{ id: "stats1", count: 450, title: "Happy Clients" }, { id: "stats2", count: 750, title: "Project Deliver" }].map(item => {
                                                        return <XBlock>
                                                            <Card className='m-1 shadow-none'>
                                                                <CardContent>
                                                                    <Typography align='center' variant='h3' className={classes.counter}><CountUp end={item.count} duration={5} /><GrFormAdd className='ml-1' /></Typography>
                                                                    <Typography variant='h3' align='center' className={classes.counterTitle}>{item.title}</Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </XBlock>
                                                    })
                                                }
                                            </XMasonry>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={7} lg={7}>
                                        <Box>
                                            <XMasonry smartUpdate>
                                                {
                                                    [{ id: "aboutSer1", icon: <Computer />, title: "LLC", description: "LLC or limited liability company is the most favorite business type in small and medium-sized organizations." }, { id: "aboutSer2", icon: <PeopleAltOutlined />, title: "S Corporation", description: "S Corp or S Corporation has some specific differences from C Corp. Like, S Corps holds eligibility to bypass taxation status with the IRS." }, { id: "aboutSer3", icon: <AssessmentOutlined />, title: "C Corporation", description: "C Corp or C Corporation offers max tax-related options for you. C Corp helps to keep the company and owner as a separate entity." }, { id: "aboutSer4", icon: <BsShield />, title: "Non-Profit", description: "A nonprofit corporation has its specialty of carrying a structure that helps your organization with certain benefits." }].map(item => {
                                                        return <XBlock>
                                                            <Cards cls="m-3" key={item.id} icon={item.icon} title={item.title} description={item.description} />
                                                        </XBlock>
                                                    })
                                                }
                                            </XMasonry>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSec
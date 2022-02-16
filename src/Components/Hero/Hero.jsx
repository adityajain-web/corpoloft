import React, { useState, useEffect } from 'react'
import { Container, Box, Grid, Typography, Button, makeStyles } from '@material-ui/core'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Banner1 from './images/banner1.png';
import './Sass/Hero.css'

const useStyles = makeStyles(theme => ({
    deskHeroHead: { fontSize: "3.125rem", fontWeight: 700, lineHeight: "4rem", color: "#101010" },
    mobHeroHead: { fontSize: "2rem", fontWeight: 700, lineHeight: "2.5rem", color: "#101010" },
    deskSubTitle: { fontSize: "1.25rem", lineHeight: "1.875rem", color: "#454545", fontWeight: 500 },
    mobSubTitle: { fontSize: "1.125rem", lineHeight: "1.875rem", color: "#454545", fontWeight: 500 },
    btn: { backgroundImage: "linear-gradient(90deg,#76a9dd,#3b6091)", color: '#fff', padding: "0.875rem 2.5rem", marginTop: theme.spacing(4) }

}))

const Hero = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" id="Hero">
                <Box mt={8} style={{ height: "inherit" }}>
                    <Grid container style={{ height: "inherit" }}>
                        <Grid item xs={12} sm={12} md={10} lg={10} className="mx-auto" style={{ height: "inherit" }} >
                            <Swiper loop={true} loopFillGroupWithBlank={true} slidesPerView={1} autoplay={true} style={{ height: "inherit" }} >
                                <SwiperSlide>
                                    <Box>
                                        <Grid container style={{ height: "inherit" }}>
                                            <Grid item xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center" style={{ height: "inherit" }}>
                                                <Box>
                                                    <Typography gutterBottom variant='h2' className={width > 576 ? classes.deskHeroHead : classes.mobHeroHead}>Grow Business with Dreams.</Typography>
                                                    <Typography gutterBottom className={width > 576 ? classes.deskSubTitle : classes.mobSubTitle} variant='subtitle1'>Choose the business entity that best fits the needs of your business.</Typography>
                                                    <Button className={classes.btn} variant='contained' size='large'>Get Started</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6} className="d-md-flex d-none">
                                                <Box>
                                                    <img src={Banner1} alt="banner1" className='img-fluid bounce' />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center">
                                                <Box>
                                                    <Typography gutterBottom variant='h2' className={width > 576 ? classes.deskHeroHead : classes.mobHeroHead}>Grow Business with Dreams.</Typography>
                                                    <Typography gutterBottom className={width > 576 ? classes.deskSubTitle : classes.mobSubTitle} variant='subtitle1'>Choose the business entity that best fits the needs of your business.</Typography>
                                                    <Button className={classes.btn} variant='contained' size='large'>Get Started</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6} className="d-md-flex d-none">
                                                <Box>
                                                    <img src={Banner1} alt="banner1" className='img-fluid bounce' />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center">
                                                <Box>
                                                    <Typography gutterBottom variant='h2' className={width > 576 ? classes.deskHeroHead : classes.mobHeroHead}>Grow Business with Dreams.</Typography>
                                                    <Typography gutterBottom className={width > 576 ? classes.deskSubTitle : classes.mobSubTitle} variant='subtitle1'>Choose the business entity that best fits the needs of your business.</Typography>
                                                    <Button className={classes.btn} variant='contained' size='large'>Get Started</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6} className="d-md-flex d-none">
                                                <Box>
                                                    <img src={Banner1} alt="banner1" className='img-fluid bounce' />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </SwiperSlide>
                            </Swiper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Hero
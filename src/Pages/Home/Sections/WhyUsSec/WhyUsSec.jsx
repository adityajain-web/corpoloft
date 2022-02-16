import React from 'react';
import { Container, Box, Grid, Icon, Typography, makeStyles } from '@material-ui/core'
import { FcProcess, FcDocument } from 'react-icons/fc';
import { FaLaptopCode } from 'react-icons/fa';
import { SectionalContent, MediaObject } from '../../../../Components/Components';
import WhyUsGif from './Images/whyus.gif';
import './Sass/WhysUs.css';

const WhyUsSec = () => {
    return (
        <>
            <Container maxWidth="xl" id="WhyUs">
                <Box py={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={11} md={11} lg={10} className="mx-auto">
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box>
                                            <img src={WhyUsGif} alt="Why Us" className='img-fluid' />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <SectionalContent head="We Create Result-Oriented Dynamic Applications" para={["Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."]} subTitle="WHY CHOOSE US" sec="WhyUs" btn={false} />
                                        <Box>
                                            {
                                                [{ id: "whyUs1", title: "First Growing Process", description: "At vero eos et accusamus etiusto odio praesentium.", icon: <FcProcess /> }, { id: "whyUs2", title: "Clean code", description: "At vero eos et accusamus etiusto odio praesentium.", icon: <FaLaptopCode /> }, { id: "whyUs3", title: "Well Documentation", description: "At vero eos et accusamus etiusto odio praesentium.", icon: <FcDocument /> }].map(item => {
                                                    return <MediaObject key={item.id} title={item.title} description={item.description} icon={item.icon} />
                                                })
                                            }
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

export default WhyUsSec
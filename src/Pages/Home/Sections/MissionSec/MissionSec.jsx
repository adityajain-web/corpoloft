import React from 'react';
import { Container, Box, Grid, } from '@material-ui/core';
import { SectionalContent } from '../../../../Components/Components';
import MissionGif from './Images/mission.gif';

const MissionSec = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={11} lg={10} className="mx-auto">
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <img src={MissionGif} alt="mission" className='img-fluid' />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SectionalContent head="Mission Statement" para={["Corporate Loft is the home of entrepreneurs, where we make it simple to start and run your business. Where we provide end to end solutions for all of your needs.", "Corporate Loft is the home of small business owners, where we help you start your business. We will nurture your dreams and help them to become a reality."]} subTitle="OUR MISSION" btn={true} sec="mission" />
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

export default MissionSec
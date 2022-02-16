import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import { Cards, SectionalContent } from '../../../../Components/Components';
import Services from './Data/Data';
import './Sass/ServiceSec.css'

const ServiceSec = () => {
    return (
        <>
            <Container maxWidth="xl" style={{ background: "#f6f7f9" }} id="ServiceSec">
                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={11} lg={10} className="mx-auto">
                            <Box py={3}>
                                <SectionalContent head="Services To Manage Your Business." subTitle="OUR SERVICES" btn={true} para={["Get The Best Start To Finish Solutions For Your Business Requirement"]} sec="service" />
                            </Box>
                            <Box py={3}>
                                <Grid container spacing={3}>
                                    {
                                        Services.map((service, index) => {
                                            return <Grid item xs={12} sm={6} md={6} lg={4} key={service.id} >
                                                <Cards icon={service.icon} title={service.title} description={service.para} />
                                            </Grid>
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default ServiceSec
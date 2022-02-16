import React from 'react';
import { Container, Grid, Box, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BiTime } from 'react-icons/bi'
import './Sass/Footer.css'

const Footer = () => {
    return (
        <>
            <Container maxWidth="xl" id="footer">
                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={11} lg={10} className="mx-auto">
                            <Box py={4}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} sm={6} md={6} lg={3}>
                                        <Box pt={6}>
                                            <Typography>Kickstart your business today with our wide range of services and support</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={3}>
                                        <Box>
                                            <Typography variant='h5'>IT Services</Typography>
                                            <List>
                                                {
                                                    ["Business Advisory", "Business Plans", "Business Formation", "Logo Design", "Branding and Marketing", "Social Media Management", "Web Development", "SEO"].map(item => {
                                                        return <ListItem>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    })
                                                }
                                            </List>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={3}>
                                        <Box>
                                            <Typography variant='h5'>Contact Info</Typography>
                                            <List>
                                                {
                                                    [{ id: "contactInfo1", text: "1230 Peachtree St NE, Atlanta, GA 30309, USA", icon: <FiMapPin /> }, { id: "contactInfo2", text: "+1-866-990-7011", icon: <FiPhoneCall /> }, { id: "contactInfo3", text: "info@corporateloft.com", icon: <MdOutlineMailOutline /> }, { id: "contactInfo4", text: "Opening Hours: 10:00 - 18:00", icon: <BiTime /> }].map(item => {
                                                        return <ListItem>
                                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                                            <ListItemText primary={item.text} />
                                                        </ListItem>
                                                    })
                                                }
                                            </List>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={3}>
                                        <Box>
                                            <Typography variant='h5' gutterBottom>Newsletter</Typography>
                                            <Typography>We denounce with righteous and in and dislike men who are so beguiled and demo realized.</Typography>
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

export default Footer
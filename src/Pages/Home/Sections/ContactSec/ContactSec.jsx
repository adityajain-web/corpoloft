import React from 'react';
import { Container, Box, Grid, TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { MediaObject, SectionalContent } from '../../../../Components/Components';
import { MdOutlineMail } from 'react-icons/md';
import { FcPhone, FcAddressBook } from 'react-icons/fc';
import './Sass/ContactSec.css'

const ContactSec = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <Container maxWidth="xl" id="contact">
                <Box py={2}>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={11} lg={10} className="mx-auto">
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={8} md={8} lg={8}>
                                        <Box>
                                            <SectionalContent subTitle="LET'S TALK" head="Connect With Us" para={["To get the best digital solution for your business requirement. Just within few clicks."]} btn={false} sec="contact" />
                                        </Box>
                                        <Box>
                                            {
                                                [{ id: "contact1", title: "Email", text: "info@corporateloft.com", icon: <MdOutlineMail /> }, { id: "contact2", title: "Call Us", text: "+1-866-990-7011", icon: <FcPhone /> }, {
                                                    id: "contact3", title: "Office Address", text: `1230 Peachtree St NE,Atlanta,GA \n 30309,USA`, icon: <FcAddressBook />
                                                }].map(item => {
                                                    return <MediaObject key={item.id} icon={item.icon} title={item.title} description={item.text} />
                                                })
                                            }
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Box mt={4}>
                                            <SectionalContent head="Share The Details" sec="contactShare" para={["Our representative will get back to you."]} />
                                            <Box px={5}>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <TextField variant='outlined' label="Name" type="text" {...register('fullName', { required: true })} className="form-control mb-3" />
                                                    <TextField variant='outlined' type="email" {...register('email', { required: true })} className="form-control mb-3" label="Email" />
                                                    <TextField variant='outlined' type="tel" {...register('phone', { required: true })} className="form-control mb-3" label="Phone" />
                                                    <TextField variant='outlined' type="text" {...register('link', { required: true })} className="form-control mb-3" label="Website" />
                                                    <Button variant='contained' size='large' className='customBtn' type="submit">SUBMIT NOW</Button>
                                                </form>
                                            </Box>
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

export default ContactSec
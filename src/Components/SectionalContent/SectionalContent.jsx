import React, { useEffect, useState } from 'react'
import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import './Sass/SectionalContent.css'

const useStyles = makeStyles(theme => ({
    DeskSectionalHead: { fontSize: "2.813rem", lineHeight: "2.875rem", fontWeight: 700 },
    cShareDeskHead: { fontSize: "2.3rem", lineHeight: "2.375rem", fontWeight: 700 },
    cShareMobHead: { fontSize: "1.5rem", lineHeight: "1.5rem", fontWeight: 700 },
    mobSectionalHead: { fontSize: "2rem", lineHeight: "2rem", fontWeight: 700 },
    DeskDes: { fontSize: "1.125rem", color: "#454545" },
}))

const SectionalContent = ({ head, para, subTitle, btn, sec }) => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    const classes = useStyles();
    return (
        <>
            <Box className={`sectionalContent ${sec && sec === "service" ? "d-flex flex-md-row flex-column  justify-content-between  align-items-center" : null}`}>
                <Box>
                    {
                        subTitle ? <Box className='subTitle style4-bg'>
                            {subTitle}
                        </Box> : null
                    }
                    {
                        head ? <Typography className={width > 576 ? classes.DeskSectionalHead : classes.mobSectionalHead} variant='h2' gutterBottom>{head}</Typography> : null
                    }
                    {
                        para ? para.map(item => {
                            return <Typography variant='subtitle1' className={classes.DeskDes} style={{ color: sec && sec === "service" ? "#0b70e1" : "#454545" }} gutterBottom >{item}</Typography>
                        }) : null
                    }
                </Box>
                <Box style={{ marginTop: sec && sec !== "service" ? "1.5rem" : "0rem" }}>
                    {
                        btn ? <Button variant='contained' size='large' className='customBtn rounded-pill'>Read More</Button> : null
                    }
                </Box>
            </Box>
        </>
    )
}

export default SectionalContent
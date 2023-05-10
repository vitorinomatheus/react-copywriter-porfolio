import * as Mui from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import MainPicture from "../../assets/IMG_9944.jpeg"
import { useEffect, useState } from 'react';

const aboutMeText = 'Estudo literatura e sou apaixonada pela língua portuguesa';
// Fetch Data

const aboutMeTitle = 'Redatora e revisora de textos';
// Fetch Data

export default function Home(props: any) {

    const gridStyle = {
        justifyContent: { xs: 'center', md: 'center' },
        fontFamily: props.global.primaryFont,
        flexGrow: 1,
        alignContent: 'center',
        marginTop: { md: 0, xs: 0 },
        px: props.global.paddingXPattern,
        py: { xs: 10, md: 12, xl: 20 }
    }

    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(!isMounted)

        return () => {
            setMounted(!isMounted);
        };
    }, [])

    return (
        <>
            <Mui.Fade in={isMounted} timeout={1000}>

                <Mui.Grid container
                    sx={{ ...gridStyle }}
                >
                    <Mui.Grid
                        xs={12} md={7}
                        order={{ xs: 2, md: 1 }}
                        sx={{ my: { xs: 0, md: 0 }, alignSelf: 'center' }}
                        item
                    >
                        <Mui.Typography
                            fontSize={{ xs: '1.2rem', md: '1.5rem', xl: '1.8rem' }}
                            fontFamily="inherit"
                            textAlign="center"
                            pt={{ xs: 6, md: 0 }}
                            sx={{ mb: { xs: 1, md: 2 } }}
                            color={props.global.primaryRed}
                        >
                            {aboutMeTitle}
                        </Mui.Typography>

                        <Mui.Divider />

                        <Mui.Typography
                            fontSize={{ xs: '1.2rem', md: '1.5rem', xl: '1.8rem' }}
                            fontFamily="inherit"
                            textAlign="center"
                            color='black'
                            sx={{ mx: { xs: 2, md: 0 } }}
                            paddingTop={3}
                        >
                            {aboutMeText}
                        </Mui.Typography>
                    </Mui.Grid>

                    <Mui.Grid
                        xs={12} md={4}
                        order={{ xs: 1, md: 2 }}
                        display='flex'
                        justifyContent="center"
                        item
                    >
                        <Mui.Avatar
                            alt="Foto de apresentação"
                            src={MainPicture}
                            sx={{
                                width: { xs: '150px', md: '22vw' },
                                height: { xs: 'auto', md: 'auto' },
                                boxShadow: props.global.mainPicBoxShadow
                            }}
                        />

                    </Mui.Grid>

                    <Mui.Grid
                        xs={12}
                        order={{ xs: 3, md: 3 }}
                        item
                        display='flex'
                        justifyContent='center'
                        sx={{ mt: 5 }}
                    >

                    </Mui.Grid>
                </Mui.Grid>
            </Mui.Fade>
        </>
    )
}
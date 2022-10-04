import * as Mui from '@mui/material'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useState } from "react"
import {
    LocalLibrary,
    MenuBook,
    People,
    Create,
    Gavel,
    LocalAirport,
    Notes,
    Spellcheck
} from '@mui/icons-material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import AboutMeDialogs from './AboutMeDialogs';

const theme = createTheme({
    palette: {
      primary: {
        main: '#820000'
      }
    }
  });

export default function TimelineComp (props: any) {

    const timelineTextStyle = {
        cursor: 'pointer',
        fontSize: { xs: '1rem', md: '1.2rem', xl:'1.6rem' },
        '&:hover': {
            color: props.global.primaryRed,
            transform: 'scale(1.009)'
        }
    }

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogIndex, setDialogIndex] = useState(0)

    function handleDialogOpen(state: boolean, index: number) {
        setDialogOpen(state);
        setDialogIndex(index)
    }
    
    return (
        <Mui.Box>                
            <Mui.Grid 
                container 
                sx={{
                    backgroundColor: props.global.primaryRed,
                    paddingX: props.global.paddingXPattern,
                    paddingY: { xs: 1, md: 4, xl: 2 },
                }}
            >

                <Mui.Grid 
                    item 
                    display="flex" 
                    justifyContent={{ xs: 'center', md: 'start' }}
                    xs={12}>

                    <Mui.Typography
                        fontFamily={props.global.primaryFont}
                        fontSize = {{ xs: '1.4rem', md: '1.8rem', xl:'2.1rem' }}
                        px= {{ xs: 3, md: 15, xl: 21 }} 
                        mb={{ xs: 2, md: 1, xl: 2 }}
                        color='white'
                        justifySelf = {{ md: "start"}}
                    >
                        UM POUCO MAIS SOBRE MIM
                    </Mui.Typography>

                </Mui.Grid>

                <Mui.Grid 
                    item 
                    md={12}
                    sx={{ 
                        backgroundColor: 'white', 
                        borderRadius: '10px',
                        paddingY: { xs: 1, md: 2, xl: 2 },
                        marginX: { xs: 3, md: 15, xl: 21 } 
                    }}
                >
                    <Mui.Typography
                        fontFamily= {props.global.secondaryFont}
                        textAlign="center"
                        fontSize={{ xs: '1rem', md: '1.3rem', xl:'1.7rem' }}
                        paddingX={{ xs: 3, md: 15 }}
                        mb={{ xs: 2, md: 7 }}
                    >
                        Nascida e criada em Curitiba, desde cedo me apaixono pela leitura e pela escrita. 
                        Cresci escrevendo sobre tudo que me interessava. Hoje tenho a oportunidade de atuar profissionalmente 
                        com algo que sempre me encantou. Você poderá entender minha trajetória clicando nas minhas experiências:
                    </Mui.Typography>

                    <ThemeProvider theme={theme}>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    2017
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary'>
                                        <LocalAirport />
                                    </ TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent
                                    onClick={() => handleDialogOpen(true, 0)}
                                    sx={{...timelineTextStyle}}
                                >
                                    Curso de inglês em Vancouver
                                    <Mui.Divider />
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    2019
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary'>
                                        <LocalLibrary />
                                    </ TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent
                                    onClick={() => handleDialogOpen(true, 1)}
                                    sx={{...timelineTextStyle}}
                                >
                                    Estágio na BPP
                                    <Mui.Divider />
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    2021
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary'>
                                        <MenuBook />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent
                                    onClick={() => handleDialogOpen(true, 2)}
                                    sx={{...timelineTextStyle}}
                                >
                                    Graduação em Letras - UTFPR
                                    <Mui.Divider />
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    2021
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary'>
                                        <People />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent
                                    onClick={() => handleDialogOpen(true, 3)}
                                    sx={{...timelineTextStyle}}
                                >
                                    English Teacher - Influx
                                    <Mui.Divider />
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    2022
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary'>
                                        <Spellcheck />
                                    </ TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent
                                    onClick={() => handleDialogOpen(true, 4)}
                                    sx={{...timelineTextStyle}}
                                >
                                    Cursos de revisão e literatura
                                    <Mui.Divider />
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                    <TimelineOppositeContent color="text.secondary">
                                        2022
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color='primary'>
                                            <Notes />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent 
                                        onClick={() => handleDialogOpen(true, 5)}
                                        sx={{...timelineTextStyle}}
                                    >
                                        Redatora de artigos sobre literatura
                                        <Mui.Divider />
                                    </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                    <TimelineOppositeContent color="text.secondary">
                                        2022
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineDot color='primary'>
                                        <Gavel />
                                    </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent 
                                        onClick={() => handleDialogOpen(true, 6)}
                                        sx={{...timelineTextStyle}}
                                    >
                                        Revisora textual de marketing jurídico
                                        <Mui.Divider />
                                    </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                    <TimelineOppositeContent color="text.secondary">
                                        2022
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineDot color='primary'>
                                        <Create />
                                    </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent 
                                        onClick={() => handleDialogOpen(true, 7)}
                                        sx={{...timelineTextStyle}}
                                    >
                                        Redatora freelancer
                                        <Mui.Divider />
                                    </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </ThemeProvider>

                    <AboutMeDialogs 
                        open={ dialogOpen } 
                        close={ handleDialogOpen } 
                        global={ props.global }
                        index={ dialogIndex }
                    />

                </Mui.Grid>
            </Mui.Grid>
        </Mui.Box>
    )
}

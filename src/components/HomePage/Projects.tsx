import * as Mui from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import law from '../../assets/law.jpg'
import hand from '../../assets/hand.jpg'
import medium from '../../assets/medium.png'
import { ArrowForward } from '@mui/icons-material'

const aboutMeText = 'Entre meus trabalhos, você irá encontrar diversas maneiras de colocar uma ideia em palavras. Gosto de trazer um pouco da criatividade e da literatura para dar vida a cada um dos meus textos';

interface Project {
    name: string;
    description: string;
    img: string;
    url?: string
}

const imgsArray = [medium, law, hand]

// const requestOptions = {
//     method: 'GET',
//     headers: { 'mode': 'no-cors', "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT" }
// };

// let projects: Array<Project> = []

// function fetchData() {
// fetch('https://nataliameisenportfolio-default-rtdb.firebaseio.com/Projects.json', requestOptions)
// .then(response => projects = Object.values(response.json()))
// .catch(error => console.log(error))

// // .then(response => console.log(response.ok))
// }

const projects: Array<Project> = [
    {
        name: 'Produção literária',
        description: 'Escrevo textos autorais de teor literário, publico meus trabalhos no medium e já tive a oportundidade de atuar como roteirista de podcast',
        img: medium,
        url: 'https://medium.com/@natmeisen'
    },
    {
        name: 'Copywriting e revisão textual',
        description: 'Possuo experiência com a produção de conteúdo textual voltado à mídia digital. Trabalhei com redes sociais e blogs, atuando com uma varidade de modos, desde textos curtos para o instagram, até publicações inteiras para blog',
        img: law,
        url: 'https://planeprev.criacaoprime4.com.br/blog/'
    },
    {
        name: 'Textos sobre literatura clássica',
        description: 'Publico todo mês um artigo sobre literatura clássica no "Querido Clássico". Aqui coloco no papel meus estudos e ideas que são parte fundamental do meu processo criativo',
        img: hand,
        url: 'https://www.queridoclassico.com/search/label/nat%C3%A1lia%20meisen?max-results=12'
    }
];

export default function Projects(props: any) {

    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(!isMounted)

        return () => {
            setMounted(!isMounted);
        };
    }, [])

    return (
        <>

            <Mui.Box
                sx={{
                    background: props.global.redGradient,
                    px: props.global.paddingXPattern,
                    py: { xs: 5, md: '6vh' },
                    textAlign: 'center'
                }}
            >
                <Mui.Fade in={isMounted} timeout={1200}>

                    <Mui.Typography
                        fontFamily={props.global.primaryFont}
                        fontSize={{ xs: '1rem', md: '1.3rem', xl: '1.8rem' }}
                        color='white'
                        paddingX={{ xs: 3, md: 30 }}
                    >
                        {aboutMeText}
                    </Mui.Typography>

                </Mui.Fade>

                <Mui.Grid container
                    spacing={3}
                    px={{ xs: 1, md: 6 }}
                    py={{ xs: 4, md: '6vh' }}
                >
                    {projects.map((project) => (
                        <Mui.Grid item md={4} xs={12}>
                            <Mui.Card
                                sx={{
                                    height: { md: '32vw', xs: '37vh', xl: '34vw' },
                                    cursor: 'pointer',
                                    "&:hover": {
                                        boxShadow: '0px 0px 1px 3px #b00'
                                    }
                                }}
                            >
                                <Mui.Link
                                    href={project.url}
                                    target='_blank'
                                    rel='noopener'
                                    sx={{
                                        display: 'grid',
                                        gridTemplateRows: 'max-content 1fr',
                                        textDecoration: 'none',
                                        color: 'black',
                                        height: '100%'
                                    }}
                                >
                                    <Mui.CardMedia
                                        component='img'
                                        image={project.img}
                                        alt="Project Image"
                                        sx={{
                                            height: { md: '25vh', xs: '14vh', xl: '23vh' }
                                        }}
                                    />

                                    <Mui.CardContent
                                        sx={{
                                            display: 'grid',
                                            gridTemplateRows: '1fr 3fr',
                                            "&:hover": {
                                                color: props.global.primaryRed
                                            }
                                        }}>

                                        <Mui.Typography
                                            textAlign='center'
                                            alignSelf='end'
                                            height='fitContent'
                                            fontSize={{ xs: '1rem', md: '1.2rem', xl: '1.4rem' }}
                                            fontFamily={props.global.primaryFont}
                                            color={props.global.primaryRed}>
                                            {project.name}
                                        </Mui.Typography>

                                        <Mui.Typography
                                            alignSelf="center"
                                            fontSize={{ xs: '0.8rem', md: '0.92rem', xl: '1.2rem' }}
                                            px={{xl: '2rem'}}
                                        >
                                            {project.description}
                                        </Mui.Typography>
                                    </Mui.CardContent>


                                </Mui.Link>

                            </Mui.Card>
                        </Mui.Grid>
                    ))}
                </Mui.Grid>
                <Mui.Link
                    onClick={() => props.navigate('Portfólio')}
                    underline='none'
                    sx={{
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'center'
                    }}
                >
                    <Mui.Typography
                        fontSize={{ xs: '1rem', md: '1.2rem', xl: '1.4rem' }}
                    >
                        Ir para portfólio
                    </Mui.Typography>
                    <ArrowForward />

                </Mui.Link>
            </Mui.Box>
        </>
    )
}
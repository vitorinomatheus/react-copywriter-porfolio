import * as Mui from '@mui/material'
import { useEffect, useState } from 'react';
import law from '../../assets/law.jpg'
import hand from '../../assets/hand.jpg'
import medium from '../../assets/medium.png'
import qc from '../../assets/qc.png'

const pageName = "PORTFÓLIO";

interface Project {
    name: string;
    description: string;
    img: string;
    url?: string
}

const projects: Array<Project> = [
    {
        name: 'Textos de marketing jurídico',
        description: 'Escrevi artigos sobre previdência social voltados à área blog do site de uma empresa que oferece serviços jurídicos. O conteúdo tem linguagem acessível ao público e utiliza estratégias de marketing',
        img: law,
        url: 'https://planeprev.criacaoprime4.com.br/blog/'
    },
    {
        name: 'Artigos sobre literatura',
        description: 'Mensalmente público textos sobre literatura clássica no site Querido Clássico. A linguagem mescla o acadêmico e o informal, buscando disseminar informação a todos os tipos de leitores. Entre os temas que já abordei estão análises de obras de autores como Chico Buarque, Sylvia Plath e James Joyce.',
        img: qc,
        url: 'https://www.queridoclassico.com/search/label/nat%C3%A1lia%20meisen?max-results=12'
    },
    {
        name: 'Produção literária',
        description: 'Publico textos autorais de teor literário em meu perfil do medium. A escrita se desenvolve de maneira livre, sem se prender a apenas um gênero discursivo, e aborda sentimentos de solidão, amor e percepção.',
        img: medium,
        url: 'https://medium.com/@natmeisen'
    },
    {
        name: 'Roteiro para podcast',
        description: 'Desenvolvi roteiros para podcast em construção. O conteúdo de mídia buscava transportar o ouvinte para experiências sensoriais do dia a dia, como o ato de beber água, utilizando linguagem descritiva e frases de teor sinestésico.',
        img: hand,
    }
];

export default function Portfolio(props: any) {

    const [isMounted, setMounted] = useState(false)

    useEffect (() => {
        setMounted(!isMounted)

        return () => {
            setMounted(!isMounted);
        };
    }, []) 

    return (
        <>
            <Mui.Fade in={isMounted} timeout={800}>
                <Mui.Box
                    marginTop="5vh"
                >
                    <Mui.Box>
                        <Mui.Grid 
                            container
                        >

                            <Mui.Grid 
                                item 
                                xs={5} md={8}
                                position = 'relative'
                            >
                                <Mui.Divider sx={{ 
                                    position: "absolute",
                                    width: '100%', 
                                    top: '50%', 
                                    backgroundColor: props.global.primaryRed
                                    }}
                                />
                            </Mui.Grid>

                            <Mui.Grid 
                                item 
                                xs={7} md={4} >
                                <Mui.Typography
                                    fontFamily={props.global.primaryFont}
                                    fontSize = {{ xs: '1.8rem', md: '2.2rem', xl:'2.8rem' }} 
                                    paddingX={{ xs: 3, md: 15 }}
                                    color={props.global.primaryRed}
                                    textAlign = "end"
                                >
                                    {pageName}
                                </Mui.Typography>
                            </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Box>

                <Mui.Grid container 
                        spacing={7}
                        px={{ xs: 1, md: 6 }}
                        py={{ xs: 4, md: '6vh' }}
                    >                        
                            {projects.map((project) => (
                                <Mui.Grid item md={6} xs={12}>
                                    <Mui.Card 
                                        sx={{ 
                                            display: 'grid',
                                            gridTemplateRows: 'max-content 1fr',
                                            height: {md:'35vw', xs: '57vh', xl: '37vw'}, 
                                            cursor: 'pointer',
                                            boxShadow: '0px 0px 3px 1px black',
                                            "&:hover": {
                                                boxShadow: '0px 0px 1px 3px #b00'
                                            }
                                        }}
                                    >
                                        <Mui.CardMedia
                                            component='img'
                                            image={project.img}
                                            alt="Project Image"
                                            sx= {{
                                                height: { md: '33vh', xs: '18vh'}
                                            }}
                                        />

                                        <Mui.CardContent 
                                            sx ={{ 
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
                                                variant='body1'
                                                fontSize = {{ xs: '1.4rem', md: '1.5rem', xl:'1.8rem' }}
                                                fontFamily={props.global.primaryFont}
                                                color={props.global.primaryRed}>
                                                {project.name}
                                            </Mui.Typography>

                                            <Mui.Typography
                                                alignSelf="center"
                                                fontFamily={props.global.secondaryFont}
                                                fontSize = {{ xs: '1rem', md: '1rem', xl:'1.6rem' }}
                                            >
                                                {project.description}
                                            </Mui.Typography>
                                        </Mui.CardContent> 

                                        <Mui.CardActions
                                            sx = {{
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Mui.Link
                                                href={project.url}
                                                target='_blank'
                                                rel='noopener'
                                                underline='none'
                                            >
                                                <Mui.Button 
                                                    sx={{ 
                                                        border: '1.5px solid #820000',
                                                        paddingX: '2.2rem',
                                                        color: '#820000',
                                                        '&:hover': {
                                                            backgroundColor: 'white'
                                                        }
                                                    }}>
                                                    Conheça este trabalho
                                                </Mui.Button>
                                            </Mui.Link>

                                        </Mui.CardActions>

                                    </Mui.Card>
                            </Mui.Grid> 
                            ))}                       
                    </Mui.Grid>
                </Mui.Box>
            </Mui.Fade>
        </>
    )
}
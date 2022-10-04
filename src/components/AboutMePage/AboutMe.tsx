import * as Mui from '@mui/material'
import { useEffect, useState } from 'react';
import aboutMePic from '../../assets/IMG_20200614_190243.jpg'

const pageName = "SOBRE MIM";
const aboutMeText = "Tenho experiência revisando textos de marketing jurídico e escrevendo conteúdos dos mais variados gêneros dissertativos" +
' - estes você poderá conhecer melhor na página "Projetos". Procuro usar sempre da criatividade em meu trabalho, visando textos dinâmicos' +
'e não cansativos ao leitor. Minha paixão pela literatura influencia o que produzo, já que estou em contato com diversas palavras e estratégias de escrita' +
". Além disso, prezo pela excelência em coesão e gramática. Tive experiência lecionando inglês e minha fluência na língua me permite" +
" trabalhar em projetos que também envolvam tradução. Vamos trabalhar juntos?"

export default function AboutMe(props: any) {

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
                <Mui.Box marginTop="5vh">         
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
                                    position: 'absolute', 
                                    paddingX: { xs: 3, md: 15, xl: 21 },
                                    width: '100%', 
                                    top: '50%', 
                                    backgroundColor: props.global.primaryRed
                                    }}
                                />
                            </Mui.Grid>

                            <Mui.Grid 
                                item 
                                xs={7} md={4} 
                                >
                                <Mui.Typography
                                    fontFamily={props.global.primaryFont}
                                    fontSize = {{ xs: '1.8rem', md: '2.2rem', xl:'2.4rem' }} 
                                    paddingX={{ xs: 3, md: 15 }}
                                    color={props.global.primaryRed}
                                    textAlign = {{md: "end", xl: "center"}}
                                >
                                    {pageName}
                                </Mui.Typography>
                            </Mui.Grid>

                        </Mui.Grid>
                    </Mui.Box>

                    <Mui.Box
                        sx={{
                            px: props.global.paddingXPattern,
                            py: { xs: 1, md: '2vh' },
                        }}
                    >
                        <Mui.Grid
                            container
                            sx={{
                                px: { xs: 2, md: 4, xl: 15 },
                                py: { xs: 1, md: '6vh' }
                            }}
                        >
                            <Mui.Grid 
                                item
                                md={4} xs={0} xl={5}
                                display="grid"
                                justifyItems="start"
                                alignItems="center"
                            >
                                <Mui.Box
                                    component="img"
                                    sx={{ 
                                        display: { xs: 'none', md: 'flex' },
                                        width: { md: '25vw' }, 
                                        height: { md: 'auto' },
                                        borderRadius: '5px'
                                    }}
                                    src={aboutMePic}
                                    boxShadow = {{
                                        xs: '0px 0px 0px 3px #820000',
                                        md: '-6px 4px 0px 1px #820000'
                                    }}
                                />
                            </Mui.Grid>
                            
                            <Mui.Grid
                                item
                                md={8} xl={7}
                                display= "flex"
                                flexDirection="column"
                                justifyItems="center"
                                alignItems="center"
                            >
                                <Mui.Typography
                                    fontSize = {{ xs: '1.5rem', md: '1.7rem', xl:'2.1rem' }}
                                    fontFamily = {props.global.secondaryFont}
                                    color={props.global.primaryRed}
                                    alignSelf="start"
                                >
                                    Oi! Eu sou a Natália!
                                </Mui.Typography>

                                <Mui.Typography
                                    fontSize = {{ xs: '1.2rem', md: '1.4rem', xl:'1.8rem' }}
                                    fontFamily = {props.global.secondaryFont}
                                    alignSelf="start"
                                    marginBottom='2.2rem'
                                >
                                    Sou redatora e revisora gramatical com formação em Letras Português
                                    <Mui.Divider sx={{display: { xs: 'none', md: 'flex' }}}/>
                                </Mui.Typography>

                                <Mui.Typography
                                    fontSize = {{ xs: '1.1rem', md: '1.2rem', xl:'1.5rem' }}
                                    fontFamily = {props.global.secondaryFont}
                                    height="100%"
                                    display='flex'
                                    alignItems="start"
                                >
                                    {aboutMeText}
                                </Mui.Typography>

                                <Mui.Box
                                    sx={{
                                        display: "flex",
                                        flexGrow: 1,
                                        alignItems: 'center',
                                        my: 3.5
                                    }}
                                >

                                <Mui.Button
                                    sx={{
                                        border: '1.5px solid #820000',
                                        paddingX: '2.2rem',
                                        color: '#820000',
                                        '&:hover': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                    onClick={() => props.navigate('Portfólio')}
                                >
                                    Conheça meu portfólio
                                </Mui.Button>

                                </Mui.Box>
                            </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Box>
                
                </Mui.Box>
            </Mui.Fade>
        </>
    )
}
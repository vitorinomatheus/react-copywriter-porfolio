import * as Mui from '@mui/material'
import GitHub from '@mui/icons-material/GitHub'

const repositoryLink = 'https://github.com/vitorinomatheus'

export default function Footer(props: any) {

    return (
        <>
            <Mui.Box
                sx={{
                    backgroundColor: props.global.primaryRed,
                    py: {xs: 1, md: 1}
                }}
            >
                <Mui.Typography
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        px: props.global.paddingXPattern
                    }}
                >
                    Com ❤️ por <Mui.Link 
                                    href={repositoryLink}   
                                    sx={{color: 'white'}}
                                    target='_blank'
                                    rel='noopener'
                                    underline='always'
                                >
                                    Matheus Vitorino 
                                </Mui.Link> | 2022

                    <Mui.Link 
                        href={repositoryLink}   
                        sx={{color: 'white'}}
                        target='_blank'
                        rel='noopener'
                        underline='always'
                    >

                        <GitHub sx={{ ml: 2, position: 'absolute' }}/>

                    </Mui.Link>

                    

                </Mui.Typography>

            </Mui.Box>

        </>
    )

}
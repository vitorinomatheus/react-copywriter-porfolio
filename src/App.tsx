import { Box } from "@mui/material";
import ContactForm from "./components/HomePage/ContactForm";
import Header from "./components/Structure/Header";
import Home from "./components/HomePage/Home";
import Projects from "./components/HomePage/Projects";
import { useState } from "react"
import AboutMe from "./components/AboutMePage/AboutMe";
import Portfolio from "./components/PortfolioPage/Portfolio";
import Footer from "./components/Structure/Footer";
import TimelineComp from "./components/AboutMePage/Timeline";

// TODO: 
//      c.1) Fetch de projetos jogados para o firebase;
//      c.2) Fetch de projetos também dos dialogs (CV);
// e) Revisão final do código 
// f) Fazer programa de administração do site;

const globalProps = {
    siteTitle: 'Natália Meisen',
    drawerTitle: 'Meu portfólio',
    primaryRed: '#820000',
    primaryFont: "'Playfair Display', serif",
    secondaryFont: "'Tinos', serif",
    redGradient: 'linear-gradient(0deg, rgba(166,0,0,1) 0%, rgba(130,0,0,1) 100%)',
    paddingXPattern: {
        xs: 1,
        md: 10,
        xl: 2
    },
    mainPicBoxShadow: {
        xs: '0px 0px 0px 3px #820000',
        md: '12px 2px 0px 1px #820000'
    }
}


export default function App () {

    let [activeComponent, setActiveComponent] = useState('Home');

    function navigate(component: string) {
        setActiveComponent(activeComponent = component)
        window.scrollTo(0, 0)
    }

    if(activeComponent == 'Sobre mim') {
        return (
            <>
                <Header global={ globalProps } navigate={ navigate } />
                <AboutMe global ={ globalProps } navigate={ navigate } />
                <TimelineComp global = { globalProps } />
            </>
        )
    }

    else if(activeComponent == 'Contato') {
        return (
            <>
                <Header global={ globalProps } navigate={ navigate } />
                <ContactForm global={ globalProps } />
            </>
        )
    }

    else if(activeComponent == 'Portfólio') {
        return (
            <>
                <Header global={ globalProps } navigate={ navigate } />
                <Portfolio global={ globalProps } />
                <Footer global={ globalProps } />
            </>
        )
    }

    else {
        return (
            <>
                <Box 
                    sx={{ 
                        height: "100vh", 
                        display: 'flex', 
                        flexDirection:'column'
                    }}
                >
                    <Header global={ globalProps } navigate={ navigate } />           
                    <Home global={ globalProps } />
                    <Projects global={ globalProps } navigate={ navigate }/>
                    <ContactForm global={ globalProps }  />
                    <Footer global={ globalProps } />
                </Box>                     
            </>
        )
    }
}
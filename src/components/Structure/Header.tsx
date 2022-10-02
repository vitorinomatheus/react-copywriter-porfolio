import * as Mui from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

const navItems = [
    {text: 'Sobre mim'},
    {text: 'Portfólio'},
    {text: 'Contato'}
];
const drawerWidth = 240;

function HideOnScroll (props: any) {
    
    const { children } = props;

    const trigger = Mui.useScrollTrigger();
    
    return (
        <Mui.Slide appear={false} direction="down" in={!trigger}>
            { children }
        </Mui.Slide>
    )
}

export default function Header (props: any) {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Mui.Box 
            onClick={ handleDrawerToggle } 
            fontFamily={ props.global.primaryFont }
            textAlign = 'center'
            color={ props.global.primaryRed }
            px={2}
        >
            <Mui.Typography 
                variant='h6' 
                color='inherit' 
                fontFamily='inherit'
                pt={3}
            >
                {props.global.drawerTitle}
            </Mui.Typography>

            <Mui.Divider 
                sx={{
                    backgroundColor: props.global.primaryRed
                }}/>

            <Mui.List>
                {navItems.map((item) => (
                    <Mui.ListItem key={ item.text } disablePadding>
                        <Mui.ListItemButton 
                            sx={{ textAlign: 'center' }}
                            onClick={() => props.navigate(item.text)}>
                            <Mui.ListItemText 
                                primary={ item.text } />
                        </Mui.ListItemButton>
                        <Mui.Divider />
                    </Mui.ListItem>
                ))}
                
            </Mui.List>
        </Mui.Box>
    )

    return (
        <>
            <HideOnScroll {...props}>
                    <Mui.AppBar 
                        sx={{ 
                            backgroundColor: 'white', 
                            color: props.global.primaryRed, 
                            px: props.global.paddingXPattern
                        }}
                        position="sticky">

                        <Mui.Toolbar>
                            <Mui.IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, display: { xs: 'flex', md: 'none' }}}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon/>

                            </Mui.IconButton>

                            <Mui.Link
                                onClick={() => props.navigate('Home')}
                                underline='none'
                                color={props.global.primaryRed} 
                                sx={{
                                    fontFamily: props.global.primaryFont,
                                    fontSize: '1.5rem',
                                    cursor: 'pointer'
                                }}
                            >
                                { props.global.siteTitle }

                            </Mui.Link>

                            <Mui.Box 
                                sx={{ 
                                    flexGrow: 1,
                                    display: { xs: 'none', md: 'flex' }, 
                                    justifyContent: 'end',
                                    mr: 6,
                                    gap: "1.1rem"
                                }}
                            >
                                {navItems.map((item) => (
                                    <Mui.Button
                                        key={item.text}
                                        sx={{ 
                                            color: '#820000', 
                                            fontFamily: props.global.primaryFont,
                                            fontSize: '1.15rem',
                                            '&:hover': {
                                                backgroundColor: 'white'
                                            }
                                        }}
                                        onClick={() => props.navigate(item.text)}
                                    >
                                        { item.text }
                                    </Mui.Button>
                                ))}
                            </Mui.Box>

                        </Mui.Toolbar>
                    </Mui.AppBar>
                </HideOnScroll>
                <Mui.Box>
                    <Mui.Drawer
                        open={ mobileOpen }
                        onClose={ handleDrawerToggle }
                        sx={{ '& .MuiDrawer-paper': { width: drawerWidth }}}
                        ModalProps = {{
                            keepMounted: true
                        }}
                    >                            
                        { drawer }
                    </Mui.Drawer>
                </Mui.Box>  
        </>
    )
}
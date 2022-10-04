import * as Mui from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const env = import.meta.env;

const formInputs = ['Nome', 'E-mail', 'Sua mensagem'];
const pageMainTitle = 'Deseja entrar em contato?';
const pageSubtitle = 'me mande uma mensagem!';
const emailSucessMessage = 'Mensagem enviada com sucesso!'

const validationRegex = {
    name: /^[A-zÀ-ú]{4,}(?: [A-zÀ-ú]+){1,}$/i,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i
}

export default function ContactForm (props: any) {

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formValidity, setFormValidity] = useState({
        nameValid: true,
        emailValid: true,
        messageValid: true,
        formValid: false,
        formErrors: {
            name: '',
            email: '',
            message: ''
        }
    });

    const [loading, setLoading] = useState(false);

    const [disabled, setDisabled] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [isMounted, setMounted] = useState(false)

    useEffect (() => {
        setMounted(!isMounted)

        return () => {
            setMounted(!isMounted);
        };
    }, []) 


    const handleChanges = (value: string) => (event: any) => {

        setFormValues({ ...formValues, [value]: event.target.value });
        validateFields(value);
        checksFormValidity();
    }

    function checksFormValidity() {

        if((formValidity.nameValid && formValidity.emailValid) && formValidity.messageValid)
        {  
            if((formValues.name != '' && formValues.email != '') && formValues.message != '')
            {
                setFormValidity({...formValidity, formValid: true})
            }                
                       
        }
        else {
            
            setFormValidity({...formValidity, formValid: false});
        }
    }

    function validateFields(fieldName: string) {

        let isValid: boolean;

        switch(fieldName) {

            case 'name':
                isValid = formValues.name.match(validationRegex.name) != null;
                formValidity.nameValid = isValid;
                formValidity.formErrors.name = isValid ? '' : 'Insira seu nome completo';
                break;
            case 'email':
                isValid = formValues.email.match(validationRegex.email) != null;
                formValidity.emailValid = isValid;
                formValidity.formErrors.email = isValid ? '' : 'Insira um enderço de e-mail válido';
                break;
            case 'message':
                isValid = formValues.message.length > 3;
                formValidity.messageValid = isValid;
                formValidity.formErrors.message = isValid ? '' : 'Mensagem muito curta'
                break;
        }

        checksFormValidity();
    }

    const handleClose = (reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setShowAlert(false);
      };

    function submitMessage() {

        setLoading(!loading);

        setShowAlert(true);

        console.log(env.VITE_PUBLIC_KEY)

        emailjs.send(
            env.VITE_SERVICE_ID,
            env.VITE_TEMPLATE_ID,
            formValues,
            env.VITE_PUBLIC_KEY
        ).then(response => {

            console.log('Success!', response.status, response.text);
            setDisabled(!disabled);
            setFormValidity({...formValidity, formValid: false})
            setLoading(false);

        }, (error) => {

            console.log('Error!', error)
            setLoading(false)
        })
    }

    return (        
        <>
        <Mui.Fade in={isMounted} timeout={800}>
            <Mui.Box 
                    px={{xs: 1, md: 10, xl: 25}}
                    py={ {xs: 7, md: '6vh', xl: 10} }
                    flexGrow = '1fr'>

                    <Mui.Typography 
                        textAlign='center'
                        fontSize = {{ xs: '1.4rem', md: '1.6rem', xl:'1.9rem' }} 
                        fontFamily={props.global.primaryFont}
                        color={props.global.primaryRed}>
                        { pageMainTitle }
                    </Mui.Typography>

                    <Mui.Typography
                        textAlign='center'
                        fontSize = {{ xs: '1rem', md: '1.2rem', xl:'1.5rem' }} 
                        fontFamily={props.global.primaryFont}
                        color={props.global.primaryRed}>
                        { pageSubtitle }
                    </Mui.Typography>

                    <Mui.Typography
                        textAlign='center'
                        fontSize = {{ xs: '0.8rem', md: '1rem', xl:'1.3rem' }} 
                        fontFamily={props.global.primaryFont}
                        color={props.global.primaryRed}
                        >
                        ou conecte-se comigo pelo <Mui.Link 
                                                    href="https://www.linkedin.com/in/natmeisen/"
                                                    color={props.global.primaryRed}
                                                    target='_blank'
                                                    rel='noopener'>LinkedIn</Mui.Link>
                    </Mui.Typography>

                    <Mui.FormGroup
                        sx={{
                            px:{xs: 2, md: '10vh', xl: '15vh'},
                            py:{xs: 6, md:'5vh'},
                            gap: '2vh'
                        }}>

                            <Mui.TextField 
                                id="name_input"
                                name="user_name"
                                label={formInputs[0]}
                                value={ formValues.name }
                                error={ !formValidity.nameValid }
                                helperText={formValidity.formErrors.name}
                                disabled={ disabled }
                                onChange={ handleChanges('name') }
                                required
                            />

                            <Mui.TextField 
                                id="email_input"
                                name="user_email"
                                type='email'
                                label={formInputs[1]}
                                value={ formValues.email }
                                disabled={ disabled }
                                error={ !formValidity.emailValid }
                                helperText={formValidity.formErrors.email}
                                onChange={ handleChanges('email') }
                                required
                            />

                            <Mui.TextField 
                                id="message_input"
                                name="message"
                                multiline
                                maxRows={10} 
                                minRows={10}
                                label={formInputs[2]}
                                value={ formValues.message }
                                error={ !formValidity.messageValid }
                                helperText={formValidity.formErrors.message}
                                disabled={ disabled }
                                onChange={ handleChanges('message') } 
                                required
                            />

                        <LoadingButton
                            variant='contained'
                            type='submit'
                            loading={loading}
                            disabled={ !formValidity.formValid }
                            sx={{
                                backgroundColor: props.global.primaryRed,
                                '&:hover': {
                                    backgroundColor: '#a70000'
                                }
                            }}
                            onClick={() => submitMessage()}>
                            Enviar
                        </LoadingButton>
                    </Mui.FormGroup>

                </Mui.Box>  
            </Mui.Fade>

            <Mui.Snackbar open={showAlert} autoHideDuration={3000} onClose={() => handleClose()}>
                <Mui.Alert severity='success' variant='filled' onClose={() => handleClose()}>
                    { emailSucessMessage }
                </Mui.Alert>
            </Mui.Snackbar>
 
        </>
    )
}
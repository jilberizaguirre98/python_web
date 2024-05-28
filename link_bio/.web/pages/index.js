/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextLink from "next/link"
import { Text } from "@chakra-ui/react"
import { FloatButton } from "antd"
import { StarIcon } from "@chakra-ui/icons"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Link_59251e5744ee27a6a1942c62aed396ce () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/gabriela-alexandra-vaca-romero-299316149/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#000000", "backgroundColor": "#80BDF2", "whiteSpace": "normal", "textAlign": "start", "--cursor-button": "pointer", "&:hover": {"backgroundColor": "#F2AD85"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <StarIcon sx={{"width": "1em", "height": "1em", "margin": "1em"}}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"margin": "0px !important"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "fontWeight": "500", "color": "#000000"}}>
  {`LinkedIn`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#000000"}}>
  {`Mi perfil profesional`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Root_d5f3912e6e28f6e5f20d542b3d5ee848 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  
    const handleSubmit_3ec92a3a6cc20f0b42bf8c448e0a4e67 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    

  return (
    <RadixFormRoot className={`Root`} css={{"width": "100%"}} onSubmit={handleSubmit_3ec92a3a6cc20f0b42bf8c448e0a4e67}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesTextField.Root name={`name`} placeholder={`Nombre`}/>
  <RadixThemesTextField.Root name={`email`} placeholder={`Email`}/>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#000000", "backgroundColor": "#80BDF2", "whiteSpace": "normal", "textAlign": "start", "--cursor-button": "pointer", "&:hover": {"backgroundColor": "#F2AD85"}}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Text_bfcf618b795990b270d50ac5f264dc74 () {
  const state__form_state = useContext(StateContexts.state__form_state)



  return (
    <RadixThemesText as={`p`}>
  {JSON.stringify(state__form_state.form_data)}
</RadixThemesText>
  )
}

export function Link_e812e16ee2b9a88d6b7e320093474452 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://open.spotify.com/show/4A2pjf7mLDAnqPL72vPVZC?si=2abd6989d96a4e38`} passHref={true}>
  <img css={{"height": "1.5em", "width": "1.5em"}} src={`spotify.png`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Toaster_89416713a273995fc60191a4cf573054 () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={colorMode}/>
  )
}

export function Link_bf94b7c32e3a0215e6f24899167b74c7 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://wa.me/573144648215`} passHref={true}>
  <img css={{"height": "1.5em", "width": "1.5em"}} src={`whatsapp.png`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_6ba631a1e91b0cdf7a58ff9dad049049 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://wa.me/573144648215`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#000000", "backgroundColor": "#80BDF2", "whiteSpace": "normal", "textAlign": "start", "--cursor-button": "pointer", "&:hover": {"backgroundColor": "#F2AD85"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <StarIcon sx={{"width": "1em", "height": "1em", "margin": "1em"}}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"margin": "0px !important"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "fontWeight": "500", "color": "#000000"}}>
  {`WhatsApp`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#000000"}}>
  {`Contactate conmigo`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_5f53e5a5ca06f01508528216a43bd095 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.facebook.com/gabyalexavacaromero`} passHref={true}>
  <img css={{"height": "1.5em", "width": "1.5em"}} src={`facebook.png`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_4427d326c1f5c698b96d5ef749a6aedc () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.youtube.com/@gabrielavacar`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#000000", "backgroundColor": "#80BDF2", "whiteSpace": "normal", "textAlign": "start", "--cursor-button": "pointer", "&:hover": {"backgroundColor": "#F2AD85"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <StarIcon sx={{"width": "1em", "height": "1em", "margin": "1em"}}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"margin": "0px !important"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "fontWeight": "500", "color": "#000000"}}>
  {`Youtube`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#000000"}}>
  {`Clases en vivo y grabadas`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_3a2f964acb976de3694e7e44a1ad2b72 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/gabrielavacar/`} passHref={true}>
  <img css={{"height": "1.5em", "width": "1.5em"}} src={`instagram.png`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_64c8808aa5ed9c5f234bb8587837bfae () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/gabrielavacar/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#000000", "backgroundColor": "#80BDF2", "whiteSpace": "normal", "textAlign": "start", "--cursor-button": "pointer", "&:hover": {"backgroundColor": "#F2AD85"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <StarIcon sx={{"width": "1em", "height": "1em", "margin": "1em"}}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"margin": "0px !important"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "fontWeight": "500", "color": "#000000"}}>
  {`Instagram`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#000000"}}>
  {`Contenido y recetas saludables`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_e40e7d3a3713549205ed4dd8efcf3450 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`http://localhost:3000`} passHref={true}>
  <RadixThemesBox css={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#000000"}}>
  {`Gabriela`}
</Text>
  <Text as={`span`} sx={{"color": "#80BDF2"}}>
  {`Vaca`}
</Text>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_7b7f19cea2750688906d98ac67336eb1 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/gabriela-alexandra-vaca-romero-299316149/`} passHref={true}>
  <img css={{"height": "1.5em", "width": "1.5em"}} src={`linkedin.png`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Link_8c06299c85545c9001314c04753362c3 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.youtube.com/@gabrielavacar`} passHref={true}>
  <img css={{"height": "1.5em", "width": "1.5em"}} src={`youtube.png`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_ed0ad0649cd8fa67df11a4810bdd69b3 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "fontFamily": "Comfortaa", "fontWeight": "300", "fontSize": "1em"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/blog`} passHref={true}>
  <RadixThemesText as={`p`}>
  {`Inicio`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_89416713a273995fc60191a4cf573054/>
</Fragment>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"justifyContent": "space-between", "alignItems": "center", "width": "100%", "position": "sticky", "background": "#F2AD85", "opacity": "0.96", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "zIndex": "999", "top": "0"}} direction={`row`} gap={`3`}>
  <Link_e40e7d3a3713549205ed4dd8efcf3450/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`5`}>
  <Link_ed0ad0649cd8fa67df11a4810bdd69b3/>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "fontFamily": "Comfortaa", "fontWeight": "300", "fontSize": "1em"}}>
  <NextLink href={`/`} passHref={true}>
  {`Inicio`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "fontFamily": "Comfortaa", "fontWeight": "300", "fontSize": "1em"}}>
  <NextLink href={`/blog`} passHref={true}>
  {`Blog`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "fontFamily": "Comfortaa", "fontWeight": "300", "fontSize": "1em"}}>
  <NextLink href={`/calendario`} passHref={true}>
  {`Calendario`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "fontFamily": "Comfortaa", "fontWeight": "300", "fontSize": "1em"}}>
  <NextLink href={`/talleres`} passHref={true}>
  {`Talleres`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "fontFamily": "Comfortaa", "fontWeight": "300", "fontSize": "1em"}}>
  <NextLink href={`/about`} passHref={true}>
  {`¿Quien soy?`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <FloatButton badge={{"dot": true, "color": "#ff0000"}} css={{"position": "fixed", "bottom": "30px", "right": "30px"}} href={`https://wa.me/573144648215`} icon={<img css={{"position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%"}} src={`whatsapp_original3.svg`}/>} target={`_blank`}/>
</RadixThemesFlex>
  <RadixThemesBox css={{"position": "relative", "width": "100%", "height": "100%", "overflow": "hidden"}}>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"maxWidth": "600px", "width": "100%", "marginTop": "2em", "marginBottom": "2em", "padding": "1em"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`5`}>
  <RadixThemesAvatar css={{"name": "Gabriela Vaca", "color": "#F1F2F4", "background": "#AED3F2", "padding": "1px", "border": "4px solid #BF7056"}} radius={`full`} size={`7`} src={`/avatar.jpg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesHeading css={{"color": "#000000", "fontFamily": "Poppins", "fontWeight": "500"}} size={`7`}>
  {`Gabriela Vaca 🧘‍♀️`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"marginTop": "0px !important", "color": "#000000"}}>
  {`@gabrielavacar`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <Link_3a2f964acb976de3694e7e44a1ad2b72/>
  <Link_3a2f964acb976de3694e7e44a1ad2b72/>
  <Link_3a2f964acb976de3694e7e44a1ad2b72/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%"}}>
  <RadixThemesBox css={{"fontSize": "0.8em", "color": "#000000"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#BF7056"}}>
  {`+300`}
</Text>
  {` horas de experiencia`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.8em", "color": "#000000"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#BF7056"}}>
  {`+10`}
</Text>
  {` clases de Yoga`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.8em", "color": "#000000"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#BF7056"}}>
  {`+1000`}
</Text>
  {` seguidores`}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText align={`left`} as={`p`} css={{"fontSize": "0.8em", "color": "#000000"}}>
  {`Comunicadora social graduada con habilidades destacadas en 
                    redacción y expresión oral en español e inglés. Apasionada por 
                    la comunicación digital, el periodismo investigativo y la creación 
                    audiovisual para la promoción de marcas. Destaca por trabajar en 
                    equipo con enfoque en resultados, mostrando compromiso y habilidades 
                    interpersonales, y tiene una gran pasión por las herramientas TIC y 
                    las nuevas formas de comunicación transmedia. Bienvenid@!`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesHeading css={{"color": "#000000", "fontFamily": "Poppins", "fontWeight": "500", "width": "100%", "paddingTop": "1em", "fontSize": "2em"}}>
  {`Comunidad`}
</RadixThemesHeading>
  <Link_64c8808aa5ed9c5f234bb8587837bfae/>
  <Link_6ba631a1e91b0cdf7a58ff9dad049049/>
  <Link_4427d326c1f5c698b96d5ef749a6aedc/>
  <Link_59251e5744ee27a6a1942c62aed396ce/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesBox css={{"position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "backgroundImage": "url(/landscape.jpg)", "backgroundSize": "cover", "backgroundPosition": "center", "zIndex": "-1"}}/>
</RadixThemesBox>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2em", "marginBottom": "2em"}}>
  <RadixThemesHeading css={{"color": "#000000", "fontFamily": "Poppins", "fontWeight": "500"}} size={`7`}>
  {`Unete a nuestra comunidad`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <Root_d5f3912e6e28f6e5f20d542b3d5ee848/>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesHeading css={{"color": "#000000", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Results`}
</RadixThemesHeading>
  <Text_bfcf618b795990b270d50ac5f264dc74/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%", "paddingBottom": "0.5em", "backgroundColor": "#F2AD85", "padding": "1.5em"}} direction={`column`} gap={`3`}>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"paddingLeft": "2em", "paddingRight": "2em", "width": "100%"}} direction={`row`} justify={`between`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}, "fontFamily": "Comfortaa", "fontWeight": "300", "fontSize": "1em"}}>
  <NextLink href={`/talleres`} passHref={true}>
  {`Talleres`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`#`} passHref={true}>
  {`Taller del niño interior`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`#`} passHref={true}>
  {`Taller de poder femenino`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#000000"}}>
  {`Aprender Más`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`#`} passHref={true}>
  {`Centro de ayuda`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`#`} passHref={true}>
  {`Acerca de mi`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#000000"}}>
  {`Idiomas`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`#`} passHref={true}>
  {`English`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`#`} passHref={true}>
  {`Español`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`#`} passHref={true}>
  {`Português`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "color": "#000000", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`#`} passHref={true}>
  {`Más`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%", "paddingTop": "1.5em", "paddingLeft": "2em", "paddingRight": "2em"}} direction={`row`} justify={`between`} gap={`4`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`8`}>
  <Link_3a2f964acb976de3694e7e44a1ad2b72/>
  <Link_bf94b7c32e3a0215e6f24899167b74c7/>
  <Link_5f53e5a5ca06f01508528216a43bd095/>
  <Link_8c06299c85545c9001314c04753362c3/>
  <Link_e812e16ee2b9a88d6b7e320093474452/>
  <Link_7b7f19cea2750688906d98ac67336eb1/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`© 2024 GABRIELA VACA`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesSeparator size={`4`}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Gabriela Vaca`}
</title>
  <meta content={`Hola, mi nombre es Gabriela Vaca. Profesora certificada de yoga`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

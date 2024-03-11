/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import { Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { CalendarIcon, StarIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_980180eb6b0bc1325968f8ba4b12f396 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/gabriela-alexandra-vaca-romero-299316149/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#000000", "backgroundColor": "#80BDF2", "whiteSpace": "normal", "textAlign": "start", "--cursor-button": "pointer", "&:hover": {"backgroundColor": "#F2AD85"}}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <StarIcon sx={{"width": "1em", "height": "1em", "margin": "1em"}}/>
  <RadixThemesFlex align={`start`} css={{"margin": "0px"}} direction={`column`} gap={`2`}>
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

export function Link_7cea5aea51dc4eb81a568911586e333b () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/gabrielavacar/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#000000", "backgroundColor": "#80BDF2", "whiteSpace": "normal", "textAlign": "start", "--cursor-button": "pointer", "&:hover": {"backgroundColor": "#F2AD85"}}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <StarIcon sx={{"width": "1em", "height": "1em", "margin": "1em"}}/>
  <RadixThemesFlex align={`start`} css={{"margin": "0px"}} direction={`column`} gap={`2`}>
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

export function Link_15558f803774dd16ac2c0d79371e7d45 () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/gabrielavacar/`} passHref={true}>
  <CalendarIcon/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_4f8f745d52fc52f2a964df7d166a301a () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://wa.me/573144648215`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#000000", "backgroundColor": "#80BDF2", "whiteSpace": "normal", "textAlign": "start", "--cursor-button": "pointer", "&:hover": {"backgroundColor": "#F2AD85"}}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <StarIcon sx={{"width": "1em", "height": "1em", "margin": "1em"}}/>
  <RadixThemesFlex align={`start`} css={{"margin": "0px"}} direction={`column`} gap={`2`}>
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


export function Fragment_966c0378eb9d65bdfb5286644be9b831 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const state = useContext(StateContexts.state)


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_98f08325f17b77143bd725601b49e962 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.youtube.com/@gabrielavacar`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#000000", "backgroundColor": "#80BDF2", "whiteSpace": "normal", "textAlign": "start", "--cursor-button": "pointer", "&:hover": {"backgroundColor": "#F2AD85"}}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <StarIcon sx={{"width": "1em", "height": "1em", "margin": "1em"}}/>
  <RadixThemesFlex align={`start`} css={{"margin": "0px"}} direction={`column`} gap={`2`}>
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

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_966c0378eb9d65bdfb5286644be9b831/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "background": "#F2AD85", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "1em", "paddingBottom": "1em", "zIndex": "999", "top": "0"}} direction={`row`} gap={`2`}>
  <RadixThemesBox css={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#000000"}}>
  {`Gabriela`}
</Text>
  <Text as={`span`} sx={{"color": "#80BDF2"}}>
  {`Vaca`}
</Text>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"maxWidth": "600px", "width": "100%", "marginTop": "2em", "marginBottom": "2em", "padding": "1em"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`5`}>
  <RadixThemesAvatar color={`pink`} fallback={`GV`} size={`6`}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"fontSize": "2em", "color": "#000000"}}>
  {`Gabriela Vaca 🧘‍♀️`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"marginTop": "0px", "color": "#000000"}}>
  {`@gabrielavacar`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Link_15558f803774dd16ac2c0d79371e7d45/>
  <Link_15558f803774dd16ac2c0d79371e7d45/>
  <Link_15558f803774dd16ac2c0d79371e7d45/>
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
  <RadixThemesText align={`left`} as={`p`} css={{"color": "#000000"}}>
  {`Comunicadora social graduada con habilidades destacadas en 
                    redacción y expresión oral en español e inglés. Apasionada por 
                    la comunicación digital, el periodismo investigativo y la creación 
                    audiovisual para la promoción de marcas. Destaca por trabajar en 
                    equipo con enfoque en resultados, mostrando compromiso y habilidades 
                    interpersonales, y tiene una gran pasión por las herramientas TIC y 
                    las nuevas formas de comunicación transmedia. Bienvenid@!`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"width": "100%", "paddingTop": "1em", "color": "#000000", "fontSize": "2em"}}>
  {`Comunidad`}
</RadixThemesHeading>
  <Link_7cea5aea51dc4eb81a568911586e333b/>
  <Link_4f8f745d52fc52f2a964df7d166a301a/>
  <Link_98f08325f17b77143bd725601b49e962/>
  <Link_980180eb6b0bc1325968f8ba4b12f396/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"marginBottom": "2em", "paddingBottom": "2em", "color": "#000000"}} direction={`column`} gap={`2`}>
  <img src={`favicon.ico`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`© 2024 GABRIELA VACA. TODOS LOS DERECHOS RESERVADOS 2024`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "marginTop": "0px"}}>
  {`Politica de Privacidad - ¡Tipo link!`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Gabriela Vacaaa`}
</title>
  <meta content={`Hola, mi nombre es Gabriela Vaca. Profesora certificada de yoga`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

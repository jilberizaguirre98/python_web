/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { Text } from "@chakra-ui/react"
import { FloatButton } from "antd"
import { StarIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export function Link_7ae527b962fcce64ebf55ed84873a84d () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa", ["fontWeight"] : "300", ["fontSize"] : "1em" })} target={(false ? "_blank" : "")}>

<NextLink href={"/blog"} passHref={true}>

<RadixThemesText as={"p"}>

{"Inicio"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_845461e0e4d1194d2c03952c163049d7 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(false ? "_blank" : "")}>

<NextLink href={"http://localhost:3000"} passHref={true}>

<RadixThemesBox css={({ ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa", ["fontWeight"] : "500", ["fontSize"] : "1.5em" })}>

<Text as={"span"} sx={({ ["color"] : "#000000" })}>

{"Gabriela"}
</Text>
<Text as={"span"} sx={({ ["color"] : "#80BDF2" })}>

{"Vaca"}
</Text>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_9017984ada32ffa55f5d2870ebd3c887 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_859718242b38091eee7ac71ace547792 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://wa.me/573144648215"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["display"] : "block", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#80BDF2", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["--cursor-button"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#F2AD85" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<StarIcon sx={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "1em" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["margin"] : "0px !important" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1em", ["fontWeight"] : "500", ["color"] : "#000000" })}>

{"WhatsApp"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#000000" })}>

{"Contactate conmigo"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_f59a5b801e5e56b4062445d6e691bc65 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://open.spotify.com/show/4A2pjf7mLDAnqPL72vPVZC?si=2abd6989d96a4e38"} passHref={true}>

<img css={({ ["height"] : "1.5em", ["width"] : "1.5em" })} src={"spotify.png"}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_8794873ce4563ec80d7772c4cdb826c2 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/gabriela-alexandra-vaca-romero-299316149/"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["display"] : "block", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#80BDF2", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["--cursor-button"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#F2AD85" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<StarIcon sx={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "1em" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["margin"] : "0px !important" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1em", ["fontWeight"] : "500", ["color"] : "#000000" })}>

{"LinkedIn"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#000000" })}>

{"Mi perfil profesional"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_2e2c556fef073cff09ac7109d2b055e2 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.facebook.com/gabyalexavacaromero"} passHref={true}>

<img css={({ ["height"] : "1.5em", ["width"] : "1.5em" })} src={"facebook.png"}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Div_bd4c022a8f796682aa6392e9d4c102e9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_9017984ada32ffa55f5d2870ebd3c887/>
</div>
  )
}

export function Link_d81cc3662dc61bda8dbd4d8e3429f39a () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.youtube.com/@gabrielavacar"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["display"] : "block", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#80BDF2", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["--cursor-button"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#F2AD85" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<StarIcon sx={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "1em" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["margin"] : "0px !important" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1em", ["fontWeight"] : "500", ["color"] : "#000000" })}>

{"Youtube"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#000000" })}>

{"Clases en vivo y grabadas"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_a6543cd2a4ce1f9616a3567f342b0060 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.instagram.com/gabrielavacar/"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["display"] : "block", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#000000", ["backgroundColor"] : "#80BDF2", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["--cursor-button"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#F2AD85" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<StarIcon sx={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "1em" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["margin"] : "0px !important" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1em", ["fontWeight"] : "500", ["color"] : "#000000" })}>

{"Instagram"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#000000" })}>

{"Contenido y recetas saludables"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_3edecc87baa49d8839b0a9a6c23f5efb () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://wa.me/573144648215"} passHref={true}>

<img css={({ ["height"] : "1.5em", ["width"] : "1.5em" })} src={"whatsapp.png"}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_040ba3e4c06b98bbefaad89ffbbbe02a () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.instagram.com/gabrielavacar/"} passHref={true}>

<img css={({ ["height"] : "1.5em", ["width"] : "1.5em" })} src={"instagram.png"}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_cf8854d81d21cbdf34e249a5365809a9 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.youtube.com/@gabrielavacar"} passHref={true}>

<img css={({ ["height"] : "1.5em", ["width"] : "1.5em" })} src={"youtube.png"}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))

  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Link_14dd72f6658d7c7cd2294fa7f4aceccd () {



  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/gabriela-alexandra-vaca-romero-299316149/"} passHref={true}>

<img css={({ ["height"] : "1.5em", ["width"] : "1.5em" })} src={"linkedin.png"}/>
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


export default function Component() {

  return (
    <Fragment>

<Fragment>

<Div_bd4c022a8f796682aa6392e9d4c102e9/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["justifyContent"] : "space-between", ["alignItems"] : "center", ["width"] : "100%", ["position"] : "sticky", ["background"] : "#F2AD85", ["opacity"] : "0.96", ["paddingInlineStart"] : "2em", ["paddingInlineEnd"] : "2em", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["zIndex"] : "999", ["top"] : "0" })} direction={"row"} gap={"3"}>

<Link_845461e0e4d1194d2c03952c163049d7/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"5"}>

<Link_7ae527b962fcce64ebf55ed84873a84d/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa", ["fontWeight"] : "300", ["fontSize"] : "1em" })}>

<NextLink href={"/"} passHref={true}>

{"Inicio"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa", ["fontWeight"] : "300", ["fontSize"] : "1em" })}>

<NextLink href={"/blog"} passHref={true}>

{"Blog"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa", ["fontWeight"] : "300", ["fontSize"] : "1em" })}>

<NextLink href={"/calendario"} passHref={true}>

{"Calendario"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa", ["fontWeight"] : "300", ["fontSize"] : "1em" })}>

<NextLink href={"/talleres"} passHref={true}>

{"Talleres"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa", ["fontWeight"] : "300", ["fontSize"] : "1em" })}>

<NextLink href={"/about"} passHref={true}>

{"\u00bfQuien soy?"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<FloatButton badge={({ ["dot"] : true, ["color"] : "#ff0000" })} css={({ ["position"] : "fixed", ["bottom"] : "30px", ["right"] : "30px" })} href={"https://wa.me/573144648215"} icon={(jsx("img", ({ ["css"] : ({ ["position"] : "absolute", ["top"] : "0", ["left"] : "0", ["width"] : "100%", ["height"] : "100%" }), ["src"] : "whatsapp_original3.svg" })))} target={"_blank"}/>
</RadixThemesFlex>
<RadixThemesBox css={({ ["position"] : "relative", ["width"] : "100%", ["height"] : "100%", ["overflow"] : "hidden" })}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "600px", ["width"] : "100%", ["marginTop"] : "2em", ["marginBottom"] : "2em", ["padding"] : "1em" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"5"}>

<RadixThemesAvatar css={({ ["name"] : "Gabriela Vaca", ["color"] : "#F1F2F4", ["background"] : "#AED3F2", ["padding"] : "1px", ["border"] : "4px solid #BF7056" })} radius={"full"} size={"7"} src={"/avatar.jpg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["color"] : "#000000", ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["fontWeight"] : "500" })} size={"7"}>

{"Gabriela Vaca \ud83e\uddd8\u200d\u2640\ufe0f"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["marginTop"] : "0px !important", ["color"] : "#000000" })}>

{"@gabrielavacar"}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<Link_040ba3e4c06b98bbefaad89ffbbbe02a/>
<Link_040ba3e4c06b98bbefaad89ffbbbe02a/>
<Link_040ba3e4c06b98bbefaad89ffbbbe02a/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["width"] : "100%" })}>

<RadixThemesBox css={({ ["fontSize"] : "0.8em", ["color"] : "#000000" })}>

<Text as={"span"} sx={({ ["fontWeight"] : "bold", ["color"] : "#BF7056" })}>

{"+300"}
</Text>
{" horas de experiencia"}
</RadixThemesBox>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesBox css={({ ["fontSize"] : "0.8em", ["color"] : "#000000" })}>

<Text as={"span"} sx={({ ["fontWeight"] : "bold", ["color"] : "#BF7056" })}>

{"+10"}
</Text>
{" clases de Yoga"}
</RadixThemesBox>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesBox css={({ ["fontSize"] : "0.8em", ["color"] : "#000000" })}>

<Text as={"span"} sx={({ ["fontWeight"] : "bold", ["color"] : "#BF7056" })}>

{"+1000"}
</Text>
{" seguidores"}
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesText align={"left"} as={"p"} css={({ ["fontSize"] : "0.8em", ["color"] : "#000000" })}>

{"Comunicadora social graduada con habilidades destacadas en \n                    redacci\u00f3n y expresi\u00f3n oral en espa\u00f1ol e ingl\u00e9s. Apasionada por \n                    la comunicaci\u00f3n digital, el periodismo investigativo y la creaci\u00f3n \n                    audiovisual para la promoci\u00f3n de marcas. Destaca por trabajar en \n                    equipo con enfoque en resultados, mostrando compromiso y habilidades \n                    interpersonales, y tiene una gran pasi\u00f3n por las herramientas TIC y \n                    las nuevas formas de comunicaci\u00f3n transmedia. Bienvenid@!"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["color"] : "#000000", ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["fontWeight"] : "500", ["width"] : "100%", ["paddingTop"] : "1em", ["fontSize"] : "2em" })}>

{"Comunidad"}
</RadixThemesHeading>
<Link_a6543cd2a4ce1f9616a3567f342b0060/>
<Link_859718242b38091eee7ac71ace547792/>
<Link_d81cc3662dc61bda8dbd4d8e3429f39a/>
<Link_8794873ce4563ec80d7772c4cdb826c2/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesBox css={({ ["position"] : "absolute", ["top"] : "0", ["left"] : "0", ["width"] : "100%", ["height"] : "100%", ["backgroundImage"] : "url(/landscape.jpg)", ["backgroundSize"] : "cover", ["backgroundPosition"] : "center", ["zIndex"] : "-1" })}/>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["marginTop"] : "2em", ["marginBottom"] : "2em" })}>

<RadixThemesHeading css={({ ["color"] : "#000000", ["fontFamily"] : "Poppins", ["--default-font-family"] : "Poppins", ["fontWeight"] : "500" })} size={"7"}>

{"Unete a nuestra comunidad"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingBottom"] : "0.5em", ["backgroundColor"] : "#F2AD85", ["padding"] : "1.5em" })} direction={"column"} gap={"3"}>

<RadixThemesSeparator size={"4"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["paddingLeft"] : "2em", ["paddingRight"] : "2em", ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"4"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["fontFamily"] : "Comfortaa", ["--default-font-family"] : "Comfortaa", ["fontWeight"] : "300", ["fontSize"] : "1em" })}>

<NextLink href={"/talleres"} passHref={true}>

{"Talleres"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#"} passHref={true}>

{"Taller del ni\u00f1o interior"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#"} passHref={true}>

{"Taller de poder femenino"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"Aprender M\u00e1s"}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#"} passHref={true}>

{"Centro de ayuda"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#"} passHref={true}>

{"Acerca de mi"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1em", ["color"] : "#000000" })}>

{"Idiomas"}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#"} passHref={true}>

{"English"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#"} passHref={true}>

{"Espa\u00f1ol"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#"} passHref={true}>

{"Portugu\u00eas"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["color"] : "#000000", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#"} passHref={true}>

{"M\u00e1s"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingTop"] : "1.5em", ["paddingLeft"] : "2em", ["paddingRight"] : "2em" })} direction={"row"} justify={"between"} gap={"4"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"8"}>

<Link_040ba3e4c06b98bbefaad89ffbbbe02a/>
<Link_3edecc87baa49d8839b0a9a6c23f5efb/>
<Link_2e2c556fef073cff09ac7109d2b055e2/>
<Link_cf8854d81d21cbdf34e249a5365809a9/>
<Link_f59a5b801e5e56b4062445d6e691bc65/>
<Link_14dd72f6658d7c7cd2294fa7f4aceccd/>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1em", ["color"] : "#F1F2F4" })}>

{"\u00a9 2024 GABRIELA VACA"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesSeparator size={"4"}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Gabriela Vaca"}
</title>
<meta content={"Hola, mi nombre es Gabriela Vaca. Profesora certificada de yoga"} name={"description"}/>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}

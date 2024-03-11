/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Code, Heading, Link, VStack } from "@chakra-ui/react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export function Button_5cbb2952409d1e5ed6e42602daa56ec7 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, colorMode, toggleColorMode])

  return (
    <Button onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8} sx={{"float": "right"}}>
  <Fragment_c4944d8b5ece4892844e987a2ddfe4ae/>
</Button>
  )
}

export function Fragment_c4944d8b5ece4892844e987a2ddfe4ae () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
  )
}

export function Link_18676d7dddd67e44364335bc8be43dcd () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Link as={NextLink} href={`https://reflex.dev/docs/getting-started/introduction`} sx={{"border": "0.1em solid", "padding": "0.5em", "borderRadius": "0.5em", "_hover": {"color": isTrue((colorMode === "light")) ? `rgb(107,99,246)` : `rgb(179, 175, 255)`}}}>
  {`Check out our docs!`}
</Link>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Fragment>
  <Button_5cbb2952409d1e5ed6e42602daa56ec7/>
  <VStack spacing={`1.5em`} sx={{"fontSize": "2em", "paddingTop": "10%"}}>
  <Heading sx={{"fontSize": "2em"}}>
  {`Welcome to Reflex!`}
</Heading>
  <Box>
  {`Get started by editing `}
  <Code sx={{"fontSize": "1em"}}>
  {`venv/venv.py`}
</Code>
</Box>
  <Link_18676d7dddd67e44364335bc8be43dcd/>
</VStack>
</Fragment>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size



def link_button(title: str, body: str, url:str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.chakra.icon(
                    tag="star",
                    width=styles.Size.DEFAULT.value,
                    height=styles.Size.DEFAULT.value,
                    margin=Size.DEFAULT.value
                ),                
            rx.vstack(
                rx.text(title, style=styles.button_title_style),
                rx.text(body, style=styles.button_body_style),
                spacing="2",
                align="start",
                margin=Size.ZERO.value
                )             
            )            
        ),
        href=url,
        is_external=True,
        width="100%"
    )
import reflex as rx
import link_bio.constants as const
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.styles.styles import Size, Spacing
from link_bio.styles.colors import Color, TextColor



def header() -> rx.Component:
        return rx.vstack(
            rx.hstack(
                rx.avatar(
                        name="Gabriela Vaca",
                        size=Spacing.MEDIUM_BIG.value,
                        src="/avatar.jpg",
                        radius="full",
                        color=TextColor.WHITE.value,
                        bg=Color.BLUE_2.value,
                        padding="1px",
                        border=f"4px solid {Color.RED.value}"
                ),
                        
                rx.vstack(
                        rx.heading(
                                "Gabriela Vaca 🧘‍♀️", 
                                size=Spacing.MEDIUM_BIG.value
                        ),
                        rx.text(
                                "@gabrielavacar",
                                margin_top=Size.ZERO.value,
                                color=TextColor.BLACK.value
                        ),
                        rx.hstack(
                        link_icon("instagram.png", const.INSTAGRAM_URL),
                        link_icon("instagram.png", const.INSTAGRAM_URL),
                        link_icon("instagram.png", const.INSTAGRAM_URL)
                        ),
                        align="start"
                ),
                spacing="5"                
            ),
            rx.flex(
                    info_text("+300", "horas de experiencia"),
                    rx.spacer(),
                    info_text("+10", "clases de Yoga"),
                    rx.spacer(),
                    info_text("+1000", "seguidores"),
                    width="100%"                    
            ),


            rx.text("""Comunicadora social graduada con habilidades destacadas en 
                    redacción y expresión oral en español e inglés. Apasionada por 
                    la comunicación digital, el periodismo investigativo y la creación 
                    audiovisual para la promoción de marcas. Destaca por trabajar en 
                    equipo con enfoque en resultados, mostrando compromiso y habilidades 
                    interpersonales, y tiene una gran pasión por las herramientas TIC y 
                    las nuevas formas de comunicación transmedia. Bienvenid@!""",
                    font_size=Size.MEDIUM.value,
                    color=TextColor.BLACK.value,
                    align="left"                    
                    ),
                width="100%",
                align="center",
                spacing=Spacing.LARGE.value
        )

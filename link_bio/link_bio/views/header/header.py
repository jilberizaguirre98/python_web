import reflex as rx
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import TextColor as TextColor



def header() -> rx.Component:
        return rx.vstack(
            rx.hstack(
                rx.avatar(fallback="GV", color_scheme="pink", size="6"),
                rx.vstack(
                        rx.heading(
                                "Gabriela Vaca 🧘‍♀️", 
                                font_size=Size.BIG.value,
                                color=TextColor.BLACK.value
                        ),
                        rx.text(
                                "@gabrielavacar",
                                margin_top=Size.ZERO.value,
                                color=TextColor.BLACK.value
                        ),
                        rx.hstack(
                        link_icon("https://www.instagram.com/gabrielavacar/"),
                        link_icon("https://www.instagram.com/gabrielavacar/"),
                        link_icon("https://www.instagram.com/gabrielavacar/"),
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
                    color=TextColor.BLACK.value,
                    align="left"                    
                    ),
                align="center",
                spacing="5"
        )

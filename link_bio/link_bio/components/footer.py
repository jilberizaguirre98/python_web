import reflex as rx
import datetime
import link_bio.constants as const
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor
from link_bio.components.link_icon import link_icon

def footer() -> rx.Component:
    return rx.vstack(
        rx.divider(),
        rx.hstack(
            rx.vstack(
                rx.link("Talleres", href="/talleres", style=styles.navbar_buttons_style),
                # rx.text("Talleres", font_size=Size.DEFAULT.value, color=TextColor.BLACK.value),
                rx.link("Taller del niño interior", href="#", color=TextColor.BLACK.value),
                rx.link("Taller de poder femenino", href="#", color=TextColor.BLACK.value),
                align="start"
            ),
            rx.vstack(
                rx.text("Aprender Más", font_size=Size.DEFAULT.value, color=TextColor.BLACK.value),
                rx.link("Centro de ayuda", href="#", color=TextColor.BLACK.value),
                rx.link("Acerca de mi", href="#", color=TextColor.BLACK.value),
                align="start"
            ),
            rx.vstack(
                rx.text("Idiomas", font_size=Size.DEFAULT.value, color=TextColor.BLACK.value),
                rx.link("English", href="#", color=TextColor.BLACK.value),
                rx.link("Español", href="#", color=TextColor.BLACK.value),
                rx.link("Português", href="#", color=TextColor.BLACK.value),
                rx.link("Más", href="#", color=TextColor.BLACK.value),
                align="start"
            ),
            spacing="4",
            justify="between",
            padding_left=Size.BIG.value, 
            padding_right=Size.BIG.value,
            width="100%"
        ),
        rx.hstack(
            rx.hstack(
                link_icon("instagram.png", const.INSTAGRAM_URL),
                link_icon("whatsapp.png", const.WHATSAPP_URL),
                link_icon("facebook.png", const.FACEBOOK_URL),
                link_icon("youtube.png", const.YOUTUBE_URL),
                link_icon("spotify.png", const.SPOTIFY_URL),
                link_icon("linkedin.png", const.LINKEDIN_URL),
            spacing="8",  # Espaciado entre los iconos
            align="center"
            ),
            rx.text(
                f"© {datetime.date.today().year} GABRIELA VACA",
                font_size=Size.DEFAULT.value,
                color=TextColor.WHITE.value
            ),
            justify="between",
            align="center",
            width="100%",
            spacing="4",
            padding_top=Size.LARGE.value,
            padding_left=Size.BIG.value,  
            padding_right=Size.BIG.value,
        ),
        rx.divider(),
        align="center",
        width="100%",
        padding_bottom=Size.SMALL.value,
        background_color=Color.PINK.value,
        padding=Size.LARGE.value
    )
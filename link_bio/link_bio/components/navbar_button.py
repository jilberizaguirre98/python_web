import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color, TextColor


def navbar_button(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.text(text),
        href = url,
        is_external = False,
        style = styles.navbar_buttons_style
    )
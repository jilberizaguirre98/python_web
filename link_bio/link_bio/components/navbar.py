import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor

#el font_family=Font.DEFAULT.value, no genera un cambio en el estilo del texto, revisar
#navbar, styles y fonts
def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.chakra.span("Gabriela", color=TextColor.BLACK.value),
            rx.chakra.span("Vaca", color=Color.BLUE.value),
            style=styles.navbar_title_style
        ),
        position="sticky",
        bg=Color.PINK.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )

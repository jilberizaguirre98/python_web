import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.text(
            f"© {datetime.date.today().year} GABRIELA VACA. TODOS LOS DERECHOS RESERVADOS 2024",
            font_size=Size.MEDIUM.value
        ),
        rx.text(
            "Politica de Privacidad - ¡Tipo link!",
            font_size=Size.MEDIUM.value,
            margin_top=Size.ZERO.value
        ),
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.BIG.value,
        color=TextColor.BLACK.value
    )
import reflex as rx
import link_bio.styles.styles as styles

from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.views.header.header import header
from link_bio.views.links.links import links
from link_bio.components.background_index import background
from link_bio.styles.styles import Size as Size, Spacing
from link_bio.pages import *


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
                navbar(),
                rx.box(
                    rx.center(
                        rx.vstack(
                            header(),
                            links(),
                            max_width=styles.MAX_WIDTH,
                            width="100%",
                            margin_y=Size.BIG.value,
                            padding=Size.DEFAULT.value
                        )
                    ),
                background(),  # Añadir el fondo aquí
                    style={
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",  # Altura total de la ventana gráfica
                    "overflow": "hidden"}
                ),
                rx.center(
                    rx.heading("Unete a nuestra comunidad", 
                                size=Spacing.MEDIUM_BIG.value),
                                margin_y=Size.BIG.value
                ),                
                rx.center(
                    footer()
                )
    )


app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE
)

app.add_page(
    index,
    title="Gabriela Vaca",
    description="Hola, mi nombre es Gabriela Vaca. Profesora certificada de yoga"
    )




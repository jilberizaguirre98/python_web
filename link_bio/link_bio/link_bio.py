import reflex as rx
from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.views.header.header import header
from link_bio.views.links.links import links
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size

class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
        navbar(),
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
    title="Gabriela Vacaaa",
    description="Hola, mi nombre es Gabriela Vaca. Profesora certificada de yoga")



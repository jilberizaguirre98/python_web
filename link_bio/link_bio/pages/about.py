"""The about page."""

import reflex as rx
from link_bio.components.navbar import navbar
from link_bio.components.background_index import background
from link_bio.components.footer import footer
from link_bio.views.links.links import links

@rx.page(route="/about", title="about")
def about() -> rx.Component:
    return rx.box(
        navbar(),
            rx.center(
                rx.vstack(
                    rx.text("¿Quien soy?"),
                    rx.link("Volver a la Página Principal", href="/"),
                    links(),
                    background(),  # Añadir el fondo aquí
                    style={
                        "position": "relative",
                        "width": "100%",
                        "height": "100%",  # Altura total de la ventana gráfica
                        "overflow": "hidden"}
            )
        ),    
    footer()
    )
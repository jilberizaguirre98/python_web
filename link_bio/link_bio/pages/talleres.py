"""The talleres page."""

import reflex as rx
from link_bio.components.navbar import navbar

@rx.page(route="/talleres", title="Talleres")
def talleres() -> rx.Component:
    return rx.box(
        navbar(),
        rx.text("Bienvenido a los Talleres!"),
        rx.link("Volver a la Página Principal", href="/")
    )
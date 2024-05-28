"""The calendar page."""

import reflex as rx
import link_bio.styles.styles as styles
from link_bio.components.navbar import navbar


@rx.page(route="/calendario", title="Calendario")
def calendario() -> rx.Component:
    return rx.box(
        navbar(),
        rx.text("Bienvenido al Calendario!"),
        rx.link("Volver a la Página Principal", href="/")
    )
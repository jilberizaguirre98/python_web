"""The blog page."""

import reflex as rx
import link_bio.styles.styles as styles
from link_bio.components.navbar import navbar
from link_bio.components.footer import footer


@rx.page(route="/blog", title="Blog")
def blog() -> rx.Component:
    return rx.box(
        navbar(),
        rx.text("Bienvenido al Bloggg!"),
        rx.link("Volver a la Página Principal", href="/"),
        footer()
    )
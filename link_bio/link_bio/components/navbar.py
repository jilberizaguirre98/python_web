import reflex as rx
import link_bio.styles.styles as styles
import link_bio.constants as const
from link_bio.styles.styles import Size, Spacing
from link_bio.styles.colors import Color, TextColor
from link_bio.components.ant_components import float_button
from link_bio.components.navbar_button import navbar_button

def navbar() -> rx.Component:
    return rx.hstack(
                rx.link(
                    rx.box(
                        rx.chakra.span("Gabriela", color=TextColor.BLACK.value),
                        rx.chakra.span("Vaca", color=Color.BLUE.value),
                            style=styles.navbar_title_style
                    ),
                href=const.PAGINA_URL,
                is_external=False
                ),
                rx.hstack(
                    navbar_button("Inicio", "/blog"),
                    rx.link("Inicio", href="/", style=styles.navbar_buttons_style),
                    rx.link("Blog", href="/blog", style=styles.navbar_buttons_style),
                    rx.link("Calendario", href="/calendario", style=styles.navbar_buttons_style),
                    rx.link("Talleres", href="/talleres", style=styles.navbar_buttons_style),
                    rx.link("¿Quien soy?", href="/about", style=styles.navbar_buttons_style),
                    spacing=Spacing.LARGE.value  # Espaciado entre botones
                ),
                float_button(),
                justifyContent="space-between",
                alignItems="center",
                width="100%",
                position="sticky",
                bg=Color.PINK.value,
                opacity= "0.96",
                padding_x=Size.BIG.value,
                padding_y=Size.SMALL.value,
                z_index="999",
                top="0"  
    )

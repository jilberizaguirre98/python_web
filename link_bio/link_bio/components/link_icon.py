import reflex as rx
import link_bio.styles.styles as styles



def link_icon(url: str) -> rx.Component:
    return rx.link(
            rx.chakra.icon(tag="calendar"
            ),
        href=url,
        is_external=True
    )
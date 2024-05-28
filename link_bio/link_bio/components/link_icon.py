import reflex as rx
from link_bio.styles.styles import Size as Size

#Las imagenes/iconos fueron descargadas del sitio web "https://www.iconfinder.com/"
#Las imagenes/iconos estan libres de atribución y son para uso comercial.

def link_icon(imagen: str, url: str) -> rx.Component:
    return rx.link(
        rx.image(
            height=Size.LARGE.value, 
            width=Size.LARGE.value,
            src=imagen
            ),
        href=url,
        is_external=True
    )
import reflex as rx
import link_bio.constants as const
from link_bio.components.link_button import link_button
from link_bio.components.title import title



def links() -> rx.Component:
    return rx.vstack(
        title("Comunidad",),
        link_button(
                "Instagram", 
                "Contenido y recetas saludables", 
                const.INSTAGRAM_URL
        ),

        link_button(
                "WhatsApp",
                "Contactate conmigo",
                const.WHATSAPP_URL
        ),
                        
        link_button(
                "Youtube",
                "Clases en vivo y grabadas",
                const.YOUTUBE_URL
        ),

        link_button(
                "LinkedIn",
                "Mi perfil profesional",
                const.LINKEDIN_URL
        ),
        width="100%"
    )
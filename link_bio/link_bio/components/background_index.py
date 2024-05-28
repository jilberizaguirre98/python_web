import reflex as rx


def background() -> rx.Component:
    return rx.box(
        style={
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background_image": "url(/landscape.jpg)",
            "background_size": "cover",
            "background_position": "center",
            "z_index": "-1"  # Asegurarse de que esté detrás del contenido
        }
    )
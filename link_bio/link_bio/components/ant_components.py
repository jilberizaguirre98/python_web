import reflex as rx
import link_bio.constants as const
from link_bio.styles.colors import Color


class FloatButton(rx.Component):
    library = "antd"
    tag = "FloatButton"
    icon = rx.image(
        src="whatsapp_original3.svg",
        style={
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%"},
    )
    style: dict = {"position": "fixed", "bottom": "30px", "right": "30px"}
    href = const.WHATSAPP_URL
    target = "_blank"
    badge = {"dot": True, "color": Color.RED_2.value}


float_button = FloatButton.create
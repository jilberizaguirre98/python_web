import reflex as rx
from enum import Enum
from .colors import Color, TextColor
from .fonts import Font as Font, FontWeight

#Constants
MAX_WIDTH = "600px"

#Sizes

STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
]


class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"
    VERY_BIG = "4em"


class Spacing(Enum):
    ZERO = "0"
    VERY_SMALL = "1"
    SMALL = "3"
    DEFAULT = "4"
    LARGE = "5"
    BIG = "6"
    MEDIUM_BIG = "7"
    VERY_BIG = "9"


#Styles

#Cambiar los estilos en link_button y form para rx.button y eliminarlos de la hoja style
# esto para ver si puedo colocar un background color al pasar el mouse por los botones del navbar    
    
BASE_STYLE = {
    "font_family": Font.DEFAULT.value,
    "font_weight": FontWeight.LIGHT.value,
    "background_color": Color.BLUE_2.value,
    rx.heading: {
        "color": TextColor.BLACK.value,
        "font_family": Font.TITLE.value,
        "font_weight": FontWeight.MEDIUM.value
    },
    rx.button: {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "color": TextColor.BLACK.value,
        "background_color": Color.BLUE.value,
        "white_space": "normal",
        "text_align": "start",
        "--cursor-button": "pointer",
        "_hover": {
           "background_color": Color.PINK.value
        }
    },
    rx.link: {
        "text_decoration": "none",
        "color": TextColor.BLACK.value,
        "_hover": {
           "color": TextColor.WHITE.value
        }
    }
}


navbar_title_style = dict(    
    font_family=Font.LOGO.value,
    font_weight=FontWeight.MEDIUM.value,
    font_size=Size.LARGE.value
)

navbar_buttons_style = dict(    
    font_family=Font.LOGO.value,
    font_weight=FontWeight.LIGHT.value,
    font_size=Size.DEFAULT.value
)

title_style = dict(    
    width="100%",
    padding_top=Size.DEFAULT.value,
    color=TextColor.BLACK.value
)

button_title_style = dict(
    font_size=Size.DEFAULT.value,
    font_weight=FontWeight.MEDIUM.value,
    color=TextColor.BLACK.value
)

button_body_style = dict(
    font_weight=FontWeight.LIGHT.value,
    font_size=Size.MEDIUM.value,
    color=TextColor.BLACK.value
)

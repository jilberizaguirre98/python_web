import reflex as rx


## Agregar ventana emergente cuando se haya enviado la informacion,
## se puede usar una ventana como aparece acá: https://reflex.dev/docs/library/overlay/dialog/

class FormState(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data


def form_subscribe():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Nombre",
                    name="name",
                ),
                rx.input(
                    placeholder="Email",
                    name="email",
                ),
                rx.button("Submit", type="submit"),
            ),
            on_submit=FormState.handle_submit,
            reset_on_submit=True,
        ),
        rx.divider(),
        rx.heading("Results"),
        rx.text(FormState.form_data.to_string()),
    )
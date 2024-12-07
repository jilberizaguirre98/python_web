# Web de links de Gabriela Vaca

[![Python](https://img.shields.io/badge/Python-3.11+-yellow?style=for-the-badge&logo=python&logoColor=white&labelColor=101010)](https://python.org)
[![Reflex](https://img.shields.io/badge/Reflex-0.5.0+-5646ED?style=for-the-badge&logo=reflex&logoColor=white&labelColor=101010)](https://reflex.dev)

## Proyecto desarrollado con [Python](https://www.python.org/) y [Reflex](https://reflex.dev/) que representa un landing page.

![image](https://github.com/user-attachments/assets/dc5a8400-6ac0-473e-8be3-a6f29ed1c6bc)

## Importante

Desde la versión 0.4.0, Reflex utiliza [Radix](https://www.radix-ui.com/) (en vez de [Chakra](https://chakra-ui.com/)) como sistema de componentes de UI. Ten en cuenta la versión que usas del framework, ya que algunos elementos han podido cambiar ligeramente. En mi caso mantego la version 0.5.0 pero Reflex se sigue actualizando.

*Prepera el entorno, instala dependencias e inicializa el proyecto*

## Requisitos

#### Instala y crea un entorno virtual [venv](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/) en la raíz del proyecto
Mac/Linux: `python3 -m pip install virtualenv`

Windows: `py -m pip install --user virtualenv`

`python -m venv .venv`

#### Activa el entorno virtual 
Mac/Linux: `source .venv/bin/activate`

Windows: `.venv\Scripts\activate`

Para desactivar el entorno virtual: `deactivate`

## Dependencias
*(Con el entorno virtual activo)*

`python -m pip install -r requirements.txt`

## Ejecución
`reflex run`

Acceder a [http://localhost:3000](http://localhost:3000) (frontend) y a [http://localhost:8000](http://localhost:8000) (backend)


> El proyecto se puede desplegar en cualquier proveedor o servidor que soporte recursos estáticos.

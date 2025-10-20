# Configuración de Formspree

Sigue estos pasos para que el formulario de contacto envíe correos usando Formspree en producción y localmente.

## 1) Crear el formulario en Formspree
- Ve a https://formspree.io/ y crea una cuenta (o inicia sesión).
- Crea un nuevo formulario y copia el **Form ID** que luce como `abcdwxyz`.
- Opcional: Configura validaciones, dominio permitido y respuesta automática desde el panel de Formspree.

## 2) Variables de entorno
Este proyecto usa `VITE_` variables accesibles desde el cliente.

- En local: crea/actualiza tu archivo `.env` con:
  ```
  VITE_FORMSPREE_FORM_ID=TU_FORM_ID
  ```
- En GitHub (Actions): agrega el mismo valor como **Secret** en tu repositorio:
  - Ve a `Settings > Secrets and variables > Actions > New repository secret`.
  - Nombre del secret: `VITE_FORMSPREE_FORM_ID`.
  - Valor: `TU_FORM_ID`.

El workflow de deploy inyecta este valor durante el build para que la web funcione en producción.

## 3) Qué envía el formulario
Se envían estos campos a Formspree como JSON:
- `name`, `email`, `subject`, `message`.

## 4) Pruebas y verificación
- En local: `npm run dev`, completa el formulario y verifica que se envía correctamente.
- En producción: tras hacer push a `main`, espera a que el workflow de GitHub Pages complete y prueba en tu dominio.
- Si algo falla (por ejemplo, error de red), el sitio abrirá tu cliente de correo con un `mailto:` como respaldo automático.

## 5) Consideraciones
- El `VITE_FORMSPREE_FORM_ID` no es secreto, pero usamos `.env` y GitHub Secrets para mantener la configuración separada por entorno.
- Si activas restricción de dominios en Formspree, asegúrate de incluir `www.portfolioruizdiaz.com.ar`.
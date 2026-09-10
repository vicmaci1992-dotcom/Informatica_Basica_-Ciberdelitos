# Estructura de Computadores, Redes de Comunicaciones y su Aplicación en la Investigación Forense de Ciberdelitos

Portal educativo e interactivo desarrollado con HTML5, CSS3 y JavaScript para publicarse en GitHub Pages.

## Requisitos

- GitHub Codespaces o un editor con navegador web
- Navegador moderno
- GitHub account

## 1. Abrir GitHub Codespaces

1. Entra a tu repositorio en GitHub.
2. Haz clic en Code > Codespaces.
3. Crea o abre un Codespace nuevo.
4. El entorno de desarrollo se configurará automáticamente.

## 2. Ejecutar y probar el proyecto

Desde la terminal del Codespace:

```bash
cd /workspaces/Informatica_Basica
python3 -m http.server 8000
```

Luego abre en el navegador:

```text
http://localhost:8000
```

También puedes abrir la vista previa del archivo index.html desde VS Code.

## 3. Crear y subir el repositorio

```bash
git init
git add .
git commit -m "Inicializa portal educativo"
git branch -M main
git remote add origin <URL_DE_TU_REPOSITORIO>
git push -u origin main
```

## 4. Configurar GitHub Pages

1. Entra al repositorio en GitHub.
2. Ve a Settings > Pages.
3. En Source selecciona GitHub Actions o la rama principal si tu repositorio ya tiene una estructura estática.
4. Para una publicación básica con archivos estáticos, selecciona la rama principal y la carpeta raíz.
5. Guarda la configuración.

## 5. Seleccionar la rama correspondiente

Usa la rama principal o la rama que hayas configurado, por ejemplo:

```text
main
```

## 6. Publicar el sitio

GitHub Pages publicará la página automáticamente con una URL pública del tipo:

```text
https://<usuario>.github.io/<repositorio>/
```

## 7. Comprobar la URL pública

Accede a la URL que te proporcione GitHub Pages y verifica:

- navegación
- responsive
- contenido principal del sitio
- quiz interactivo
- descarga del material
- enlace de contacto

## Estructura del proyecto

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── material-forense.pdf
├── README.md
```

## Material de apoyo

El archivo de descarga se prepara en:

```text
assets/material-forense.pdf
```

Si aún no existe el PDF real, coloca tu documento allí con ese nombre para que el botón funcione correctamente en GitHub Pages.

## Contenido académico

El portal cubre:

- arquitectura de computadores
- ciclo de instrucción
- jerarquía de memoria
- redes de comunicaciones
- IP y MAC
- topologías
- informática forense
- investigación de ciberdelitos
- análisis de evidencia digital

## Licencia

Proyecto académico y didáctico para fines educativos.

## App Felkie

Este es un pryecto de e-commerce en el que tomé como ejemplo los productos de la tienda Selkie (https://selkiecollection.com/).

### Tecnologías utilizadas

- ReactJS - FrontEnd
- FireBase - BackEnd

### Librerías utilizadas

- react-router-dom - Para la navegacion
- react-icons - Para los íconos
- Formik - Para la realización del formulario de checkout
- Firebase - Para manejar los datos de la app

### Estructura del proyecto

| Carpeta | Descripción |
| ------ | ------ |
| components | Todos los componentes que interactuan en la app |
| context | Informacion proveìda a toda la app |
| Services | Configuración de firebase  |

### Instalación

1 - Clonar

```sh
 git clone Link del Repositorio
```

2 - Instalar dependencias

```sh
 npm install
```

3 - Configuración de firebase: Si tiene acceso a las credenciales

```sh
 Copiar las credenciales del proyecto firebase en la raiz del proyecto con extension .env
```

4 - Configuración de firebase: Si NO tiene acesso a las credenciales

```sh
Construír una tabla de preductos llamada 'products', con las siguientes propiedades:

    Id autogenerado,
    category: text,
    descripcion: text,
    img: text,
    img2: text,
    name:text,
    price:number,
    stock:number
```
5 - Ejecutar el proyecto

```sh
 npm start
```
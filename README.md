# PRIMER ENTREGABLE - FRONT END II

¡Hola de nuevo!
Hasta aquí, hemos dado nuestros primeros pasos en la creación de aplicaciones web utilizando React. Ahora, es el momento de poner en práctica todo lo aprendido, para lo cual te pediremos que lleves adelante una pequeña actividad. Veamos de qué se trata…

## Presentación de la Actividad

Para este primer entregable, pondremos en práctica los conocimientos que hemos adquirido acerca de la **creación y manejo de formularios** utilizando React. Para ello, te pediremos que crees un pequeño formulario, el cual deberá permitir a cualquier persona interactuar con el mismo ingresando los datos que se solicitan. Una vez ingresados dichos datos, al hacer click en el botón de **“Enviar”**, se deberán llevar a cabo ciertas validaciones para corroborar que la información ingresada coincida con los datos esperados. Si ello es así, mostraremos en pantalla un componente que contendrá toda la información recibida. Caso contrario, deberás mostrar un mensaje de error.

Como punto de partida, utilizaremos el _template_ que crearon junto al profe en la clase anterior. En caso de que no lo tengas, puedes descargarlo desde el siguiente [link](https://github.com/DH-Esp-Frontend/ctd-fe3-primer-evaluacion-base)

## Instrucciones y requisitos de entrega

La temática del formulario puede ser cualquiera de su preferencia. Pueden solicitar información sobre música, animales, libros, autos, personajes o lo que deseen.

El formulario deberá contener, al menos, **dos inputs de texto y un botón de tipo “submit”**. Si lo deseas, puedes agregar más inputs para hacer más completo tu formulario, pero esto es opcional.

Al hacer click en el botón de “Enviar”, deberás realizar las siguientes validaciones:

- Para el caso del _primer input_, la **longitud mínima** del texto ingresado deberá ser de 3 caracteres y **NO** deberá contener espacios en blanco al comienzo;
- Para el segundo input, deberás validar que contenga **al menos** al menos 6 caracteres, uno de los cuales deberá ser un número.

En caso de que alguna de las validaciones sea incorrecta, deberas mostrar el siguiente mensaje de error: **"Please check your information again”**.

En caso de que los valores ingresados superen las validaciones en forma exitosa, deberás renderizar un componente `<Card>` que contenga dicha información. Puedes darle el estilo y/o forma que desees, en tanto y en cuanto contenga al menos los mismos valores que se hayan ingresado en el formulario.

## Ejemplo

Para que puedas orientarte mejor, te dejamos unos ejemplos de cómo deberían verse las distintas partes del entregable:

### **Formulario**

<img src='./src/assets/form.png' style='width:300px'>

### **Mensaje de Error**

<img src='./src/assets/error.png' style='width:300px'>

### **Card con los datos ingresados**

<img src='./src/assets/done.png' style='width:300px'>

## Pasos a seguir.

Para ayudar a que puedas organizarte y realizar la entrega a tiempo, te dejamos una propuesta de flujo de trabajo. De todas maneras, puedes organizarte de la manera que creas más conveniente para lograr el objetivo buscado:

### Paso 1: Crear los componentes.

En primer lugar, nos ocuparemos de crear nuestros componentes sin pensar en la funcionalidad. Para ello, comenzaremos agregando los dos inputs y el botón que nos permitirá enviar el formulario. Acto seguido, deberás asegurarte que tu componente <Card/> reciba la información ingresada como “props” y la muestre en la pantalla.

### Paso 2: Controlar los inputs

Ahora que ya tienes todos los componentes, es momento de controlar los inputs para poder almacenar y actualizar sus valores a medida que se ingresan los datos en el formulario.

### Paso 3: Agregar el event handler para el submit.

Una vez que sea posible ingresar valores en el formulario, el siguiente paso es poder responder al envío del formulario. Para ello, deberás crear el “event handler” necesario.

### Paso 4: Validaciones.

Dentro del event handler, deberás ocuparte de llevar a cabo las validaciones que se solicitan en la consigna. Recuerda que en caso de que alguna de ellas no arroje un resultado satisfactorio, deberás mostrar el mensaje de error. En este caso, los datos ingresados no deberán renderizarse dentro del componente <Card/>

### Paso 5: Resultado final.

Si las validaciones son exitosas, debes ocuparte de que la información ingresada aparezca dentro del componente <Card/>

## SOBRE LA ENTREGA

1. El trabajo deberá ser realizado en forma individual
2. El plazo máximo de entrega será la hora de finalización de la clase.
3. Puedes comprobar si cumples con los requisitos de entrega corriendo el comando `npm test` parado desde el directorio root 

   **Nota:** _El funcionamiento de los test es solamente de guia para ustedes estudiantes y a su vez para facilitar la correccion. Si no cumples con todos los      test no necesariamente signica que tienes desaprobado la evaluacion, se pasará a evaluar cada caso de manera particular._
5. En caso de que modifiques el archivo de tests el examen quedará invalidado automaticamente
4. Consulta en la consigna de la mesa de trabajo o a tu profe de que manera debes hacer la entrega

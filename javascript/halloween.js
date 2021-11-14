/*** Aqui están las funciones de halloween */

/*** función monstrar ***/
/** Una función es un módulo que ejecuta una sola tarea mostrar --> muestra
 * ocultar ---> oculta
 * 
 * JavaScript toma como objeto principal document, que es la página html actual
 * tiene una serie de operadores, llamados getters, que seleccionan elementos
 * para su manipulación.
 * 
 * Un elemento, seleccionado con un getter, puede ser modificado: contenido,
 * estilo, los atributos...
 */

function mostrar (imagen){
    
    document.getElementById(imagen).style.visibility="visible";
}

function ocultar (imagen){
    document.getElementById(imagen).style.visibility="hidden"
}

function sonar (sonido){
    document.getElementById(sonido).play();
}

function parar (sonido){
    document.getElementById(sonido).pause();
}

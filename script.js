// Create a "close" button and append it to each list item
// Crea un botón "cerrar" y añádelo a cada elemento de la lista
// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u26D4");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Para agregar el elemento ejemplo <i class="fa-duotone fa-solid fa-circle-plus"></i> en lugar de \u26D4, puedes utilizar el método innerHTML en lugar de createTextNode. 
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  span.className = "close";
  span.innerHTML = '<i class="fa-solid fa-trash"></i>';
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
// Haga clic en el botón de cierre para ocultar el elemento de la lista actual
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// ** - 1 -
// Add a "checked" symbol when clicking on a list item
// Agrega un símbolo de "verificado" cuando se hace clic en un elemento de la lista, pero la tarea no se mueve de sitio.
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// ** - 2 -
// Agrega un evento de escucha al elemento de la lista cuando se agrega la clase "checked"
// Este código utiliza el evento DOMSubtreeModified para detectar cambios en la estructura del DOM y luego mueve los elementos con la clase "checked" al final de la lista.
// var list = document.querySelector('ul');
// list.addEventListener('DOMSubtreeModified', function() {
//   var checkedElements = list.querySelectorAll('li.checked');
//   checkedElements.forEach(function(element) {
//     var parent = element.parentNode;
//     parent.appendChild(element);
//   });
// }, false);

// ** - 3 -
// Agrega un evento de escucha al elemento de la lista cuando se hace clic en él y se agrega la clase "checked" y se mueve al final de la lista
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    // Mueve el elemento a la posición deseada
    if (ev.target.classList.contains('checked')) {
      var parent = ev.target.parentNode;
      parent.appendChild(ev.target);
    }
  }
}, false);

// ** - 1 -
// Create a new list item when clicking on the "Add" button
// Crea un nuevo elemento de lista al hacer clic en el botón "Agregar Add ", pero NO se coloca al final de la lista
//  function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("taskInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something! - Debes escribir algo!");
//   } else {
//     document.getElementById("taskList").appendChild(li);
//   }
//   document.getElementById("taskInput").value = "";

//   var span = document.createElement("span");
//   // var txt = document.createTextNode("\u00D7");
//   var txt = document.createTextNode("\u26D4");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// } 


// ** - 2 -
// Create a new list item when clicking on the "Add" button
// Crea un nuevo elemento de lista al hacer clic en el botón "Agregar Add solo que lo hacemos con el icono de basura <i class="fa-solid fa-trash"></i> en lugar del caracter \u26D4, igualmente lo crea al final de la lista"
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("taskInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something! - Debes escribir algo!");
//   } else {
//     document.getElementById("taskList").appendChild(li);
//   }
//   document.getElementById("taskInput").value = "";

//   var span = document.createElement("span");
//   var icon = document.createElement("i");
//   icon.className = "fa-solid fa-trash";
//   span.className = "close";
//   span.appendChild(icon);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }


// ** - 3 -
// Create a new list item when clicking on the "Add" button
// Crea un nuevo elemento de lista al hacer clic en el botón "Agregar Add ", pero se coloca al inicio de la lista
// Para ubicar el nuevo elemento al principio de la lista en lugar de al final, puedes utilizar el método prepend en lugar de appendChild.
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("taskInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something! - Debes escribir algo!");
//   } else {
//     var taskList = document.getElementById("taskList");
//     taskList.insertBefore(li, taskList.firstChild);
//   }
//   document.getElementById("taskInput").value = "";

//   var span = document.createElement("span");
//   var icon = document.createElement("i");
//   icon.className = "fa-solid fa-trash";
//   span.className = "close";
//   span.appendChild(icon);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
// En este código anterior, he reemplazado la línea document.getElementById("taskList").appendChild(li); con taskList.insertBefore(li, taskList.firstChild);. Esto insertará el nuevo elemento antes del primer hijo de la lista, lo que lo ubicará al principio de la lista.


// ** - 4 -
// ** Vamos a reemplazar el alert tradicional por un mensaje más moderno y estilizado, utilizaremos una biblioteca de JavaScript como SweetAlert2.
// ** Demos modificar la funcion newElemnt, para introducir, para usar SweetAlert2 en lugar del alert.
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    // Usar SweetAlert2 en lugar de alert
    Swal.fire({
      title: '¡Error!',
      text: 'Debes escribir algo!',
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });
  } else {
    var taskList = document.getElementById("taskList");
    taskList.insertBefore(li, taskList.firstChild);
  }
  
  document.getElementById("taskInput").value = "";

  var span = document.createElement("span");
  var icon = document.createElement("i");
  icon.className = "fa-solid fa-trash";
  span.className = "close";
  span.appendChild(icon);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

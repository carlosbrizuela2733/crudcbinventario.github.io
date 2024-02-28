// Inicialización de Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDkEkk4Bhqu9BygjcUXWA2ohl9b5yvSXAQ",
  authDomain: "inventario-9f7b2.firebaseapp.com",
  projectId: "inventario-9f7b2",
});
// Escuchar el evento 'DOMContentLoaded'
document.addEventListener("DOMContentLoaded", function () {
  var db = firebase.firestore();
  var botonAgrega = document.getElementById("agrega");
  var botonActualiza = document.getElementById("actualiza");
  var botonElimina = document.getElementById("elimina");

  // Función para mostrar la lista de espera en la interfaz de usuario
  //function mostrarListaEspera() {
  // Limpiar la lista de espera antes de actualizarla
  //listaEspera.innerHTML = "";

  // Obtener los turnos en espera de Firestore y mostrarlos en la lista
  //db.collection("turnos")
  // .where("estado", "==", "en_espera")
  // .onSnapshot(function (snapshot) {
  //   snapshot.forEach(function (doc) {
  //     var turno = doc.data();
  //     var turnoElemento = document.createElement("li");
  //     turnoElemento.textContent = turno.nombre;
  //     listaEspera.appendChild(turnoElemento);
  //   });
  //   // Habilitar el botón "Atender siguiente" si hay al menos un turno en espera
  //   botonAtender.disabled = snapshot.empty;
  // });

  // Escuchar el evento de envío del formulario
  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    var codbarra = document.getElementById("codbarra").value; // Obtener el nombre ingresado
    var articulo = document.getElementById("articulo").value; // Obtener el nombre ingresado
    var cantidad = document.getElementById("cantidad").value; // Obtener el nombre ingresado
    var precio = document.getElementById("precio").value; // Obtener el nombre ingresado

    // Agregar un nuevo registro
    db.collection("articulos")
      .add({
        C_codbarra: codbarra,
        C_articulo: articulo,
        C_cantidad: cantidad,
        C_precio: precio,
        C_fecha: new Date().toISOString(), // Usar la fecha y hora actual
      })
      .then(function () {
        mostrarListaEspera(); // Mostrar la lista de espera actualizada
        document.getElementById("nombre").value = ""; // Limpiar el campo de nombre
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  });
});
//{
// Función para atender al siguiente cliente
//  botonAtender.addEventListener("click", function () {
// Obtener el primer turno en espera de Firestore
//    db.collection("turnos")
//     .where("estado", "==", "en_espera")
//      .limit(1)
//      .get()
//      .then(function (querySnapshot) {
//       querySnapshot.forEach(function (doc) {
//          // Eliminar el turno de la colección
//          db.collection("turnos").doc(doc.id).delete();
//          mostrarListaEspera(); // Actualizar la lista de espera después de eliminar el turno
//        });
//      });
//  });

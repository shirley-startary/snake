var tamañoSnake=1;
var ubicacion=[tamañoSnake-1];
var botonCrearTabla=document.getElementById("botonCrearTabla");
var lienzo=document.getElementById("lienzo");
botonCrearTabla.addEventListener("click",crearTablaDinamica);

function crearTablaDinamica(){
  var fila=prompt("ingrese la cantidad de filas");
  var columna=prompt("ingrese la cantidad de columnas");
  var tabla=document.createElement("table");
  for (var i=1;i<=fila;i++){
    var crearFila=document.createElement("tr");
    for(var j=1;j<=columna;j++){
      var crearColumna=document.createElement("td");
      crearColumna.id=i+"-"+j;
      crearColumna.innerText=0;
      crearColumna.style.background="yellow";
      console.log(crearColumna);
      crearFila.appendChild(crearColumna);
      console.log(crearFila);
    }
    tabla.appendChild(crearFila);
  }
  lienzo.appendChild(tabla);
  console.log(tabla);

}

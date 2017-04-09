var tamañoSnake=1;
var ubicacion=[tamañoSnake-1];
ubicacion[0]="1-1";
console.log(ubicacion);
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
      //console.log(crearColumna);
      crearFila.appendChild(crearColumna);
      //console.log(crearFila);
    }

    tabla.appendChild(crearFila);
  }
  tabla.style.cellspacing=0;
  tabla.style.cellpadding=0;
  lienzo.appendChild(tabla);
  console.log(tabla);
  ubicarSnike()

}

//en esta funcion ubicamos la víbora en su primer posicion
function ubicarSnike(){
  var iniciasnake=document.getElementById(ubicacion[0]);
  iniciasnake.style.background="brown";
  iniciasnake.innerText=1;

}

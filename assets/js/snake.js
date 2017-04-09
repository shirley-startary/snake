var fila=parseInt(prompt("ingrese la cantidad de filas"));
var columna=parseInt(prompt("ingrese la cantidad de columnas"));
var tamanoSnake=1;
var ubicacion=[tamanoSnake-1];
ubicacion[0]="2-1";
console.log(ubicacion);
var botonCrearTabla=document.getElementById("botonCrearTabla");
var lienzo=document.getElementById("lienzo");
botonCrearTabla.addEventListener("click",function(){crearTablaDinamica(fila,columna)});

function crearTablaDinamica(){
  var tabla=document.createElement("table");
  for (var i=1;i<=fila;i++){
    var crearFila=document.createElement("tr");
    for(var j=1;j<=columna;j++){
      var crearColumna=document.createElement("td");
      crearColumna.style.width="10px";
      crearColumna.style.height="10px";
      crearColumna.id=i+"-"+j;
      //crearColumna.innerText=0;
      crearColumna.style.background="yellow";
      //console.log(crearColumna);
      crearFila.appendChild(crearColumna);

      //console.log(crearFila);
    }
    tabla.appendChild(crearFila);
  }
  tabla.cellspacing="0";
  tabla.cellpadding="0";
  lienzo.appendChild(tabla);
  console.log(tabla);
  ubicarSnike()
  window.addEventListener("keydown",moverVibora);
}

//en esta funcion ubicamos la víbora en su primer posicion
function ubicarSnike(){
  var iniciasnake=document.getElementById(ubicacion[tamanoSnake-1]);
  iniciasnake.style.background="brown";
  //iniciasnake.innerText=1;

}

function desplazaVibora(cordenada){

  var cola=document.getElementById(ubicacion[0]);
  //cola.innerText=0;
  cola.style.background="yellow";
  ubicacion[0]=cordenada;
  ubicarSnike();
}


function moverVibora(event){
  var leerCabeza=ubicacion[tamanoSnake-1]
  var cordenadas = leerCabeza.split("-");
  console.log(cordenadas);
    switch(event.key){
        case "ArrowUp":
            cordenadas[0]--;
            //console.log(cordenadas);
            var nuevaCordenada = cordenadas.join("-");
            //console.log(nuevaCordenada);

            if(cordenadas[0] == 0){
              terminarJuego();
            }else {
              desplazaVibora(nuevaCordenada);
            }

            break;
        case "ArrowDown":
            cordenadas[0]++;
            //console.log(cordenadas);
            var nuevaCordenada = cordenadas.join("-");
            //console.log(nuevaCordenada);

            if(cordenadas[0] == 1+fila){
              terminarJuego();
            }else {
              desplazaVibora(nuevaCordenada);
            }
            break;
        case "ArrowLeft":
            cordenadas[1]--;
            //console.log(cordenadas);
            var nuevaCordenada = cordenadas.join("-");
            //console.log(nuevaCordenada);

            if(cordenadas[1] == 0){
              terminarJuego();
            }else{
              desplazaVibora(nuevaCordenada);
            }
            break;
        case "ArrowRight":
            cordenadas[1]++;
            //console.log(cordenadas);
            var nuevaCordenada = cordenadas.join("-");
            //console.log(nuevaCordenada);
            console.log(1+columna);
            console.log(columna+1);


            if(cordenadas[1] == 1+columna){
              terminarJuego();
            }else {
              desplazaVibora(nuevaCordenada);
            }
            break;


    }
}

function terminarJuego(){
    alert("***GAME OVER***");
    window.removeEventListener("keydown",moverVibora);
}

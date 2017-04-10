//Pide los valores del tamaño del recuadro
var fila=parseInt(prompt("ingrese la cantidad de filas"));
var columna=parseInt(prompt("ingrese la cantidad de columnas"));

//Inicia los valores del juego
var tamanoSnake=1;
var moverA="0,1";
var ubicacion = new Array(tamanoSnake);
var manzana = "";
ubicacion[tamanoSnake-1]="1-1";
var tiempoEspera = 700;

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
      crearColumna.style.spacing="0";
      crearColumna.style.padding="0";
      crearColumna.style.border="0";
      crearColumna.style.margin="0";
      crearColumna.id=i+"-"+j;
      //crearColumna.innerText=0;
      crearColumna.style.background="yellow";
      //console.log(crearColumna);
      crearFila.appendChild(crearColumna);

      //console.log(crearFila);
    }
    tabla.appendChild(crearFila);
  }
  tabla.style.spacing="0";
  tabla.style.padding="0";
  tabla.style.margin="0";
  tabla.style.border="0";
  lienzo.appendChild(tabla);
  console.log(tabla);
  ubicarSnike();
  dibujarManzana();

  //dibujaPrimeraSnake();
  window.addEventListener("keydown",moverVibora);
  window.setTimeout("autoMoverSnake()",tiempoEspera);
}

//en esta funcion ubicamos la víbora en su primer posicion
function ubicarSnike(){
  validaBordes();
  validaManzana();
  var iniciasnake=document.getElementById(ubicacion[tamanoSnake-1]);
  iniciasnake.style.background="brown";

  //iniciasnake.innerText=1;
}


function dibujarManzana(){
  //dibuja la manzana aleatoriamente dentro de la tabla
  manzana = (parseInt(Math.ramdom()*columna)+1)+"-"+(parseInt(Math.ramdom()*fila)+1); //se crea aleatoriamente la cordenada de la manzana
  var iniciaManzana = document.getElementById("manzana") //es la cordenada en donde se ubicara la manzana
  iniciaManzana.style.background="red";
}

function validaManzana(){
  /*con esta funcion se pretende hacer crece la vibora,
  por el momento solo nos despleca un alert, que nos dice que la cabeza de la
  vibora esta encima de la manzana*/
  if(ubicacion[tamanoSnake-1]===manzana){
    alert("se comio la manzana");
  }
}

function desplazaVibora(cordenada){

  var cola=document.getElementById(ubicacion[tamanoSnake-1]);
  //cola.innerText=0;
  cola.style.background="yellow";
  ubicacion[tamanoSnake-1]=cordenada;
  ubicarSnike();
}

function moverVibora(event){
  var leerCabeza=ubicacion[tamanoSnake-1]
  var cordenadas = leerCabeza.split("-");
  //console.log(cordenadas);
  switch(event.key){
      case "ArrowUp":
          moverA="-1,0";
          cordenadas[0]--;
          //console.log(cordenadas);
          var nuevaCordenada = cordenadas.join("-");
          //console.log(nuevaCordenada);

          if(cordenadas[0] != 0){
            desplazaVibora(nuevaCordenada);
          }


          break;
      case "ArrowDown":
          moverA="1,0";
          cordenadas[0]++;
          //console.log(cordenadas);
          var nuevaCordenada = cordenadas.join("-");
          //console.log(nuevaCordenada);

          if(cordenadas[0] != 1+fila){
            desplazaVibora(nuevaCordenada);
          }
          break;

      case "ArrowLeft":
          moverA="0,-1";
          cordenadas[1]--;
          //console.log(cordenadas);
          var nuevaCordenada = cordenadas.join("-");
          //console.log(nuevaCordenada);

          if(cordenadas[1] !== 0){
            desplazaVibora(nuevaCordenada);
          }
          break;

      case "ArrowRight":
          moverA="0,1";
          cordenadas[1]++;
          //console.log(cordenadas);
          var nuevaCordenada = cordenadas.join("-");
          //console.log(nuevaCordenada);

          if(cordenadas[1] != 1+columna){
            desplazaVibora(nuevaCordenada);

          break;
    }
  }
}


function terminarJuego(){
    alert("**GAME OVER**");
    window.removeEventListener("keydown",moverVibora);
    window.clearTimeout();
}

function autoMoverSnake(){
  var desplazamiento = moverA.split(",");
  var ubicacionCabeza = ubicacion[tamanoSnake-1].split("-");

  var nuevaCordenada = (parseInt(ubicacionCabeza[0]) + parseInt(desplazamiento[0])) + "-" + (parseInt(ubicacionCabeza[1]) + parseInt(desplazamiento[1]));

  renuevaUbicaciones(nuevaCordenada);
  ubicarSnike();
  window.setTimeout("autoMoverSnake()",tiempoEspera);
}


function renuevaUbicaciones(nuevaCordenada){
  //
  if(tamanoSnake!=1){
    for(i==0;i<=tamanoSnake-1;i++){
      ubicacion[i] = ubicacion[i+1];
    }
  }
  desplazaVibora(nuevaCordenada);
}


function validaBordes(){
  //valida los que no se salga la vibora de la tabla, en caso de sobre pasar
  //llama a la funcion terminarJuego() el cual desplega un mensaje de Game over
  var leerCabeza=ubicacion[tamanoSnake-1]
  var cordenadas = leerCabeza.split("-");
  //console.log(cordenadas);

      switch(moverA){
        case "-1,0":
            if(parseInt(cordenadas[0]) <= 0){
              terminarJuego();
            }
            break;

        case "1,0":
            if(parseInt(cordenadas[0]) >= 1+fila){
              terminarJuego();
            }
            break;

        case "0,-1":
            if(parseInt(cordenadas[1]) <= 0){
              terminarJuego();
            }
            break;

        case "0,1":
            if(parseInt(cordenadas[1]) >= 1+columna){
              terminarJuego();
            }
            break;
    }
}

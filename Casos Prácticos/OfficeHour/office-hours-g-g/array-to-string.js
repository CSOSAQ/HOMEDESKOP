/*
Crear una funcion que reciba como parametro un array y retorne una cadena
-> retorne quack! sneeze! boom!
*/
var arr = ["quack","sneeze","boom"];
// crea una función que permita ingresar un array
function getString(array){
  //Declara una variable que convierta el array a una cadena
  // colocale como espacio a la cadena un '! '
  // -> quack! sneeze! boom
  var str = array.join('! ')+ '!' // Colócale a boom una !
// retorna str como respuesta
return str;
}
getString(["quack","sneeze","boom"]);

let numeroAlunos = 5;

let listaAlunos = ["Marina", "Frederico", "Victor", "Ismael", "Pablo"];


let contador = 0;

while (contador < listaAlunos.length) {

    if (contador == 0) {
        console.log(contador + " : ZERO");
    } else if (contador % 2 == 1) {
        console.log(contador + " : IMPAR")
    } else {
        console.log(contador + " : PAR")
    }

    contador++
}

// for (let contador = 0; contador < listaAlunos.length; contador++) {
    //console.log(contador)

//    if (contador == 0) {
//        console.log(contador + " : ZERO");
 //   } else if (contador % 2 == 1) {
 //       console.log(contador + " : IMPAR")
 //   } else {
 //       console.log(contador + " : PAR")
 //   }
//}
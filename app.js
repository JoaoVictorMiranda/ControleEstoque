import * as Function from './functions/functions.js';

//Limpar o terminal para ficar bonito o primeiro menu.
Function.Deletar();
//FRUFRU pra fingir que o programa esta fazendo calculos para abrir
await Function.sleep(1000);

Function.Menu();


let n = Function.PerguntarMensagem("Opção: ", "Number")

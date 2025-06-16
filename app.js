import * as Function from './functions/functions.js';

//Limpar o terminal para ficar bonito o primeiro menu.
Function.Deletar();
//FRUFRU pra fingir que o programa esta fazendo calculos para abrir
await Function.sleep(1000);
let verificar = true;


while (verificar) {
    Function.Menu();
    let Resp = Function.PerguntarMensagem("Qual deseja? ", "Number");
    switch (Resp) {
        case 1:
            Function.ListarEstoque();
            break;
        case 2:
            // Adicionar produto
            break;
        case 3:
            //Remover Produto
            break;
        case 4:
            //Deletar produto
            break;
        case 0:
            Function.Deletar();
            Function.sleep(500);
            Function.Finalizar();
            verificar = false;
        //SAIR
    }
}


/* ✅ Cadastrar produto
✅ Listar produtos
✅ Adicionar ao estoque
✅ Retirar do estoque
✅ Apagar produto
✅ Sair do program */


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
                //Cadastrar produto
                Function.CadastrarProduto();
                break;
            case 2:
                //Listar Produto
                Function.ListarEstoque();
                break;
            case 3:
                //Adicionar produto ao estoque
                break;
            case 4:
                //Remover produto do estoque
                break;
            case 5:
                //Deletar produto do estoque
                break;
            case 0:
                Function.Deletar();
                Function.sleep(500);
                Function.Finalizar();
                verificar = false;
            //SAIR
        }
    }
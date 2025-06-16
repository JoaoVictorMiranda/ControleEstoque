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
            console.log(`Estoque geral ou resumido? 
                0. geral
                1. Resumido`);
            let decisao = Function.PerguntarMensagem("QUal gostaria?  ", "Number")

            if (decisao == 0) {
                Function.ListarEstoqueGeral();
            } else {
                Function.ListarEstoque();
            }

            break;
        case 3:
            //Adicionar produto ao estoque
            Function.AdicionarProduto();
            break;
        case 4:
            //Remover produto do estoque
            Function.RemoverProduto();
            break;
        case 5:
            //Deletar produto do estoque
            Function.DeletarProduto();
            break;
        case 0:
            Function.Deletar();
            await Function.sleep(500);
            Function.Finalizar();
            verificar = false;
        //SAIR
    }
}
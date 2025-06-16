import prompt from 'prompt-sync';
const input = prompt();

export function Menu() {
    console.log(`
            ### Estoque CEBB São Paulo (Centro de Estudos Budistas Bodisatva) ###
            1. Cadastrar Produto
            2. Listar Todo o estoque
            3. Adicionar produto ao estoque
            4. Remover produto do estoque
            5. Deletar produto do estoque
            0. Sair
        `)
}





//Função de pegir algo ao usuario Fiz com verificação de tipo pois ja tive problemas anteriores com NaN que me deram dor de cabeça.
export function PerguntarMensagem(msg, Tipo) {
    if (Tipo == "Number") {
        return Number(input(msg))
    } else {
        return input(msg);
    }
}

//FRUFRU pra apagar o terminal e deixar bonitinho pro proximo menu 
export function Deletar() {
    return process.stdout.write("\x1B[2J\x1B[0f");
}

export function Finalizar() {
    console.log(`Muito obrigado por participar volte sempre`);
}

//Sleep basico pra fazer FRUFRU de esperar até abrir.
export async function sleep(ms) {
    return new Promise((ok) => {
        setTimeout(ok, ms);
    });
}



export function ListarEstoque() {
    for (let item of estoque) {
        console.log(item.nome, item.Qtd_OBJETO);
    }
}




let estoque = [
    {
        nome: "OBJETO",
        Qtd_OBJETO: 10,
        Descricao: "Descrição do objeto"
    },
    {
        nome: "OBJETO2",
        Qtd_OBJETO: 10,
        Descricao: "Descrição do objeto"
    },
    {
        nome: "OBJETO3",
        Qtd_OBJETO: 10,
        Descricao: "Descrição do objeto"
    },
    {
        nome: "OBJETO4",
        Qtd_OBJETO: 10,
        Descricao: "Descrição do objeto"
    },
    {
        nome: "OBJETO5",
        Qtd_OBJETO: 10,
        Descricao: "Descrição do objeto"
    },
]
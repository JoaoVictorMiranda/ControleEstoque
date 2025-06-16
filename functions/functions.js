import prompt from 'prompt-sync';
const input = prompt();

export function Menu() {
    console.log(`
            ### A Oficina Submersa de Elias Grimwald – Sussurros do Relicário de Vapor ###
                    ${GerarFrase()}
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
    console.log(`Muito obrigado por usar ficaremos muito gratos por voce ter vindo 
        Lembre-se Não conte a ninguem onde ficamos 
        ${GerarFrase()}`);
}

//Sleep basico pra fazer FRUFRU de esperar até abrir.
export async function sleep(ms) {
    return new Promise((ok) => {
        setTimeout(ok, ms);
    });
}



export function CadastrarProduto() {


}



//Itera por todos os objetos E retorna seu nome e a quantidade
export function ListarEstoque() {
    for (let item of estoque) {
        console.log(item.Nome, item.QtProduto);
    }
}



//Objetos para teste
let estoque = [
    {
        Nome: "Coração de Éter Sussurrante",
        Descricao: "Unidade energética ancestral usada para dar 'vida' ao núcleo de autômatos sensitivos.",
        Finalidade: "Animação de Núcleo",
        Material: "Cristal de Vapor",
        Origem: "Câmara Silenciosa de Grimwald",
        Fabricacao: 1842,
        Categoria: "Raro",
        EstadoDeConservacao: "Estável",
        QtProduto: 2
    }
];



export function GerarFrase() {
    let math = Math.floor(Math.random() * 10);
    return Frases[math]
}

let Frases = [
    "O Berço das Engrenagens",
    "A Oficina Submersa",
    "A Forja Silenciosa",
    "Sussurros de Bronze",
    "O Relicário do Vapor",
    "Oficina das Almas Ocultas",
    "O Útero do Aço",
    "O Coração das Máquinas Cansadas",
    "A Catedral das Molas Partidas",
    "O Último Suspiro do Pistão"
];



/* 
id
Nome
Finalidade na máquina
Material 
origem
Ano de fabricação (ou reconstrução)
Categoria
Estado de conservação (novo, restaurado, obsoleto, amaldiçoado?)
Quantidade disponível
*/
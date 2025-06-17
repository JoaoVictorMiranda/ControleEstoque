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
//Itera por todos os objetos E retorna seu nome e a quantidade
export function ListarEstoque() {
    console.log("Catálogo:\n");
    let i = 0;
    for (let item of estoque) {
        console.log(`[${i}] 🔹 ${item.Nome} — Quantidade: ${item.QtProduto}`);
        i++;
    }
    PerguntarMensagem("Aperte entar para continuar...", "Texto");

}
export function ListarEstoqueGeral() {
    for (let item of estoque) {
        console.log(item)
    }
    PerguntarMensagem("Aperte entar para continuar...", "Texto");
}




//Cadastra o produto diretamente com o PUSH ja com as perguntas diretamente direcionadas
export function CadastrarProduto() {
    Deletar();
    console.log(`Iremos cadastrar seu produto esta pronto? `);
    PerguntarMensagem("Enter para continuar...", "Texto");

    estoque.push({
        Nome: PerguntarMensagem("QUal o nome do Produto? ", "Texto"),
        Descricao: PerguntarMensagem("Qual a descrição dele? ", "Texto"),
        preco: PerguntarMensagem("Por quanto ira vender? ", "Number"),
        Finalidade: PerguntarMensagem("Para qual finalidade ele devera ser usado? ", "Texto"),
        Material: PerguntarMensagem("Quais materias incriveis ele possui? ", "Texto"),
        Origem: PerguntarMensagem("QUal a origem dele? ", "Texto"),
        Fabricacao: PerguntarMensagem("Qual ano de fabricação? ", "Number"),
        Categoria: PerguntarMensagem("Onde ele se encaixa nas categorias? ", "Texto"),
        EstadoDeConservacao: PerguntarMensagem("Em qual estado ele se encontra? ", "Texto"),
        QtProduto: PerguntarMensagem("Quantidade por favor: ", "Number"),
    })
    let n = 0
    for (let item of estoque) {
        n++
    }
    console.log(`Veja se esta certo.`);
    console.log(estoque[n - 1])
    //Possivel Loop para adicionar mais de um item de uma vez
    console.log(`Gostaria de cadastrar mais um? 
        1. Sim
        0. Não
        `)
    let Novamente = PerguntarMensagem(":", "Number");
    if (Novamente == 1) {
        CadastrarProduto();
    }
};





export function AdicionarProduto() {
    Deletar();
    ListarEstoque();
    let adicionar = PerguntarMensagem("Qual Produto gostaria de adicionar mais? ", "Number");
    let QTD = PerguntarMensagem("Quanto gostaria de adicionar:  ", "Number")
    estoque[adicionar].QtProduto += QTD;
    ListarEstoque();
    PerguntarMensagem("Pressione enter para continuar...");
}


export function RemoverProduto() {
    Deletar();
    ListarEstoque();
    let remover = PerguntarMensagem("Qual produto gostaria de remover? ", "Number");
    let QTD = PerguntarMensagem("QUal a quantidade a ser removida: ", "Number");
    estoque[remover].QtProduto -= QTD;
    ListarEstoque();
    PerguntarMensagem("Pressione enter para continuar...");
}


export function DeletarProduto() {
    Deletar();
    ListarEstoque();
    let delet = PerguntarMensagem("Qual gostaria de deletar?", "NUmber");
    if (delet >= 0 && delet < estoque.length) {
        estoque.splice(delet, 1);
        console.log("Item removido com sucesso.");
    } else {
        console.log("Índice inválido. Nenhum item foi removido.");
    }
    ListarEstoque();
}




//Objetos para teste
let estoque = [
    {
        Nome: "Coração de Éter Sussurrante",
        Descricao: "Unidade energética ancestral usada para dar 'vida' ao núcleo de autômatos sensitivos.",
        preco: 3500.55,
        Finalidade: "Animação de Núcleo",
        Material: "Cristal de Vapor",
        Origem: "Câmara Silenciosa de Grimwald",
        Fabricacao: 1842,
        Categoria: "Raro",
        EstadoDeConservacao: "Estável",
        QtProduto: 2
    }, {
        Nome: "Lente de Vislumbre Temporal",
        Descricao: "Permite ao autômato prever trajetórias mecânicas futuras com precisão absurda.",
        preco: 1280.00,
        Finalidade: "Antecipação de Movimento",
        Material: "Vidro Élfico Refratado",
        Origem: "Laboratório Subterrâneo de Luthen Kaal",
        Fabricacao: 1897,
        Categoria: "Único",
        EstadoDeConservacao: "Frágil",
        QtProduto: 1
    },
    {
        Nome: "Engrenagem de Sangue Negro",
        Descricao: "Peça de ligação central que retém memória mecânica de gerações de uso.",
        preco: 212.75,
        Finalidade: "Memória Mecânica",
        Material: "Ferro Vivo",
        Origem: "Minas Abissais de Ul'Dakar",
        Fabricacao: 1784,
        Categoria: "Fundamental",
        EstadoDeConservacao: "Oxidada",
        QtProduto: 6
    },
    {
        Nome: "Chave Cantante de Kirell",
        Descricao: "Dispositivo de ativação que emite uma frequência harmônica específica.",
        preco: 987.90,
        Finalidade: "Ativação de Mecanismos",
        Material: "Latão Sonoro",
        Origem: "Templo Sonoro de Kirell",
        Fabricacao: 1811,
        Categoria: "Funcional",
        EstadoDeConservacao: "Perfeita",
        QtProduto: 3
    },
    {
        Nome: "Válvula de Névoa Densa",
        Descricao: "Permite o controle fino de fluxo de vapor em ambientes úmidos e instáveis.",
        preco: 425.00,
        Finalidade: "Regulação de Pressão",
        Material: "Aço Alquímico",
        Origem: "Estaleiro Oculto de Nebriss",
        Fabricacao: 1860,
        Categoria: "Comum",
        EstadoDeConservacao: "Boa",
        QtProduto: 10
    },
    {
        Nome: "Fio de Ouro Arcano",
        Descricao: "Conduz não apenas energia, mas intenção — usado em interfaces sensitivas.",
        preco: 1700.00,
        Finalidade: "Transmissão de Intenção",
        Material: "Ouro Trançado com Filigrana Mágica",
        Origem: "Ateliê da Rosa Vazia",
        Fabricacao: 1901,
        Categoria: "Raro",
        EstadoDeConservacao: "Intacto",
        QtProduto: 4
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

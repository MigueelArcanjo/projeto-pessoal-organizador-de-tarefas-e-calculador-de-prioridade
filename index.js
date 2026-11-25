
const prompt = require("prompt-sync")()

const meses = [
    0,   // janeiro //
    31,  // fevereiro //
    59,  // março //
    90,  // abril //
    120, // maio //
    151, // junho //
    181, // julho //
    212, // agosto //
    243, // setembro //
    273, // outubro //
    304, // novembro //
    334  // dezembro //
]

const tarefas = [
]

const calcularDiasRestantes = (hojeEmDias, entregaEmDias) => entregaEmDias - hojeEmDias

let continuar = "s"

do {
const materia = prompt("Digite a matéria da tarefa: ")
const tarefa = prompt("Digite o assunto da tarefa: ")
let dificuldade = ""

const diaHoje = Number(prompt("Digite o dia de hoje: "))
const mesHoje = Number(prompt("Digite o mês de hoje (em número): "))
const nomeMesHoje = prompt("Digite o nome do mês de hoje: ")

const diaEntrega = Number(prompt("Digite o dia de entrega: "))
const mesEntrega = Number(prompt("Digite o mês de entrega (em número): "))
const nomeMesEntrega = prompt("Digite o nome do mês de entrega: ")

const hojeEmDias = meses[mesHoje - 1] + diaHoje
const entregaEmDias = meses[mesEntrega - 1] + diaEntrega
const diasRestantes = calcularDiasRestantes(hojeEmDias, entregaEmDias)

const prioridade = calcularPrioridade(diasRestantes)

switch (materia) {

    case "arquitetura e manutencao de computadores":
    case "biologia":
    case "fisica":
    case "logica de programacao":
    case "matematica":
    case "quimica":
        dificuldade = "Difícil"
    break

    case "filosofia":
    case "geografia":
    case "historia":
    case "html/css":
    case "portugues":
    case "redacao":
        dificuldade = "Média"
    break

    case "arte":
    case "educacao fisica":
    case "espanhol":
    case "ingles":
    case "planejamento de carreira":
    case "sociologia":
        dificuldade = "Fácil"
    break

    default:
        dificuldade = "Matéria não identificada, tente colocar o nome da matéria sem maiúsculos e sem acentuação."
}

const novaTarefa = {
    materia: materia,
    tarefa: tarefa,
    dificuldade: dificuldade,
    diaEntrega: diaEntrega,
    mesEntrega: mesEntrega,
    nomeMesEntrega: nomeMesEntrega,
    diasRestantes: diasRestantes,
    prioridade: prioridade
}
tarefas.push(novaTarefa)

continuar = prompt("Deseja adicionar outra tarefa? (s/n): ")

} while (continuar === "s") 

for (let i = 0; i < tarefas.length; i++) {
    console.log("TAREFA " + (i + 1))
    console.log("Matéria: " + tarefas[i].materia)
    console.log("Assunto da tarefa: " + tarefas[i].tarefa)
    console.log("Dificuldade: " + tarefas[i].dificuldade)
    console.log("prioridade: " + tarefas[i].prioridade)
    console.log("Entrega: " + tarefas[i].diaEntrega + " de " + tarefas[i].nomeMesEntrega)
    console.log("Dias restantes para entrega: " + tarefas[i].diasRestantes)
    console.log(" ")
}
function estatisticas() {

let tarefasAtrasadas = 0

for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].diasRestantes < 0) {
        tarefasAtrasadas++
    }
}

console.log("Número de tarefas atrasadas: " + tarefasAtrasadas)

let tarefasUrgentes = 0

for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].prioridade === "Urgente") {
        tarefasUrgentes++
    }
}

console.log("Número de tarefas urgentes: " + tarefasUrgentes)

let tarefasAltas = 0

for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].prioridade === "Alta") {
        tarefasAltas++
    }
}

console.log("Número de tarefas de alta prioridade: " + tarefasAltas)

let tarefasMedias = 0

for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].prioridade === "Média") {
        tarefasMedias++
    }
}

console.log("Número de tarefas de média prioridade: " + tarefasMedias)

let tarefasBaixas = 0

for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].prioridade === "Baixa") {
        tarefasBaixas++
    }
}

console.log("Número de tarefas de baixa prioridade: " + tarefasBaixas)
}

estatisticas()

function calcularPrioridade(diasRestantes) {

let prioridade = ""

    if (diasRestantes < 0) {
    prioridade = "Você perdeu o prazo de entrega."
} else if (diasRestantes <= 1) {
    prioridade = "Urgente"
} else if (diasRestantes <= 3) {
    prioridade = "Alta"
} else if (diasRestantes <= 7) {
    prioridade = "Média"
} else {
    prioridade = "Baixa"
}

return prioridade 
}

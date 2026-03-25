import { calcularIMC, definirClassificacao } from './opc.js'

for (let aluno = 1; aluno <= 20; aluno++) {
    const altura = parseFloat(document.querySelector(`.altura_aluno${aluno}`).textContent)
    const peso = parseFloat(document.querySelector(`.peso_aluno${aluno}`).textContent)

    const imc = calcularIMC(peso, altura)

    document.querySelector(`.imc_aluno${aluno}`).textContent = imc.toFixed(2)
    definirClassificacao(imc, aluno)
}
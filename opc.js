export function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

export function definirClassificacao(imc, numero) {
    const classificacao = document.querySelector(`.classificacao_aluno${numero}`)

    if (imc < 18.5) {
        classificacao.textContent = 'abaixo do peso'

    } else if (imc < 25) {
        classificacao.textContent = 'peso normal'

    } else if (imc < 30) {
        classificacao.textContent = 'sobrepeso'

    } else if (imc < 40) {
        classificacao.textContent = 'obeso'

    } else {
        classificacao.textContent = 'obesidade grave'
    }
}
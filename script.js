import { calcularIMC, definirClassificacao } from './opc.js'


let trs = document.querySelectorAll('tbody tr')




let input = document.querySelector('.entrada')

for (let aluno = 1; aluno <= 20; aluno++) {
    const altura = parseFloat(document.querySelector(`.altura_aluno${aluno}`).textContent)
    const peso = parseFloat(document.querySelector(`.peso_aluno${aluno}`).textContent)

    const imc = calcularIMC(peso, altura)

    document.querySelector(`.imc_aluno${aluno}`).textContent = imc.toFixed(2)
    definirClassificacao(imc, aluno)
}




//mudar a cor da tabelaaa
trs.forEach(tr => {
    let status = tr.children[5].textContent.toLowerCase().trim()

    if (status === 'abaixo do peso') {
        tr.style.backgroundColor = '#F4EFEC'
    } else if (status === 'peso normal') {
        tr.style.backgroundColor = 'white'
    } else if (status === 'sobrepeso') {
        tr.style.backgroundColor = ' #cb9c9c'
    } else if (status === 'obeso') {
        tr.style.backgroundColor = '#6f3939'
    } else if (status === 'obesidade grave') {
        tr.style.backgroundColor = '#350a0a'
    }
})

// filtro
input.addEventListener('input', () => {

    trs.forEach(tr => {
        let tds = tr.children

        let textoTabela = tds[5].textContent.toLowerCase()
        let textoInput = input.value.toLowerCase()

        if (!textoTabela.includes(textoInput)) {
            tr.style.display = 'none'
        } else {
            tr.style.display = 'table-row'
        }
    })
})



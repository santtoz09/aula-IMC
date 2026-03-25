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


// filtro na tabela
input.addEventListener('input', ()=>{

    //let texto = entrada.value
    let esconder = true

    trs.forEach(tr => {
        tr.visible = true
        let tds = tr.children
        
                
        if(!tds[5].textContent.includes(input.value)){
            tr.visible = false     
        }
        
        console.log(tr.visible)
        
        if(tr.visible){
            tr.style.display = 'table-row'
        } else {
            tr.style.display = 'none'
        }
        
    })
    console.log('----')

})

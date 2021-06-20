function calcularIdade(dataNascimento) {
    idade = 0
    anoAtual = new Date().getFullYear()
    mesAtual = new Date().getMonth() + 1
    diaAtual = new Date().getUTCDate()

    anoNascimento = Number(dataNascimento.substring(0, 4))
    mesNascimento = Number(dataNascimento.substring(5, 7))
    diaNascimento = Number(dataNascimento.substring(8, 10))

    if (mesAtual > mesNascimento) {
        idade = anoAtual - anoNascimento
    } else if (mesAtual == mesNascimento && diaAtual >= diaNascimento) {
        idade = anoAtual - anoNascimento
    } else {
        idade = anoAtual - (anoNascimento + 1)
    }

    return idade
}

function cadastrarDados() {
    event.preventDefault()
    sessionStorage.setItem('nome', document.getElementById("nome").value)
    sessionStorage.setItem('sobrenome', document.getElementById("sobrenome").value)
    sessionStorage.setItem('idade', calcularIdade(document.getElementById("dataNascimento").value))
    sessionStorage.setItem('municipioResidencia', document.getElementById("municipioResidencia").value)
    sessionStorage.setItem('rendaMensalLiquida', document.getElementById("rendaMensal").value)
    window.location.replace('ofertas.html')
}

function criarOferta(nomeBanco){
    
    tetoValorContratado = Math.min(Math.floor(sessionStorage.getItem('rendaMensalLiquida') * 0.3), sessionStorage.getItem('emprestimoSolicitado'))
    nrParcelas = Math.floor(Math.random() * 17) + 8
    txJuros = ((Math.random() * 1.7) + 1.3).toPrecision(3)
    valorParcela = (tetoValorContratado * (((txJuros/100) * (1+ (txJuros/100))**nrParcelas ) / ((1 + (txJuros/100))**nrParcelas - 1))).toFixed(2)
    valorTotal = (valorParcela * nrParcelas).toFixed(2)
    
    
    let br1 = document.createElement('br')
    let br2 = document.createElement('br')
    let br3 = document.createElement('br')
    let br4 = document.createElement('br')

    let novaOfertaBanco = document.createElement('div')
    novaOfertaBanco.classList.add('oferta')
    novaOfertaBanco.id = 'oferta'+nomeBanco

    let logoBanco = document.createElement('img')
    logoBanco.classList.add('logo_oferta')
    logoBanco.setAttribute('src', 'Repositório\ de\ Imagens/' + nomeBanco + '.png')

    let botaoSubmit = document.createElement('button')
    botaoSubmit.innerHTML = 'Contratar Plano'
    botaoSubmit.classList = 'botaoContratarPlano'
    botaoSubmit.id = 'botaoContratarPlano'+nomeBanco
    botaoSubmit.setAttribute('onclick', 'selecionarOferta('+'"'+nomeBanco+'"'+',"'+tetoValorContratado+'"'+',"'+nrParcelas+'"'+',"'+txJuros+'"'+',"'+valorParcela+'"'+',"'+valorTotal+'"'+')')
    

    const nodeTetoValorContratado = document.createTextNode('Valor Contratado: ' + tetoValorContratado + ' R$')
    const nodeNrParcelas = document.createTextNode('Número de Parcelas: ' + nrParcelas)
    const nodeTxJuros = document.createTextNode('Taxa de Juros: ' + txJuros + '% a.m')
    const nodeValorParcela = document.createTextNode('Valor da Parcela: ' + valorParcela)
    const nodeValorTotal = document.createTextNode('Valor Total: ' + valorTotal)

    document.getElementById('divOfertas').appendChild(novaOfertaBanco)
    document.getElementById('oferta'+nomeBanco).appendChild(logoBanco)
    document.getElementById('oferta'+nomeBanco).appendChild(nodeTetoValorContratado)
    document.getElementById('oferta'+nomeBanco).appendChild(br1)
    document.getElementById('oferta'+nomeBanco).appendChild(nodeNrParcelas)
    document.getElementById('oferta'+nomeBanco).appendChild(br2)
    document.getElementById('oferta'+nomeBanco).appendChild(nodeTxJuros)
    document.getElementById('oferta'+nomeBanco).appendChild(br3)
    document.getElementById('oferta'+nomeBanco).appendChild(nodeValorParcela)
    document.getElementById('oferta'+nomeBanco).appendChild(br4)
    document.getElementById('oferta'+nomeBanco).appendChild(nodeValorTotal)
    document.getElementById('oferta'+nomeBanco).appendChild(botaoSubmit)
}

function listarOfertas() {
    event.preventDefault()
    sessionStorage.setItem('emprestimoSolicitado', document.getElementById("emprestimoSolicitado").value)
    document.querySelectorAll('.oferta').forEach(function (a) { a.remove() })
    criarOferta('Santander')
    criarOferta('Bradesco')
    criarOferta('Viacredi')
    criarOferta('Caixa')
}

function selecionarOferta(nomeBanco, valorContratado, nrParcelas, txJuros, valorParcela, valorTotal){
    sessionStorage.setItem('nomeBancoContratado', nomeBanco)
    sessionStorage.setItem('valorContratado', valorContratado)
    sessionStorage.setItem('nrParcelasContratado', nrParcelas)
    sessionStorage.setItem('txJurosContratado', txJuros)
    sessionStorage.setItem('valorParcelaContratado', valorParcela)
    sessionStorage.setItem('valorTotalContratado', valorTotal)
    console.log(nomeBanco +' || '+ valorContratado +' || '+ nrParcelas +' || '+ txJuros +' || '+ valorParcela +' || '+ valorTotal)
    window.location.replace('finalização.html')
}

function finalizarOferta(){
    let nodeNomeBancoContratado = document.createTextNode('Banco: ' + sessionStorage.getItem('nomeBancoContratado'))
    let nodeValorContratado = document.createTextNode('Valor Contratado: ' + sessionStorage.getItem('valorContratado') + ' R$')
    let nodeNrParcelasContratado = document.createTextNode('Nr Parcelas: ' + sessionStorage.getItem('nrParcelasContratado'))
    let nodeTxJurosContratado = document.createTextNode('Taxa de Juros: ' + sessionStorage.getItem('txJurosContratado') + '%')
    let nodeValorParcelaContratado = document.createTextNode('Valor da Parcela: ' + sessionStorage.getItem('valorParcelaContratado'))
    let nodeValorTotalContratado = document.createTextNode('Valor Total a Ser Pago: ' + sessionStorage.getItem('valorTotalContratado') + ' R$')

    let br1 = document.createElement('br')
    let br2 = document.createElement('br')
    let br3 = document.createElement('br')
    let br4 = document.createElement('br')
    let br5 = document.createElement('br')

    document.getElementById('finalização').appendChild(nodeNomeBancoContratado)
    document.getElementById('finalização').appendChild(br1)
    document.getElementById('finalização').appendChild(nodeValorContratado)
    document.getElementById('finalização').appendChild(br2)
    document.getElementById('finalização').appendChild(nodeNrParcelasContratado)
    document.getElementById('finalização').appendChild(br3)
    document.getElementById('finalização').appendChild(nodeTxJurosContratado)
    document.getElementById('finalização').appendChild(br4)
    document.getElementById('finalização').appendChild(nodeValorParcelaContratado)
    document.getElementById('finalização').appendChild(br5)
    document.getElementById('finalização').appendChild(nodeValorTotalContratado)
}
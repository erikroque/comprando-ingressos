function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    if(qtd > 0){
        testando(tipo, qtd);
    } else {
        alert('Digite uma quantidade maior que zero.');
    }
    
}

/*function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade indisponível para tipo pista.');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso.');
    }
}*/

function testando(nome, qtd){
    qtdEstoque = parseInt(document.getElementById(`qtd-${nome}`).textContent);
    
    if (qtd > qtdEstoque){
        alert(`Quantidade indisponível para o tipo ${nome}.`);
    } else {
        qtdEstoque = qtdEstoque - qtd;
        document.getElementById(`qtd-${nome}`).textContent = qtdEstoque;
    }
}
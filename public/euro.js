

document.addEventListener('DOMContentLoaded', function (e) {
    button = document.getElementById("genBtn");
    button.addEventListener('click', gerachave);

});
    
function gerador(n, min, max) {
    extracao = new Set();

    while (extracao.size < n) {
        novo = Math.floor(Math.random() * (max - min + 1) + min);
        extracao.add(novo);
    }
    return [...extracao].sort((a, b) =>  a - b);
}

function gerachaveJSON() {
    let an = gerador(5, 1, 50);
    let ae = gerador(2, 1, 12);

    chaveJS = {
        numeros: an,
        estrelas: ae,
        geradapor : 'pedromoreira'
    }
    return JSON.stringify(chaveJS);

}

function consomeChaveJSON(chavejson) {
    let chaveJS = JSON.parse(chavejson);
    return chaveJS;
}

function gerachave(e) {

    fetch('http://localhost:3000/euro')
        .then((res => res.json()))
        .then((data) => {
            updatechave(data);
        });
        
}

function updatechave(chave) {
    console.log(chave)

    //let an = gerador(5, 1, 50);
    //let ae = gerador(2, 1, 12);

    an = chave.numeros;
    ae = chave.estrelas;

    
    //debugger;
    listanumeros = document.getElementById("olMain");
    listanumeros.innerHTML = "";
    an.forEach((numero) => {
        let newli = document.createElement("li");
        newli.innerHTML = numero;
        listanumeros.appendChild(newli);
    })

    listaestrelas = document.getElementById("olStars");
    listaestrelas.innerHTML = "";
    ae.forEach((estrela) => {
        let newli = document.createElement("li");
        newli.innerHTML = estrela;
        listaestrelas.appendChild(newli);
    })
}



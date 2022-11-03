function cleanBox(identificador) {  
    document.getElementById(identificador).value = "";
}

function cypher(cypher) {
    
    var secreto = document.getElementById('caja__uno__mensaje').value;

    const regex = /\d/g;
    let m;
    let veris;

    while ((m = regex.exec(secreto)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        m.forEach((match, groupIndex) => {
            veris=1;
        });
    }

    secreto=secreto.toLowerCase();
    
    if(veris){alert("UN NUMERO NO ES UNA LETRA")}
    else{
        
        const clave = (mensaje) => {
        const originaAlfa = ["a","e","i","o","u"];
        const cifradoAlfa = ["ai","enter","imes","ober","ufat"];
        if (cypher){
            return mensaje.replace (/[aeiou]/gi, letra => cifradoAlfa[originaAlfa.indexOf(letra)]);
        }
        else {
            return mensaje.replace (/ai|enter|imes|ober|ufat/gi, letra => originaAlfa[cifradoAlfa.indexOf(letra)]);
        }
    }

    document.getElementById('caja__dos__mensaje').value = clave(secreto);
    }
}

function copiarTexto() {
    var content = document.getElementById('caja__dos__mensaje');
    content.select();
    document.execCommand('copy');
    cleanBox('caja__dos__mensaje');
}
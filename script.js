

    function enviar(){
    const nivel1 = "Baixo Peso";
    const nivel2 = "Peso Normal";
    const nivel3 = "Sobrepeso";
    const nivel4 = "Obesidade grau I";
    const nivel5 = "Obesidade grau II";

    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    const avatar = document.getElementById('model');
    const linha = document.getElementById('line');
    const boxAvatar = document.getElementById('a-model');
    const imc = (peso / (altura * altura));
    

    resultado.textContent = imc.toFixed(2);

    if((altura === '') || peso === ''){
        alert("Altura e/ou peso em branco! Preencha os valores corretamente");
        window.location.reload(true);
    }

    if(imc < 18.5){
        document.querySelector('#result').innerHTML = nivel1;
        let imc = document.getElementById('result');
        avatar.style.visibility = 'visible'
        avatar.style.width = '100%'
        avatar.style.backgroundImage = 'url("./assets/abaixopeso.png")'
        avatar.style.backgroundSize = "contain"
        boxAvatar.style.display = 'flex'
        imc.style.color = "#5bc9f3"
        imc.style.fontFamily = 'Concert One, sans serif';
        linha.style.visibility = 'visible'
        linha.style.backgroundColor = "#5bc9f3"
        linha.style.width = '300px'

    }

    if(imc > 18.5 && imc < 24.9){
        document.querySelector('#result').innerHTML = nivel2;
        let imc = document.getElementById('result');
        imc.style.color = "#9eb33a";
        imc.style.fontFamily = 'Concert One, sans serif';
        avatar.style.visibility = 'visible'
        avatar.style.backgroundImage = 'url("./assets/pesonormal.png")'
        avatar.style.width = '250px'
        avatar.style.backgroundSize = "contain"
        boxAvatar.style.display = 'flex'
        linha.style.visibility = 'visible'
        linha.style.backgroundColor = "#9eb33a"
        linha.style.width = '250px'
    }
    if(imc > 25 && imc < 29.9){
        document.querySelector('#result').innerHTML = nivel3;
        let imc = document.getElementById('result');
        imc.style.color = "#fac80d";
        imc.style.fontFamily = 'Concert One, sans serif';
        avatar.style.visibility = 'visible'
        avatar.style.backgroundImage = 'url("./assets/acimadopeso.png")'
        avatar.style.width = '250px'
        avatar.style.backgroundSize = "contain"
        boxAvatar.style.display = 'flex'
        linha.style.visibility = 'visible'
        linha.style.backgroundColor = "#fac80d"
        linha.style.width = '250px'
    }
    if(imc > 30 && imc < 39.9){
        document.querySelector('#result').innerHTML = nivel4;
        let imc = document.getElementById('result');
        imc.style.color = "#f38a2f";
        imc.style.fontFamily = 'Concert One, sans serif';
        avatar.style.visibility = 'visible'
        avatar.style.backgroundImage = 'url("./assets/obesidade1.png")'
        avatar.style.width = '250px'
        avatar.style.backgroundSize = "contain"
        boxAvatar.style.display = 'flex'
        linha.style.visibility = 'visible'
        linha.style.backgroundColor = "#f38a2f"
        linha.style.width = '250px'
    }
    if(imc > 40){
        document.querySelector('#result').innerHTML = nivel5;
        let imc = document.getElementById('result');
        imc.style.color = "#ec1f26";
        imc.style.fontFamily = 'Concert One, sans serif';
        avatar.style.visibility = 'visible'
        avatar.style.backgroundImage = 'url("./assets/obesidade2.png")'
        avatar.style.width = '250px'
        avatar.style.backgroundSize = "contain"
        boxAvatar.style.display = 'flex'
        linha.style.visibility = 'visible'
        linha.style.backgroundColor = "#ec1f26"
        linha.style.width = '250px'
    }

    
}


function darkMode(){
    const button = document.getElementById('b-enviar');
    const footer = document.getElementById('footer');
    const content = document.getElementById('content');
    let backg = document.querySelector('html');
    backg.style.backgroundImage = 'url("./assets/Business\ \(3\).png")'
    let lampOff = document.getElementById('lamp-off');
    let lampOn = document.getElementById('lamp-on');
    lampOff.style.display = 'none';
    lampOn.style.display = 'flex';
    lampOn.style.visibility = 'visible';
    footer.style.background = 'rgb(79,87,87)';
    footer.style.background = 'linear-gradient(225deg, rgba(79,87,87,1) 27%, rgba(54,61,69,1) 50%, rgba(17,24,27,1) 50%)'

}

function lightMode(){
    const button = document.getElementById('b-enviar');
    const content = document.getElementById('content');
    let backg = document.querySelector('html');
    backg.style.backgroundImage = 'url("./assets/Business\ \(2\).png")'
    let lampOff = document.getElementById('lamp-off');
    let lampOn = document.getElementById('lamp-on');
    lampOff.style.display = 'flex';
    lampOn.style.display = 'none';
    lampOn.style.visibility = 'hidden';
    footer.style.background = 'rgb(28,157,224)';
    footer.style.background = 'linear-gradient(135deg, rgba(28,200,224,1) 27%, rgba(51,152,238,1) 50%, rgba(48,80,129,1) 50%'
    button.style.background = 'rgb(28,157,224)';
    button.style.background = 'linear-gradient(135deg, rgba(28,200,224,1) 27%, rgba(51,152,238,1) 50%, rgba(48,80,129,1) 50%'
    content.style.background = '#FFF';
}


function info(){
    const bInfo = document.querySelector('#i-info');
    const info = document.getElementById('info');
    info.style.visibility = "visible";
    bInfo.style.height = "200px"

}

function hideInfo(){
    const info = document.getElementById('info');
    info.style.visibility = "hidden"
}





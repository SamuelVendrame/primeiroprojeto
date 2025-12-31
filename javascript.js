

document.addEventListener('DOMContentLoaded', function() {
    const menuBotao = document.getElementById('menu-Botao'); 
    const menuLinks = document.getElementById('nav-Links');

    if (menuBotao && menuLinks) {
        menuBotao.addEventListener('click', function() { // no efeito de clique, abre o menu de links escondido para mobile
            menuLinks.classList.toggle('menu-aberto')// toggle -> faz com que navLinks no html tenha agora a classe menu-aberto, na qual a menu-aberto faz com que o LEFT no CSS saia de -100 para 0, deixando navLinks visivel
        });
    }
}); 

document.addEventListener('DOMContentLoaded', function(){
    const botaoCadastrar = document.getElementById('botaoCadastrar');
    const popUpDiv = document.getElementById('popUpDiv');
    
    if(botaoCadastrar && popUpDiv){
        botaoCadastrar.addEventListener('click', function(event){
            event.preventDefault()
            popUpDiv.classList.toggle('showDiv');
        })
    }

    const fecharDivPopUp = document.getElementById('closePopUpDiv')
    fecharDivPopUp.addEventListener("click", function(event){

    if(fecharDivPopUp){
        popUpDiv.classList.remove('showDiv')
    }
})

})


const form = document.getElementById('cadForm');

form.addEventListener('submit', (event) => { 
    event.preventDefault();
    validarForm();
}); 

function validarForm(){
    const nome = document.getElementById('nome-usuario').value;
    const nomeLimpo = nome.value


    if(nomeLimpo < 5){
        return alert("Nome nao pode ter menos de 5 caracteres.");
    }

}




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
    
    /*if(botaoCadastrar && popUpDiv){ escondido para que so funcione ao preencher o forms, mas esse eh o codigo original
        botaoCadastrar.addEventListener('click', function(event){
           
            popUpDiv.classList.toggle('showDiv');
        })
    }*/

    const fecharDivPopUp = document.getElementById('closePopUpDiv')
    fecharDivPopUp.addEventListener("click", function(event){

    if(fecharDivPopUp){
        popUpDiv.classList.remove('showDiv')
    }
})

})
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('cadForm')
    const botao = document.getElementById('botaoCadastrar')

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            const nomeUsuario = document.getElementById('nome-usuario').value;
            const emailUsuario = document.getElementById('email-usuario').value;

            const nomeUsuarioLimpo = nomeUsuario.trim();
            const emailUsuarioLimpo = emailUsuario.trim();
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /*entender melhor esse capeta kkkkkkk*/

            if(nomeUsuarioLimpo === ""){
                console.log('1')
                return alert("Nome vazio")
            }
            else if(emailUsuarioLimpo === ""){
                console.log('2')
                return alert("Email vazio")
                
            }
            else if(!regexEmail.test(emailUsuarioLimpo)){
                console.log('3')
                return alert("Formato de email Invalido.")
            }
            else{
                botao.disabled = true;
                    setTimeout(() => {
                        popUpDiv.classList.toggle('showDiv');
                        formulario.reset();
                        botao.disabled = false;},
                    3000);
            }
        });
    }
});



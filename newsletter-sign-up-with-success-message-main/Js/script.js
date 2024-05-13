const CardContainer = document.querySelector(".container")
const CardSuccess = document.querySelector(".containerSuccess") 
const Btn__submit = document.querySelector(".Btn__submit")
const Email = document.querySelector(".Email__span")
const paragrafoErro = document.querySelector(".paragrafo__erro_email")
const InputForm = document.querySelector(".input__item")



Btn__submit.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (InputForm.value === "" || !validarEmail(InputForm.value)) {
        InputForm.classList.add("ErroForm");
        paragrafoErro.classList.remove("hidden")
        
       
    } else {
        CardSuccess.classList.remove("hidden");
        CardContainer.classList.add("hidden");
        
        Email.innerHTML = InputForm.value
    }
});

/* Função Validar Email */

function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
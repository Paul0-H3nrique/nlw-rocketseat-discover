import Modal from "./modal.js"; //importando a modal da prórpia modal

const modal = Modal(); //executando as propriedades/função

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalBtn = document.querySelector(".modal button")

const $btnCheck = document.querySelectorAll(".actions a.check");
const $btnDelete = document.querySelectorAll(".actions a.delete");

$btnCheck.forEach(button => {
    button.addEventListener("click", handleClick)
})


$btnDelete.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault();
    
    const text = check ? "Marcar como lida" : "Excluir"

    //* Pegar algum atributo do elemento usando o evento, pois pega todo o elemento, como tbm os atributos;
    //Alteração do texto da modal de acordo com a ação
    modalTitle.innerHTML = `${text} está pergunta`;
    modalDescription.innerHTML = `Você tem certeza que deseja ${text.toLowerCase()} está pergunta`;
    modalBtn.innerHTML = `Sim, ${text}`;
    check ? modalBtn.classList.remove("red") : modalBtn.classList.add("red");

    //Atribuindo a rota ao form
    const roomId = document.querySelector("#room-id").dataset.id; //Seleciona o id da pagina/sala
    const questionId = event.target.dataset.id; //Selecionado a questão a partir do evento de a;
    const slug = check ? "check" : "delete"; //Seleciona o tipo de ação que está ocorrendo
    const form = document.querySelector(".modal form");

    form.setAttribute("action", `/roomquestion/${roomId}/${questionId}/${slug}`)

    modal.open()
}



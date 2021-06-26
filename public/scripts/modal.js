export default function Modal() { //o module.exports exporta o que é declarado

    const modalWrapper = document.querySelector(".modal-wrapper"); 

    const $btnClose = modalWrapper.querySelector(".btn.cancel");
    $btnClose.addEventListener("click", close);

    function open(){
        //atribuir classe active, para abrir a modal
        modalWrapper.classList.add("active");
    }
    function close(){
        modalWrapper.classList.remove("active")
    }
    return{
        open,
        close
    }
}
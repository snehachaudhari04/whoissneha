


function openmodal() {
    const Modal = document.querySelector(".modal");
    const Overlay = document.querySelector(".overlay");
    Modal.setAttribute("style","scale:1");
    Overlay.setAttribute("style","opacity:1");
    
    
}

function closemodal() {
    const Modal = document.querySelector(".modal");
    const Overlay = document.querySelector(".overlay");
    Modal.setAttribute("style","display:hidden");
    Overlay.setAttribute("style","opacity:0");

}
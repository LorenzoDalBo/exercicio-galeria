function passaAnterior() {
    if (slideCriado & posicaoAtual != 0) {
        const slideAtual = document.querySelector(".carrossel-item")
        const imgAtual = document.querySelector(".carrossel-img")
        slideAtual.classList.remove("carrossel-item")
        slideAtual.classList.add("carrossel-elemento-oculto")
        imgAtual.classList.remove("carrossel-img")
        imgAtual.classList.add("carrossel-elemento-oculto")
        posicaoAtual = posicaoAtual - 1
        const proximoSlide = slides[posicaoAtual]
        proximoSlide.classList.remove("carrossel-elemento-oculto")
        const proximaImg = proximoSlide.firstElementChild
        proximaImg.classList.remove("carrossel-elemento-oculto")
        proximoSlide.classList.add("carrossel-item")
        proximaImg.classList.add("carrossel-img")
    }
}




function passaProximo() {
    if (slideCriado & posicaoAtual !== slides.length - 1) {
        const slideAtual = document.querySelector(".carrossel-item")
        const imgAtual = document.querySelector(".carrossel-img")
        slideAtual.classList.remove("carrossel-item")
        slideAtual.classList.add("carrossel-elemento-oculto")
        imgAtual.classList.remove("carrossel-img")
        imgAtual.classList.add("carrossel-elemento-oculto")
        posicaoAtual = posicaoAtual + 1
        const proximoSlide = slides[posicaoAtual]
        proximoSlide.classList.remove("carrossel-elemento-oculto")
        const proximaImg = proximoSlide.firstElementChild
        proximaImg.classList.remove("carrossel-elemento-oculto")
        proximoSlide.classList.add("carrossel-item")
        proximaImg.classList.add("carrossel-img")
    }
}


const lista = document.querySelector("#carrossel-lista")
const imagemInput = document.querySelector("#input-imagem")
const botaoAnterior = document.querySelector("#botao-anterior")
const botaoProximo = document.querySelector("#botao-proximo")
let slides = document.getElementById("carrossel-lista").getElementsByTagName("li")
let posicaoAtual = 0
let slideCriado = false



imagemInput.addEventListener("change", (evento) => {
    const arquivo = evento.target.files[0]
    const leitor = new FileReader();
    leitor.readAsDataURL(arquivo)
    leitor.onload = () => {
        const imagemNova = document.createElement("img")
        imagemNova.src = leitor.result;
        imagemNova.classList.add("carrossel-elemento-oculto")
        const liNova = document.createElement("li")
        liNova.classList.add("carrossel-elemento-oculto")
        liNova.appendChild(imagemNova);
        lista.appendChild(liNova)
        if (lista.firstElementChild == liNova) {
            imagemNova.classList.remove("carrossel-elemento-oculto")
            imagemNova.classList.add("carrossel-img")
            liNova.classList.remove("carrossel-elemento-oculto")
            liNova.classList.add("carrossel-item")
            slideCriado = true
        }
        slides = document.getElementById("carrossel-lista").getElementsByTagName("li")
    }
}
)


botaoProximo.addEventListener("click", () => {
    passaProximo();
})

botaoAnterior.addEventListener("click", () => {
    passaAnterior();
})











/* Abre e fecha o menu quando clicamos nos icones respectivamente: 3linhas e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    //alert('teste: clique no menu funcionando')
    nav.classList.toggle('show')
    //se tiver um 'show' na lista de classes do nav, ele será retirado da lista; se nao tiver, será colocado.
  })
}

/* Quando clicamos em um item do menu, escondemos o menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/* Muda o heaader da pag quando o usuario usar o scroll  */
const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // se scroll for maior que a altura do header
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/*Scroll Reveal: conforme se dá scroll na pagina, mostra os elementos */
const scrollReveal = ScrollReveal({
  origin: 'top', //irá vir do topo
  distance: '30px',
  duration: 500, //500 milisegundos
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #product header, #product .image,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)

/* Menu ativo conforme a seçao visivel na pag */
const sections = document.querySelectorAll('main section[id]') //todas as sessoes que tenham um id dentro do main
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})

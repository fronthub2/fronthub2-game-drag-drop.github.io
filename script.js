const foods = document.querySelectorAll('.img-food')
const modalWindow = document.querySelector('.modal')

let index
let item
let count = 0

function dStart() {
    index = event.target.dataset.index
    item = event.target
}

function nDrop() {
    event.preventDefault()
}

function dDrop() {
    event.preventDefault()
    console.log(item)
    console.log(index)

    let dataSetIndex = event.target.dataset.index
    switch (index) {
        case dataSetIndex:
            event.target.classList.add('hide')
            item.classList.add('hide')
            count++
            break;

        default: modalError()
    }

    if (count === foods.length) modal()
}

function modalError() {
    const modalErr = document.querySelector('.modal-error')

    modalErr.innerHTML = `
        <div class="modal-error-inner">
            <p class="text">Подумай еще!</p>
        </div>
    `
    modalErr.classList.add('animation')

    setTimeout(() => {
        modalErr.classList.remove('animation')
    }, 3000)
}

function modal() {
    modalEnd()
}

function modalHello() {
    modalWindow.innerHTML = `
        <div class="modal-inner">
            <h2 class="title">Привет, давай сыграем в игру?</h2>
            <button id="btnStart" class="btn">Погнали!</button>
        </div>
    `

    modalWindow.classList.add('modal--show')
    document.body.classList.add('stop-scrolling')

    const btnStart = document.querySelector('#btnStart')
    btnStart.addEventListener('click', () => {
        document.querySelector('.container').classList.remove('hide')
        modalWindow.classList.remove('modal--show')
        document.body.classList.remove('stop-scrolling')
        modalWindow.innerHTML = ''
    })
}
modalHello()

function modalEnd() {
    modalWindow.innerHTML = `
        <div class="modal-inner">
            <h2 class="title">Ты справился с заданием, так держать!</h2>
            <button id="btnClose" class="btn">Закрыть</button>
        </div>
    `
    modalWindow.classList.add('modal--show')
    document.body.classList.add('stop-scrolling')
    document.querySelector('.container').style.border = 'none'

    const btnClose = document.querySelector('#btnClose')
    btnClose.addEventListener('click', () => {
        modalWindow.classList.remove('modal--show')
        document.body.classList.remove('stop-scrolling')
        location.reload()
    })

}
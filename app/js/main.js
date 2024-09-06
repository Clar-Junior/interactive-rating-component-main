const btnRate = document.querySelector(".rate")
const submit = document.querySelector("#submit")

// glogal
const RATING = []

// rating
btnRate.addEventListener("click", (e) => {
    RATING.pop()

    if (e.target.innerText >= 0 && e.target.innerText != '1\n2\n3\n4\n5') {
        RATING.push(e.target.innerText)

        btn = btnRate.children
        for (let i = 0; i <= 4; i++) {
            if (btn[i].style.backgroundColor == 'var(--white-neutral)') {
                btn[i].style.backgroundColor = 'var(--dark-blue-ligher-neutral)'
                btn[i].style.color = 'var(--white-neutral)'
            }
        }
        btn[Number(e.target.innerText) - 1].style.backgroundColor = 'var(--white-neutral)'
        btn[Number(e.target.innerText) - 1].style.color = 'var(--very-dark-blue-neutral)'
    }

})

// hover in js
btnRate.addEventListener("mouseover", (e) => {
    let button = e.target.closest('button')
    if (!button) { return }
    if (button.style.backgroundColor == 'var(--white-neutral)') {
        button.style.backgroundColor == 'var(--white-neutral)'
    }
    if (button.style.backgroundColor != 'var(--white-neutral)') {
        button.style.backgroundColor = 'var(--orange-primary)'
        button.style.color = 'var(--very-dark-blue-neutral)'
    }
})
btnRate.addEventListener("mouseout", (e) => {
    let button = e.target.closest('button')
    if (!button) { return }
    if (button.style.backgroundColor == 'var(--white-neutral)') {
        button.style.backgroundColor == 'var(--white-neutral)'
    }
    else {
        button.style.backgroundColor = 'var(--dark-blue-ligher-neutral )'
        button.style.color = 'var(--light-grey-neutral)'
    }
})

// thank page
submit.addEventListener('click', (e) => {
    e.preventDefault()

    if (RATING != "") {

        const header = document.querySelector("header")

        // apaga div star
        document.querySelector(".star").remove()

        // cria div e img
        const divImg = document.createElement("div")
        divImg.className = "img"
        const img = document.createElement('img')
        img.src = "app/images/illustration-thank-you.svg"
        img.alt = "Thank you"

        // incluir div e img na tag header
        divImg.appendChild(img)
        header.appendChild(divImg)

        // add user rating
        const divRating = document.createElement('div')
        divRating.className = 'outResp'
        const btnUserRating = document.createElement('button')
        btnUserRating.innerText = `You selected ${RATING} of 5`
        btnUserRating.className = "userRating"
        divRating.appendChild(btnUserRating)
        header.appendChild(divRating)

        // substitur h2
        const title = document.querySelector(".title").innerText = "Thank you!"
        const titleId = document.querySelector("section > .title").id = "newTitle"

        // substituiir p
        const content = document.querySelector(".content").innerText = "We appreciate you taking the time to give a rating.If you ever need more support, don't hesitate to get in touch!"
        const text = document.querySelector('section > .content').id = 'newContent'
        // remove rating btn
        document.querySelector("footer").remove()
    }
})

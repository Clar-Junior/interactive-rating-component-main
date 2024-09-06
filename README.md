# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Mobile preview](/myPreview/mobile-preview.png)
![Mobile hover preview](/myPreview/mobile-hover-preview.png)
![Mobile submit hover preview](/myPreview/mobile-submit-hover-preview.png)
![Desktop preview](/myPreview/desktop-preview.png)
![Desktop hover preview](/myPreview/desktop-hover-preview.png)
![Desktop submit hover preview](/myPreview/desktop-submit-hover-preview.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/interactive-rating-component-main-BoUEVFBU7d)
- Live Site URL: [Github Pages](https://clar-junior.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I learned to replace DOM elements by javascript manipulation.

```js
// glogal variable
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
```

### Continued development

- DOM manipulation
- Tailwind
- CSS Grid
- Semantic HTML5 Markup

### Useful resources

- This time nothing for now.

## Author

- Frontend Mentor - [@Clar-Junior](https://www.frontendmentor.io/profile/Clar-Junior)
- Linkedin - [@Clar-Junior](https://www.linkedin.com/in/clarival-junior-b40669315/)

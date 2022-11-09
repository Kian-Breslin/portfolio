let expButton = document.querySelector(".exp")
let experience = document.querySelector(".experience")
let langButton = document.querySelector(".lang")
let languages = document.querySelector(".languages")
let eduButton = document.querySelector(".edu")
let education = document.querySelector(".education")

experience.style.height = "60px"
experience.style.transition = "0.5s"

expButton.addEventListener("click", () => {
    experience.style.transition = "0.5s"
    if (experience.style.height == "60px"){
        experience.style.height = "200px"
        expButton.innerHTML = "Show Less"
    } else if (experience.style.height == "200px") {
        experience.style.height = "60px"
        expButton.innerHTML = "Show More"
    }
})

languages.style.height = "60px"
languages.style.transition = "0.5s"

langButton.addEventListener("click", () => {
    languages.style.transition = "0.5s"
    if (languages.style.height == "60px"){
        languages.style.height = "200px"
        langButton.innerHTML = "Show Less"
    } else if (languages.style.height == "200px") {
        languages.style.height = "60px"
        langButton.innerHTML = "Show More"
    }
})

education.style.height = "60px"
education.style.transition = "0.5s"

eduButton.addEventListener("click", () => {
    education.style.transition = "0.5s"
    if (education.style.height == "60px"){
        education.style.height = "200px"
        eduButton.innerHTML = "Show Less"
    } else if (education.style.height == "200px") {
        education.style.height = "60px"
        eduButton.innerHTML = "Show More"
    }
})


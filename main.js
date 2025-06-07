const input = document.querySelector('.container .input_box input');
const eye = document.querySelector(' .container .input_box  i')
const list = document.querySelectorAll('ul li')

const reqiurments = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[^A-Za-z0-9]/, index: 3 },
    { regex: /[A-Z]/, index: 4 },
]

input.addEventListener("keyup", (e) => {

    reqiurments.forEach(item => {
        const IsVaild = item.regex.test(e.target.value)
        const li = list[item.index]

        if (IsVaild) {
            li.firstElementChild.className = 'fa-solid fa-check';
            li.classList.add('valid')
        } else {
            li.firstElementChild.className = 'fa-solid fa-circle';
            li.classList.remove('valid')
        }
    })
})

const handelclick = () => {

    input.type = input.type == "password" ? "text" : "password"
    eye.className = `fa-solid fa-eye${input.type === "password" ? "" : "-slash"}`
}
eye.addEventListener('click', handelclick)
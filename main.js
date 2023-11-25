const content = document.querySelector('.content')
const addBtn = document.querySelector('#add')

let counter = 1

let colors = [
    'red',
    'green',
    'yellow',
    'blue',
    'black',
    'tomato',
    'chocolate',
    'darkblue',
    'darkgreen',
    'darkyellow'
]

let chars = '0123456789abcdef'

let a = chars.split('')
console.log(a);



addBtn.addEventListener('click', () => {
    let rnd = Math.floor(Math.random() * a.length)
    let rnd2 = Math.floor(Math.random() * a.length)
    let rnd3 = Math.floor(Math.random() * a.length)
    let rnd4 = Math.floor(Math.random() * a.length)
    let rnd5 = Math.floor(Math.random() * a.length)
    let rnd6 = Math.floor(Math.random() * a.length)

    let box = document.createElement('div')
    box.classList.add('box')
    // box.style.backgroundColor = colors[rnd]
    box.style.backgroundColor = `#${a[rnd]}${a[rnd2]}${a[rnd3]}${a[rnd4]}${a[rnd5]}${a[rnd6]}`
    box.innerHTML = counter
    content.appendChild(box)

    counter++
    console.log(box);
})
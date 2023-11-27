const content = document.querySelector('.content')
const addBtn = document.querySelector('#add')

let counter = ' '

let img = [
    'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700438400&semt=ais',
    'https://media.istockphoto.com/id/1198271727/photo/abstract-wavy-object.jpg?s=612x612&w=0&k=20&c=CuuC79GvcO06K5EpBeQ2AMO68TkZS8mw9ZydJ2BMfeo=',
    'https://images8.alphacoders.com/133/1331088.png',
    'https://img.freepik.com/premium-photo/closeup-nature-view-colorful-leaves_860528-2622.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=ais',
    'https://image.winudf.com/v2/image1/Y29tLm5hdHVyYWxpbWFnZWhkd2FsbHBhcGVyLnJ5cnNfc2NyZWVuXzBfMTU0MjM3MDgxNl8wODU/screen-0.webp?fakeurl=1&type=.webp',
    'https://image.winudf.com/v2/image1/Y29tLm5hdHVyYWxpbWFnZWhkd2FsbHBhcGVyLnJ5cnNfc2NyZWVuXzBfMTU0MjM3MDgxNl8wODU/screen-0.webp?fakeurl=1&type=.webp'
]
const conteiner = document.querySelector('.conteiner')
console.log(conteiner);



addBtn.addEventListener('click', () => {
    let rnd = Math.floor(Math.random() * img.length)
    console.log(rnd);

    let box = document.createElement('div')
    box.classList.add('box')
    box.style.backgroundImage = `url(${img[rnd]})`
    box.innerHTML = counter
    conteiner.appendChild(box)

    counter++

    console.log(box);
})

    // const imgg = document.querySelector(".img")
    // // imgg.classList.add('img')
    // imgg.style.backgroundImage = "url('https://image.winudf.com/v2/image1/Y29tLm5hdHVyYWxpbWFnZWhkd2FsbHBhcGVyLnJ5cnNfc2NyZWVuXzBfMTU0MjM3MDgxNl8wODU/screen-0.webp?fakeurl=1&type=.webp')"
const menuBtn = document.querySelector('.menu-btn')
const exitBtn = document.querySelector('.exit-btn')
const navigation = document.querySelector(' nav ul')

menuBtn.addEventListener('click', () => {
    navigation.style.transform = 'translateX(0)'
})

exitBtn.addEventListener('click', () => {
    navigation.style.transform = 'translateX(100%)'
})
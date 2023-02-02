var bin = document.querySelectorAll('.control a')
var formContainer = document.querySelector('.form')
var form = document.querySelectorAll('.form form')

// 注册
bin[0].addEventListener('click', function (e) {
    form[0].classList.add('disappear')
    form[1].classList.remove('disappear')
    formContainer.style.transform = 'rotateY(180deg)'
})

// 登录
bin[2].addEventListener('click', function (e) {
    form[1].classList.add('disappear')
    form[0].classList.remove('disappear')
    formContainer.style.transform = 'none'
})
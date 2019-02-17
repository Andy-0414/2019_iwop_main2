// 스크롤 이벤트
const between = (value, min, max) => value >= min && value <= max
const swapClass = (ele, on, off) => {
    ele.classList.toggle(on, true);
    ele.classList.toggle(off, false);
}
var y = window.scrollY
var user__maxY = window.innerHeight

var layout = document.querySelector('#layout')
var topBar = document.querySelector('.topBar')
var startPage = document.querySelector('.iwop__startPage')
var section = document.querySelectorAll('section')
var iwop__main = document.querySelector('.iwop.iwop__main')
var iwop__sub = document.querySelector('.iwop.iwop__sub')
var iwop__scroll = document.querySelectorAll('.iwop__startPage__scroll *')
var quickMenu__item = document.querySelectorAll('.quickMenu__item')
var quickMenu__item__content = document.querySelectorAll('.quickMenu__item__content')

window.addEventListener('scroll', (e) => {
    var y = window.scrollY
    //탑 바
    if (!between(y, 0, iwop__main.offsetTop)) {
        swapClass(iwop__main, 'iwop--disable', 'iwop--active')
        swapClass(iwop__sub, 'iwop--active', 'iwop--disable')
        iwop__scroll.forEach(x => {
            swapClass(x, 'iwop__startPage__scroll__item--disable', 'iwop__startPage__scroll__item--active')
        })
    }
    else {
        swapClass(iwop__main, 'iwop--active', 'iwop--disable')
        swapClass(iwop__sub, 'iwop--disable', 'iwop--active')
        iwop__scroll.forEach(x => {
            swapClass(x, 'iwop__startPage__scroll__item--active', 'iwop__startPage__scroll__item--disable')
        })
    }
    if (!between(y, 0, user__maxY)) {
        swapClass(topBar, 'topBar--attach', 'topBar--detach')
        layout.style.marginTop = "70px"
    }
    else {
        swapClass(topBar, 'topBar--detach', 'topBar--attach')
        layout.style.marginTop = "0px"
    }
    section.forEach((x, idx) => {
        var tmp = section[idx - 1] || { offsetTop: window.pageYOffset }
        if (tmp) {
            if (between(y, tmp.offsetTop, x.offsetTop)) {
                quickMenuItemSelect(idx)
            }
        }
    })
})

// 퀵 메뉴
function gotoStartPage() {
    window.scrollTo({ behavior: 'smooth', top: 0 });
}
function gotoScroll(className, thisElement) {
    var ele = document.getElementsByClassName(className)[0]
    window.scrollTo({ behavior: 'smooth', top: ele.offsetTop - 70 })
}
function quickMenuItemSelect(num) {
    quickMenu__item.forEach((x, idx) => {
        if (num == idx) swapClass(x, 'quickMenu__item--active', 'quickMenu__item--disable')
        else swapClass(x, 'quickMenu__item--disable', 'quickMenu__item--active')
    })
}
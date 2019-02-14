// 스크롤 이벤트
const between = (value, min, max) => value >= min && value <= max
const swapClass = (ele,on,off)=>{
    ele.classList.toggle(on,true);
    ele.classList.toggle(off,false);
}
var y = window.scrollY
var user__maxY = window.innerHeight

var layout = document.querySelector('#layout')
var topBar = document.querySelector('.topBar')
var iwop__main = document.querySelector('.iwop.iwop__main')
var iwop__sub = document.querySelector('.iwop.iwop__sub')
var iwop__scroll = document.querySelectorAll('.iwop__startPage__scroll *')

window.addEventListener('scroll',(e)=>{
    var y = window.scrollY
    //탑 바
    if (!between(y, 0, iwop__main.scrollHeight)) {
        swapClass(iwop__main, 'iwop--disable', 'iwop--active')
        swapClass(iwop__sub, 'iwop--active', 'iwop--disable')
        iwop__scroll.forEach(x=>{
            swapClass(x, 'iwop__startPage__scroll__item--disable', 'iwop__startPage__scroll__item--active')
        })
    }
    else{
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
    else{
        swapClass(topBar, 'topBar--detach', 'topBar--attach')
        layout.style.marginTop = "0px"
    }
})
// 스크롤 이벤트
const between = (value,min,max)=> value >= min && value <= max
var y = window.scrollY
var user__maxY = window.innerHeight

var layout = document.querySelector('#layout')
var topBar = document.querySelector('.topBar')
var iwop__main = document.querySelector('.iwop.iwop__main')
var iwop__sub = document.querySelector('.iwop.iwop__sub')

window.addEventListener('scroll',(e)=>{
    var y = window.scrollY
    //탑 바
    console.log(iwop__main.offsetTop)
    if (!between(y, 0, iwop__main.scrollHeight)) {
        iwop__main.className = "iwop iwop__main iwop--disable"
        iwop__sub.className = "iwop iwop__sub iwop--active"
    }
    else{
        iwop__main.className = "iwop iwop__main iwop--active"
        iwop__sub.className = "iwop iwop__sub iwop--disable"
    }
    if (!between(y, 0, user__maxY)) {
        layout.style.marginTop = "70px"
    }
    else{
        layout.style.marginTop = "0px"
    }
})
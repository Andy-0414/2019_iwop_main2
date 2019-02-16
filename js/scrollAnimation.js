var scrollAnimation = scrollAnimation || {};

(function () {
    const between = (value, min, max) => value >= min && value <= max
    class scrollAnimationModule{        
        constructor(){
            this.necessaryClassName = 'scrollAnimation'
            this.necessaryElement = document.querySelectorAll(`.${this.necessaryClassName}`)
            this.viewAccuracy = 0.95         
            this.spawnHeight = "-50px"
        }
        init(){
            this.necessaryElement.forEach(x=>{
                var childIndex;
                x.parentNode.childNodes.forEach((y,idx)=>{
                    if(x == y) childIndex = idx-1
                })
                x.style.transition = `0.5s`
                x.style.transitionDelay = `${0.1 * childIndex}s`
            })
            document.addEventListener('scroll',()=>{
                var y = window.scrollY
                this.necessaryElement.forEach(x=>{
                    var showHeightTop = (x.offsetTop + x.clientHeight / 4) / this.viewAccuracy - window.innerHeight
                    var showHeightBottem = (x.offsetTop + x.clientHeight/4) * this.viewAccuracy

                    if (between(y, showHeightTop, showHeightBottem)){
                        x.style.opacity = 1;
                        x.style.transform = "translateY(0px)"
                    }
                    else{
                        x.style.opacity = 0;
                        x.style.transform = `translateY(${this.spawnHeight})`
                    }
                })
            })
        }
    }

    scrollAnimation = new scrollAnimationModule()
})();

scrollAnimation.init()
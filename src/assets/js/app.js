
if (document.querySelector('.banner.splide')){
  new Splide('.banner.splide',{
    rewind:true,
    perPage:1,
    arrows:false,
    clone:false,
    pagination:true

  }).mount()

}
if (document.querySelector('.slider.splide')){
  new Splide('.slider.splide',{
    rewind:true,
    type:'loop',
    perPage:3,
    perMove:1,
    arrows:true,
    clone:false,
    pagination:false,
    breakpoints:{
      600:{
        perPage:2,
        type:'loop',
        pagination:true
      },
    }

  }).mount()

}

// filter 

var nav = document.querySelectorAll('.product__item  .filter')
nav.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    inf = document.querySelectorAll('.product__item .filter.isActive')
    inf.forEach(item =>{
      item.classList.remove('isActive')
      
    })
    mitemss = document.querySelectorAll('.product.isShow')
    mitemss.forEach(item =>{
      item.classList.remove('isShow')
    })
    mitemsss = document.querySelectorAll('.border.isShow')
    mitemsss.forEach(item =>{
      item.classList.remove('isShow')
    })
    var mitems = document.querySelector('.product.'+id)
    var mitemsI = document.querySelector('.border.'+id)
    element.classList.add('isActive')
    
    mitems.classList.add('isShow')
    mitemsI.classList.add('isShow')
    
  })
})



var nav = document.querySelectorAll('.personalCabinet  .menu')
nav.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    inf = document.querySelectorAll('.menu.isActive')
    inf.forEach(item =>{
      item.classList.remove('isActive')
      
    })
    mitemss = document.querySelectorAll('.personalCabinet__item.isShow')
    mitemss.forEach(item =>{
      item.classList.remove('isShow')
    })
    
    var mitems = document.querySelector('.personalCabinet__item.'+id)
   
    element.classList.add('isActive')
    
    mitems.classList.add('isShow')
    
    
  })
})



let topp = document.querySelector('a.top')
window.addEventListener('scroll',(e)=>{
  console.log(window.scrollY);
  if(window.scrollY>900){
    topp.style.display = "flex"
  } else {
    topp.style.display = 'none'
  }
})
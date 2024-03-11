const list = document.querySelectorAll('.feature-sub')
let btns = document.querySelectorAll(".feature__link");

const opentab = (tab, idx) => {
 tab.classList.add('feature__link_active')
 list[idx].classList.remove('hidden')
}

const closetab = (tab, idx) => {
 tab.classList.remove('feature__link_active')
 list[idx].classList.add('hidden')


}

btns.forEach((btnitem, index) => {
 btnitem.addEventListener('click', () => {
  if(btnitem.classList.contains('feature__link_active')){
   closetab(btnitem, index)
  }else{
   opentab(btnitem, index)
  }

  btns.forEach((btnitem, idx) => {
  if(index !== idx) {
     btnitem.classList.remove('feature__link_active')
  }
 })
   list.forEach((listitem, idx) => {
    if(index !== idx) {
     listitem.classList.add('hidden')
    }
  })
 //  btnitem.classList.add('feature__link_active')

 //  list.forEach((listitem) => {
 //   listitem.classList.add('hidden') 
 //  })
 //  list[index].classList.remove('hidden')
 //  console.dir(btnitem);
 })
})
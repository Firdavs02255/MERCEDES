const tabs = document.querySelectorAll('[data-tabs-handler]')
const tabsfield = document.querySelectorAll('[data-tabs-field]')

for(let btn of tabs){
 btn.addEventListener('click', () => {
  tabs.forEach(item => item.classList.remove('design-list__item_active'))
  btn.classList.add('design-list__item_active')

   tabsfield.forEach(content => {
    if(content.dataset.tabsField === btn.dataset.tabsHandler){
     content.classList.remove('hidden')
    }else{
     content.classList.add('hidden')
    }
   })
 })
}


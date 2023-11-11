// const app = Vue.createApp({

// })
// .component('click-counter', {
//   template: '#click-counter-template',
//   data(){
//     return {
//       count: 0
//     }
//   }
// })
// .mount('#app')


-----------

Vue.createApp({

})
.component( 'clicks-counter', {
template:  '<button @click="count++">{{count}}</button>' ,

// 2. turu template olusturma
// template:  '#click-counter-template' ,


data(){

  return {
    count :0
  }
}

})
.mount('#app')

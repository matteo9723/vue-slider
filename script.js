const app = new Vue ({
  el: '#app',

  data: {
  images:['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'],
  counter : 0,
  clock:null

  },

  mounted(){

   this.autoscroll();

  },

  methods:{

    nextSlide(){

      this.counter++;
      if(this.counter > this.images.length - 1 ){
        this.counter=0;
      }
      
    },

    prevSlide(){

      this.counter--;
      if(this.counter < 0 ){
        this.counter=this.images.length-1;
      }

    },

    autoscroll(){ 

      this.clock=setInterval(()=>{
      this.nextSlide();
      },2000)

    },

    stop(){

      clearInterval(this.clock);

    }

   
  }

});

  



// SHORTCUT --> ctrl+F = sostituisci i caratteri uguali velocemente
  
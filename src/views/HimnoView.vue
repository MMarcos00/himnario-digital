<template>
  <div class="container">
    <router-link to="/">← Volver</router-link>

    <h1 v-if="himno">{{ himno.titulo }}</h1>

    <div class="controls">
      <button @click="increaseFont">A+</button>
      <button @click="decreaseFont">A-</button>
    </div>

    <div v-if="himno" :style="{ fontSize: fontSize + 'px' }">
      <div v-for="(estrofa,i) in himno.estrofas" :key="i">
        <p>{{ i+1 }}. {{ estrofa }}</p>
        <p v-if="himno.coro">
          <strong>CORO</strong><br>
          {{ himno.coro }}
        </p>
      </div>
    </div>

    <button
        v-show="showButton"
        class="top-button"
        @click="scrollTop"
    >
      ⬆
    </button>
  </div>
</template>

<script>
import himnos from "../data/himnos.json"

export default {
  data(){
    return{
      himno:null,
      fontSize:18,
      showButton:false
    }
  },

  created(){
    const numero = this.$route.params.numero
    this.himno = himnos.find(h => h.numero == numero)

    const savedFont = localStorage.getItem("fontSize")
    if(savedFont){
      this.fontSize = parseInt(savedFont)
    }
  },

  mounted(){
    window.addEventListener("scroll", () => {
      this.showButton = window.scrollY > 300
    })
  },

  methods:{
    increaseFont(){
      this.fontSize += 2
      localStorage.setItem("fontSize", this.fontSize)
    },

    decreaseFont(){
      if(this.fontSize > 12){
        this.fontSize -= 2
        localStorage.setItem("fontSize", this.fontSize)
      }
    },

    scrollTop(){
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
  }
}
</script>

<style>
.container{
  padding:20px;
  max-width:600px;
  margin:auto;
}

.controls{
  margin:15px 0;
}

button{
  padding:8px 12px;
  margin-right:10px;
  font-size:16px;
  border:none;
  background:#3498db;
  color:white;
  border-radius:5px;
  cursor:pointer;
}

button:hover{
  background:#2980b9;
}

p{
  line-height:1.6;
}

.top-button{
  position:fixed;
  bottom:20px;
  right:20px;
  width:45px;
  height:45px;
  border:none;
  border-radius:50%;
  background:#3498db;
  color:white;
  font-size:18px;
  cursor:pointer;
  box-shadow:0 4px 8px rgba(0,0,0,0.2);
}

.top-button:hover{
  background:#2980b9;
}
</style>
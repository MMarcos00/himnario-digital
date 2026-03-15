<template>
  <div class="container">
    <h1>Himnario</h1>

    <SearchBar @update-search="search = $event" />

    <ul class="himno-list">
      <li
          v-for="himno in filteredHimnos"
          :key="himno.numero"
      >
        <router-link :to="'/himno/' + himno.numero" class="card">
          <div class="numero">
            {{ himno.numero }}
          </div>

          <div class="titulo">
            {{ himno.titulo }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import himnos from "../data/himnos.json"
import SearchBar from "../components/SearchBar.vue"

export default {
  components:{
    SearchBar
  },

  data(){
    return{
      search:"",
      himnos:himnos
    }
  },

  computed:{
    filteredHimnos(){
      if(!this.search){
        return this.himnos
      }

      const query = this.search.toLowerCase()

      return this.himnos.filter(h=>{
        return (
            h.titulo.toLowerCase().includes(query)
            ||
            h.numero.toString().includes(query)
        )
      })
    }
  },

  watch:{
    search(value){
      const numero = parseInt(value)

      if(!isNaN(numero)){
        const himno = this.himnos.find(h=>h.numero === numero)

        if(himno){
          this.$router.push('/himno/' + numero)
        }
      }
    }
  }
}
</script>

<style>
.container{
  padding:20px;
}

h1{
  text-align:center;
  margin-bottom:20px;
}

.himno-list{
  padding:0;
}

li{
  list-style:none;
  margin-bottom:10px;
}

.card{
  display:flex;
  align-items:center;
  padding:15px;
  border-radius:12px;
  background:#f7f7f7;
  text-decoration:none;
  color:black;
  transition:0.2s;
}

.card:hover{
  background:#ececec;
}

.numero{
  font-size:20px;
  font-weight:bold;
  width:50px;
}

.titulo{
  font-size:18px;
}

.dark .card{
  background:#1e1e1e;
  color:white;
}

.dark .card:hover{
  background:#2a2a2a;
}
</style>
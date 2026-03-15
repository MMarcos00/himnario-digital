<template>

  <div class="search-container">

    <span class="icon">🔎</span>

    <input
        v-model="search"
        @input="$emit('update-search', search)"
        placeholder="Buscar himno..."
    />

  </div>

</template>

<script>
export default {

  data(){
    return{
      search:""
    }
  }

}
</script>

<style>

.search-container{
  display:flex;
  align-items:center;
  background:#f0f0f0;
  padding:10px;
  border-radius:10px;
  margin-bottom:20px;
}

.icon{
  margin-right:8px;
  font-size:18px;
}

input{
  border:none;
  background:transparent;
  outline:none;
  font-size:16px;
  width:100%;
}

.dark .search-container{
  background:#2a2a2a;
}

</style>
<template>
  <div :class="['app', darkMode ? 'dark' : '']">
    <div class="topbar">
      <button @click="toggleDarkMode">
        {{ darkMode ? "☀️ Claro" : "🌙 Oscuro" }}
      </button>
    </div>

    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    }
  },
  created() {
    const saved = localStorage.getItem("darkMode")
    if (saved) {
      this.darkMode = JSON.parse(saved)
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem("darkMode", this.darkMode)
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  max-width: 600px;
  margin: auto;
  min-height: 100vh;
  background: white;
  color: black;
}

.dark {
  background: #121212;
  color: #eaeaea;
}

.topbar {
  padding: 10px;
  text-align: right;
}

button {
  padding: 6px 10px;
  border: none;
  background: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

html{
  scroll-behavior:smooth;
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
</style>
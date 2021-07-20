<template>
  <div>
    <Header/>
    <div id="app">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view/>      
      </transition>
    </div>
  </div>
</template>

<script>

// Importações
import Header from './components/Header.vue'

export default {
  name: 'App',
  // Componentes importados
  components: {
    Header
  }
}
</script>

<style>
html{
  font-family: monospace;
  color: white;
}

body{
  border: 0;
  margin: 0;
  background-color: grey;
}

#app{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em 0;
}

@media (max-width: 1000px)
{

  #app{
  padding: 1em 0;
  }
}


@media (max-width: 600px)
{
  #app{
  padding: 1em 0;
  }
}

</style>

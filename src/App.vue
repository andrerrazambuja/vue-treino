<template>
  <div>
    <Header/>
    <div id="app">
      <router-view>
        
      </router-view>
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
  height: 100%;
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

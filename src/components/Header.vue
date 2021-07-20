<template>
  <div id="header">
    <router-link to="/" id="headerIcon">André</router-link>
    <router-link to="/" class="headerLink">Home</router-link>
    <router-link to="/task-helper" class="headerLink">Task Helper</router-link>
    <router-link to="/photos" class="headerLink">Fotos</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#header{
  background-color: rgb(99, 99, 99);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1.35em;
  border-bottom: 0.3em solid rgba(61, 61, 61, 0.527);
}

#headerIcon{
  position: absolute;
  left: 0;
  padding: 0 1em;
  font-size: 1.35em;
  cursor: pointer;
}

.headerLink{
  padding: .2em 2%;
  margin: 0.1em 0.5em;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 7px;
  transition: 0.3s;
  cursor: pointer;
}

.headerLink:hover{  
  background-color: rgba(255, 255, 255, 0.3);
}

a{
  text-decoration: none;
  color: white;
}

@media (max-width: 700px)
{
  #headerIcon{
    position: unset;
    width: 100%;
    text-align: center;
    margin-bottom: 0.3em;
  }
  .headerLink{
    width: 20%;
    margin-bottom: 0.5em;
  }
}
</style>

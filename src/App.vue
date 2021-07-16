<template>
  <div>
    <Header/>
    <div id="app">

      <!-- Campo para adicionar tarefas -->
      <div class="card input">

        <input type="text" v-model="taskInput" name="task" id="taskInput" placeholder="Insira uma tarefa">

        <button @click="addTask()"> > </button>

      </div>

      <!-- Tarefas -->
      <div  class="card task" v-for="(task, index) in tasks" :key="task">

        <span>
          {{index+1}} - {{task}}
        </span>

        <button @click="removeTask(index)"> - </button>

      </div>

      <!-- placeholder para quando não há nenhuma tarefa -->
      <div class="placeholder" v-if="!tasks.length">
        Ainda não existem tarefas.
      </div>
    </div>
  </div>
</template>

<script>

// Importações
import Header from './components/Header.vue'

export default {
  name: 'App',
  // Variáveis
  data:() => {
    return {
      tasks: [],
    }
  },
  // Métodos
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    addTask() {
      if(this.taskInput.length > 0) this.tasks.push(this.taskInput)
      this.taskInput = null;
    },
  },
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
  padding: 4em 0;
}

/* Cards */
.card{
  margin: 0.5em;
  padding: 1.5em;
  background-color: rgba(230, 143, 44, 0.308);
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  border-radius: 10px;
}

/* Input de tarefa */
.card input{
  width: 90%;
  border: 0;
  outline: 0;
  height: 2em;
  margin-right: 4px;
  padding: 0 1em;
  background-color: rgba(128, 128, 128, 0.45);
  border-bottom: 1px solid rgb(230, 143, 44);
  color: white;
  cursor: pointer;
}

.card input::placeholder{
  color: rgba(255, 255, 255, 0.7);
}

/* Botões dos cards ( '>' e '-' ) */
.card button{
  height: 2em;
  width: 10%;
  border: 0;
  outline: 0;
  background-color: rgba(230, 143, 44, 0.699);
  border-bottom: 1px solid rgb(230, 143, 44);
  cursor: pointer;
}

.card button:hover{
  background-color: rgba(230, 143, 44);
}

/* Texto dos cards com as tarefas */
.card span{
  width: 90%;
  margin-right: 4px;
  background-color: rgba(128, 128, 128, 0.45);
  padding: 0.5em 1em;
}

/* Texto para quando não tarefas cadastradas */
.placeholder{
  margin: 1em;
  color: rgba(255, 255, 255, 0.521);
}
</style>

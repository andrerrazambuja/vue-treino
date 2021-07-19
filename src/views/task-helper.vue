<template>
  <div id="taskHelper">

    <!-- Campo para adicionar tarefas -->
    <div class="card input">

      <input type="text" v-model="taskInput" name="task" id="taskInput" v-on:keyup.enter="addTask()" maxlength="40" placeholder="Insira uma tarefa">

      <button class="actionButton" @click="addTask()"> <i class="fas fa-long-arrow-alt-down"></i> </button>

    </div>

    <!-- Tarefas -->
    <div  class="card task" v-for="(task, index) in tasks" :key="task">

      <button class="actionButton" @click="downTask(index)"> <i class="fas fa-sort-down"></i> </button>

      <span>
        {{index + 1}} - {{task}}
      </span>

      <button class="actionButton" @click="removeTask(index)"> <i class="fas fa-trash-alt"></i> </button>

    </div>

    <!-- placeholder para quando não há nenhuma tarefa -->
    <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
    >    
      <div class="placeholder" v-if="!tasks.length">
        Ainda não existem tarefas.
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'taskHelper',
  // Variáveis
  data:() => {
    return {
      tasks: [],
      taskInput: '',
    }
  },
  // Métodos
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    addTask() {
      if(this.taskInput.length > 0 && this.taskInput.length <= 40) this.tasks.push(this.taskInput)
      else window.alert('A tarefa deve ter entre 1 e 40 caracteres')
      this.taskInput = null;
    },
    downTask(index) {
      if(index == (this.tasks.length - 1)) return;
      this.tasks.splice(index, 2 , this.tasks[index+1] , this.tasks[index]);
    },
  }
}
</script>

<style scoped>

#taskHelper{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Cards */
.card{
  margin: 0.5em;
  padding: 1.5em;
  background: rgb(255,154,0);
  background: linear-gradient(93deg, rgba(255,154,0,0.4) 19%, rgba(253,226,45,0.4) 60%, rgba(253,45,217,0.4) 100%);
  width: 35%;
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
  min-height: 2em;
  margin-right: 4px;
  overflow: wrap;
  padding: 0 1em;
  background-color: rgba(128, 128, 128, 0.45);
  color: white;
  cursor: pointer;
}

.card input::placeholder{
  color: rgba(255, 255, 255, 0.7);
}

/* Botões dos cards ( '>' e '-' ) */
.card .actionButton{
  min-height: 2em;
  width: 10%;
  border: 0;
  border-radius: 5px;
  outline: 0;
  background-color: rgb(253, 198, 45, 0.8);
  cursor: pointer;
}

.card button:hover{
  background-color: rgba(230, 143, 44);
}

/* Texto dos cards com as tarefas */
.card span{
  width: 80%;
  margin: 0 4px;
  background-color: rgba(128, 128, 128, 0.45);
  padding: 0.5em 1em;
}

@media (max-width: 1000px)
{
  .card{
    width: 70%;
  }
}


@media (max-width: 600px)
{
  .card{
    width: 90%;
  }
}

</style>

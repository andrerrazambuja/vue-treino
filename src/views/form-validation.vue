<template>
  <div id="validation">
      <h1>Form Validation</h1>
      <div id="formDiv">
        <input class="input required" type="text"  v-model="name"     placeholder="Nome"      style="grid-column: span 8">
        <input class="input error"    type="text"  v-model="lastname" placeholder="Sobrenome" style="grid-column: span 8">
        <input class="input"          type="text"  v-model="address"  placeholder="Endereço"  style="grid-column: span 10">
        <input class="input"          type="text"  v-model="number"   placeholder="Número"    style="grid-column: span 6">
        <input class="input"          type="text"  v-model="cpf"      placeholder="CPF"       style="grid-column: span 4">
        <input class="input"          type="email" v-model="email"    placeholder="E-mail"    style="grid-column: span 8">
        <input class="input"          type="date"  v-model="birthdate"                        style="grid-column: span 4">
        <div   class="gridFix"                                                             style="grid-column: span 13">
        </div>
        <button style="grid-column: span 3">
        Enviar
        </button>
      </div>
  </div>
</template>

<script>


export default {
  name: "Validation",
  data: () =>{
    return{
        name: '',
        lastname: '',
        address: '',
        number: '',
        cpf: '',
        email: '',
        birthdate: '',
        validState: false,
    }
  }
};
</script>

<style scoped>

#validation{
    background-color: rgba(206, 206, 206, 0.25);
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    padding: 2em 3em;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
}

#validation h1{
    color: #FFFFFF;
    font-size: 2em;
    margin-bottom: 1em;
    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
}

#formDiv{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(4, 2.5em);
    grid-gap: 2em 1.7em;
    margin-bottom: 1em;
}

#validation .input{
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: rgba(128, 128, 128, 0.527);
    padding: 0 1em;
    color: #FFFFFF;
}

#validation .error{
    border: 1px solid rgba(255, 0, 0, 0.5);
    border-top: 0;
}

#validation .required{
    border-left: 2px solid rgba(255, 208, 0, 0.5);
}

#validation .input::placeholder{
    color: #ffffff71;
}

#validation .input:hover{
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px;
}

#validation button{
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: rgba(105, 238, 112, 0.527);
    padding: 0 1em;
    color: #ffffff;
    font-size: 1.1em;
    font-weight: 520;
}

#validation button:hover{
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 6px 0px;
}


@media (max-width: 700px)
{
    #validation{
        padding: none
    }

    #formDiv{
        grid-template-columns: repeat(16, 1fr);
        grid-template-rows: repeat(8, 2.5em);
        grid-gap: 2em 0em;
        margin-bottom: 0;
    }

    #formDiv .input{
        grid-column: span 16!important;
    }

    #validation .gridFix{
        grid-column: span 10!important;
    }

    #validation button{
        grid-column: span 6!important;
    }
}
</style>

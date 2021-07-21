<template>
  <div id="validation">
    <h1>Form Validation</h1>
    <form @submit.prevent="submit">
      <input
        class="input required"
        :class="{
          error: $v.name.$error,
          success: !$v.name.$error && $v.name.$dirty,
        }"
        type="text"
        v-model.trim="$v.name.$model"
        placeholder="Nome"
        style="grid-column: span 8"
      />
      <input
        class="input required"
        :class="{
          error: $v.lastname.$error,
          success: !$v.lastname.$error && $v.lastname.$dirty,
        }"
        type="text"
        v-model.trim="$v.lastname.$model"
        placeholder="Sobrenome"
        style="grid-column: span 8"
      />
      <input
        class="input required"
        :class="{
          error: $v.address.$error,
          success: !$v.address.$error && $v.address.$dirty,
        }"
        type="text"
        v-model.trim="$v.address.$model"
        placeholder="Endereço"
        style="grid-column: span 10"
      />
      <input
        class="input required"
        :class="{
          error: $v.number.$error,
          success: !$v.number.$error && $v.number.$dirty,
        }"
        type="number"
        v-model.trim="$v.number.$model"
        placeholder="Número"
        style="grid-column: span 6"
      />
      <input
        class="input required"
        :class="{
          error: $v.cpf.$error,
          success: !$v.cpf.$error && $v.cpf.$dirty,
        }"
        type="text"
        v-model="$v.cpf.$model"
        placeholder="CPF"
        style="grid-column: span 4"
        v-mask="'###.###.###-##'"
      />
      <input
        class="input"
        type="email"
        v-model.trim="$v.email.$model"
        placeholder="E-mail"
        style="grid-column: span 8"
      />
      <input
        class="input required"
        :class="{
          error: $v.birthdate.$error,
          success: !$v.birthdate.$error && $v.birthdate.$dirty,
        }"
        type="date"
        v-model="$v.birthdate.$model"
        style="grid-column: span 4"
      />

      <div class="gridFix" style="grid-column: span 13"></div>

      <button type="submit" style="grid-column: span 3">Enviar</button>
    </form>
  </div>
</template>

<script>
const { required } = require("vuelidate/lib/validators");

export default {
  name: "Validation",
  title: "Validation",
  data: () => {
    return {
      name: "",
      lastname: "",
      address: "",
      number: null,
      cpf: "",
      email: "",
      birthdate: "",
      validState: false,
      invalidState: false,
    };
  },
  validations: {
    name: {
      required,
    },
    lastname: {
      required,
    },
    address: {
      required,
    },
    number: {
      required,
    },
    cpf: {
      required,
    },
    email: {},
    birthdate: {
      required,
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
  },
  beforeMount(){
    document.title = "Treino Vue: Forms"
 },
};
</script>

<style scoped>
#validation {
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

#validation h1 {
  color: #ffffff;
  font-size: 2em;
  margin-bottom: 1em;
  text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}

form {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(4, 2.5em);
  grid-gap: 2em 1.7em;
  margin-bottom: 1em;
}

#validation .input {
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.527);
  padding: 0 1em;
  color: #ffffff;
}

#validation .required {
  border-left: 2px solid rgba(255, 208, 0, 0.5);
}

#validation .error {
  border: 1px solid rgba(255, 0, 0, 0.5);
  border-top: 0;
  -webkit-animation: vibrate-1 0.3s linear both;
  animation: vibrate-1 0.3s linear both;
}

#validation .success {
  border: 1px solid rgba(85, 236, 85, 0.425);
  border-top: 0;
}

#validation .input::placeholder {
  color: #ffffff71;
}

#validation .input:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px;
}

#validation button {
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: rgba(105, 238, 112, 0.527);
  padding: 0 1em;
  color: #ffffff;
  font-size: 1.1em;
  font-weight: 520;
  transition: 0.1s;
}

#validation button:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 6px 0px;
}

#validation button:active {
  transform: scale(0.98);
}

/* Remover flechas do input type number */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

/* media queries */

@media (max-width: 700px) {
  #validation {
    padding: none;
  }

  form {
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(8, 2.5em);
    grid-gap: 2em 0em;
    margin-bottom: 0;
  }

  form .input {
    grid-column: span 16 !important;
  }

  #validation .gridFix {
    grid-column: span 10 !important;
  }

  #validation button {
    grid-column: span 6 !important;
  }
}

/* animations */

/* ----------------------------------------------
 * Generated by Animista on 2021-7-21 8:32:0
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation vibrate-1
 * ----------------------------------------
 */
@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
</style>

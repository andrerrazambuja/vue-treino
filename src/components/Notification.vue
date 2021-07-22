<template>
    <div id="Notification" class="animate__animated animate__bounceInRight" @click="close()" :class="[type, {closed: !active}, {animate__fadeOut: !active}]">
        <h3>{{title}}</h3>
        <p>{{text}}</p>
        <p style="opacity: 80%;font-size: 73%; float:right">{{footer || '(clique para dispersar)'}}</p>
    </div>
</template>

<script>
export default {
    data: () => {
        return{
            active: true,
        }
    },
    props: ['type', 'title', 'text', 'footer'],
    methods: {
        close(){
            return this.active = false
        }
    }
  }
</script>

<style scoped>
    #Notification{
        padding: 0 10px;
        max-width: 20%;
        position: absolute;
        z-index: 999;
        top: 5em;
        right: 1.5em;
        border-radius: 10px;
        transition: 0.4s;
        cursor: pointer;
        background-color: rgba(157, 198, 245, 0.8);
        color: rgb(0, 140, 255);
        border: 2px solid rgba(100, 152, 247, 0.8);
    }

    .error{
        background-color: rgb(245, 157, 157, 0.8)!important;
        color: red!important;
        border: 2px solid rgb(247, 100, 100, 0.8)!important;
    }

    .success{
        background-color: rgb(157, 245, 169, 0.8)!important;        
        color: green!important;
        border: 2px solid rgb(77, 187, 92, 0.8)!important;
    }

    .closed{
        opacity: 0;
        z-index: -999!important;
    }

    @media (max-width: 700px) {

        #Notification{
            position: fixed;
            top: 80vh;
            right: auto;
            height: 17vh;
            min-width: 85%;
            padding: 0 1em;
        }
    }

</style>

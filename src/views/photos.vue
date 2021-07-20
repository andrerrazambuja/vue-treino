<template>
  <div id="photos">
    <img @click="changeMainPic($event)" src="../../public/img/1.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/2.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/3.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/4.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/5.jpg" alt="" srcset="">
    <img ref="mainPhoto" id="main" src="../../public/img/main.png" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/7.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/8.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/9.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/10.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/11.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/12.jpg" alt="" srcset="">
    <img @click="changeMainPic($event)" src="../../public/img/13.jpg" alt="" srcset="">
  </div>
</template>

<script>

export default {
  name: "Photos",
  methods: {
    changeMainPic(event) {
      console.log(event.target.src)
      this.$refs.mainPhoto.src = event.target.src
    }
  }
};
</script>

<style scoped>
#photos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  row-gap: 2em;
  width: 85%;
  height: 100%;
}

#photos > img{
  background-color: rgb(146, 74, 74);
  width: 80%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.65) 0px 25px 20px -20px;
}

#photos > img:hover{
  filter: brightness(1.05)
}

#photos > #main:hover{
  filter: brightness(1)
}

#photos #main {
  width: 90%;
  grid-row: 2 / span 2;
  grid-column: 2 / span 2;
}

@media (max-width: 1050px)
{
  #photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    row-gap: 1.5em;
    width: 100%;
    height: 100%;
  }

  #photos > img{
    height: auto;
  }

  #photos > img:hover{
    filter: unset;
  }

  #main{
    display: none
  }
}
</style>

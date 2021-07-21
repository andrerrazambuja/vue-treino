<template>
  <div id="home">
    <h1>Home</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec urna
      semper, ullamcorper leo sed, consequat sem. Sed interdum, est id laoreet
      gravida, odio justo vulputate nisi, et fringilla massa arcu vel odio. Cras
      non vulputate neque. Nulla volutpat dui vel leo scelerisque tempus.
      Pellentesque nec neque elementum, ornare augue ac, consectetur arcu. Duis
      tincidunt cursus felis, ac imperdiet lacus pellentesque nec. Vivamus in
      vehicula nunc. Curabitur tempor pretium lacinia. Pellentesque posuere
      tincidunt metus. Sed hendrerit lacus sed scelerisque rhoncus. Cras iaculis
      velit eu tellus auctor, vel commodo tortor sagittis. Mauris eget dignissim
      tellus, eu suscipit turpis. Maecenas euismod mattis diam id convallis.
    </p>
    <p>
        Praesent convallis elit at odio blandit dapibus. Suspendisse ut sapien sit
      amet erat mattis porttitor. Donec sem dui, facilisis eu mattis non,
      commodo eget arcu. Pellentesque rutrum mauris eu ultricies vehicula.
      Praesent sit amet metus sollicitudin, lacinia massa quis, pulvinar tellus.
      Integer aliquam arcu pretium gravida sagittis. Vivamus sollicitudin nisl
      eros, eu commodo ligula ullamcorper vitae. Morbi auctor placerat ante, vel
      mollis est convallis sed. Aliquam vel magna ac odio convallis porttitor.
      Vivamus condimentum leo in mauris luctus, a semper tortor fringilla.
      Pellentesque ultricies massa id nulla vestibulum porttitor. Praesent et
      placerat urna.
    </p>
  </div>
</template>

<script>

export default {
  name: "Home", 
  beforeMount(){
    document.title = "Treino Vue: Home"
 },
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 1.15em;
}

h1{
  margin: 0em;
  margin-top: -0.2em;
  font-size: 4em;
  background: rgb(255,154,0);
  background: linear-gradient(93deg, rgba(255,154,0,1) 19%, rgba(253,226,45,1) 60%, rgba(253,45,217,1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

p {
  text-align: justify;
  text-justify: inter-word;
  text-indent: 50px;
}
</style>

<template>
  <div id="app">
    <div id="apps"></div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
};
</script>

<style>
body{
  background-image: url('./assets/images/background.jpg');
  background-size: cover;
  background-attachment: scroll;
}
#apps{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.4);
}
.full-height{
  height: 100%;
}
.full-vh{
  height: 100vh;
}
</style>

<template>
  <div id="app" class="full-vh">
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
  background-size: 100% 100%;
  background-attachment: scroll;
}
#background-opacity{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.4);
}
.full-width{
  width: 100%;
}
.full-height{
  height: 100%;
}
.full-vh{
  height: 100vh;
}
.half-width{
  width: 50%;
}
.half-height{
  height: 50%;
}
.flex-row,.flex-column,.flex-fill{
  display: flex;
}
.bg-gray{
  background-color: #C4C4C4;
}
.bg-light-gray{
  background-color: rgba(196,196,196,0.6);
}
</style>

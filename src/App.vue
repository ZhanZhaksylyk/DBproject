<template>
  <div id="app" class="full-vh">
    <div class="flex-column full-height">
      <div class="flex-column bg-pink p-3 justify-content-center align-items-center">
        <div> 1000 universities</div>
        <div> 1502 professions</div>
        <div> 52 specialities</div>
      </div>
      <div class="flex-row justify-content-center mt-auto m-3 box">
        <router-view class="round"/>
        <div class="flex-column round p-5 bg-light-blue ml-3">
          <table>
            <tr><th>The chossen things</th></tr>
            <tr><th>The speciality</th><td>Vychteh</td></tr>
            <tr><th>The university</th><td>SDU</td></tr>
            <tr><th>The oblas't</th><td>Almatinskaya</td></tr>
          </table>
        </div>
      </div>
      <div class="flex-column full-width mt-auto bg-pink align-items-center">
        <div>ALL RIGHTS RESERVED</div>
        <div>KASKELEN 2019</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>
<style type="text/css">
@import 'assets/style.css'
</style>
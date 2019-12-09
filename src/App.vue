<template>
  <div id="app" class="full-vh">
    <div class="flex-column full-height">
      <div class="flex-row bg-gray m-3 p-3">
        <div class="ml-auto"> What's up?</div>
        <div class="ml-auto">
          <button type="button" class="btn btn-outline-primary">Login</button>
        </div>
      </div>
      <div class="flex-row justify-content-center mt-auto m-3 flex-fill">
        <router-view/>
        <div class="flex-column border rounded p-5 bg-light-gray ml-3">
          <table>
            <tr><th>The chossen things</th></tr>
            <tr><th>The speciality</th><td>Vychteh</td></tr>
            <tr><th>The university</th><td>SDU</td></tr>
            <tr><th>The oblas't</th><td>Almatinskaya</td></tr>
          </table>
        </div>
      </div>
      <div class="flex-row full-width mt-auto bg-gray border justify-content-center">
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
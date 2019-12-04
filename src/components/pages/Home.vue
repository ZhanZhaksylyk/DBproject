<template>
  <div class="container flex-column bg-light-gray">
    <div class="flex-row mt-3">
      <div class="half-width">
        <tree-select name="name" placeholder="Subject 1"/>
      </div>
      <div class="ml-3">
        <input type="radio" name="english">
        <label> ENGLISH </label>
      </div>
    </div>
    <div class="flex-row mt-3">
      <div class="half-width">
        <tree-select name="name" placeholder="Subject 2"/>
      </div>
    </div>
    <div class="flex-row mt-3">
      <!-- left part -->
      <div class="flex-column half-width">
        <div>
          <tree-select name="name" placeholder="Proffesion" disabled=""/>
        </div>
        <div class="mt-3">
          <tree-select name="name" placeholder="Region" disabled=""/>
        </div>
        <div class="mt-3">
          <tree-select name="name" placeholder="City" disabled=""/>
        </div>
        <button class="btn btn-outline-primary p-2 half-width ml-auto mr-auto mt-3 mb-3" onclick="goToUniversities">SUBMIT</button> 
      </div>
      <!-- right part -->
      <div class="flex-column half-width pl-3 justify-content-between">
        <div class="d-flex flex-wrap">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Treeselect from '@riophae/vue-treeselect';
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
 components:{
  'tree-select':Treeselect,
  },
  data(){
    return{
    }
  },
  methods:{
    goToUniversities:function(){
      alert("HELLO");
      this.$router.push({ path: 'uni' })
    }
  }
};
</script>
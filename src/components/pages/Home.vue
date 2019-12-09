<template>
  <div class="container flex-column bg-light-gray flex-fill">
    <div class="flex-row mt-3">
      <div class="half-width">
        <tree-select name="name" placeholder="Subject 1" v-model='subject1Post' :options='subject1Get' @input="doIt(value)"/>
      </div>
      <div class="ml-3">
        <input type="checkbox" name="english">
        <label> ENGLISH </label>
      </div>
    </div>
    <div class="flex-row mt-3">
      <div class="half-width">
        <tree-select name="name" placeholder="Subject 2" v-model='subject2Post' :options='subject2Get' :disabled="!subject1Post"/>
      </div>
    </div>
    <div class="flex-row mt-3">
      <!-- left part -->
      <div class="flex-column half-width">
        <div>
          <tree-select name="name" placeholder="Speciality" :disabled="!subject2Post" v-model='specialityPost' :options='specialityGet'/>
        </div>
        <div class="mt-3">
          <tree-select name="name" placeholder="Proffesion" :disabled="!specialityPost" v-model='proffesionPost' :options='proffesionGet'/>
        </div>
        <div class="mt-3">
          <tree-select name="name" placeholder="Region" :disabled="!proffesionPost" v-model='regionPost' :options='regionGet'/>
        </div>
        <button class="btn btn-outline-primary p-2 half-width ml-auto mr-auto mt-3 mb-3" v-on:click="goToUniversities">SUBMIT</button> 
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
      subject1Post:null,
      subject1Get:[ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ],
      subject2Post:null,
      subject2Get:[],
      proffesionPost:null,
      proffesionGet:[],
      specialityPost:null,
      specialityGet:[],
      regionPost:null,
      regionGet:[],
      count:0,
      value:100
    }
  },
  methods:{
    goToUniversities:function(){
      this.$router.push({name:'universities'});
    },
    doIt:function(count){
      alert('real count'+count);
      alert(this.count+' this.count');
      count+=1;
      alert(this.count+' this.count afterwards');
      alert('real count afterwards'+count);

    },
    getIt:async function(where,what){
      let res=[];
      await this.$http.post('localhost:8000/webproject/backend/'+where,what).then(
        response=>{
          res=response.body.data
        }
      );
      return res;
    }
  }
};
</script>

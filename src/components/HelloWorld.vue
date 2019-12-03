<template>
  <div class="flex-column full-height">
    <navbar/>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-outline-primary">Login</button>
    </div>
    <div class="d-flex full-height"> 
      <div class="ml-auto d-flex flex-column justify-content-center">
        <div class="container bg-blue border rounded">
          <div class="col-sm-6">
            <div class="form-group">
              <label>Аты<span class="tx-danger">*</span></label>
              <input type="text" name="name" class="form-control pd-y-4" >
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label>Оқушы саны<span class="tx-danger">*</span></label>
              <input type="number" name="student_count" class="form-control pd-y-4">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="col-sm-12 p-0">
            <div class="form-group">
              <label>Түсініктемесі</label>
              <textarea class="form-control pd-y-12" name="comment"></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <tree-select placeholder="Мұғалім таңдаңыз"/>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <tree-select placeholder="Айларын таңдаңыз" :multiple='true' />
            </div>
          </div>
        </div>
      </div>
      <div class="ml-auto  d-flex flex-column justify-content-center">
        <div class="container border rounded p-5">
          <table>
            <tr><th>The chossen things</th></tr>
            <tr><th>The speciality</th><td>Vychteh</td></tr>
            <tr><th>The university</th><td>SDU</td></tr>
            <tr><th>The city</th><td>Kaskelen</td></tr>
            <tr><th>The oblas't</th><td>Almatinskaya</td></tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import navbar from './navbar';
export default {
 components:{
  'tree-select':Treeselect,
  'navbar':navbar
},
data(){
  return{
  }
},
name: 'HelloWorld',
props:{
  msg : String,
}

};
</script>
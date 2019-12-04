<script type="text/javascript">
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/Home'
import universities from '@/components/pages/Universities'
Vue.use(Router)

const router =new Router({
	routes: [
	{
		path: '/',
		name: 'home',
		component: home
	},
	{
		path:'/uni',
		name:'universities',
		component:universities
	}
	]
});

export default router;
</script>
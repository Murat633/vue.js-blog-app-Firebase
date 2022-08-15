<template>
  <div class="makale-listesi">
    <Makale v-for="makale in makaleler" :key="makale.id" :makale="makale"/>
  </div>
</template>

<script>
import Makale from './Makale.vue'
export default {
props:['makaleler'],
components:{Makale},
setup(props){
  
}
}
</script>

<style>
    .makale-listesi {
        margin-left: 120px;
    }
</style>
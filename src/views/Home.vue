<template>
<div class="home">
    <div class="hatalar" v-if="hatalar">
        {{ hatalar }}
    </div>
    <div v-else-if="makaleler.length">
        <MakaleListesi :makaleler="makaleler"/>
    </div>
    <div v-else>
        Gösterilecek Makale Bulunamadı
    </div>
</div>
</template>

<script>
import MakaleListesi from '../components/MakaleListesi.vue';
import makalelerGetir from '../composable/makalelerGetir';
export default {
components:{
    MakaleListesi
},
setup(){
    const {makaleler,hatalar,makaleListesiniYukle} = makalelerGetir();
    makaleListesiniYukle()
    console.log(makaleler)
    return {makaleler,hatalar}
}
}
</script>

<style>

</style>
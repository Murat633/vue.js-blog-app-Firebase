<template>
    <div class="makaleDetay">
        <div v-if="hatalar !== ''">
            {{ hatalar }}
        </div>
        <div v-if="makale" class="detay content">
            <h1 class="makale-baslik">{{ makale.baslik }}</h1>
            <div class="content content-icerik">                
                <i class="fa-solid fa-comment-dots"></i>
                <p class="icerik">{{ makale.icerik }}</p>
            </div>
            <div class="content content-tarih">                
                <i>Oluşturulma Tarihi:</i>
                <p>{{ makale.olusturulmaTarihi }}</p>
            </div>

            <a href="#" class="sil">
                <Trash @click="makaleSil"/>
            </a>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { db } from '../firebase/config';
import makaleGetir from '../composable/makaleGetir';
import Trash from '../components/icons/Trash.vue';
export default {
    setup(props) {
        const route = useRoute();
        const router = useRouter();
        const id = ref(route.params.id);
        const makaleSil =async ()=>{
           await db.collection('makaleler').doc(route.params.id).delete()
                .then(()=>{
                    router.push({path:'/'})
                })
            
        }
        const { makale, hatalar, makaleYukle } = makaleGetir(route.params.id);
        makaleYukle();
        return { makale, hatalar, id, makaleSil };
    },
    components: { Trash }
}
</script>

<style>
    .detay {
        position: relative;
    }

    .content{
        margin-bottom: 30px;
    }
    .sil{
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
    }

    .makale-baslik{
        text-align: center;
        text-transform: capitalize;
        color: rgb(107, 42, 42);
    }

    .content-icerik i {
        font-size: 2rem;
        color: brown;
    }

    .content-icerik .icerik{
        text-align: left;
        padding: 1rem;
        line-height: 2;
        font-size: 1.4rem;
        font-weight: 900;
        letter-spacing: 1.5px;
        border-left: 3px solid sienna;
        margin-top: 3rem;
        max-height: 70vh;
        overflow: auto;
    }
</style>
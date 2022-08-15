<template>
    <div class="makale-ekle">
        <form @submit.prevent="makaleEkle">
            <label>Makale Başlığı</label>
            <input v-model="baslik" type="text" id="baslik" name="baslik" required>
            <label>Makale İçeriği</label>
            <textarea v-model="icerik" type="text" id="icerik" name="icerik" required/>
            <button>Oluştur</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { db, timeStamp } from '../firebase/config';
export default {
setup(){
    const baslik = ref("");
    const icerik = ref("");
    const router = useRouter()
    const makaleEkle = async () =>{
        const makale= {
            baslik:baslik.value,
            icerik:icerik.value,
            olusturulmaTarihi:timeStamp()
        }
        
        const res = await db.collection('makaleler').add(makale).then(()=>{
            router.push({name:'home'})
        })
        .catch((err)=>{
            console.log(err)
        })
        
        
    }

    return {baslik,icerik,makaleEkle}
}
}
</script>

<style>
    .makale-ekle form {
        max-width: 400px;
        margin: 0 auto;
    }

    .makale-ekle input,
    .makale-ekle textarea {
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 8px;
    }

    .makale-ekle label{
        display: block;
        margin-top: 24px;
    }

    textarea{
        height:120px;
    }

    .makale-ekle button {
        margin-top: 20px;
        background: #eb4d4b;
        color: white;
        padding: 6px;
        border-radius: 10px;
        font-size: 1.2em;
        cursor: pointer;
    }
</style>
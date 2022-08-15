import { ref } from "vue";
import { db } from "../firebase/config";
import moment from 'moment'


const makaleGetir = (id) => {
    const makale = ref(null);
    const hatalar = ref(null);

    const makaleYukle = async()=>{
        try{
            let res = await db.collection('makaleler').doc(id).get();

            if(!res.exists){
                throw Error('Makale Bulunamadı')
            }

            const tarih = res.data().olusturulmaTarihi.toDate()
            const formatlanmisTarih = moment(tarih).locale('tr').format('LL')
            console.log(formatlanmisTarih)

            makale.value = {...res.data(),id:res.id,olusturulmaTarihi:formatlanmisTarih}

        }catch(error){
            hatalar.value = error.message
        }
    }

    return {makale,hatalar,makaleYukle}
}


export default makaleGetir
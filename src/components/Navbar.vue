<template>
  <nav>
    <ul>
        <li><router-link :to="{name:'home'}">Makale Listesi</router-link></li>
        <li><router-link :to="{name:'ekle'}">Makale Ekle</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 60px;
        padding: 10px;
        border-bottom: 1px solid #333;
        text-transform: uppercase;
    }

    nav ul {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }

    nav li {
        list-style-type: none;
        margin-left: 20px;
    }

    nav a{
        color:#333;
    }

    nav .router-link-active {
        color: #eb4d4b;
    }
</style>
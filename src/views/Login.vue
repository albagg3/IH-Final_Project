<template>
    <div class="flex ">
        <h1 class="title">LOG IN</h1>
        <form @submit.prevent="onSubmit">
            <div class="p-2">
                <label for="">Email</label>
                <input v-model="email"  class="input is-success" type="email" placeholder="Email">
            </div>
            <div class="p-2">
                <label for="">Password</label>
                <input v-model="password" class="input is-success" type="password" placeholder="Password">
            </div>
            <button class="button is-success" type="submit">Log in</button>
            <Message v-if="hasMessage.isShow" :message="hasMessage.message" :type="hasMessage.type"/>
            <div>
                <p>¿Eres nuevo? <router-link :to="{name:'signin'}">Sign in</router-link></p>
            </div>
        </form>
    </div>

</template>
<script setup>
import { ref } from 'vue'
import Message from '../components/Message.vue'
import { useAuthStore } from '../store/index'
import { useRouter } from 'vue-router'
import { login } from '../api/index'

const router = useRouter();
const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const hasMessage = ref({
    message: '',
    type: '',
    isShow: false
})

const onSubmit = async () => {
    //login a supabase
    console.log('formulario enviado', email.value, password.value)
    const response = await login(email.value, password.value)
    console.log(response)
    if (response === false) {
        hasMessage.value.message = 'Email incorrecto'
        hasMessage.value.type = 'is-danger'
        hasMessage.value.isShow = true
        
    }
    else {
        //guardamos datos en authStore y redirigimos a home
        authStore.login(email, response)
        router.push({ name: 'home' })
    }
};


</script>
<style scoped>
.title{
    color:#91928caf;
}
.flex{
    padding: 30px;
    display: flex;
    flex-direction: column;
    
    
    
}
</style>
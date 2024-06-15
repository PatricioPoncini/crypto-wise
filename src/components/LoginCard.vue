<script setup lang="ts">
import { ref } from 'vue';
import { useLoginStore } from '../store/loginStore';
import { useRouter } from 'vue-router';

const loginStore = useLoginStore();
const name = ref('');
const router = useRouter();

const setLoginData = () => {
    if (!name.value) return;
    loginStore.setUserData(name.value);
    loginStore.setLoginTrue();
    router.push('/home')
}
</script>

<template>
    <div class="bg-cover bg-center bg-fixed">
    <div class="h-full flex justify-center items-center">
        <div class="bg-white mx-4 p-8 rounded shadow-2xl w-full md:w-1/2 lg:w-full">
            <h1 class="text-3xl font-bold mb-8 text-center">Login</h1>
            <form>
                <div class="mb-4">
                    <label class="block font-semibold text-gray-700 mb-2" for="email">
                        Username
                    </label>
                    <input
                        class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your username" v-model="name"/>
                </div>
                <div class="mb-6">
                    <span
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                        type="button" @click="setLoginData">
                        Login
                    </span>
                </div>
            </form>
        </div>
    </div>
</div>

</template>
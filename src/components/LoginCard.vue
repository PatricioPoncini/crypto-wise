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
    <section
        class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
        <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
            <div class="px-6 py-6 md:px-8 md:py-0">
                <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Welcome to <span
                        class="text-[#50D890]">Crypto Wise</span></h2>

                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">We are excited to have you
                    here. We hope you like it</p>
            </div>
        </div>

        <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
            <div
                class="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                    class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                    type="text" placeholder="Enter your name" aria-label="Enter your name" v-model="name">

                <span @click="setLoginData"
                    class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none cursor-pointer">ENTER</span>
            </div>
        </div>
    </section>

</template>

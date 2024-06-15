<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToLogin = async () => {
  await router.push('/login');
};

const goToAboutUs = async () => {
  await router.push('/aboutUs');
};
</script>

<template>
    <div class="grid grid-cols-2 p-40 gap-60">
        <div class="flex flex-col gap-10">
            <div class="text-[66px] font-ArchivoBlack">Welcome to Crypto Wise</div>
            <div class="text-[30px] font-ArchivoBlack">The best way to manage your crypto finances</div>
            <div class="text-[30px] font-ArchivoBlack">"Invest, learn, earn, enjoy"</div>
            <div class="flex gap-10">
                <button class="bg-green-600 p-3 rounded-full w-40 text-white font-semibold hover:bg-green-700 transition duration-500" @click="goToLogin">Get started</button>
                <button class="border-2 p-3 rounded-full w-40 text-gray-800 font-semibold hover:bg-gray-200 transition duration-500" @click="goToAboutUs">Contact us</button>
            </div>
        </div>
        <div class="flex">
            <div class="flex justify-center items-center">
                <img src="/crypto_cellphone.png" class="pointer-events-none size-[650px]"/>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1">
        <div class="flex">

        </div>
    </div>
</template>
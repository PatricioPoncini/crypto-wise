<script lang="ts" setup>
import { useLoginStore } from '../store/loginStore';
import MainActions from '../components/MainActions.vue';

const loginStore = useLoginStore();
</script>

<template>
    <div class="flex p-6 flex-col gap-4">
        <div class="text-white text-3xl font-semibold">Hi {{ loginStore.name }}!</div>
        <div class="text-white text-2xl">What would you like to do?</div>
    </div>
    <div class="flex justify-center mt-20">
        <MainActions />
    </div>
</template>
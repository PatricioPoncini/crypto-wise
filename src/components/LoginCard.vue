<script setup lang="ts">
import { ref } from 'vue';
import { useLoginStore } from '../store/loginStore';

const loginStore = useLoginStore();
const name = ref('');

const setLoginData = () => {
    loginStore.setUserData(name.value);
    name.value = "";
}
</script>

<template>
    <div class="mx-auto block max-w-sm rounded-lg bg-[#1a1a1a] p-6 shadow-4 dark:bg-surface-dark">
        <form @submit.prevent="setLoginData">
            <div class="relative mb-6" data-twe-input-wrapper-init>
                <input type="text" v-model="name"
                    class="peer block min-h-[auto] w-full bg-[#2c2c2c] rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 text-green-500"
                    id="exampleInput90" placeholder="Name" />
                <label for="exampleInput90"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-green-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">Name
                </label>
            </div>

            <button type="submit" @click="setLoginData"
                class="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong text-green-500"
                data-twe-ripple-init data-twe-ripple-color="light">
                Enter
            </button>
        </form>
    </div>
</template>

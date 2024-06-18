<script lang="ts" setup>
import { useRouter } from 'vue-router';
const {title, description, goPath} = defineProps<{title: string, description: string, goPath: string}>();

const router = useRouter();

const goTo = async (goPath: string) => {
    await router.push(`${goPath}`)
}
</script>

<template>
    <div className="bg-background text-foreground shadow-lg rounded-lg overflow-hidden w-96 transform transition duration-300 hover:translate-x-4 cursor-pointer" @click="goTo(goPath)">
      <div className="bg-[#95389E] text-white px-6 py-4">
        <h2 className="text-2xl font-bold">{{ title }}</h2>
      </div>
      <div className="px-6 py-4 space-y-4">
        <p className="text-muted-foreground">
          {{description}}
        </p>
        <div className="flex justify-end">
          <button  className="inline-flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 text-[#95389E]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
</template>

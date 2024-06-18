<script lang="ts" setup>
import MainActions from '../components/MainActions.vue';
import LineChart from '../components/charts/LineChart.vue'
</script>

<template>
    <div class="grid grid-cols-1">
        <div class="grid grid-cols-3 gap-40 col-span">
            <div class="flex justify-center mt-20 col-span-2">
                <LineChart :label="'BTC'" :bgColor="`#FFA500`" :title="`Criptos`" class="p-12 w-full h-full"/>
            </div>
            <div class="flex mt-20 col-span-1">
                <MainActions />
            </div>
        </div>
    </div>
</template>
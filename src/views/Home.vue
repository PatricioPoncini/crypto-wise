<script lang="ts" setup>
import MainActions from '../components/MainActions.vue';
import LineChart from '../components/charts/LineChart.vue'
</script>

<template>
    <div class="grid grid-cols-1">
        <div class="grid grid-cols-1 gap-40">
            <div class="flex justify-center mt-20">
                <MainActions />
            </div>
        </div>
        <div class="grid grid-cols-2">
            <div class="flex justify-center">
                <LineChart :label="'BTC'" :bgColor="`#FFA500`" :title="``" :coin="'bitcoin'" class="p-12 w-full h-full"/>
            </div>
            <div class="flex justify-center">
                <LineChart :label="'ETH'" :bgColor="`#95389E`" :title="``" :coin="'ethereum'" class="p-12 w-full h-full"/>
            </div>
        </div>
    </div>
</template>
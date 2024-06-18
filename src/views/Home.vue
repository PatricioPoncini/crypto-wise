<script lang="ts" setup>
import MainActions from '../components/MainActions.vue';
import BarChart from '../components/charts/BarChart.vue'

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
</script>

<template>
    <div class="grid grid-cols-1">
        <div class="grid grid-cols-3 gap-40 col-span">
            <div class="flex justify-center mt-20 col-span-2">
                <BarChart :label="'BTC'" :bgColor="`#1D4ED8`" :labels="week" :title="`USDT Trading`" class="p-12 w-full h-full"/>
            </div>
            <div class="flex mt-20 col-span-1">
                <MainActions />
            </div>
        </div>
    </div>
</template>
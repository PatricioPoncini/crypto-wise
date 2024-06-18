<script lang="ts" setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js'
import { onMounted, ref } from 'vue';
import { Line } from 'vue-chartjs';
import Spinner from '../Spinner.vue';

interface SocketData {
  bitcoin: string;
}

const bitcoinPrices = ref<number[]>([]);
const bitcoinLabels = ref<string[]>([]);
const isLoading = ref<boolean>(true);

onMounted(async () => {
  const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin')

  pricesWs.onmessage = function (msg) {
    const socketData = JSON.parse(msg.data) as SocketData;
    const price = Number(socketData.bitcoin);
    bitcoinPrices.value = [...bitcoinPrices.value, price];
    bitcoinLabels.value = [...bitcoinLabels.value, new Date().toLocaleTimeString()];
    chartData.value = updateChartData();
    isLoading.value = false;
  }
});

const {label, bgColor, title} = defineProps<{ label: string, bgColor: string, title: string }>();

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = ref<ChartData<'line'>>({
  datasets: []
});

const updateChartData = () => ({
  labels: [
    ...bitcoinLabels.value
  ],
  datasets: [
    {
      label: `${label}`,
      data: [
        ...bitcoinPrices.value
      ],
      borderColor: `${bgColor}`,
      borderWidth: 2,
      pointBackgroundColor: `${bgColor}`, 
      backgroundColor: `${bgColor}`,
      pointRadius: 0
    }
  ]
})

const chartOptions =  { 
  plugins: {
    title: {
      display: true,
      text: title,
      font: {
        size: 24
      }
    }
  },
  maintainAspectRatio: false
};
</script>

<template>
  <Spinner v-if="isLoading"/>
  <div class="h-96" v-else>
    <Line
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

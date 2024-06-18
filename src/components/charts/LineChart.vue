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
  ethereum: string;
}

const criptoCoinPrices = ref<number[]>([]);
const dateLabels = ref<string[]>([]);
const isLoading = ref<boolean>(true);
const {label, bgColor, title, coin} = defineProps<{ label: string, bgColor: string, title: string, coin: string }>();

onMounted(async () => {
  const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${coin}`)

  pricesWs.onmessage = function (msg) {
    const socketData = JSON.parse(msg.data) as SocketData;
    const price = Number(socketData.bitcoin ?? socketData.ethereum);
    criptoCoinPrices.value = [...criptoCoinPrices.value, price];
    dateLabels.value = [...dateLabels.value, new Date().toLocaleTimeString()];
    chartData.value = updateChartData();
    isLoading.value = false;
  }
});

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
    ...dateLabels.value
  ],
  datasets: [
    {
      label: `${label}`,
      data: [
        ...criptoCoinPrices.value
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
  <div class="h-[700px]" v-else>
    <Line
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

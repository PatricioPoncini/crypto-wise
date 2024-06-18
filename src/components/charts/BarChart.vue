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
} from 'chart.js'
import { onMounted, ref, watch } from 'vue';
import { Line } from 'vue-chartjs'

interface SocketData {
  bitcoin: string;
}

const bitcoinPrices = ref<number[]>([]);
const bitcoinLabels = ref<string[]>([]);

onMounted(async () => {
  const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin')

  pricesWs.onmessage = function (msg) {
    const socketData = JSON.parse(msg.data) as SocketData;
    const price = Number(socketData.bitcoin);
    bitcoinPrices.value = [...bitcoinPrices.value, price];
    bitcoinLabels.value = [...bitcoinLabels.value, new Date().toLocaleTimeString()];
    updateChartData();
  }

  // hacer peticion al historial de bitcoin e ir pusheado a ese array de numbers lo que viene por socket
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

const chartData = ref({
  labels: [] as string[], 
  datasets: [
    {
      label: label,
      data: [] as number[], 
      backgroundColor: bgColor,
      borderColor: bgColor,
      borderWidth: 2,
      pointBackgroundColor: bgColor
    },
  ],
});

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

function updateChartData() {
  chartData.value.labels = [...bitcoinLabels.value] 
  chartData.value.datasets[0].data = [...bitcoinPrices.value]; 
  chartData.value = { ...chartData.value }; 
}

watch([bitcoinPrices, bitcoinLabels], updateChartData);
</script>

<template>
  <div class="h-96">
    <Line
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

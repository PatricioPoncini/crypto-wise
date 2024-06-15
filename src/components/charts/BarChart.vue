<script lang="ts" setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const {label, bgColor, labels, title} = defineProps<{ label: string, bgColor: string, labels: string[] | number[], title: string }>();

const chartData = { 
  labels,
  datasets: [
    {
      label: `${label}`,
      data:[60, 10, 40, 25, 8, 10, 78, 70, 35, 15, 10, 9, 10],
      backgroundColor: `${bgColor}`,
      borderColor: `${bgColor}`,
      borderWidth: 2,
      pointBackgroundColor: `${bgColor}`, 
    },
    {
      label: 'BTC',
      data:  [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
      backgroundColor: '#F59E0B',
      borderColor: '#F59E0B',
      borderWidth: 2,
      pointBackgroundColor: '#F59E0B',
    },
    {
      label: 'BTC',
      data:  [20, 10, 22, 37, 100, 10, 229, 40, 20, 30, 19, 12],
      backgroundColor: '#FF0000',
      borderColor: '#FF0000',
      borderWidth: 2,
      pointBackgroundColor: '#FF0000',
    },
  ] 
};
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
  <div class="h-96">
      <Line
        :options="chartOptions"
        :data="chartData"
      />
    </div>
</template>
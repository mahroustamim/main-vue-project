<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#3b82f6',
      data: [40, 20, 12, 39, 10, 40, 39],
    },
    {
      label: 'Revenue',
      backgroundColor: '#10b981',
      data: [30, 25, 20, 35, 15, 45, 30],
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script>

<template>
  <div class="rounded-lg bg-white p-6 shadow">
    <h2 class="text-lg font-medium leading-6 text-gray-900">Sales Overview</h2>
    <div class="mt-6 h-80">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
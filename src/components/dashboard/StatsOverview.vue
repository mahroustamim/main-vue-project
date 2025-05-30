<script setup>
const stats = [
  { name: 'Total Users', value: '12,345', change: '+12%', changeType: 'positive' },
  { name: 'Revenue', value: '$34,543', change: '+8.1%', changeType: 'positive' },
  { name: 'Avg. Click Rate', value: '3.6%', change: '-1.2%', changeType: 'negative' },
  { name: 'Active Sessions', value: '1,234', change: '+4.3%', changeType: 'positive' },
]
</script>

<template>
  <div>
    <h2 class="text-lg font-medium leading-6 text-gray-900">Overview</h2>
    <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.name" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">{{ stat.name }}</dt>
        <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
          <div class="flex items-baseline text-2xl font-semibold text-primary-600">
            {{ stat.value }}
            <span class="ml-2 text-sm font-medium text-gray-500">from last week</span>
          </div>

          <div class="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
            :class="[stat.changeType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
            <span v-if="stat.changeType === 'positive'" class="text-green-700">+</span>
            <span v-else class="text-red-700">-</span>
            {{ stat.change }}
          </div>
        </dd>
      </div>
    </div>
  </div>
</template>
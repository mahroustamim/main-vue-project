<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/dashboard/Sidebar.vue'
import Header from '@/components/dashboard/Header.vue'
import StatsOverview from '@/components/dashboard/StatsOverview.vue'
import RecentActivity from '@/components/dashboard/RecentActivity.vue'
import SalesChart from '@/components/dashboard/SalesChart.vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Sidebar :open="sidebarOpen" @close="sidebarOpen = false" />
    <div class="lg:pl-64">
      <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      
      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- Page title -->
          <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          
          <!-- Stats Overview -->
          <StatsOverview class="mt-8" />
          
          <!-- Charts and Recent Activity -->
          <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <SalesChart class="lg:col-span-2" />
            <RecentActivity class="lg:col-span-1" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
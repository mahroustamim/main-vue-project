<script setup>
import { defineProps } from "vue";
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
} from "@heroicons/vue/24/outline";

defineProps({
  open: Boolean,
});

const navItems = [
  { name: "Dashboard", icon: HomeIcon, href: "#", current: true },
  { name: "Team", icon: UsersIcon, href: "#", current: false },
  { name: "Reports", icon: ChartBarIcon, href: "#", current: false },
  { name: "Documents", icon: DocumentTextIcon, href: "#", current: false },
  { name: "Settings", icon: CogIcon, href: "#", current: false },
];
</script>

<template>
    <div>
  <div class="lg:hidden">
    <!-- Mobile sidebar backdrop -->
    <div
      v-if="open"
      class="fixed inset-0 z-20 bg-gray-600 bg-opacity-75"
      @click="$emit('close')"
    />

    <!-- Mobile sidebar -->
    <div v-if="open" class="fixed inset-y-0 left-0 z-30 w-64 bg-white">
      <div class="flex h-16 items-center px-4">
        <h1 class="text-xl font-bold text-primary-600">Analytics</h1>
      </div>
      <nav class="mt-4">
        <div v-for="item in navItems" :key="item.name" class="px-2 py-2">
          <a
            :href="item.href"
            class="group flex items-center rounded-md px-2 py-2 text-sm font-medium"
            :class="
              item.current
                ? 'bg-primary-50 text-primary-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            "
          >
            <component :is="item.icon" class="mr-3 h-5 w-5 flex-shrink-0" />
            {{ item.name }}
          </a>
        </div>
      </nav>
    </div>
  </div>

  <!-- Desktop sidebar -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
    <div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
      <div class="flex h-16 flex-shrink-0 items-center px-4">
        <h1 class="text-xl font-bold text-primary-600">Analytics</h1>
      </div>
      <div class="flex flex-1 flex-col overflow-y-auto">
        <nav class="flex-1 space-y-1 px-2 py-4">
          <div v-for="item in navItems" :key="item.name">
            <a
              :href="item.href"
              class="group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              :class="
                item.current
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              "
            >
              <component :is="item.icon" class="mr-3 h-5 w-5 flex-shrink-0" />
              {{ item.name }}
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
  </div>
</template>

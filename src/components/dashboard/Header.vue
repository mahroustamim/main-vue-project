<script setup>
import { Bars3Icon, BellIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

defineEmits(['toggle-sidebar'])
</script>

<template>
  <header class="sticky top-0 z-10 bg-white shadow-sm">
    <div class="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex items-center">
        <button type="button"
          class="mr-4 rounded-md bg-white text-gray-400 lg:hidden"
          @click="$emit('toggle-sidebar')">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" />
        </button>
        
        <div class="relative flex-1">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
          </div>
          <input id="search" name="search"
            class="block w-full rounded-md border-0 bg-gray-50 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
            placeholder="Search" type="search" />
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500">
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" />
        </button>
        
        <!-- User dropdown -->
        <div class="relative ml-3">
          <div class="flex items-center">
            <div>
              <img class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
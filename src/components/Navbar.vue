<template>
  <header class="shadow-md bg-gray-700">
    <!-- ========================= desktop ======================== -->
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo -->
      <router-link
        to="/"
        class="text-3xl text-blue-500 font-bold cursor-pointer hover:text-blue-700"
      >
        Houras
      </router-link>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden bg-gray-200 px-4 py-2 rounded focus:outline-none"
      >
        ☰
      </button>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-x-20">
        <router-link to="/" class="text-white text-xl font-medium"
          >Home</router-link
        >
        <router-link
          v-if="!store.user"
          to="/register"
          class="text-white text-xl font-medium"
          >Register</router-link
        >
        <router-link
          v-if="!store.user"
          to="/login"
          class="text-white text-xl font-medium"
          >Login</router-link
        >

        <div v-if="store.user" class="flex items-center gap-20">
          <span class="text-white text-xl font-medium">{{
            store.user.name
          }}</span>
          <button
            @click="logout"
            class="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>

    <!-- ========================= mobile ======================== -->
    <!-- Mobile Nav -->
    <div v-if="isOpen" class="md:hidden bg-white px-4 pb-4">
      <nav class="flex flex-col gap-4 pt-3">
        <router-link
          to="/"
          class="text-slate-500 hover:text-slate-700 text-xl font-medium"
          >Home</router-link
        >
        <router-link
          v-if="!store.user"
          to="/register"
          class="text-slate-500 hover:text-slate-700 text-xl font-medium"
          >Register</router-link
        >
        <router-link
          v-if="!store.user"
          to="/login"
          class="text-slate-500 hover:text-slate-700 text-xl font-medium"
          >Login</router-link
        >
        <span
          v-if="store.user"
          class="text-slate-500 hover:text-slate-700 text-xl font-medium"
        >
          {{ store.user.name }}
        </span>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";

const store = useAuthStore();

const isOpen = ref(false);

const logout = () => {
  store.logout();
};
</script>

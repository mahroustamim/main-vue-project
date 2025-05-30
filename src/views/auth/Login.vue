<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAuthStore();

const data = reactive({
  email: '',
  password: '',
});

const handle = async () => {
  const success = await store.login(data);
  if (success) {
    router.push('/');
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center bg-gray-50 py-10 px-4">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
      Login to Your Account
    </h1>

    <form @submit.prevent="handle" class="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div class="mb-6">
        <label for="email" class="block mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="data.email"
          class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span v-if="store.errors.email" class="text-red-500">{{ store.errors.email[0] }}</span>
      </div>

      <div class="mb-6">
        <label for="password" class="block mb-2 font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="data.password"
          class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span v-if="store.errors.password" class="text-red-500">{{ store.errors.password[0] }}</span>
      </div>

      <div v-if="store.errors.general" class="text-red-500 mb-4">
        {{ store.errors.general[0] }}
      </div>

      <router-link 
        to="/register" 
        class="text-blue-500 underline hover:text-blue-700 hover:no-underline mb-4 block"
      >
        Register
      </router-link>

      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors duration-200"
      >
        Login
      </button>
    </form>
  </div>
</template>
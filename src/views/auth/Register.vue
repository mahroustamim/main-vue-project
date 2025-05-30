<script setup>
import {reactive} from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const store = useAuthStore();

const data = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const handleRegister = async () => {
  const success = await store.register(data);
  if(success) {
    router.push('/verify-otp');
  } 
}
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center bg-gray-50 py-10 px-4 ">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
      Create a New Account
    </h1>

    <form @submit.prevent="handleRegister" class="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div class="mb-6">
        <label for="name" class="block mb-2 font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="data.name"
          class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span v-if="store.errors.name" class="text-red-500">{{ store.errors.name[0] }}</span>
      </div>

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

      <div class="mb-6">
        <label for="password-confirmation" class="block mb-2 font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="password-confirmation"
          name="password-confirmation"
          v-model="data.password_confirmation"
          class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span v-if="store.errors.password_confirmation" class="text-red-500">{{ store.errors.password_confirmation[0] }}</span>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors duration-200"
      >
        Register
      </button>
    </form>
  </div>
</template>


<style scoped></style>
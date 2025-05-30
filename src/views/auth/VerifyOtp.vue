<script setup>
import {onMounted, reactive} from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAuthStore();

const data = reactive({
  otp: '',
});



const handle = async () => {
    const success = await store.verifyOtp(data.otp);
    if (success) {
      router.push('/');
    }
 
}
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center bg-gray-50 py-10 px-4 ">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
       Enter Verification Code
    </h1>

    <form @submit.prevent="handle" class="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">

      <p v-if="store.errors.general" class="text-red-500 mb-4">{{ store.errors.general[0] }}</p>


        <div class="mb-6">
            <!-- <label for="otp" class="block mb-2 font-medium text-gray-700">OTP</label> -->
            <input
            type="text"
            id="otp"
            name="otp"
            v-model="data.otp"
            placeholder="Enter OTP"
            class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span v-if="store.errors.otp" class="text-red-500">{{ store.errors.otp[0] }}</span>
      </div>


      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors duration-200"
      >
        Verify OTP
      </button>
    </form>
  </div>
</template>


<style scoped></style>
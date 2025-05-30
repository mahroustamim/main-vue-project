<template>
    <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/store/auth';
const store = useAuthStore();
import { useRouter } from 'vue-router';
const router = useRouter();

// onMounted(() => {
//     const checkUser = async () => {
//         await store.getUser();
//         if (!store.user) {
//             router.push('/register');
//         }
//         if (store.user && !store.user.email_verified_at) {
//             router.push('/verify-otp');
//         }
//     };

//     checkUser();
// })
</script>

<style scoped></style>

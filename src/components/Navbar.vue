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
        <router-link to="/" class="text-white text-xl font-medium">{{
          $t("home")
        }}</router-link>
        <router-link
          v-if="!store.user"
          to="/register"
          class="text-white text-xl font-medium"
          >{{ $t('register') }}</router-link
        >
        <router-link
          v-if="!store.user"
          to="/login"
          class="text-white text-xl font-medium"
          >{{ $t('login') }}</router-link
        >

        <div v-if="store.user" class="flex items-center gap-20">
          <span class="text-white text-xl font-medium">{{
            store.user.name
          }}</span>
          <button
            @click="logout"
            class="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm"
          >
            {{ $t('logout') }}
          </button>
        </div>

        <!-- Language switcher -->
        <div>
          <button
            @click="switchLanguage('ar')"
            v-if="$i18n.locale === 'en'"
            class="text-white text-xl font-medium"
          >
            {{ $t("arabic") }}
          </button>
          <button
            @click="switchLanguage('en')"
            v-if="$i18n.locale === 'ar'"
            class="text-white text-xl font-medium"
          >
            {{ $t("english") }}
          </button>
        </div>
      </nav>
    </div>

    <!-- ========================= mobile ======================== -->
    <!-- Mobile Nav -->
<div v-if="isOpen" class="md:hidden bg-slate-800 shadow-lg rounded-lg mx-4 mt-2 p-4">
  <nav class="flex flex-col gap-4">
    <!-- Home Link -->
    <router-link
      to="/"
      class="text-white hover:text-slate-200 text-lg font-medium transition-colors duration-200"
      active-class="text-blue-400"
      @click="isOpen = false"
    >
      {{ $t('home') }}
    </router-link>

    <!-- Auth Links -->
    <template v-if="!store.user">
      <router-link
        to="/register"
        class="text-white hover:text-slate-200 text-lg font-medium transition-colors duration-200"
        active-class="text-blue-400"
        @click="isOpen = false"
      >
        {{ $t('register') }}
      </router-link>
      <router-link
        to="/login"
        class="text-white hover:text-slate-200 text-lg font-medium transition-colors duration-200"
        active-class="text-blue-400"
        @click="isOpen = false"
      >
        {{ $t('login') }}
      </router-link>
    </template>

    <!-- User Section -->
    <div v-if="store.user" class="flex flex-col gap-4 pt-2 border-t border-slate-700">
      <div class="flex items-center justify-between">
        <span class="text-white text-lg font-medium truncate">
          {{ store.user.name }}
        </span>
        <button
          @click="logout"
          class="text-white bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
        >
          {{ $t('logout') }}
        </button>
      </div>
    </div>

    <!-- Language Switcher -->
    <div class="flex gap-4 pt-2 border-t border-slate-700">
      <button
        @click="switchLanguage('ar')"
        v-if="$i18n.locale === 'en'"
        class="text-white hover:text-slate-200 text-lg font-medium transition-colors duration-200"
      >
        {{ $t('arabic') }}
      </button>
      <button
        @click="switchLanguage('en')"
        v-if="$i18n.locale === 'ar'"
        class="text-white hover:text-slate-200 text-lg font-medium transition-colors duration-200"
      >
        {{ $t('english') }}
      </button>
    </div>
  </nav>
</div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const store = useAuthStore();

const isOpen = ref(false);

const logout = () => {
  store.logout();
};

const switchLanguage = async (lang) => {
  try {
    const res = await fetch("/api/set-locale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ locale: lang }),
    });

    if (res.ok) {
      locale.value = lang;
      localStorage.setItem("lang", lang);

      // Optional: Reload the page if you need server-side changes
      // window.location.reload();
    } else {
      const result = await res.json();
      console.error("Language switch failed:", result.message);
      // Handle error (show toast/notification)
    }
  } catch (error) {
    console.error("Network error:", error);
    // Handle network error
  }
};
</script>

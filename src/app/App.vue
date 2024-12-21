<template>
  <BackgroundAnimation />
  <RouterView v-slot="{ Component, route }">
    <Transition appear :name="route.meta.transition as string || 'fade'" mode="out-in">
      <component :is="Component" v-if="isLoaded" />
    </Transition>
  </RouterView>
</template>

<script setup lang="ts">
import '@/app/styles/global.scss';
import { BackgroundAnimation } from '@/widgets/background-animation';
import { Transition } from 'vue';
import { RouterView } from 'vue-router';
import { useInitialLoad } from '@/shared/lib/use-initial-load';

const isLoaded = useInitialLoad();
</script>

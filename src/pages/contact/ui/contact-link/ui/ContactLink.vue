<template>
  <a :href target="_blank" :class="[{ [styles.mainContact]: isPrimaryContact }, styles.contact]">
    {{ title }}
    <span :class="styles.sub">{{ subtitle }}</span>
  </a>
</template>
<script setup lang="ts">
import styles from './styles.module.scss';
defineProps<{
  href: string;
  title: string;
  subtitle: string;
  isPrimaryContact: boolean;
}>()
</script>

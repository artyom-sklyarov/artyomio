<template>
  <a :href="link" target="_blank" :class="styles.item">
  <div :class="styles.desc">
  <p>{{ title }}</p>
  <p :class="[styles.descText, styles.type]">{{ description }}</p>
  </div>
  <div :class="styles.caseLink">
  <a :class="styles.descText">
      →
  </a>
  </div>
</a>
</template>
<script setup lang="ts">
import styles from './styles.module.scss';

defineProps<{
  title: string;
  link: string;
  description: string;
}>();
</script>

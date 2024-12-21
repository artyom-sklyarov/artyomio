<template>
  <div :class="styles.container">
    <nav-bar />
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { NavBar } from '@/widgets/navbar';
import styles from './styles.module.scss';
</script>

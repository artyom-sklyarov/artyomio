<template>
  <section :class="styles.main">
    <h1>
      <span :class="styles.wave">{{ greeting }}</span>
      <br />{{ title }}
      <RouterLink to="/contacts" />
    </h1>
    <RouterLink to="/contacts">
      <button :class="styles.work">
        <a>{{ workWithMe }}</a>
      </button>
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { TEXTS } from '@/shared/config';
import styles from './styles.module.scss';

const { homePage: { greeting, headline: title }, navBar: { workWithMe } } = TEXTS
</script>

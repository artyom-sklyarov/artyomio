<template>
  <section :class="styles.main">
    <h1>
      <!-- <span :class="styles.wave">{{ greeting }}</span> -->
      software engineer <br/> previously worked at veon, ingos, tass.com<br/>
      <a :class="styles.resume" href="/cv.pdf"> resume</a>
      <RouterLink to="/contacts" />
    </h1>
  </section>
</template>

<script setup lang="ts">
import { TEXTS } from '@/shared/config';
import styles from './styles.module.scss';

const { navBar: { workWithMe } } = TEXTS
</script>

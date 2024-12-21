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
import styles from './styles.module.scss';
import { TEXTS } from '@/shared/config';

const { homePage: { greeting, title }, navBar: { workWithMe } } = TEXTS
</script>

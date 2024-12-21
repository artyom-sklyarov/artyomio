<template>
  <nav :class="styles.nav">
    <div :class="styles.logo">
      <RouterLink to="/">
        <div :class="styles.homeLink">
          <img src="/avatar.png" width="40" heigt="40" />
          <a>{{ name }}</a>
        </div>
      </RouterLink>
    </div>
    <div :class="styles.links">
      <a v-for="social in socials" :class="styles.link" :href="social.link" target="_blank" :key="social.label">
        {{ social.label }}
      </a>
      <div :class="styles.work">
        <RouterLink to="/contacts">
          <button>
            <a>{{ workWithMe }}</a>
          </button>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { TEXTS } from '@/shared/config';
import { RouterLink } from 'vue-router';
import styles from './styles.module.scss';

const { navBar: { name, workWithMe, socials } } = TEXTS;
</script>

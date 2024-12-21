<template>
    <section :class="styles.main">
      <h1>
        <br />
        {{ title }} <br />
        <ContactLink :href="telegram.username" :title="telegram.username" :subtitle="telegram.label" :isPrimaryContact="true" />
        <ContactLink :href="email.address" :title="email.address" :subtitle="email.label" :isPrimaryContact="false" />
        <RouterLink to="/">
          <button :class="styles.work">
            <a>{{ goBack }}</a>
          </button>
        </RouterLink>
      </h1>
    </section>
</template>

<script setup lang="ts">
import { TEXTS } from '@/shared/config';
import styles from './styles.module.scss';
import { RouterLink } from 'vue-router';
import { ContactLink } from '../../contact-link';

const { contactPage: { title, telegram, email, goBack } } = TEXTS;
</script>

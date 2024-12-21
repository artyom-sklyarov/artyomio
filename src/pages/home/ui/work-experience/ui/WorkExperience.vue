<template>
  <section :class="styles.details">
    <h2>{{ title }}</h2>
    <WorkExperienceItem v-for="(item, index) in experience" :key="index" :title="item.title" :link="item.link"
      :description="item.description" />
  </section>
</template>

<script setup lang="ts">
import { WorkExperienceItem } from '@/pages/home/ui/work-experience/work-experience-item';
import { TEXTS } from '@/shared/config';
import styles from './styles.module.scss';

const { workExperience: { title, experience } } = TEXTS;
</script>

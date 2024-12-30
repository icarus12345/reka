<script lang="ts">
import type { BaseSeparatorProps } from '../utilities/component/BaseSeparator.vue'

export interface SeparatorProps extends BaseSeparatorProps {}
</script>

<script setup lang="ts">
import BaseSeparator from '../utilities/component/BaseSeparator.vue'

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <BaseSeparator v-bind="props">
    <slot />
  </BaseSeparator>
</template>

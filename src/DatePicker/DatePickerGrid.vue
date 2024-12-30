<script lang="ts">
import { CalendarGrid, type CalendarGridProps } from '../Calendar'

export interface DatePickerGridProps extends CalendarGridProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerGridProps>()
</script>

<template>
  <CalendarGrid v-bind="props">
    <slot />
  </CalendarGrid>
</template>

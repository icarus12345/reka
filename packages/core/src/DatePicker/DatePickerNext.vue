<script lang="ts">
import { CalendarNext, type CalendarNextProps } from '../Calendar'

export interface DatePickerNextProps extends CalendarNextProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerNextProps>()
</script>

<template>
  <CalendarNext v-bind="props">
    <slot />
  </CalendarNext>
</template>

<script lang="ts">
import { CalendarGridBody, type CalendarGridBodyProps } from '../Calendar'

export interface DatePickerGridBodyProps extends CalendarGridBodyProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerGridBodyProps>()
</script>

<template>
  <CalendarGridBody v-bind="props">
    <slot />
  </CalendarGridBody>
</template>

<script lang="ts">
import { CalendarHeader, type CalendarHeaderProps } from '../Calendar'

export interface DatePickerHeaderProps extends CalendarHeaderProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerHeaderProps>()
</script>

<template>
  <CalendarHeader v-bind="props">
    <slot />
  </CalendarHeader>
</template>

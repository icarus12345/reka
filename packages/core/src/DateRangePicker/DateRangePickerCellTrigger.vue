<script lang="ts">
import { RangeCalendarCellTrigger, type RangeCalendarCellTriggerProps } from '../RangeCalendar'

export interface DateRangePickerCellTriggerProps extends RangeCalendarCellTriggerProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerCellTriggerProps>()
</script>

<template>
  <RangeCalendarCellTrigger v-bind="props">
    <slot />
  </RangeCalendarCellTrigger>
</template>

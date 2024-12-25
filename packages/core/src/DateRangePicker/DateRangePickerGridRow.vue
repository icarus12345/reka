<script lang="ts">
import { RangeCalendarGridRow, type RangeCalendarGridRowProps } from '../RangeCalendar'

export interface DateRangePickerGridRowProps extends RangeCalendarGridRowProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerGridRowProps>()
</script>

<template>
  <RangeCalendarGridRow v-bind="props">
    <slot />
  </RangeCalendarGridRow>
</template>

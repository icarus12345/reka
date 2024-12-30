<script lang="ts">
import { RangeCalendarPrev, type RangeCalendarPrevProps } from '../RangeCalendar'

export interface DateRangePickerPrevProps extends RangeCalendarPrevProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerPrevProps>()
</script>

<template>
  <RangeCalendarPrev v-bind="props">
    <slot />
  </RangeCalendarPrev>
</template>

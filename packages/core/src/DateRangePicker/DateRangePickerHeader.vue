<script lang="ts">
import { RangeCalendarHeader, type RangeCalendarHeaderProps } from '../RangeCalendar'

export interface DateRangePickerHeaderProps extends RangeCalendarHeaderProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerHeaderProps>()
</script>

<template>
  <RangeCalendarHeader v-bind="props">
    <slot />
  </RangeCalendarHeader>
</template>

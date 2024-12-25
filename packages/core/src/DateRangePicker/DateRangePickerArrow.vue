<script lang="ts">
import { PopoverArrow, type PopoverArrowProps } from '../Popover'

export interface DateRangePickerArrowProps extends PopoverArrowProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerArrowProps>()
</script>

<template>
  <PopoverArrow v-bind="props">
    <slot />
  </PopoverArrow>
</template>

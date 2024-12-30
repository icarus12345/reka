<script lang="ts">
import { PopoverArrow, type PopoverArrowProps } from '../Popover'

export interface DatePickerArrowProps extends PopoverArrowProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerArrowProps>()
</script>

<template>
  <PopoverArrow v-bind="props">
    <slot />
  </PopoverArrow>
</template>

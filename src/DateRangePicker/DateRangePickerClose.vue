<script lang="ts">
import { PopoverClose, type PopoverCloseProps } from '../Popover'

export interface DateRangePickerCloseProps extends PopoverCloseProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerCloseProps>()
</script>

<template>
  <PopoverClose v-bind="props">
    <slot />
  </PopoverClose>
</template>

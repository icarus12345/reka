<script lang="ts">
import { PopoverAnchor, type PopoverAnchorProps } from '../Popover'

export interface DateRangePickerAnchorProps extends PopoverAnchorProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerAnchorProps>()
</script>

<template>
  <PopoverAnchor v-bind="props">
    <slot />
  </PopoverAnchor>
</template>

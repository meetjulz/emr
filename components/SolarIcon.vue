<template>
  <icon
    :name="getName()"
    :class="[
      getTextSize(),
    ]"
  />
</template>

<script setup lang="ts">
  import type { TSize, TSolarIconVariant } from '~/shims'

  interface Props {
    size?: TSize
    variant?: TSolarIconVariant
    name: string
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'xl',
    variant: 'bold-duotone',
    name: '',
  })

  // methods
  function getTextSize(): string {
    const textSizes: { [key in TSize]: `text-${TSize}` } = {
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
    }
    return props.size ? textSizes[props.size] : ''
  }
  function getName(): string {
    return `solar:${props.name}-${props.variant}`
  }
</script>

<style scoped>

</style>

<template>
  <icon
    :name="getName()"
    :class="[
      getTextSize(),
    ]"
  />
</template>

<script setup lang="ts">
  interface Props {
    // eslint-disable-next-line perfectionist/sort-union-types
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    variant?: 'bold' | 'bold-duotone' | 'broken' | 'line-duotone' | 'linear' | 'outline'
    name: string
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'xl',
    variant: 'bold-duotone',
    name: '',
  })

  // methods
  function getTextSize(): string {
    return `text-${props.size}`
  }
  function getName(): string {
    return `solar:${props.name}-${props.variant}`
  }
</script>

<style scoped>

</style>

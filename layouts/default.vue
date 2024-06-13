<template>
  <div>
    <Drawer>
      <template #drawerSide>
        <Menu />
      </template>

      <div>
        <slot />
      </div>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>

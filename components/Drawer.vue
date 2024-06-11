<template>
  <div class="drawer lg:drawer-open">
    <input
      type="checkbox"
      id="my-drawer-2"
      class="drawer-toggle"
    >
    <div class="drawer-content">
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      <slot />
    </div>

    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay" aria-label="close sidebar" />
      <slot name="drawerSide" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>

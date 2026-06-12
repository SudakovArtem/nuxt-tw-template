<script setup lang="ts">
defineOptions({
  name: 'BaseLayout'
})
</script>

<template>
  <div class="layout flex min-h-screen flex-col">
    <header class="layout__header">
      <slot name="header" />
    </header>
    <main class="layout__wrapper relative flex flex-auto flex-col bg-inherit">
      <slot name="content" />
    </main>
    <footer class="layout__footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

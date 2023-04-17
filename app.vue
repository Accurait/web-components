<template>
  <div>
    <Button @click="onClick">Test</Button>  
  </div>
</template>

<script setup lang="ts">

function onClick() {
  console.log('clicked')
}
</script>

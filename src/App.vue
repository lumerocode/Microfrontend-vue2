<script setup>
import HelloWorld from './components/HelloWorld.vue'
import FormTest from './components/FormTest.vue'
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <!-- <HelloWorld msg="You did it!" /> -->
        <FormTest/>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script setup lang="js">
  import { ref } from 'vue'

</script>

<template>
  <main>
    <h3>DevTools Page</h3>
  </main>
</template>

<style>
  :root {
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;

    color-scheme: light dark;
    background-color: #242424;
  }

  @media (prefers-color-scheme: light) {
    :root {
      background-color: #fafafa;
    }

    a:hover {
      color: #42b983;
    }
  }

  body {
    min-width: 20rem;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h3 {
    color: #42b983;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 1.2rem;
    margin: 2rem auto;
  }

  a {
    font-size: 0.5rem;
    margin: 0.5rem;
    color: #cccccc;
    text-decoration: none;
  }
</style>
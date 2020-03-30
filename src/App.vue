<template>
  <div id="app">
    <siteHeader/>
    <router-view/>
    <site-footer/>
  </div>
</template>

<script>
  import siteHeader from './components/header'
  import siteFooter from './components/footer'

  export default {
    components: {
      siteHeader,
      siteFooter
    }
  }
</script>

<style>


</style>

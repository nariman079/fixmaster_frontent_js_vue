<template>
  
  <div class="wrapper">
    <cHeader/>
    <router-view class="main"></router-view>
    <cFooter/>
  </div>
  
</template>

<script>
import cHeader from './components/cHeader.vue'
import cFooter from './components/cFooter.vue'
export default {
  name: 'App',
  components : {
    cHeader,
    cFooter
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}

cFooter {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
} 

</style>

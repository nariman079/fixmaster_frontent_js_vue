<template>
  <cHeader/>
  <router-view></router-view>
  <cFooter/>
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
#app{
  margin: 0;
  padding: 0;

}
body{
  margin: 0;
  padding: 0;
  
}
a{
  text-decoration: none;
  color: black;

}
hr{
  border: 1px solid;
}

*{
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s ease;
}
.container{
  margin: 0px 200px;
  
}


.block-title{
  font-size: 30px;
  font-weight: 600;
}
.article{
  margin-top: 40px;
}
</style>

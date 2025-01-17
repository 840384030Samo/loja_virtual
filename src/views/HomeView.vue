<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SimuladorPage/>
    <DestinosPage/>
    <CarrousselComp/>
  </div>
</template>

<script>
import CarrousselComp from '@/components/carrousselComp.vue';
import DestinosPage from '@/components/DestinosPage.vue';
import SimuladorPage from '@/components/SimuladorPage.vue';

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    SimuladorPage,
    DestinosPage,
    CarrousselComp
    
  }
}
</script>

<template>
  <div id="app">
    <router-view />
    <Footer v-if="showFooter" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import Footer from './components/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class App extends Vue {
  showFooter = false;

  @Watch('$route')
  routeChanged(val: Route) {
    if (['Movie', 'Me', 'Information', 'Cinema'].some((ele) => val.name === ele)) {
      this.showFooter = true;
    } else this.showFooter = false;
  }
}
</script>

<style lang="scss">
#app {

}
</style>

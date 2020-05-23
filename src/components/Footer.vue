<template>
  <div class="footer">
    <div v-for="(item, index) in footerList" :key="index"
      :class="tabIndex===index?'ft-selected':''"
      @click="toLink(index, item.pathName)">
      <span class="iconfont" v-html="item.icon"></span>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface FooterListInterface {
  icon: string;
  name: string;
  pathName: string;
}

@Component
export default class Footer extends Vue {
  footerList: Array<FooterListInterface> = [
    {
      icon: '&#xe8ae;',
      name: '电影',
      pathName: '/',
    },
    {
      icon: '&#xe8c0;',
      name: '影院',
      pathName: '/cinema',
    },
    {
      icon: '&#xe771;',
      name: '资讯',
      pathName: '/information',
    },
    {
      icon: '&#xe728;',
      name: '我的',
      pathName: '/me',
    },
  ]

  tabIndex = 0

  toLink(index: number, pathName: string) {
    this.tabIndex = index;
    this.$router.push(pathName);
  }
}
</script>

<style lang="scss">
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-around;
  div {
    width: 100%;
    height: 100px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span:first-child { margin-bottom: 6px; }
  }
}
</style>

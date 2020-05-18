<template>
  <div class="footer">
    <div v-for="(item, index) in footerList" :key="index"
      :class="tabIndex===index?'ft-selected':''"
      @click="tabIndex=index">
      <img :src="item.imgUrl" alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface FooterListInterface {
  imgUrl: string;
  name: string;
}

@Component
export default class Footer extends Vue {
  footerList: Array<FooterListInterface> = [
    {
      imgUrl: '',
      name: '电影',
    },
    {
      imgUrl: '',
      name: '影院',
    },
    {
      imgUrl: '',
      name: '资讯',
    },
    {
      imgUrl: '',
      name: '我的',
    },
  ]

  tabIndex = 0
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>

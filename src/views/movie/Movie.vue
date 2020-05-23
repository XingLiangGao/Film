<template>
  <div class="movie">
    <!-- tab -->
    <div class="tab">
      <span v-for="(item, index) in tabList" :key="index"
      @click="switchTab(index)"
      :class="tabIndex===index?'ft-selected br-selected select-border':''">{{item}}</span>
    </div>
    <!-- 列表 -->
    <div class="list">
      <template v-for="(item, index) in itemList">
        <ListItem :key="index" :item="item" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListItem from '@/components/MovieListItem.vue';
import movie from '@/api/movie';
import { ItemListInterface } from './types';

@Component({
  components: {
    ListItem,
  },
})
export default class Movie extends Vue {
  tabList: Array<string> = ['正在热映', '即将上映']

  tabIndex = 0

  itemList: Array<ItemListInterface> = [
    {
      imgUrl: '',
      title: '中国合伙人',
      star: '暂无主演',
      detail: '',
    },
  ]

  mounted(): void {
    movie.comingSoon({
      cityId: 110100,
      pageNum: 1,
      pageSize: 10,
      type: 1,
      k: 1644298,
    })
      .then((res: any) => {
        console.log(this);
      });
  }

  switchTab(index: number) {
    this.tabIndex = index;
  }
}
</script>

<style lang="scss">
.tab {
  display: flex;
  justify-content: space-around;
  span {
    display: block;
    width: 100%;
    text-align: center;
    line-height: 100px;
    font-size: 28px;
  }
}
</style>

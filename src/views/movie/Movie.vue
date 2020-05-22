<template>
  <div class="movie">
    <!-- tab -->
    <div class="tab">
      <span v-for="(item, index) in tabList" :key="index"
      :class="tabIndex">{{item}}</span>
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
}
</script>

<style lang="scss">
.tab {
  display: flex;
  justify-content: space-around;
}
</style>

<template>
  <div class="movie">
    <!-- tab -->
    <div class="tab">
      <span v-for="(item, index) in tabList" :key="index"
      @click="switchTab(index)"
      :class="tabIndex===index?'ft-selected br-selected select-border':''">{{item}}</span>
    </div>
    <!-- 正在热映列表 -->
    <div class="list" v-show="tabIndex == 0">
      <template class="item-movie" v-for="(item, index) in inTheatersList">
        <ListItem :key="index" :item="item" />
      </template>
    </div>
    <!-- 即将上映列表 -->
    <div class="list" v-show="tabIndex == 1">
      <template class="item-movie" v-for="(item, index) in comingSoonList">
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

  inTheatersList: Array<ItemListInterface> = []

  comingSoonList: Array<ItemListInterface> = []

  mounted(): void {
    // movie.comingSoon({
    //   cityId: 110100,
    //   pageNum: 1,
    //   pageSize: 10,
    //   type: 1,
    //   k: 1644298,
    // })
    //   .then((res: any) => {
    //     console.log(this);
    //   });
    movie.inTheaters().then((res) => {
      console.log(this);
      console.log(res);
      console.log(res.data.subjects);
      this.inTheatersList = res.data.subjects;
    });
    movie.comingSoon().then((res) => {
      console.log(this);
      console.log(res);
      console.log(res.data.subjects);
      this.comingSoonList = res.data.subjects;
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

<template>
  <div class="list-item">
    <img src="" alt="">
    <div>
      <p><span>{{$props.item.title}}</span><img src="" alt=""></p>
      <span>观众评分</span>
      <span>主演：{{$props.item.star}}</span>
      <span></span>
    </div>
    <button>购票</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ItemListInterface } from '@/views/movie/types';

@Component
export default class MovieListItem extends Vue {
  @Prop(Object) readonly item!: ItemListInterface
}
</script>

<style lang="scss">
.list-item {
  display: flex;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
  }
}
</style>

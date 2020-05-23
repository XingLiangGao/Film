<template>
  <div class="list-item">
    <img class="moiveImg" :src="$props.item.images.small" alt="">
    <div>
      <p><span>{{$props.item.title}}</span><img src="" alt=""></p>
      <span>观众评分: {{$props.item.rating.average}}</span>
      <span>主演：{{$props.item.casts[0].name}}</span>
      <span></span>
    </div>
    <button class="buy-btn">购票</button>
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
  margin-bottom: 20px;
  flex-direction: column;
  .moiveImg {
    width: 135px;
    height: 200px;
    display: block;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  .buy-btn {
    display: block;
    text-align: left;
  }
}
</style>

<template>
  <div class="easy-list">
    <EasyImage v-for="item in imgData.list" class="easy-item" :imgSrc="item.image" :title="item.title" :description="item.description"></EasyImage>
  </div>
</template>

<script>
import EasyImage from './components/easy-image.vue'
import imgData from './images.json'

export default {
  components: {
    EasyImage
  },
  data() {
    return {
      imgData
    }
  }
}
</script>

<style scoped>
.easy-list {
  column-count: 1;
  column-gap: 15px;
}

.easy-item {
  margin-bottom: 10px;
}

@media (min-width: 425px) {
  .easy-list {
    column-count: 2;
  }
}

@media (min-width: 768px) {
  .easy-list {
    column-count: 3;
  }
}

@media (min-width: 1440px) {
  .easy-list {
    column-count: 4;
  }
}

</style>

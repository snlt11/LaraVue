<template>
  <Slider
    :categories="categories"
    :allSubcategories="allSubcategories"
  ></Slider>
  <div v-for="tag in tags" :key="tag.id">
    <div class="row">
      <div
        class="col-md-3 p-5 m-5"
        v-for="product in tag.products"
        :key="product.created_at"
      >
        <h2>{{ tag.name }}</h2>
        <div class="card" style="width: 18rem">
          <img
            :src="assetsUrl + product.images.split(',')[0]"
            class="card-img-top"
            alt="..."
            style="width: 287px; height: 287px"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              {{ product.description }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import mixins from "@/mixins/mixins.js";
export default {
  components: { Slider },
  mixins: [mixins],
  data() {
    return {
      categories: [],
      allSubcategories: [],
      tags: [],
      assetsUrl: this.$assetsUrl,
    };
  },
  async beforeMount() {
    this.categories = await this.loadData(this.$baseUrl + "categories");
    this.allSubcategories = await this.loadData(
      this.$baseUrl + "allSubcategories"
    );
    this.tags = await this.loadData(this.$baseUrl + "tags");
    for (let tag of this.tags) {
      tag.products = await this.loadData(this.$baseUrl + "tag/" + tag.id);
    }
    console.log(this.tags);
  },
};
</script>

<style></style>

<template>
  <div v-if="loaded">
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
          <h2>
            <span>{{ tag.name }}</span>
            <router-link
              class="float-end"
              :to="'products/productByTagId/' + tag.id"
              >
              <a href="#" class="btn btn-primary">more</a>
              </router-link
            >
          </h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="d-flex justify-content-md-center align-items-center vh-100"
  >
    <div class="loader"></div>
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
      loaded: false,
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
    this.loaded = true;
  },
};
</script>

<style>
.loader {
  width: 120px;
  height: 120px;
  border: 16px solid rgb(139, 162, 212);
  border-radius: 50%;
  border-top: 16px solid rgb(6, 56, 79);
  border-right: 16px solid rgb(18, 147, 206);
  border-bottom: 16px solid rgb(39, 50, 154);
  animation: spinner 1s linear infinite;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

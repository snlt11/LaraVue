<template>
  <div class="row my-2 p-5 m-5">
    <div class="col-md-3">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="subcategory in allSubcategories"
          :key="subcategory.id"
        >
          {{ subcategory.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-9">
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(category, index) in categories"
            :key="category.id"
            :class="{ active: index === 0 }"
          >
            <img
              :src="assetsUrl + category.image"
              class="d-block w-100"
              alt="Image"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins";

export default {
  mixins: [mixins],
  props: ["categories", "allSubcategories"],
  data() {
    return {
      assetsUrl: this.$assetsUrl,
    };
  },
};
</script>

<style></style>

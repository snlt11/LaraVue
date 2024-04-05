<template>
  <div class="row my-5 p-5">
    <div class="col-md-3" v-for="product in products" :key="product.id">
      <div class="card">
        <img
          :src="assetsUrl + product.images.split(',')[0]"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <button class="btn btn-primary" @click="addToCart(product)">
            <i class="material-icons">shopping_cart</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins";
export default {
  mixins: [mixins],
  data() {
    return {
      id: null,
      name: null,
      products: [],
      assetsUrl: this.$assetsUrl,
    };
  },
  methods: {
    async loadProducts() {
      let url = this.$baseUrl + this.name + "/" + this.id;
      let response = await this.loadData(url);
      this.products = response.data;
      //   console.log(this.products);
    },
    addToCart(product) {
      let pds = localStorage.getItem("products");
      let productArray = pds ? JSON.parse(pds) : [];
      if (productArray.length > 0) {
        for (let pd of productArray) {
          if (pd.id == product.id) {
            alert("Product already added to cart");
            return;
          }
        }
      }
      product.count = 1;
      productArray.push(product);
      localStorage.setItem("products", JSON.stringify(productArray));
      this.$emit("changeProductCount");
      console.log(productArray);
    },
  },
  beforeMount() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.loadProducts();
  },
};
</script>

<style></style>

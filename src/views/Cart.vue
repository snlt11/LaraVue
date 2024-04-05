<template>
  <div class="my-5 p-5 m-5">
    <h1>My cart</h1>
    <table class="table">
      <thead class="table-dark text-white">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">File</th>
          <th scope="col">Colors</th>
          <th scope="col">Price</th>
          <th scope="col">Counts</th>
          <th scope="col">Total</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>
            <img
              :src="assetsUrl + product.images.split(',')[0]"
              alt="hello"
              style="width: 150px; height: 150px"
            />
          </td>
          <td>{{ product.sizes }}</td>
          <td>{{ product.colors }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button class="btn btn-warning btn-sm">
              <i
                class="material-icons"
                @click="
                  changeProductCount(
                    product.id,
                    product.count > 1 ? product.count - 1 : 1
                  )
                "
                >remove</i
              >
            </button>
            {{ product.count }}
            <button class="btn btn-primary btn-sm">
              <i
                class="material-icons"
                @click="changeProductCount(product.id, product.count + 1)"
                >add</i
              >
            </button>
          </td>
          <td>
            {{ product.count * product.price }}
          </td>
          <td>
            <button class="btn btn-danger btn-sm">
              <i class="material-icons" @click="removeProduct(product.id)"
                >delete</i
              >
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      assetsUrl: this.$assetsUrl,
    };
  },
  methods: {
    loadAllProduct() {
      let data = localStorage.getItem("products");
      this.products = data ? JSON.parse(data) : [];
    },
    changeProductCount(id, count) {
      let data = localStorage.getItem("products");
      let productChange = JSON.parse(data);
      productChange.forEach((product) => {
        if (product.id == id) {
          product.count = count;
        }
      });
      localStorage.setItem("products", JSON.stringify(productChange));
      this.loadAllProduct();
    },
    removeProduct(id) {
      let data = localStorage.getItem("products");
      let productChange = JSON.parse(data);
      productChange.forEach(product => {
        if(product.id == id){
            let index = productChange.indexOf(product);
            productChange.splice(index,1);
        }
      });
      localStorage.setItem("products", JSON.stringify(productChange));
      this.loadAllProduct();
      this.$emit("changeProductCount")
    },
  },
  beforeMount() {
    this.loadAllProduct();
  },
};
</script>

<style></style>

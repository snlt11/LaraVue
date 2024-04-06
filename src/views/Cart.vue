<template>
  <div class="my-5 p-5 m-5">
    <h1>My cart</h1>
    <table class="table">
      <thead class="table-dark text-white">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Sizes</th>
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
              alt="test"
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
        <tr>
          <td colspan="5"><h3 class="float-end">Grand Total</h3></td>
          <td colspan="2">
            <h3>{{ grandTotal }}</h3>
          </td>
        </tr>
        <tr>
          <td colspan="5"><h3 class="float-end">Bill Out</h3></td>
          <td colspan="2">
            <button class="btn btn-success btn-sm" @click="checkOut">
              <i class="material-icons">attach_money</i>
              <span>CheckOut</span>
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
      grandTotal: 0,
    };
  },
  methods: {
    loadAllProduct() {
      let data = localStorage.getItem("products");
      this.products = data ? JSON.parse(data) : [];
      this.grandTotal = 0;
      this.products.forEach((product) => {
        this.grandTotal += product.count * product.price;
      });
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
      productChange.forEach((product) => {
        if (product.id == id) {
          let index = productChange.indexOf(product);
          productChange.splice(index, 1);
        }
      });
      localStorage.setItem("products", JSON.stringify(productChange));
      this.loadAllProduct();
      this.$emit("changeProductCount");
    },
    async checkOut() {
      let token = localStorage.getItem("token");
      if (token) {
        let data = localStorage.getItem("products");
        let productChange = JSON.parse(data);
        if(productChange.length > 0){
          let productArray = [];
          productChange.forEach(product => {
            productArray.push({id: product.id, count: product.count})
          });
          
          let sendData = {orders: productChange};
          let response = await fetch(this.$baseUrl+"order", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer${token}`,
          },
          body: JSON.stringify(sendData),
          });
          let responseData = await response.json();
          if(responseData.conditions){
            localStorage.removeItem('products');
            this.$emit('changeProductCount')
            this.$router.push({name: 'Home'})
            alert(responseData.message);
          }else{
            alert(responseData.message);
          }
        }
      } else {
        this.$router.push({ name: "Login" });
      }
    },
  },
  beforeMount() {
    this.loadAllProduct();
  },
};
</script>

<style></style>
import Login from './Login.vue';


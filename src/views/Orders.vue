<template>
  <div class="my-5 p-5 m-5">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="order in orders" :key="order.id">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + order.id"
            aria-expanded="true"
            :aria-controls="'collapse' + order.id"
          >
           Order Id {{ order.id }}
          </button>
        </h2>
        <div
          :id="'collapse' + order.id"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <table class="table table-bordered">
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
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in order.order_items" :key="product.id">
                  <td scope="col">{{ product.id }}</td>
                  <td scope="col">{{ product.name }}</td>
                  <td>
                    <img
                      :src="assetsUrl + product.images.split(',')[0]"
                      alt="test"
                      style="width: 150px; height: 150px"
                    />
                  </td>
                  <td scope="col">{{ product.size }}</td>
                  <td scope="col">{{ product.color }}</td>
                  <td scope="col">{{ product.price }}</td>
                  <td scope="col">{{ product.count }}</td>
                  <td scope="col">{{ product.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      assetsUrl: this.$assetsUrl,
    };
  },
  methods: {
    async loadOrders(token) {
      let response = await fetch(this.$baseUrl + "myOrder", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer${token}`,
        },
      });
      let responseData = await response.json();
      if (responseData.conditions) {
        this.orders = responseData.data;
        console.log(responseData.data);
      } else {
        this.orders = [];
      }
    },
  },
  beforeMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.loadOrders(token);
    } else {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style></style>

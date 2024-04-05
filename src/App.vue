<template>
  <Nav :AuthUser="AuthUser" :cartCount="cartCount"></Nav>
  <div>
    <router-view :AuthUser="AuthUser" @changeLoginStatus="changeLoginStatus" @changeProductCount="changeProductCount" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  components: { Nav },
  data() {
    return {
      AuthUser: false,
      cartCount : 0,
    };
  },
  methods: {
    changeLoginStatus() {
      this.AuthUser = !this.AuthUser;
    },
    changeProductCount() {
      let data = localStorage.getItem("products");
      let array = data ? JSON.parse(data) : [];
      this.cartCount = array.length
    },
  },
  beforeMount(){
    this.changeProductCount();
  }
};
</script>

<style></style>

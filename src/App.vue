<template>
  <Nav :AuthUser="AuthUser" :cartCount="cartCount"  @changeLoginStatus="changeLoginStatus"></Nav>
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
    changeLoginStatus(data) {
      this.AuthUser = data;
    },
    changeProductCount() {
      let data = localStorage.getItem("products");
      let array = data ? JSON.parse(data) : [];
      this.cartCount = array.length
    },
  },
  beforeMount(){
    let token = localStorage.getItem("token");
    if(token){
      this.AuthUser = true;
    }
    this.changeProductCount();
  }
};
</script>

<style></style>

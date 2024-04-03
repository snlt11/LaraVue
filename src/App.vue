<template>
  <Nav :AuthUser="AuthUser"></Nav>
  <div>
    <router-view :AuthUser="AuthUser" @changeLoginStatus="changeLoginStatus" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  components: { Nav },
  data() {
    return {
      AuthUser: false,
    };
  },
  methods: {
    changeLoginStatus() {
      this.AuthUser = !this.AuthUser;
    },
  },
};
</script>

<style></style>

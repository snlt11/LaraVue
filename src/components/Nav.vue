<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <router-link class="dropdown-item text-white" to="/">
        <i class="material-icons me-2">home</i>
        <span>LaraVue</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/orders">
              <span>Orders</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="btn btn-light position-relative">
              <i class="material-icons">shopping_cart</i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ cartCount }}
              </span>
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li v-if="AuthUser">
                <button class="dropdown-item" @click="logoutUser">
                  Logout
                </button>
              </li>
              <div v-else>
                <li>
                  <router-link class="dropdown-item" to="/login">
                    Login
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/register">
                    Register
                  </router-link>
                </li>
              </div>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["AuthUser", "cartCount"],
  methods: {
    logoutUser() {
      localStorage.removeItem("token");
      this.$emit("changeLoginStatus", false);
    },
  },
};
</script>

<style></style>

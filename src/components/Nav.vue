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
            <a class="nav-link text-white" href="#">Features</a>
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
              <li v-if="AuthUser"><a class="dropdown-item" href="#">Logout</a></li>
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
  props: ['AuthUser'],
};
</script>

<style></style>

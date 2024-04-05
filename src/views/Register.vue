<template>
  <h1 class="text-info text-center my-5">Register Page</h1>
  <div class="col-md-6 offset-md-3">
    <form action="" @submit.prevent="userRegister">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="name" class="form-label">name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              v-model="userCredentials.name"
              required
              pattern="[a-zA-Z]{4,}"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="userCredentials.email"
              required
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model="userCredentials.password"
              required
              pattern="^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,}$"
              oninvalid="this.setCustomValidity('Password must be at least 8 characters')"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="confirm-password" class="form-label"
              >confirm-password</label
            >
            <input
              type="password"
              class="form-control"
              id="confirm-password"
              name="confirm-password"
              v-model="userCredentials['confirm-password']"
              required
              pattern="^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,}$"
              oninvalid="this.setCustomValidity('confirm-password must be at least 8 characters')"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="phone" class="form-label">phone</label>
            <input
              type="number"
              class="form-control"
              id="phone"
              name="phone"
              v-model="userCredentials.phone"
              required
              pattern="[0-9]{5,11}"
            />
          </div>
        </div>
        <div class="col-md-6 mt-3">
          <button class="btn btn-primary float-end mt-3" type="submit">
            Register
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins";
export default {
  mixins: [mixins],
  data() {
    return {
      userCredentials: {
        name: "",
        email: "",
        phone: "",
        password: "",
        "confirm-password": "",
      },
    };
  },
  methods: {
    async userRegister() {
      let responseData = await this.sendData(
        this.$baseUrl + "register",
        this.userCredentials
      );
      if (responseData.conditions) {
        this.$router.push({ name: "Login" });
      } else {
        alert(responseData.message);
      }
    },
  },
};
</script>

<style></style>

<template>
  <h1 class="text-info text-center my-5">Login</h1>
  <div class="col-md-6 offset-md-3">
    <form action="" @submit.prevent="userLogin">
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
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          v-model="userCredentials.password"
        />
      </div>
      <button class="btn btn-primary float-end" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins.js";
export default {
  mixins: [mixins],
  props: ["AuthUser"],
  data() {
    return {
      userCredentials: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      let url = this.$baseUrl + "login";
      let responseData = await this.sendData(url, this.userCredentials);
      if (responseData.access_token) {
        localStorage.setItem("token", responseData.access_token);
        this.$emit("changeLoginStatus");
        this.$router.push({ name: "Home" });
      } else {
        alert(responseData.message);
      }
    },
  },
};
</script>

<style></style>

<template>
  <h1 class="text-info text-center my-5">Login</h1>
  <div class="col-md-6 offset-md-3">
    <form action="">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          v-model="userCredentials.email"
          @input="emailFileChange"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">password address</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          v-model="userCredentials.password"
          @input="passwordFileChange"
        />
      </div>
      <button class="btn btn-primary float-end" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["AuthUser"],
  data() {
    return {
      userCredentials: {
        email: "admin@gmail.com",
        password: "",
      },
    };
  },
  methods: {
    emailFileChange() {
      console.log(this.userCredentials.email);
    },
    passwordFileChange() {
      console.log(this.userCredentials.password);
    },
  },
};
</script>

<style></style>

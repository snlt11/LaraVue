export default {
  methods: {
    async loadData(route) {
      let response = await fetch(`http://127.0.0.1:8000/api/${route}`);
      let data = await response.json();
      console.log(data);
    },
  },
};

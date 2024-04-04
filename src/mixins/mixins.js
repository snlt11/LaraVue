export default {
  methods: {
    async loadData(url) {
      let response = await fetch(url);
      let responseData = await response.json();
      if (responseData.conditions) {
        return responseData.data;
      } else {
        return [];
      }
    },
    async sendData(url, data) {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    },
  },
};

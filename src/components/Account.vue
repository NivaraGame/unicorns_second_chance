<template>
  <h1>name {{ account.first_name }}</h1>
  <h1>account_name {{ account.last_name }}</h1>
  <h1>status {{ account.status }}</h1>
  <h1>Id device {{ account.id_device }}</h1>
  <h1>Last connection {{ account.last_connection }}</h1>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "Account",
  data() {
    return {
      account: []
    }
  },
  async mounted() {
    this.account = (await axios.get('http://localhost:3000/accounts/' + this.$route.params.id)).data;
    console.log(this.account)
  }
}
</script>

<style scoped>

</style>

<template>
  <Modal_edit/>
  <h1>Connection</h1>
  <div class="card d-flex flex-row" style="width: 70%;">
    <img :src="'../src/components/images/'+ account.image" class="card-img w-100" alt="...">
    <div class="card-body">
      <h1 class="border">Name: {{ account.first_name }}</h1>
      <h1 class="border">Account name: {{ account.last_name }}</h1>
      <h1 class="border">Status: {{ account.status }}</h1>
      <h1 class="border">Id device: {{ account.id_device }}</h1>
      <h1 class="border">Last connection: {{ account.last_connection }}</h1>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal"
              data-bs-target="#exampleModal">
        Edit device
      </button>
      <router-link to="/" class="btn btn-secondary" @click="deleteByID(item.id)">Delete</router-link>

    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Modal_edit from "./ModalEdit.vue";

export default {
  name: "Account",
  components: {Modal_edit},
  data() {
    return {
      account: []
    }
  },
  methods: {
    deleteByID: function (id) {
      axios.delete('http://shedule.mitit:3002/accounts/' + id);
    }
  },
  async mounted() {
    this.account = (await axios.get('http://shedule.mitit:3002/accounts/' + this.$route.params.id)).data;
    console.log(this.account.image)
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="d-flex justify-content-between">
    <!-- Button trigger modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content container-fluid">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body container-fluid">
            <div class="container-fluid">
              <div class="row d-flex justify-content-center">
                <div class="w-100">
                  <div class="card px-5 py-5" id="form1">
                    <div class="form-data" v-if="!submitted">
                      <div class="forms-inputs mb-4"><span>Name</span> <input autocomplete="off" type="text"
                                                                              v-model="first_name"
                                                                              v-bind:class="{'form-control':true, 'is-invalid' : !validFirstName(first_name) && firstBlured}"
                                                                              v-on:blur="firstBlured = true">
                        <div class="invalid-feedback">required!</div>
                      </div>
                      <div class="forms-inputs mb-4"><span>Device_name</span> <input autocomplete="off" type="text"
                                                                                     v-model="last_name"
                                                                                     v-bind:class="{'form-control':true, 'is-invalid' : !validLastName(last_name) && lastBlured}"
                                                                                     v-on:blur="lastBlured = true">
                        <div class="invalid-feedback">required!</div>
                      </div>
                      <div class="forms-inputs mb-4"><span>Id_device</span> <input autocomplete="off" type="text"
                                                                                   v-model="id_device"
                                                                                   v-bind:class="{'form-control':true, 'is-invalid' : !validIdDevice(id_device) && emailBlured}"
                                                                                   v-on:blur="emailBlured = true">
                        <div class="invalid-feedback">A valid email is required!</div>
                      </div>
                      <div class="forms-inputs mb-4"><span>Status</span>
                        <select v-model="status"
                                v-bind:class="{'form-control':true, 'is-invalid' : !validStatus(status) && genderBlured}"
                                v-on:blur="genderBlured = true">
                          <option>Active</option>
                          <option>Lost</option>
                          <option>Disabled</option>
                        </select>
                        <div class="invalid-feedback"></div>
                      </div>
                      <div class="forms-inputs mb-4"><span>Last connection</span> <input autocomplete="off" type="text"
                                                                                         v-model="last_connection"
                                                                                         v-bind:class="{'form-control':true, 'is-invalid' : !validLastConnection(last_connection) && start_dateBlured}"
                                                                                         v-on:blur="start_dateBlured = true">
                        <div class="invalid-feedback">required!</div>
                      </div>
                      <div>
                        <input type="file" @change="handleFileChange">
                      </div>
                      <div class="mb-3">
                        <button v-on:click.prevent.stop="submit" class="btn btn-dark w-100">Update</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "Modal_edit",
  data() {
    return {
      id: Number,
      first_name: String,
      last_name: String,
      id_device: Number,
      status: String,
      last_connection: 0,
      image: null,
      firstBlured: false,
      lastBlured: false,
      emailBlured: false,
      genderBlured: false,
      start_dateBlured: false,
      expiration_dateBlured: false,
      valid: false,
      submitted: false
    }
  },
  methods: {
    handleFileChange(event) {
      this.image = event.target.files[0];
      console.log(this.image.name)
    },
    async uploadImage() {
      const formData = new FormData();
      formData.append('image', this.image);
      await axios.post('http://schedule.mitit:3001/upload', formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error uploading image:', error);
        });
    },
    validate: function () {
      this.firstBlured = true;
      this.lastBlured = true;
      this.emailBlured = true;
      this.genderBlured = true;
      this.start_dateBlured = true;
      this.expiration_dateBlured = true;
      if (this.validFirstName() && this.validLastName() && this.validIdDevice() && this.validStatus() && this.validLastConnection()) {
        this.valid = true;
      }
    },
    validFirstName: function () {
      let re = /^[a-zA-Z]+$/;
      if (re.test(this.first_name)) {
        return true
      }
    },
    validLastName: function () {
      let re = /^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/;
      if (re.test(this.last_name)) {
        return true
      }
    },

    validStatus: function () {
      let re = /Lost/;
      let re1 = /Disabled/;
      let re2 = /Active/;
      if (re.test(this.status) || re1.test(this.status) || re2.test(this.status)) {
        return true
      }
    },
    validLastConnection: function () {
      let re = /^\d{10}$/;
      if (re.test(this.last_connection)) {
        return true
      }
    },
    validIdDevice: function () {
      let re = /^\d{10}$/;
      if (re.test(this.id_device)) {
        return true;
      }
    },

    submit: async function () {
      this.validate();
      if (this.valid) {
        await this.uploadImage()
        const newAccount = {
          "id": this.id,
          "first_name": this.first_name,
          "last_name": this.last_name,
          "id_device": this.id_device,
          "status": this.status,
          "last_connection": this.last_connection,
          "image": this.image.name
        };
        await axios.put('http://schedule.mitit:3001/news/' + this.id, newAccount)
      }
      await this.getData()
    },
    getData: async function() {
      const account = (await axios.get('http://schedule.mitit:3001/news/' + this.$route.params.id)).data;
      console.log(account)
      this.id = account.id;
      this.first_name = account.first_name;
      this.last_name = account.last_name;
      this.id_device = account.id_device;
      this.status = account.status;
      this.last_connection = account.last_connection;
      this.image = account.image;
    }
  },
  async mounted() {
    const account = (await axios.get('http://schedule.mitit:3001/news/' + this.$route.params.id)).data;
    console.log(account)
    this.id = account.id;
    this.first_name = account.first_name;
    this.last_name = account.last_name;
    this.id_device = account.id_device;
    this.status = account.status;
    this.last_connection = account.last_connection;
    this.image = account.image;
  }
}
</script>

<style scoped>

</style>

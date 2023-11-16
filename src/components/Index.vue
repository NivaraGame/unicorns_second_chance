<template>
  <div class="w-75">
    <div class="d-flex justify-content-between"><h1>Connection list</h1>
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
                                                                                  v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(id_device) && emailBlured}"
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
                                                                                      v-bind:class="{'form-control':true, 'is-invalid' : !validStartDate(last_connection) && start_dateBlured}"
                                                                                      v-on:blur="start_dateBlured = true">
                          <div class="invalid-feedback">required!</div>
                        </div>

                        <div class="mb-3">
                          <button v-if="action" v-on:click.prevent.stop="submit" class="btn btn-dark w-100">Create
                          </button>
                          <button v-else v-on:click.prevent.stop="submit" class="btn btn-dark w-100">Update</button>
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

      <!-- Modal -->
      <button @click="setToCreate" type="button" class="btn btn-primary" data-bs-toggle="modal"
              data-bs-target="#exampleModal">
        Create device
      </button>
    </div>
    <div class="bg-info p-2 mt-3"><p>Total count {{ accounts.length }}</p></div>
    <table class="d-flex flex-column">
      <tr class="d-flex justify-content-between w-100">
        <th class="justify-content-start w-100">Name</th>
        <th class="justify-content-start w-100">Account name</th>
        <th class="justify-content-start w-100">Id device</th>
        <th class="justify-content-start w-100">Status</th>
        <th class="justify-content-start w-100">Last connection</th>
        <th class="justify-content-start w-100"></th>
      </tr>
      <hr style="border: black 1px solid">
      <tr v-for="item in accounts" class="d-flex justify-content-between w-100 border-top" style="font-size: 13px">
        <router-link :to='"/account/" + item.id' class="justify-content-start w-100">
          <td class="justify-content-start w-100">{{ item.first_name }}</td>
        </router-link>
        <td class="justify-content-start w-100">{{ item.last_name }}</td>
        <td class="justify-content-start w-100">{{ item.id_device }}</td>

        <td v-if="item.status === 'Active'" class="justify-content-start w-100" style="background-color: #0a53be">
          {{ item.status }}
        </td>
        <td v-if="item.status === 'Lost'" class="justify-content-start w-100" style="background-color: red">
          {{ item.status }}
        </td>
        <td v-if="item.status === 'Disable'" class="justify-content-start w-100" style="background-color: gray">
          {{ item.status }}
        </td>

        <td class="justify-content-start w-100">{{ item.last_connection }}</td>
        <td class="d-flex justify-content-end w-100">
          <button class="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                  @click="getByID(item.id)">Edit
          </button>
          <button class="btn btn-secondary" @click="deleteByID(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "Index",
  data() {
    return {
      accounts: [],
      id: Number,
      first_name: String,
      last_name: String,
      id_device: Number,
      status: String,
      last_connection: 0,
      firstBlured: false,
      lastBlured: false,
      emailBlured: false,
      genderBlured: false,
      start_dateBlured: false,
      expiration_dateBlured: false,
      valid: false,
      submitted: false,
      action: true
    }
  },
  methods: {
    test: function () {
      window.location.reload()
    },
    validate: function () {
      this.firstBlured = true;
      this.lastBlured = true;
      this.emailBlured = true;
      this.genderBlured = true;
      this.start_dateBlured = true;
      this.expiration_dateBlured = true;
      if (this.validFirstName(this.first_name) && this.validLastName(this.last_name) && this.validEmail(this.id_device) && this.validStatus(this.status) && this.validStartDate(this.last_connection) && this.validStartDate(this.start_date)) {
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
    validStartDate: function () {
      let re = /^\d{10}$/;
      if (re.test(this.last_connection)) {
        return true
      }
    },
    validExpirationDate: function (end, start) {
      let re = /^\d{10}$/;
      if (re.test(this.expiration_date) && end > start) {
        return true
      }
    },
    validEmail: function (email) {
      let re = /^\d{10}$/;
      if (re.test(email)) {
        return true;
      }
    },

    submit: function () {
      this.validate();
      if (this.valid && this.action) {
        const newAccount = {
          "id": this.accounts[this.accounts.length - 1].id + 1,
          "first_name": this.first_name,
          "last_name": this.last_name,
          "id_device": this.id_device,
          "status": this.status,
          "last_connection": this.last_connection,
        };
        axios.post('http://localhost:3000/accounts', newAccount)
          .then(response => {
            console.log('Account added successfully:', response.data);
          }).catch(error => {
          console.error('Error adding account:', error);
        });
      } else {
        const newAccount = {
          "first_name": this.first_name,
          "last_name": this.last_name,
          "id_device": this.id_device,
          "status": this.status,
          "start_date": this.start_date,
          "expiration_date": this.expiration_date,
        };
        axios.put('http://localhost:3000/accounts/' + this.id, newAccount)
      }
      window.location.reload();
    },
    getByID: async function (id) {
      this.action = false;
      let data = (await axios.get('http://localhost:3000/accounts/' + id)).data;
      this.id = data.id;
      this.first_name = data.name;
      this.last_name = data.account_name;
      this.id_device = data.id_device;
      this.status = data.status;
      this.start_date = data.start_date;
    },
    setToCreate: function () {
      this.action = true;
      this.first_name = "";
      this.last_name = "";
      this.id_device = "";
      this.status = "";
      this.start_date = "";
    },
    deleteByID: function (id) {
      axios.delete('http://localhost:3000/accounts/' + id);
      window.location.reload();
    }
  },
  async mounted() {
    this.accounts = (await axios.get('http://localhost:3000/accounts')).data
  }
}
</script>

<style scoped>

</style>

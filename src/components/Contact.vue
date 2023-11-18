<template>
  <div class="d-flex">
    <div>
      <h1>
        You can find us there
      </h1>
      <GoogleMap api-key="AIzaSyB1GhrKvPtal9CuIvyQYEC7hCeV9Vvq56E"
                 style="margin: 10% 10% 10% 0; width: 580px; height: 500px"
                 :center="center" :zoom="4">
        <Marker :options="{ position: center }"/>
      </GoogleMap>
    </div>

    <div class="container">
      <h1>
        Write message
      </h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
        >
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
        >
        <label>Message</label>
        <textarea
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
          </textarea>

        <input type="submit" @click.prevent.stop="sendEmail" value="Send">
      </form>
    </div>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import {GoogleMap, Marker} from "vue3-google-map";
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  components: {GoogleMap, Marker},
  data() {
    return {
      name: '',
      email: '',
      message: '',
      center: {}
    }
  },
  mounted() {
    this.center = {lat: 35.184077, lng: -41.660045};
  },
  methods: {
    sendEmail(e) {
      console.log(this.name)
      console.log(this.email)
      console.log(this.message)
      emailjs.send('service_cbv9gt9', 'template_2dqqodk',
        {
          name: this.name,
          email: this.email,
          message: this.message
        }, 'RbFkZHtS_Roep-kry')
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>

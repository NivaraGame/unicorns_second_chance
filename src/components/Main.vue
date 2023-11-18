<template>
  <div id="carouselExampleCaptions" class="carousel slide w-75">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
      <button v-for="item in connections" type="button" data-bs-target="#carouselExampleCaptions"
              :data-bs-slide-to="item.id" :aria-label='"Slide " + item.id'></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/img.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1>Connections list</h1>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div v-for="item in connections" class="carousel-item">
        <router-link :to='"/account/" + item.id'>
          <img :src="'./src/components/images/' + item.image" class="d-block w-100" alt="...">
        </router-link>
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.first_name }}</h5>
          <p>{{ item.status }} </p>
          <p>Last connection: {{ item.last_connection }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="ag-format-container">
    <div class="ag-courses_box">
      <div v-for="item in connections" class="ag-courses_item">
        <a :href="'/account/' + item.id" class="ag-courses-item_link">
          <div v-if="item.status === 'Active'" class="ag-courses-item_bg bg-green"></div>
          <div v-if="item.status === 'Lost'" class="ag-courses-item_bg bg-red"></div>
          <div v-if="item.status === 'Disable'" class="ag-courses-item_bg bg-gray"></div>
          <div class="ag-courses-item_title">
            {{ item.first_name }}
          </div>
          <div class="ag-courses-item_date-box">
            Last connections:
            <span class="ag-courses-item_date">
             {{ item.last_connection }}
          </span>
          </div>

          <div class="ag-courses-item_date-box">
            Status:
            <span class="ag-courses-item_date">
             {{ item.status }}
          </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import account from "@/components/Account.vue";

export default {
  name: "Main",
  computed: {
    account() {
      return account
    }
  },
  data() {
    return {
      connections: []
    }
  },
  async mounted() {
    this.connections = (await axios.get('http://schedule.mitit:3002/accounts')).data;
  }
}
</script>

<style scoped>
.ag-format-container {
  width: 1142px;
  margin: 0 auto;
}

.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding: 50px 0;
}

.ag-courses_item {
  flex-basis: calc(33.33333% - 30px);

  margin: 0 15px 30px;

  overflow: hidden;

  border-radius: 28px;
}

.ag-courses-item_link {
  display: block;
  padding: 30px 20px;
  background-color: #121212;

  overflow: hidden;

  position: relative;
}

.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #FFF;
}

.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}

.ag-courses-item_title {
  min-height: 87px;
  margin: 0 0 25px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: #FFF;

  z-index: 2;
  position: relative;
}

.ag-courses-item_date-box {
  font-size: 18px;
  color: #FFF;

  z-index: 2;
  position: relative;
}

.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}

.ag-courses-item_bg {
  height: 128px;
  width: 128px;
  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}

.bg-green {
 background-color: green;
}

.bg-gray {
  background-color: gray;
}

.bg-red {
  background-color: red;
}
@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }

  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 96%;
  }

}

@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }

  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }

  .ag-courses-item_link {
    padding: 22px 40px;
  }

  .ag-courses-item_date-box {
    font-size: 16px;
  }
}
</style>

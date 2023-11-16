<template>
  <footer class="footer w-100 mt-5 pt-5">
    <div class="footer__parralax">
      <div class="footer__parralax-trees"></div>
      <div class="footer__parralax-moto"></div>
      <div class="footer__parralax-secondplan"></div>
      <div class="footer__parralax-premierplan"></div>
      <div class="footer__parralax-voiture"></div>
    </div>
    <div class="container">
      <div class="footer__columns">
        <div class="footer__col">
          <h3 class="footer__col-title">
            <i data-feather="shopping-bag"></i> <span>Lorem</span></h3>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li class="footer__nav-item">
                <a href="" class="footer__nav-link">
                  What`s up bro?
                </a>
              </li>
              <li class="footer__nav-item">
                <a href="" class="footer__nav-link">
                  Lorem
                </a>
              </li>
              <li class="footer__nav-item">
                <a href="" class="footer__nav-link">
                  Lorem
                </a>
              </li>
              <li class="footer__nav-item">
                <a href="" class="footer__nav-link">
                  Lorem
                </a>
              </li>
              <li class="footer__nav-item">
                <a href="" class="footer__nav-link">
                  RLorem
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__col">
          <h3 class="footer__col-title">
            <i data-feather="share-2"></i> <span>Lorem Lorem</span></h3>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li class="footer__nav-item">
                <a href="" class="footer__nav-link">
                  <i data-feather="youtube"></i><span>Youtube</span>
                </a>
              </li>
              <li class="footer__nav-item">
                <a href="" class="footer__nav-link">
                  <i data-feather="facebook"></i><span>Facebook</span>

                </a>
              </li>
              <li class="footer__nav-item ">
                <a href="" class="footer__nav-link">
                  <i data-feather="instagram"></i><span>Instagram</span>

                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__col hiden">
          <h3 class="footer__col-title">
            <i data-feather="send"></i> <span>Contact</span></h3>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li class="footer__nav-item">
                <a href="mailto:contact.laboiserie@gmail.com" class="footer__nav-link">
                  contact.Lorem@gmail.com
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="footer__copyrights">
        <p>Create by support MITIT</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

body, html {
  height: 100%
}

body {
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  padding-top: 300px
}

.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto
}

.footer {
  position: relative;
  margin-top: 300px;
  padding: 3rem 0;
  color: #fff;
  background: #000;
  margin-top: auto
}

.footer__columns {
  display: flex;
  justify-content: space-between
}

.footer__col-title {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center
}

.footer__col-title * ~ span {
  margin-left: 1rem
}

.footer a {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none
}

.footer a * ~ span {
  margin-left: 1rem
}

.footer__nav-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem
}

.footer__copyrights {
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, .2)
}

.footer__copyrights p {
  display: flex
}

.footer__copyrights p a {
  margin-left: .5rem
}

@keyframes parralax {
  0% {
    background-position: 260px
  }
  100% {
    background-position: -10000vw
  }
}

@keyframes moto {
  0% {
    transform: translateY(0) rotate(0)
  }
  5% {
    transform: translateY(0) rotate(-5deg)
  }
  25% {
    transform: translateY(60px) rotate(-20deg)
  }
  49% {
    transform: translateY(0) rotate(-1deg)
  }
  51% {
    transform: translateY(0) rotate(1deg)
  }
  75% {
    transform: translateY(60px) rotate(20deg)
  }
  80% {
    transform: translateY(60px) rotate(0)
  }
  98% {
    transform: translateY(0) rotate(0)
  }
}

@keyframes voiture {
  0% {
    transform: rotate(0)
  }
  25% {
    transform: rotate(-5deg)
  }
  50% {
    transform: rotate(0)
  }
  75% {
    transform: rotate(5deg)
  }
  100% {
    transform: rotate(0)
  }
}

.footer__parralax {
  position: absolute;
  left: 0;
  top: -300px;
  height: 300px;
  width: 100%;
  overflow: hidden
}

.footer__parralax-premierplan {
  background-position: 260px
}

.footer__parralax-premierplan, .footer__parralax-secondplan, .footer__parralax-trees {
  position: absolute;
  inset: 0;
  background-repeat: repeat-x;
  background-position-y: 100% !important;
  animation: parralax 600s linear infinite
}




@media screen and (max-width: 425px) {
  .hiden {
    display: none;
  }
}
</style>

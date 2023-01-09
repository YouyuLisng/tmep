<template>
  <div class="container-fuild">
    <nav class="navbar navbar-expand-lg navbar-light py-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav fw-bolder">
            <li class="nav-item">
              <a class="nav-link text-dark" aria-current="page" href="#">酒店</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">民宿</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">工作區</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">溫泉旅館</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="navbar-nav fw-bolder container-fluid">
            <div class="row">
              <li class="nav-item nav-icon col">
                <a class="nav-link text-dark" href="#">
                  <img class="img-fluid" src="../../images/icon/1946429.png" alt="">
                </a>
              </li>
              <li class="nav-item nav-icon col" @click="$refs.navoffcanse.show()">
                <a class="nav-link text-dark" href="#">
                  <img class="img-fluid" src="../../images/icon/7710488.png" alt="">
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <div class="banner img-fluid position-relative">
      <div class="mask"></div>
      <div style="height: 100%;" class="container text-white position-relative">
        <div class="text position-absolute top-50 start-0 translate-middle-y">
          <h2 class="fs-1 fw-bold">在美麗的地方 <br> 工作的新方式</h2>
          <p>讓我們找到一個可以連續住宿的工作目的地</p>
          <form action="" class="d-flex justify-content-between rounded-3 bg-white p-2">
            <div class="d-flex justify-content-center align-items-center pe-2">
              <img style="width: 30px; height: 30px;" class="img-fluid" src="../../images/icon/622669.png" alt="">
            </div>
            <input type="text" placeholder="關鍵字" v-model="search">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                aria-expanded="false"></button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#"></a></li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Swiper></Swiper>
    <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <button class="area_btn" @click="click">
              <div class="img-wrap"><img src="../../images/icon/pin.png" alt=""></div>
              <p class="ps-2">台北</p>
            </button>
          </div>
          <div class="col">
            <button class="area_btn">
              <div class="img-wrap"><img src="../../images/icon/pin.png" alt=""></div>
              <p class="ps-2">新北</p>
            </button>
          </div>
          <div class="col">
            <button class="area_btn">
              <div class="img-wrap"><img src="../../images/icon/pin.png" alt=""></div>
              <p class="ps-2">台中</p>
            </button>
          </div>
          <div class="col">
            <button class="area_btn">
              <div class="img-wrap"><img src="../../images/icon/pin.png" alt=""></div>
               <p class="ps-2">台中</p>
            </button>
          </div>
          <div class="col">
            <button class="area_btn">
              <div class="img-wrap"><img src="../../images/icon/pin.png" alt=""></div>
               <p class="ps-2">台中</p>
            </button>
          </div>
          <div class="col">
            <button class="area_btn">
              <div class="img-wrap"><img src="../../images/icon/pin.png" alt=""></div>
               <p class="ps-2">台中</p>
            </button>
          </div>
          <div class="col">
            <button class="area_btn">
              <div class="img-wrap"><img src="../../images/icon/pin.png" alt=""></div>
               <p class="ps-2">台中</p>
            </button>
          </div>
          <div class="col">
            <button class="area_btn">
              <div class="img-wrap"><img src="../../images/icon/pin.png" alt=""></div>
               <p class="ps-2">台中</p>
            </button>
          </div>

        </div>
      </div>
    </section>
  </div>
  <offcanvas ref="navoffcanse"></offcanvas>
</template>
<script>
import axios from 'axios'
import offcanvas from '../../components/NavOffcanse.vue'
import Swiper from '../../components/SwiperView.vue'
export default {
  data () {
    return {
      alldata: [],
      search: '',
      keyword_Option: []
    }
  },
  components: {
    offcanvas,
    Swiper
  },
  created () {
    axios.get('/data/opendata.json')
      .then((res) => {
        this.alldata = res.data.XML_Head.Infos.Info
      })
  },
  methods: {
    click (e) {
      console.log(e.target)
    }
  }
}
</script>
<style>
.section-title {
  font-size: 32px !important;
  margin: 0px !important;
  font-family: 'Noto Serif TC', serif !important;
  letter-spacing: 3px !important;
  color: #333 !important;
  font-weight: 500 !important;
}

nav {
  background-color: #F4D35E;
}

.nav-icon img {
  width: 30px;
  height: 30px;
}

.offcanvas-end {
  top: 20 !important;
}

.banner {
  background-image: url(../../images/pic/ec49c6e.webp);
  height: 640px;
  background-size: cover;
}

.mask {
  position: absolute;
  height: 100%;
  right: 0;
  left: 0;
  background-color: rgb(0, 0, 0, .3);
}

input {
  width: 370px;
  border: 0;
}

.swiper-slide img {
  border-radius: 10px;
  height: 100% !important;
}
.area_btn img {
  width: 30px;
  height: 30px;
}

.area_btn {
  border: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.area_btn p {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.img-wrap {
  padding: 10px;
  background-color: #F4D35E;
  border-radius: 10px;
}
</style>

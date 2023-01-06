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
    <section>
      <div class="container py-lg-5">
        <div class="text-wrap text-center py-lg-5 py-md-4 p-3">
          <h2 class="section-title fw-bold">推薦行程</h2>
        </div>
        <Swiper class="mySwiper" slides-per-view="auto" loop="true" :modules="modules" :autoplay="{ delay: 1500 }"
          :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :spaceBetween="5">
          <SwiperSlide class="">
            <img class="img-fluid" src="../../images/swiper/7000yen_photo_2x.webp" alt="">
          </SwiperSlide>
          <SwiperSlide class="">
            <img class="img-fluid" src="../../images/swiper/nature_photo_2x.webp" alt="">
          </SwiperSlide>
          <SwiperSlide class="">
            <img class="img-fluid" src="../../images/swiper/ittou_photo_2x.webp" alt="">
          </SwiperSlide>
          <SwiperSlide class="">
            <img class="img-fluid" src="../../images/swiper/onsen_photo_2x.webp" alt="">
          </SwiperSlide>
          <SwiperSlide class="">
            <img class="img-fluid" src="../../images/swiper/0200q120009pd3k268A54_R_960_660_R5_D.webp" alt="">
          </SwiperSlide>
          <SwiperSlide class="">
            <img class="img-fluid" src="../../images/swiper/pet_photo_2x.webp" alt="">
          </SwiperSlide>
          <SwiperSlide class="">
            <img class="img-fluid" src="../../images/swiper/1109715_15101412450036838546.jpg" alt="">
          </SwiperSlide>
        </Swiper>
        <!-- <div class="swiper-button-next">
          <img src="../../images/icon/arrow-right.png" alt="">
        </div>
        <div class="swiper-button-prev position-absolute top-50 start-0 translate-middle">
          <img src="../../images/icon/2985162.png" alt="">
        </div> -->
      </div>
    </section>
  </div>
  <offcanvas ref="navoffcanse"></offcanvas>
</template>
<script>
import { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import axios from 'axios'
import offcanvas from '../../components/NavOffcanse.vue'
export default {
  data () {
    return {
      alldata: [],
      search: '',
      keyword_Option: [],
      modules: [Pagination, Autoplay, Navigation]
    }
  },
  components: {
    offcanvas,
    Swiper,
    SwiperSlide
  },
  created () {
    axios.get('/data/opendata.json')
      .then((res) => {
        this.alldata = res.data.XML_Head.Infos.Info
      })
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

.swiper {
  border-radius: 10px;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: 30px;
  right: auto;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: 30px;
}

.swiper-button-prev img {
  background-color: #fff;
  border-radius: 50%;
  width: 57px;
  height: 57px;
}

.swiper-button-next img {
  background-color: #fff;
  border-radius: 50%;
  width: 57px;
  height: 57px;
}

.swiper-slide {
  width: 20% !important;
  height: 185px;
}

@media(max-width:960px) {
  .swiper-button-prev img {
    width: 40px;
    height: 40px;
  }

  .swiper-button-next img {
    width: 40px;
    height: 40px;
  }

  .swiper-slide {
    width: 33% !important;
  }
}

@media(max-width:500px) {
  .swiper-button-prev img {
    width: 30px;
    height: 30px;
  }

  .swiper-button-next img {
    width: 30px;
    height: 30px;
  }

  .swiper-slide {
    width: 50% !important;
  }
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

@media(min-width:1400px) {
  .container-swiper {
    margin: 0 auto;
    max-width: 1321px;
  }
}
</style>

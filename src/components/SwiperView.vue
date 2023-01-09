<template>
  <section>
    <div class="container py-lg-5">
      <div class="text-wrap text-center py-lg-5 py-md-4 p-3">
        <h2 class="section-title fw-bold">推薦行程</h2>
      </div>
      <Swiper class="mySwiper" slides-per-view="auto" :loop=true :autoplay="{ delay: 1500 }" :navigation="true"
        :modules="modules" :spaceBetween="5">
        <SwiperSlide class="">
          <img class="img-fluid" src="../images/swiper/7000yen_photo_2x.webp" alt="">
        </SwiperSlide>
        <SwiperSlide class="">
          <img class="img-fluid" src="../images/swiper/nature_photo_2x.webp" alt="">
        </SwiperSlide>
        <SwiperSlide class="">
          <img class="img-fluid" src="../images/swiper/ittou_photo_2x.webp" alt="">
        </SwiperSlide>
        <SwiperSlide class="">
          <img class="img-fluid" src="../images/swiper/onsen_photo_2x.webp" alt="">
        </SwiperSlide>
        <SwiperSlide class="">
          <img class="img-fluid" src="../images/swiper/0200q120009pd3k268A54_R_960_660_R5_D.webp" alt="">
        </SwiperSlide>
        <SwiperSlide class="">
          <img class="img-fluid" src="../images/swiper/pet_photo_2x.webp" alt="">
        </SwiperSlide>
        <SwiperSlide class="">
          <img class="img-fluid" src="../images/swiper/1109715_15101412450036838546.jpg" alt="">
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script>
import { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
export default {
  data () {
    return {
      modules: [Pagination, Autoplay, Navigation]
    }
  },
  components: {
    Swiper,
    SwiperSlide
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

.swiper-button-prev::after{
  content: '';
  background-image: url(../images/icon/2985162.png);
  background-size: cover;
  width: 40px;
  height: 40px;
}

.swiper-button-next::after{
  content: '';
  background-image: url(../images/icon/arrow-right.png);
  background-size: cover;
  width: 40px;
  height: 40px;
}

.swiper-button-prev,.swiper-button-next {
  background-color: #fff;
  border-radius: 50%;
  width: 44px !important;
}
.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}
.swiper-slide {
  width: 20% !important;
  height: 185px;
}

@media(max-width:960px) {
  .swiper-slide {
    width: 33% !important;
  }
}

@media(max-width:500px) {
  .swiper-slide {
    width: 50% !important;
  }
}

@media(min-width:1400px) {
  .container-swiper {
    margin: 0 auto;
    max-width: 1321px;
  }
}
</style>

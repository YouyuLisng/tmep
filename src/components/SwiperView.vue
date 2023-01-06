<template>
    <section>
      <div class="container py-lg-5">
        <Swiper class="mySwiper position-relative" slides-per-view="auto" loop="true" :modules="modules" :autoplay="{ delay: 1500 }"
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
        <div class="swiper-button-next">
          <img src="../../images/icon/arrow-right.png" alt="">
        </div>
        <div class="swiper-button-prev position-absolute top-50 start-0 translate-middle">
          <img src="../../images/icon/2985162.png" alt="">
        </div>
      </div>
    </section>
</template>
<script>
import { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/css/pagination'
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

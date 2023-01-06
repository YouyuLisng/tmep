<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" ref="overcanse">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
   </template>
<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'
export default {
  data () {
    return {
      offcanvas: {}
    }
  },
  methods: {
    show () {
      this.offcanvas.show()
    },
    hide () {
      this.offcanvas.hide()
    }
  },
  mounted () {
    this.offcanvas = new Offcanvas(this.$refs.overcanse)
  }
}
</script>

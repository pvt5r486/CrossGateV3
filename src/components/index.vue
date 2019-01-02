<template>
  <div>
    <navbarFront></navbarFront>
    <router-view></router-view>
    <footerSection></footerSection>
  </div>
</template>

<script>
import navbarFront from '@/components/navbarFront'
import footerSection from '@/components/footer'

export default {
  components: {
    navbarFront,
    footerSection
  }
}
</script>

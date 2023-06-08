<template>
  <div>

    <!-- Preloader start -->
    <div id="preloader">
        <div class="loader--border"></div>
    </div>
    <!-- Preloader end -->

    <div class="h-full bg-[url('./src/assets/images/hero-bg-img.png')] bg-cover bg-no-repeat bg-center bg-[#DAEEF1] dark:bg-[url('./src/assets/images/home2-hero-bg-dark.png')] dark:bg-dark_primary_bg md:pb-[90px]">
      <Header />
      <MenuMovil />
      <MenuMovilButtom />
      <main>
        <router-view />
      </main>
      <Footer />
    </div>

    
  </div>
</template>
<script>
  import Footer from "./components/layout/Footer.vue"
  import Header from "./components/layout/Header.vue"
  import MenuMovilButtom from "./components/layout/MenuMovilButtom.vue"
  import MenuMovil from "./components/layout/MenuMovil.vue"

  export default{
    name:"App",
    components:{
      Footer,
      Header,
      MenuMovilButtom,
      MenuMovil
    },
    mounted(){
      this.$store.dispatch('user/setProfile', {
          FIRST_NAME: "Rodrigo",
          LAST_NAME: "Tarrio",
          PROFESSION: "Desarrollador web",
          DESCRIPTION: "Si lo puedes imaginar, lo puedes programar.",
          PHONE: "+584268925431",
          EMAIL: "rodrigotarrio2@gmail.com",
          ADDRESS: "Venezuela, Estado Bolívar",
          AGE: 27,
          PROFILE_PICTURE:"../src/assets/images/profile-image-rounded.png",
          NETWORKS:{
              FACEBOOK: "https://www.facebook.com/R.Tarrio",
              TWITTER: "https://twitter.com/tarrio_rodrigo",
          }
      });
    }
  }
</script>
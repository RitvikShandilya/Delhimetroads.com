<template>
<div>
    <section class="white pb-6">
      <v-container>
        <v-row class="text-md-left">
          <v-col cols="12" md="6" class="mt-md-8">
            <h1 class="display-2 mb-4">Advertising Wisely in Delhi Metro</h1>
            <p class="body-1 font-weight-bold">Check pricing, view advertisement reach along with advertisement options in dmrc in just a few clicks. Advertise in a space which is vital for lives of millions of people.</p>
            <v-btn
              class="text-uppercase"
              color="primary"
              x-large
              to="/inside"
              nuxt
            >Check Options</v-btn>
            <v-btn class="ml-2 text-uppercase" x-large nuxt :href="`tel:+${ mobile }`">
              <v-icon left>mdi-phone</v-icon>
              Call Us
            </v-btn>
          </v-col>

          <v-col cols="12" md="6" class="landing-image mt-md-8">
            <img src="/images/metro.svg" alt="">
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- partners
    <section class="grey lighten-5 partners pa-3 hide">
      <v-container>
        <h2 class="display-1 mb-3">Our Top Clients</h2>
        <div class="d-flex justify-center align-center flex-column flex-sm-column flex-md-row">
          <img src="/images/partners/uber.svg" height="81" alt="">
          <img src="/images/partners/nykaa.svg" height="31" alt="">
          <img src="/images/partners/oppo.svg" height="81" alt="">
        </div>
      </v-container>
    </section> -->

    <!-- features -->
    <section class="white text-center">
      <v-container>
        <v-row>
          <v-col
            v-for="({ image, title, text }, i) in features"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card class="py-6 px-2" flat>
              <v-img
                class="mb-5"
                height="200px"
                contain
                :src="image"
              ></v-img>

              <v-card-title class="justify-center font-weight-black text-uppercase px-0">
                {{ title }}
              </v-card-title>

              <v-card-text class="subtitle-1" v-text="text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="grey lighten-5 pa-2">
      <v-container class="text-center">
        <v-row>
          <v-col cols="12" md="4">
            <div class="text-uppercase caption">Miles Advertised</div>
            <div class="display-1">216</div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-uppercase caption"> People Reached Daily </div>
            <div class="display-1">38 Lakh</div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-uppercase caption">Our Clients</div>
            <div class="display-1">2</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="white text-center pt-2">
      <v-container>
        <div class="display-1 font-weight-bold">Get Notified for Ad Discounts</div>
        <p class="mt-2">We promise not to spam</p>
        <newsletter-form />
      </v-container>
      <v-divider class="mt-2"></v-divider>
    </section>
    <section class="white text-center pt-2 pb-2">
    <div class="display-1 font-weight-bold">Made with <i aria-hidden="true" class="v-icon notranslate mdi mdi-heart theme--light" ></i> by <a href="https://in.linkedin.com/in/ritvik-shandilya-878b81147" target="_blank">Ritvik Shandilya</a></div>
    </section>
</div>
</template>

<script>
import NewsletterForm from '../components/common/NewsletterForm'

export default {
  components: {
    NewsletterForm
  },
  data() {
    return {
      mobile: '9999254090',
      features: [{
        image: '/images/features/reach.svg',
        title: 'Reach Analysis',
        text: 'Age and Metro line wise breakdown of ridership gives you a clear idea of the best option to choose from before investing your money. On our online tool you can analyse the location to target depending upon your needs.'
      },
      {
        image: '/images/features/budget.svg',
        title: 'Check Advertising Costs',
        text: 'No matter if your budget is small or big, you can advertise in delhi metro at a cost cheaper than printed media. Just check the budget options on our tool in few clicks. Amazing, this is how easy it is now.'
      },
      {
        image: '/images/features/support.svg',
        title: 'Lightning Fast Support',
        text: 'Our team is always available to understand your needs from your perspective. We will more than happy to discuss what will bring you the best results from your and our standpoints'
      }],
      testimonies: [{
        image: '/images/testimonies/person1.png',
        name: 'John Burg',
        company: 'Company',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
      },
      {
        image: '/images/testimonies/person2.png',
        name: 'Sandra Bullocks',
        company: 'Company',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
      },
      {
        image: '/images/testimonies/person3.png',
        name: 'Dave Blake',
        company: 'Company',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
      }]
    }
  }
}
</script>

<style scoped>
section {
	 text-align: center;
}
 .landing-image {
	 text-align: center;
}
 .landing-image img {
	 width: 100%;
	 max-width: 600px;
}
 .partners img {
	 max-width: 160px;
	 margin: 0 10px;
}
 .v-btn--active::before {
   opacity: 0.0;
 }
</style>
<template>
  <v-app>
    <v-app-bar 
      flat
      height="80"
      color="white"
      style="max-height: 80px"
    >
      <v-container class="d-flex">
        <nuxt-link to="/" class="d-flex align-center">
          <img src="/images/logo.svg" alt="TheCompany" height="38" class="mr-2">
        </nuxt-link>
        
      </v-container>
    </v-app-bar>

      <v-main>
        <nuxt />
        <v-footer color="transparent" class="pt-5 pb-5">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <img src="/images/logo.svg" height="38" alt="">
              <div class="overline">© 2021</div>
              <div style="margin-left: -8px">
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-facebook</v-icon>
                </v-btn>
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-twitter</v-icon>
                </v-btn>
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-github</v-icon>
                </v-btn>
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-instagram</v-icon>
                </v-btn>
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-pinterest</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="font-weight-black mb-2">
                GeneralResources
              </div>
              <div class="d-flex flex-column subtitle-2">
                <nuxt-link to="/about">About Us</nuxt-link>
                <nuxt-link to="/contact">Contact Us</nuxt-link>
                <nuxt-link to="/faq">Frequently Asked Questions</nuxt-link>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="font-weight-black mb-2">
                Terms
              </div>
              <div class="d-flex flex-column subtitle-2">
                <nuxt-link to="/terms">Terms of Service</nuxt-link>
                <nuxt-link to="/policy">Privacy Policy</nuxt-link>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
      </v-main>
    
  </v-app>
</template>

<script>

</script>

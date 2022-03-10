<template>
<div class="ajuste">
  <v-container fill-height style="min-height: 242px">
        <v-row class = "justify-center align-center">
            <v-col cols="12" xs="12">
                <v-card class="redgrad black--text elevation-10 clickable pa-1 mb-1" ripple @click.native="toggledialrlone">
                  <div class="text-xs-right">
                    <code>Rotem Train</code>
                  </div>
                  <v-card-title primary-title>
                    <div class="headline">Red Line</div>
                    <div class="body-1">Dilshad Garden to Rithala</div>
                  </v-card-title>
                    <div class="text-xs-center pb-2">
                      <v-chip class="ma-1">
                        <v-avatar class="teal">4</v-avatar>
                        Coaches
                      </v-chip>
                      <v-chip class="ma-1">
                        <v-avatar class="teal">6</v-avatar>
                        Coaches
                      </v-chip>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" xs="12">
                <v-card class="yellowgrad black--text elevation-10 clickable pa-1 mb-1" ripple @click.native="toggledialylone">
                  <div class="text-xs-right">
                    <code>Rotem Train</code>
                  </div>
                  <v-card-title primary-title>
                    <div class="headline">Yellow Line</div>
                    <div class="body-1">Samaypur Badli to Huda City Centre</div>
                  </v-card-title>
                    <div class="text-xs-center pb-2">
                      <v-chip>
                        <v-avatar class="teal">6</v-avatar>
                        Coaches
                      </v-chip>
                    </div>
                </v-card>
            </v-col>
           <v-col cols="12" xs="12">
                <v-card class="bluegrad black--text elevation-10 clickable pa-1 mb-1" ripple @click.native="toggledialblone">
                  <div class="text-xs-right">
                    <code>Rotem Train</code>
                  </div>
                  <v-card-title primary-title>
                    <div class="headline">Blue Line</div>
                    <div class="body-1">Dwarka to Noida City Centre / Vaishali</div>
                  </v-card-title>
                    <div class="text-xs-center pb-2">
                      <v-chip class="ma-1">
                        <v-avatar class="teal">6</v-avatar>
                        Coaches
                      </v-chip>
                      <v-chip class="ma-1">
                        <v-avatar class="teal">8</v-avatar>
                        Coaches
                      </v-chip>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
methods: {
    ...mapMutations([
        'toggledialrlone',
        'toggledialylone',
        'toggledialblone'
    ])
}
}
</script>
<style scoped>
.yellowgrad {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
.bluegrad {
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}
.redgrad {
    background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
}
.ajuste{
    height: calc(100% - 58px);
}
.ajuste>.container{
    height: 100%;
}
.clickable {
  cursor: pointer;
}
.text-xs-right {
position: absolute;
right: 6px;
top: 3px;
}
</style>
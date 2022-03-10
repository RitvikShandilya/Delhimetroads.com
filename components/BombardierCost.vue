<template>
<div class="ajuste">
  <v-container fill-height style="min-height: 242px">
        <v-row class="justify-center align-center">
            <v-col cols="12" xs="12">
                <v-card class="yellowgrad black--text elevation-10 clickable pa-1 mb-1" ripple @click.native="toggledialyltwo">
                  <div class="text-xs-right">
                    <code>Bombardier Train</code>
                  </div>
                  <v-card-title primary-title>
                    <div class="headline pb-1">Yellow Line</div>
                    <div class="body-1">Samaypur Badli to Huda City Centre</div>
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
            <v-col cols="12" xs="12">
                <v-card class="bluegrad black--text elevation-10 clickable pa-1 mb-1" ripple @click.native="toggledialbltwo">
                  <div class="text-xs-right">
                    <code>Bombardier Train</code>
                  </div>
                  <v-card-title primary-title>
                    <div class="headline pb-1">Blue Line</div>
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
        'toggledialyltwo',
        'toggledialbltwo'
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
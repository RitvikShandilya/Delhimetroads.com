<template>
<div class="ajuste">
  <v-container fill-height style="min-height: 242px">
        <v-row class="justify-center align-center">
            <v-col cols="12" xs="12">
                <v-card class="greengrad black--text elevation-10 clickable pa-1 mb-1" ripple @click.native="toggledialgline">
                  <div class="text-xs-right">
                    <code>Rotem Type 2 Train</code>
                  </div>
                  <v-card-title primary-title>
                    <div class="headline mr-4">Green Line</div>
                    <div class="body-1">Mundka to Inderlok/ Kirti Nagar</div>
                  </v-card-title>
                    <div class="text-xs-center pa-1">
                      <v-chip>
                        <v-avatar class="teal">4</v-avatar>
                        Coaches
                      </v-chip>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" xs="12">
                <v-card class="violetgrad black--text elevation-10 clickable pa-1 mb-1" ripple @click.native="toggledialvline">
                  <div class="text-xs-right">
                    <code>Rotem Type 2 Train</code>
                  </div>
                  <v-card-title primary-title>
                    <div class="headline mr-4">Violet Line</div>
                    <div class="body-1">ITO to Escorts Mujesar Faridabad</div>
                  </v-card-title>
                    <div class="text-xs-center pa-1">
                      <v-chip>
                        <v-avatar class="teal">6</v-avatar>
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
        'toggledialgline',
        'toggledialvline'
    ])
}
}
</script>
        <style scoped>
        .greengrad {
          background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
        }
        .violetgrad {
          background-image: linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%);
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
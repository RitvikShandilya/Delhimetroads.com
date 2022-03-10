<template>
  <div>
    <distribution></distribution>
    <v-card class="grey lighten-2" flat>
      <v-container fluid grid-list-xl pa-1>
        <v-row>
          <v-col cols="12" md="8">
            <v-card flat height="100%">
              <v-toolbar light class="primary mb-2 elevation-1">
                <v-icon large dark>mdi-account-multiple</v-icon>
                <v-toolbar-title class="white--text body-1"
                  >Potential Reach / Day: {{ reachnum }} People</v-toolbar-title
                >
                <div class="d-none d-lg-block">
                  <v-tooltip bottom max-width="200">
                    <template v-slot:activator="{ on }">
                      <v-btn icon v-on="on" ripple>
                        <v-icon class="white--text">mdi-information</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ how }}</span>
                  </v-tooltip>
                </div>
                <v-spacer></v-spacer>
                <v-btn
                  class="d-none d-lg-block"
                  right
                  @click.stop="toggledialog"
                  ><v-icon left class="black--text">mdi-chart-pie</v-icon> View
                  Distribution</v-btn
                >
                <v-btn class="hidden-lg-and-up" right fab small color="light" @click.stop="toggledialog">
                  <v-icon dark> mdi-chart-pie </v-icon>
                </v-btn>
              </v-toolbar>

              <panelcard></panelcard>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <linepicker @tellfinalreach="reachnum = $event"></linepicker>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import Linepicker from "../components/LinePicker.vue";
import Distribution from "../components/common/Distribution.vue";
import Bltwo from "../components/panelcost/bltwo.vue";
import Panelcard from "../components/PanelCard.vue";

export default {
  components: {
    Linepicker,
    Distribution,
    Panelcard,
    Bltwo,
  },
  data() {
    return {
      reachnum: 0,
      how:
        "User location data is used to estimate\n how many people in a given area could\n see an advert that a business might\n run. They're not designed to match\n population or census estimates.",
    };
  },
  computed: {
    ...mapGetters(["lines"]),
  },
  methods: {
    ...mapMutations(["toggledialog", "toggledialbltwo"]),
  },
};
</script>

<style scoped>
.card--flex-toolbar {
  margin-top: -64px;
}

</style>

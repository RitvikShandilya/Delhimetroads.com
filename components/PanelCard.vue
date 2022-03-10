<template>
  <div>
    <rlone></rlone>
    <ylone></ylone>
    <blone></blone>
    <yltwo></yltwo>
    <bltwo></bltwo>
    <gline></gline>
    <vline></vline>
    <v-container>
      <v-dialog v-if="bvisible1" v-model="dialog1">
        <v-card>
          <v-card-title>
            <span
              >You can't adversise in all trains of this type with your choice
              of lines.</span
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="dialog1 = false"
              >Close</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-if="bvisible2" v-model="dialog2">
        <v-card>
          <v-card-title>
            <span
              >You can't adversise in all trains of this type with your choice
              of lines.</span
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="dialog2 = false"
              >Close</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-if="bvisible3" v-model="dialog3">
        <v-card>
          <v-card-title>
            <span
              >You can't adversise in all trains of this type with your choice
              of lines.</span
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="dialog3 = false"
              >Close</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-row class="pt-3 justify-center align-center" style="position: relative;">
        <v-col xs="12" md="8" class="mt-1">
          <v-card class="mb-4" tile max-width="500">
            <v-row>
              <v-col lg="12">
                <v-img src="/11.png" height="300px">
                </v-img>
              </v-col>
              <v-col lg="12" class="pt-0">
                <v-card height="line.height" style="min-height: 300px">
                  <v-col xs="12">
                    <v-tooltip bottom class="rt" v-if="e1 != 'Cost'">
                      <v-badge
                        v-model="bvisible1"
                        overlap
                        color="red"
                        class="clickable"
                        slot="activator"
                        @click.native="dialog1 = !dialog1"
                      >
                        <span slot="badge">{{ 1 }}</span>
                        <v-icon color="grey darken-1">
                          mdi-bell-outline
                        </v-icon>
                      </v-badge>
                      <span>Notifications</span>
                    </v-tooltip>

                    <bombardier v-if="e1 == 'Description'"></bombardier>
                  </v-col>
                  <bombardiercost v-if="e1 == 'Cost'"></bombardiercost>
                  <v-row>
                    <v-col xs="6">
                      <v-img
                        v-if="e1 == 'Dimensions'"
                        src="/PT.png"
                        max-width="150px"
                      >
                      </v-img>
                    </v-col>
                    <v-col xs="6">
                      <v-img
                        v-if="e1 == 'Dimensions'"
                        src="/PT2.png"
                        max-width="150px"
                      >
                      </v-img>
                    </v-col>
                  </v-row>
                  <v-bottom-navigation
                    absolute
                    :value="true"
                    v-model="e1"
                    class="transparent"
                    color="primary"
                  >
                    <v-btn flat  value="Description">
                      <span>Description</span>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn>
                    <v-btn flat value="Dimensions">
                      <span>Dimensions</span>
                      <v-icon>mdi-image-size-select-small</v-icon>
                    </v-btn>
                    <v-btn
                      flat
                      value="Cost"
                      @click="info = true"
                    >
                      <span>Cost</span>
                      <v-icon>mdi-credit-card-outline</v-icon>
                    </v-btn>
                  </v-bottom-navigation>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="pt-3 justify-center align-center">
        <v-col xs="12" md="8" class="mt-1">
          <v-card class="mb-4" tile max-width="500">
            <v-row>
              <v-col lg="12">
                <v-img src="/22.png" height="300px">
                </v-img>
              </v-col>
              <v-col lg="12" class="pt-0">
                <v-card height="line.height" style="min-height: 300px">
                  <v-col xs="12">
                    <v-tooltip bottom class="rt" v-if="e2 != 'Cost'">
                      <v-badge
                        v-model="bvisible2"
                        overlap
                        color="red"
                        class="clickable"
                        slot="activator"
                        @click.native="dialog2 = !dialog2"
                      >
                        <span slot="badge">{{ 1 }}</span>
                        <v-icon color="grey darken-1">
                          mdi-bell-outline
                        </v-icon>
                      </v-badge>
                      <span>Notifications</span>
                    </v-tooltip>

                    <rotemone v-if="e2 == 'Description'"></rotemone>
                  </v-col>
                  <rotemonecost v-if="e2 == 'Cost'"></rotemonecost>
                  <v-row class="justify-center align-center">
                    <v-col xs="6">
                      <v-img
                        v-if="e2 == 'Dimensions'"
                        src="/R1.png"
                        max-width="350px"
                      >
                      </v-img>
                    </v-col>
                  </v-row>
                  <v-bottom-navigation
                    absolute
                    :value="true"
                    v-model="e2"
                    class="transparent"
                    color="primary"
                  >
                    <v-btn flat value="Description">
                      <span>Description</span>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn>
                    <v-btn flat value="Dimensions">
                      <span>Dimensions</span>
                      <v-icon>mdi-image-size-select-small</v-icon>
                    </v-btn>
                    <v-btn
                      flat
                      value="Cost"
                      @click="info = true"
                    >
                      <span>Cost</span>
                      <v-icon>mdi-credit-card-outline</v-icon>
                    </v-btn>
                  </v-bottom-navigation>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="pt-3 justify-center align-center">
        <v-col xs="12" md="8" class="mt-1">
          <v-card class="mb-4" tile max-width="500">
            <v-row>
              <v-col lg="12">
                <v-img src="/33.png" height="300px">
                </v-img>
              </v-col>
              <v-col lg="12" class="pt-0">
                <v-card height="line.height" style="min-height: 300px">
                  <v-col xs="12">
                    <v-tooltip bottom v-if="e3 != 'Cost'">
                      <v-badge
                        v-model="bvisible3"
                        overlap
                        color="red"
                        class="clickable"
                        slot="activator"
                        @click.native="dialog3 = !dialog3"
                      >
                        <span slot="badge">{{ 1 }}</span>
                        <v-icon color="grey darken-1">
                          mdi-bell-outline
                        </v-icon>
                      </v-badge>
                      <span>Notifications</span>
                    </v-tooltip>

                    <rotemtwo v-if="e3 == 'Description'"></rotemtwo>
                  </v-col>
                  <rotemtwocost v-if="e3 == 'Cost'"></rotemtwocost>
                  <v-row class="justify-center align-center">
                    <v-col xs="6">
                      <v-img
                        v-if="e3 == 'Dimensions'"
                        src="/R2.png"
                        max-width="150px"
                      >
                      </v-img>
                    </v-col>
                    <v-col xs="6">
                      <v-img
                        v-if="e3 == 'Dimensions'"
                        src="/R22.png"
                        max-width="150px"
                      >
                      </v-img>
                    </v-col>
                  </v-row>
                  <v-bottom-navigation
                    absolute
                    :value="true"
                    v-model="e3"
                    class="transparent"
                    color="primary"
                  >
                    <v-btn flat value="Description">
                      <span>Description</span>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn>
                    <v-btn flat value="Dimensions">
                      <span>Dimensions</span>
                      <v-icon>mdi-image-size-select-small</v-icon>
                    </v-btn>
                    <v-btn
                      flat
                      value="Cost"
                      @click="info = true"
                    >
                      <span>Cost</span>
                      <v-icon>mdi-credit-card-outline</v-icon>
                    </v-btn>
                  </v-bottom-navigation>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Bombardier from "./paneldesc/bombardier.vue";
import Rotemone from "./paneldesc/rotemone.vue";
import Rotemtwo from "./paneldesc/rotemtwo.vue";
import Bombardiercost from "./BombardierCost.vue";
import Rotemonecost from "./RotemOneCost.vue";
import Rotemtwocost from "./RotemTwoCost.vue";
import Rlone from "./panelcost/rlone.vue";
import Ylone from "./panelcost/ylone.vue";
import Blone from "./panelcost/blone.vue";
import Yltwo from "./panelcost/yltwo.vue";
import Bltwo from "./panelcost/bltwo.vue";
import Gline from "./panelcost/gline.vue";
import Vline from "./panelcost/vline.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      paneldata: [
        {
          no: 1,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: "/static/11.png",
          e1: "Description",
        },
        {
          no: 2,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: "/static/22.png",
          e1: "Description",
        },
      ],
      e1: "Description",
      e2: "Description",
      e3: "Description",
      dialog1: false,
      dialog2: false,
      dialog3: false,
    };
  },
  computed: {
    ...mapGetters(["bvisible1", "bvisible2", "bvisible3"]),
  },
  components: {
    Bombardier,
    Rotemone,
    Rotemtwo,
    Bombardiercost,
    Rotemonecost,
    Rotemtwocost,
    Rlone,
    Ylone,
    Blone,
    Yltwo,
    Bltwo,
    Gline,
    Vline,
  },
};
</script>


<style scoped>
.container.grid-list-xl .layout .flex {
  padding-top: 0px;
  padding-bottom: 0px;
}
.v-badge {
  position: absolute;
  right: 13px;
  top: 13px;
}
.clickable {
  cursor: pointer;
}
</style>
<template>
<v-row class="justify-center">
    <v-dialog v-model="dialrlone" fullscreen transition="dialog-bottom-transition" :overlay=false lazy>

      <v-card color="grey lighten-5" flat>
        <v-toolbar light style="background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);" extended flat>
          <v-toolbar-title class="subtitle-1">Cost Estimation - Red Line Rotem Trains</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon @click.native="toggledialrlone" dark>
            <v-icon light>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-row>
        <v-col md="8" class="offset-md-2">
        <v-card class="tbl">

          
            <v-tabs centered v-model="active">
              <v-tab class="subtitle-2"
                v-for="tab in tabs"
                :key="tab"
              >
              {{ tab }}
              </v-tab>
            </v-tabs>
          

              <v-tabs-items v-model="active">
                <v-tab-item>
                  <v-card flat>
                      <v-data-table
                      :headers="headers"
                      :items="items"
                      class="elevation-1"
                      ></v-data-table>
                        
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                        <v-card-text>
                        <h1 class="title">Select your choice of campaign to see the estimated budget</h1>
                        <h2 class="subheading mb-2">Enter the following</h2>
                        <v-select
                          label="Your advertising option" required
                          hint="Select between bogie and train"
                          persistent-hint
                          :items="options"
                          v-model="select"
                        ></v-select>
                          <v-select v-if="select==2" required
                          label="Select number of bogies"
                          hint="If you want more bogies then select train above"
                          persistent-hint
                          :items="bogieunit"
                          v-model="bogienumber"
                        ></v-select>
                          <v-select v-if="select==1" required
                          label="Select type of train"
                          hint="Trains on this line has 4/ 6 bogies"
                          persistent-hint
                          :items="trainvar"
                          v-model="seltrainvar"
                        ></v-select>
                          <v-select v-if="select==1" required
                          label="Select Number of Trains"
                          hint="If you want more bogies then select train above"
                          persistent-hint
                          :items="trainunit"
                          v-model="trainnumber"
                        ></v-select>
                          <v-select required
                          label="Select campaign period"
                          hint="Number of months you want your ad in metro"
                          persistent-hint
                          :items="periodoptions"
                          v-model="campaignperiod"
                        ></v-select>
                          <v-divider class="mt-3 mb-3"></v-divider>
                          <h2 class="subheading mt-2 mb-1">Panels your ad will be displayed on: {{panels()}}</h2>
                          <h2 class="subheading mt-2 mb-1">Cost per month (₹): {{pmcost()}}</h2>
                          <h2 class="subheading mt-2 mb-1">Fabrication & Installation charges (₹): {{ficharges()}}</h2>
                          <h2 class="subheading mt-2 mb-1">Total Cost (₹): {{tcost()}}</h2>
                        </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>

        </v-card>
      </v-col>

    </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {
    data() {
          return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
          tabs: ['ALL DATA', 'CAMPAIGN OPTIONS'],
        active: null,
            headers: [
          {
            text: '',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Trains with 4 bogies', value: 'fb' },
          { text: 'Trains with 6 bogies', value: 'sb' }
        ],
            tpanels: 0,
            tbogies: 0,
        items: [
          {
            value: false,
            name: 'Number of trains',
            fb: 19,
            sb: 10
          },
          {
            value: false,
            name: 'Total Bogies',
            fb: 76,
            sb: 60
          },
          {
            value: false,
            name: 'Panels per train',
            fb: 54,
            sb: 82
          },
          {
            value: false,
            name: 'Total panels',
            fb: '1,026',
            sb: 820
          },
          {
            value: false,
            name: 'Cost/ Bogie/ Month (₹)',
            fb: '75,000',
            sb: '75,000'
          },
          {
            value: false,
            name: 'Cost/ Train/ Month (₹)',
            fb: '300,000',
            sb: '450,000'
          },
        ],
            select: [],
        options: [
          {
            value: 1,
            text: 'Advertise By Train'
          },
          {
            value: 2,
            text: 'Advertise by Bogie'
          }

        ],
            bogienumber: [],
        bogieunit: [
          {
            value: 1,
            text: '1 Bogie'
          },
          {
            value: 2,
            text: '2 Bogies'
          },
          {
            value: 3,
            text: '3 Bogies'
          },
          {
            value: 4,
            text: '4 Bogies'
          },
          {
            value: 5,
            text: '5 Bogies'
          },
          {
            value: 6,
            text: '6 Bogies'
          }

      ],
            trainnumber: [],
        trainunit: [
          {
            value: 1,
            text: '1 Train'
          },
          {
            value: 2,
            text: '2 Trains'
          },
          {
            value: 3,
            text: '3 Trains'
          },
          {
            value: 4,
            text: '4 Trains'
          },
          {
            value: 5,
            text: '5 Trains'
          },
          {
            value: 6,
            text: '6 Trains'
          }

      ],
            seltrainvar: [],
        trainvar: [ //train variant
          {
            value: 1,
            text: '4 Bogie Train'
          },
          {
            value: 2,
            text: '6 Bogie Train'
          }

      ],
            campaignperiod: [],
        periodoptions: [
          {
            value: 1,
            text: '1 Month'
          },
          {
            value: 2,
            text: '2 Months'
          },
          {
            value: 3,
            text: '3 Months'
          },
          {
            value: 4,
            text: '4 Months'
          },
          {
            value: 5,
            text: '5 Months'
          },
          {
            value: 6,
            text: '6 Months'
          },
          {
            value: 7,
            text: '7 Months'
          },
          {
            value: 8,
            text: '8 Months'
          }

      ]
  }
},
  methods: {
    panels() {
      if(this.select=="1") {
        if(this.seltrainvar=="1") {
          this.tpanels = this.trainnumber*54;
          this.tbogies = 4*this.trainnumber;
          return this.trainnumber*54 + " panels";
        }
      }
      if(this.select=="1") {
        if(this.seltrainvar=="2") {
          this.tpanels = this.trainnumber*82;
          this.tbogies = 6*this.trainnumber;
          return this.trainnumber*82 + " panels";
        }
      }
      if(this.select=="2") {
        this.tpanels = this.bogienumber*14;
        this.tbogies = this.bogienumber;
          return this.bogienumber*14 + " panels";
      }
      else {
        return '0 panels';
      }
    },
    tcost () {
      if(this.campaignperiod!=0) {
        return ((this.campaignperiod*this.tpanels*5555)+this.tbogies*2025).toLocaleString();
      }
      else {
        return (this.tpanels*5555+this.tbogies*2025).toLocaleString();
      }
    },
    pmcost () {
      return (this.tpanels*5555).toLocaleString();
    },
    ficharges () {
      return (this.tbogies*2025).toLocaleString();
    },
    ...mapMutations([
        'toggledialrlone'
      ])
},
computed: {
      ...mapGetters([
        'dialrlone'
      ])
    }
}
</script>

<style scoped>
  .tbl {
    margin-top: -48px;
  }
</style>
<template>
<v-row class="justify-center">
    <v-dialog v-model="dialbltwo" fullscreen transition="dialog-bottom-transition" :overlay=false lazy>

      <v-card color="grey lighten-5" flat>
        <v-toolbar dark style="background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);" extended flat>
          <v-toolbar-title class="subtitle-1">Cost Estimation - Blue Line Bombardier Trains</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
             <v-btn icon @click.native="toggledialbltwo" dark>
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
                          hint="Trains on this line has 6/ 8 bogies"
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
                          <h2 class="subheading mt-2 mb-1">Lower panels your ad will be displayed on: {{panelsl()}}</h2>
                          <h2 class="subheading mt-2 mb-1">Lower panels your ad will be displayed on: {{panelsu()}}</h2>
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
          { text: 'Trains with 6 bogies', value: 'sb' },
          { text: 'Trains with 8 bogies', value: 'eb' }
        ],
            tbogies: 0,
        items: [
          {
            value: false,
            name: 'Number of trains',
            sb: 36,
            eb: 4
          },
          {
            value: false,
            name: 'Total Bogies',
            sb: 216,
            eb: 32
          },
          {
            value: false,
            name: 'Lower Panels per train',
            sb: 74,
            eb: 98
          },
          {
            value: false,
            name: 'Upper Panels per train',
            sb: 98,
            eb: 132
          },
          {
            value: false,
            name: 'Total Lower panels',
            sb: '2,664',
            eb: 392
          },
          {
            value: false,
            name: 'Total Upper panels',
            sb: '3,528',
            eb: 528
          },
          {
            value: false,
            name: 'Cost/ Bogie/ Month (₹)',
            sb: '132,000',
            eb: '132,000'
          },
          {
            value: false,
            name: 'Cost/ Train/ Month (₹)',
            sb: '814,000',
            eb: '1,078,000'
          }
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
          },
          {
            value: 7,
            text: '7 Bogies'
          },
          {
            value: 8,
            text: '8 Bogies'
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
            text: '6 Bogie Train'
          },
          {
            value: 2,
            text: '8 Bogie Train'
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
    panelsl() {
      if(this.select=="1") {
        if(this.seltrainvar=="1") {
          this.tbogies = 6*this.trainnumber;
          return this.trainnumber*74 + " panels";
        }
      }
      if(this.select=="1") {
        if(this.seltrainvar=="2") {
          this.tbogies = 8*this.trainnumber;
          return this.trainnumber*98 + " panels";
        }
      }
      if(this.select=="2") {
        this.tbogies = this.bogienumber;
          return Math.round(this.bogienumber*12.33) + " panels";
      }
      else {
        return '0 panels';
      }
    },
    panelsu() {
      if(this.select=="1") {
        if(this.seltrainvar=="1") {
          this.tbogies = 6*this.trainnumber;
          return this.trainnumber*98 + " panels";
        }
      }
      if(this.select=="1") {
        if(this.seltrainvar=="2") {
          this.tbogies = 8*this.trainnumber;
          return this.trainnumber*132 + " panels";
        }
      }
      if(this.select=="2") {
        this.tbogies = this.bogienumber;
          return Math.round(this.bogienumber*16.33) + " panels";
      }
      else {
        return '0 panels';
      }
    },
    tcost () {
      if(this.campaignperiod!=0) {
        return ((this.campaignperiod*this.tbogies*132000)+this.tbogies*6000).toLocaleString();
      }
      else {
        return (this.tbogies*132000+this.tbogies*6000).toLocaleString();
      }
    },
    pmcost () {
      return (this.tbogies*132000).toLocaleString();
    },
    ficharges () {
      return (this.tbogies*6000).toLocaleString();
    },
    ...mapMutations([
        'toggledialbltwo'
      ])
},
computed: {
      ...mapGetters([
        'dialbltwo'
      ])
    }
}
</script>

<style scoped>
  .tbl {
    margin-top: -48px;
  }
</style>
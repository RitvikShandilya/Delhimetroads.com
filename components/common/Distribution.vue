<template>
    <v-dialog v-model="getdialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-card>
              <v-toolbar dark class="primary">
                  <v-toolbar-title class="subtitle-1">Audience Distribution</v-toolbar-title>
                  <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn icon @click.native="toggledialog" dark>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-toolbar-items>
              </v-toolbar>


        <v-row class="justify-center mt-4">
                <v-col md="10" lg="8">
                    <v-data-table
                        v-bind:headers="headers"
                        :items="items"
                        hide-actions-footer
                        class="elevation-1"
                      >
                      <template slot="items" scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.commuters }}</td>
                        <td class="text-xs-right">{{ props.item.routeLength }}</td>
                        <td class="text-xs-right">{{ props.item.trainsForBranding }}</td>
                        <td class="text-xs-right">{{ props.item.totalStations }}</td>
                        <td class="text-xs-right">{{ props.item.travelTime }}</td>
                      </template>
                    </v-data-table>
                </v-col>
        </v-row>

        <v-row class="justify-center pt-3">
          <v-col md="5" lg="4">
            <v-card class="grey lighten-4 ma-3">
            <v-toolbar dense class="white elevation-0">
              <v-toolbar-title class="body-2">Ridership Breakdown for Different Lines</v-toolbar-title>
            </v-toolbar>
            <vue-chart type="doughnut" :data="chartData" :options="options"></vue-chart>
            </v-card>
          </v-col>
          <v-col md="5" lg="4">
            <v-card class="grey lighten-4 ma-3">
            <v-toolbar dense class="white elevation-0">
              <v-toolbar-title class="body-2">Age Distribution</v-toolbar-title>
            </v-toolbar>
            <vue-chart type="horizontalBar" :data="barData" :options="baroptions"></vue-chart>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="justify-center pt-3">
          <v-col md="5" lg="4">
            <v-card class="grey lighten-4 ma-3">
            <v-toolbar dense class="white elevation-0">
              <v-toolbar-title class="body-2">Yearly Ridership for Given Year</v-toolbar-title>
            </v-toolbar>
            <vue-chart type="line" :data="lineData" :options="lineoptions"></vue-chart>
            </v-card>
          </v-col>
          <v-col md="5" lg="4">
            <v-card class="grey lighten-4 ma-3">
            <v-toolbar dense class="white elevation-0">
              <v-toolbar-title class="body-2">Distribution By Occupation</v-toolbar-title>
            </v-toolbar>
            <vue-chart type="pie" :data="pieData" :options="pieoptions"></vue-chart>
            </v-card>
          </v-col>
        </v-row>
        </v-card>
    </v-dialog>
</template>

<script>
import VueChart from 'vue-chart-js'
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {
    data () {
      return {
        //table

          headers: [
          {
            text: 'Lines',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Total Commuters', value: 'commuters' },
          { text: 'Route Length (km)', value: 'routeLength' },
          { text: 'Trains For Branding', value: 'trainsForBranding' },
          { text: 'Total Stations', value: 'totalStations' },
          { text: 'Travel Time (mins)', value: 'travelTime' }
        ],
        items: [
          {
            value: false,
            name: 'Red Line',
            commuters: '734,852',
            routeLength: 24.4,
            trainsForBranding: 29,
            totalStations: 21,
            travelTime: 45
          },
          {
            value: false,
            name: 'Yellow Line',
            commuters: '1,894,564',
            routeLength: 43.7,
            trainsForBranding: 60,
            totalStations: 37,
            travelTime: 80
          },
          {
            value: false,
            name: 'Blue Line',
            commuters: '1,719,498',
            routeLength: 57.0,
            trainsForBranding: 71,
            totalStations: 51,
            travelTime: 90
          },
          {
            value: false,
            name: 'Green Line',
            commuters: '243,339',
            routeLength: 22.7,
            trainsForBranding: 19,
            totalStations: 16,
            travelTime: 30
          },
          {
            value: false,
            name: 'Violet Line',
            commuters: '516,715',
            routeLength: 35.0,
            trainsForBranding: 38,
            totalStations: 28,
            travelTime: 60
          },
          {
            value: false,
            name: 'Total',
            commuters: '5,108,968',
            routeLength: 184,
            trainsForBranding: 217,
            totalStations: 153,
            travelTime: 305
          }
        ],

          //For Doughnut Chart - Ridership
          chartData: {
            labels: ['Red Line', 'Yellow Line', 'Blue Line', 'Green Line', 'Violet Line'],
              datasets: [
                  {
                      data: [734852, 1894564, 1719498, 243339, 516715],
                      backgroundColor: [
                      'rgba(255,99,132,1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)']
                  }
              ],
          },
          options: {
            legend: {
              position: 'right',
              labels: {
                  // This more specific font property overrides the global property
                  fontSize: 17
              }
            }
          },
          ///For horizontal bar chart - Age
          barData: {
            labels: ['Upto 20', '20-30', '30-40', '40-50', '50-60', '>60'],
              datasets: [
                  {
                      data: [12, 45, 29, 11, 3, 1],
                      backgroundColor: [
                      "rgba(255, 99, 132, 0.4)",
                      "rgba(255, 159, 64, 0.4)",
                      "rgba(255, 205, 86, 0.4)",
                      "rgba(75, 192, 192, 0.4)",
                      "rgba(54, 162, 235, 0.4)",
                      "rgba(153, 102, 255, 0.4)"],
                      borderColor: [
                      "rgb(255, 99, 132)",
                      "rgb(255, 159, 64)",
                      "rgb(255, 205, 86)",
                      "rgb(75, 192, 192)",
                      "rgb(54, 162, 235)",
                      "rgb(153, 102, 255)",],
                      borderWidth: 1
                  }
              ],
          },
          baroptions: {
            legend: {
              display: false
            },
            scales: {
                xAxes: [{
                  ticks: {
                    beginAtZero: true
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Percentage',
                    fontSize: 17,
                    fontFamily: 'sans-serif'
                  }
                }],
                yAxes: [{
                ticks: {
                    beginAtZero: true
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Age Group',
                    fontSize: 17,
                    fontFamily: 'sans-serif'
                  }
                }]
              }
          },
          //line graph


          lineData: {
            labels: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
              datasets: [
                  {
                      data: [3.87, 19.64, 45.44, 98.05, 169.34, 218.71, 263.74 , 307.40, 460.18, 607.66, 702.95 , 801.68, 870.88, 946.95],
                      backgroundColor: '#FF1744',
                      lineTension:0.3
                  }
              ]
          },
          lineoptions: {
            legend: {
            display: false
            },
            scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Financial Year',
                    fontSize: 17,
                    fontFamily: 'sans-serif'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Ridership (Million)',
                    fontSize: 17,
                    fontFamily: 'sans-serif'
                  }
                }]
              }
          },
          //pie chart
          pieData: {
            labels: ['Service', 'Business', 'Student', 'Unemployed'],
              datasets: [
                  {
                      data: [51, 15, 28, 6],
                      backgroundColor: [
                      'rgba(255,99,132,1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(75, 192, 192, 1)'
                      ]
                  }
              ],
          },
          pieoptions: {
            legend: {
              position: 'right',
              labels: {
                  // This more specific font property overrides the global property
                  fontSize: 17
              }
            }
          }
      }
    },
    computed: {
      ...mapGetters([
        'getdialog',
        'lines'
      ])
    },
    methods: {
      ...mapMutations([
        'toggledialog'
      ]),
      linecolor (name) {
        var stringArray = name.split(" ");
        return stringArray[0];
      }
    },
    components: {
    VueChart
    }
}

</script>

<style>

</style>

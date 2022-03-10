<template>
<div>
    <v-card flat class="mb-3">
      <v-toolbar dense class="white">
        <v-toolbar-title class="body-1">Choose Line</v-toolbar-title>
        <v-spacer></v-spacer>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                <v-btn absolute
                dark
                fab
                v-bind="attrs"
                v-on="on"
                right
                small
                class="primary">
                <v-icon dark>mdi-plus</v-icon>
                </v-btn>
                </template>
                <v-list>
                <v-list-item v-for="item in lines"
                            :key="item.title"
                            @click = "item.enabled = true">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
      </v-toolbar>
      <v-list dense class="grey lighten-5">
        <v-chip small close v-for = "line in lines"
                @click:close = "line.enabled = !line.enabled"
                v-model="line.enabled"
                v-if="line.enabled"
                class="primary white--text mx-1 mt-1"
                :key="line.title">
            {{line.title}}
        </v-chip>
         <v-expansion-panels>
            <v-expansion-panel v-for="(line,i) in lines"
                                       :key="i" v-bind:value="line === 2"
                                        v-if="line.enabled">
            <v-expansion-panel-header>
            {{line.title + ' Stations - ' + line.length}}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            {{line.stations}}
            </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
      </v-list>
    </v-card>

    <v-card flat>
      <v-toolbar dense class="white">
        <v-toolbar-title class="body-1">Map View</v-toolbar-title>
      </v-toolbar>
            <div id="map" style="width:100%; height:360px; float:left">
            </div>
    </v-card>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {
        data () {
            return {
                finalreach: 0
            }
        },
        
        methods: {
            ...mapMutations([
                'togglebvisible1',
                'togglebvisible2',
                'togglebvisible3',
                'togglebvisible1f',
                'togglebvisible2f',
                'togglebvisible3f'
            ]),
          initialize()
          {
            var mapOptions = {
                    zoom: 10,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(28.597, 77.193),
              styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "color": "#e2e4e5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "lightness": "15"
            },
            {
                "color": "#4c6a87"
            },
            {
                "gamma": "1.73"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#c6cdca"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6f6f6f"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "saturation": "8"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2e62a5"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

            }
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var kmlUrl = 'https://drive.google.com/uc?export=download&id=0B6haZOX8nWKPd0JvX0VnRlN0ekU';
            var kmlOptions = {
              suppressInfoWindows: true,
              preserveViewport: true,
              map: map
            };
            var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);

          }

        },
        computed: {
            ...mapGetters([
                'lines',
                'bvisible1'
            ]),
            reach () {
            this.finalreach = 0;
              for(var i in this.lines) {
                if(this.lines[i].enabled) {
                    this.finalreach += this.lines[i].people;
                }
              }
                //control badge for first
                if(!this.lines[1].enabled && !this.lines[2].enabled)
                    {
                        this.togglebvisible1();
                    }
                if(this.lines[1].enabled && this.lines[2].enabled)
                    {
                        this.togglebvisible1f();
                    }
                //control badge for second
                if(!this.lines[0].enabled && !this.lines[1].enabled && !this.lines[2].enabled)
                    {
                        this.togglebvisible2();
                    }
                else
                    {
                        this.togglebvisible2f();
                    }
                //control badge for third section
                if(!this.lines[3].enabled && !this.lines[4].enabled)
                    {
                        this.togglebvisible3();
                    }
                else
                    {
                        this.togglebvisible3f();
                    }
              this.$emit('tellfinalreach', this.finalreach.toLocaleString());
            }
        },
        mounted () {
            this.initialize(),
            this.reach
        },
        beforeUpdate () {
            this.reach
        }
}

</script>

<style scoped>
</style>
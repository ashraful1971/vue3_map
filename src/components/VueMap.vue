<template>
  <GMapMap
    :center="center"
    :zoom="15"
    :disableDefaultUI="true"
    map-type-id="terrain"
    class="ami"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="openMarker(m.id)"
      >
        <GMapInfoWindow
          :closeclick="true"
          @closeclick="openMarker(null)"
          :opened="openedMarkerID == m.id"
        >
          <div>
            Hey, You can put any content here.<br />
            Feel free to use it as you want.<br />
            Happy coding... {{ m.id }}
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>

<style>
.ami {
  height: 100vh;
}
</style>

<script>
export default {
  name: "VueMap",
  data() {
    return {
      openedMarkerID: null,
      center: {
        lat: 51.093048,
        lng: 6.84212,
      },
      markers: [
        {
          id: 1,
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          id: 2,
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
        {
          id: 3,
          position: {
            lat: 51.165218,
            lng: 7.067116,
          },
        },
        {
          id: 4,
          position: {
            lat: 51.09256,
            lng: 6.84074,
          },
        },
      ],
    };
  },
  methods: {
    openInfoWindow(id) {
      return;
    },
    openMarker(id) {
      this.openedMarkerID = id;
    },
  },
};
</script>
<template>
  <div class="container">
    <main v-if="busy">
      <div class="d-flex justify-content-center mb-3">
        <b-spinner variant="secondary" label="Loading..."></b-spinner>
      </div>
    </main>
    <main v-else>
      <h2>Locations for aid projects in Somalia</h2>
      <section id="content" v-if="locations">
        <p>
          These names reflect Somalia's official administrative
          divisions. The regions of Awdal, Sanaag, Sool, Toghdeer, and
          Woqooyi Galbeed make up <b>Somaliland</b>, a
          separately-governed entity without international
          recognition. Somaliland divides Somalia's region of Woqooyi
          Galbeed into its own regions of <i>Maroodi Jeeh</i> and
          <i>Sahil</i>.
        </p>

        <section
          v-for="region_name in Object.keys(locations.admin1).sort()"
          :key="region_name">
          <h3>
            <LocationLink
              :stub="region_name"
              :name="locations.admin1[region_name].info.name"
              type="admin1" />
            ({{ locations.admin1[region_name].orgs | flatten | length | plural("organisation", "organisations") }})
          </h3>
          <div class="inline-list">
            <Location
              v-for="district_name in Object.keys(locations.admin2).sort()"
              :key="district_name"
              :name="locations.admin2[district_name].info.name"
              :stub="district_name"
              type="admin2"
              :org_count="flatten(locations.admin2[district_name].orgs).length"
              :activity_count="flatten(locations.admin2[district_name].activities).length" />
          </div>
        </section>
      </section>
    </main>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Location from '~/components/location.vue'
import LocationLink from '~/components/location_link.vue'
export default {
  data() {
    return {
      busy: true
    }
  },
  components: {
    Location, LocationLink
  },
  methods: {
    flatten(items) {
      return this.$options.filters.flatten(
        items
      )
    }
  },
  computed: mapState(['locations']),
  async mounted() {
    await this.$store.dispatch('loadLocations')
    this.busy = false
  }
}
</script>
<template>
  <div>
    <b-row class="mb-2">
      <b-col lg="12" class="my-1">
        <b-form-input
          id="filter-input"
          v-model="filter"
          type="search"
          placeholder="Type to search organisations..."
        ></b-form-input>
      </b-col>
    </b-row>
    <hr />
    <section id="content">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1" :id="scope"
          v-for='scope in ["local", "regional", "international", "unknown"]'
          :key="scope">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="`accordion-${scope}`">{{ scope | scope | capitalize }}s</b-button>
          </b-card-header>
          <b-collapse :id="`accordion-${scope}`" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-card-group columns>
                  <Org
                    v-for="org in filteredOrgs"
                    :key="org.info.name"
                    v-if="org.info.scope==scope"
                    :org="org"
                    :activity_count="org.activity_totals[source]"
                    />
                </b-card-group>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Org from '~/components/org.vue'
export default {
  data() {
    return {
      filter: null
    }
  },
  components: {
    Org
  },
  props: {
    orgs: Object
  },
  methods: {
    filterSource(item) {
      if (this.source == 'all') { return true }
      return item[1].sources.includes(this.source.toUpperCase())
    },
    filterOrgs(item) {
      if ([null, ''].includes(this.filter)) { return true }
      return item[1].info.name.toLowerCase().includes(this.filter.toLowerCase())
    },
  },
  computed: {
    entries() {
      return Object.entries(this.orgs)
    },
    filteredOrgs() {
      if (([null, ''].includes(this.filter)) && (this.source == 'all')) {
        return this.orgs
      }
      return Object.fromEntries(
        this.entries.filter(entry => {
          return this.filterOrgs(entry) && this.filterSource(entry)
        })
      )
    },...mapState(['source'])
  },
  watch: {
  }
}
</script>
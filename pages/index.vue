<template>
  <div class="container">
    <main>
      <section id="overview">
        <b-jumbotron>
          <template #header>Somalia Local Activity Explorer</template>
          <template #lead>
            This prototype explorer throws a spotlight on the work
            of local and national aid actors in Somalia, and their
            relationships with regional and international partners.
            It combines the monthly humanitarian <a
            href="https://data.humdata.org/dataset/somalia-operational-presence"
            target="_blank">Somalia 3W</a> (Who? What? Where?)
            reports compiled by UN OCHA, and the Somalia-focused
            activities that organisations self-publish through the <a
            href="https://iatistandard.org"
            target="_blank">International Aid Transparency
            Initiative</a> (IATI).
          </template>
          <hr />
          <p class="lead text-md-center">
            Explore the data on Somalia's aid response:
          </p>
          <b-card-group deck>
            <b-card img-src="~/assets/who.png" img-alt="Image" img-top>
              <b-btn block variant="primary" :to="{name: 'organisations'}">Organisations (Who?)</b-btn>
            </b-card>
            <b-card img-src="~/assets/what.png" img-alt="Image" img-top>
              <b-btn block variant="primary" :to="{name: 'sectors'}">Sectors (What?)</b-btn>
            </b-card>
            <b-card img-src="~/assets/where.png" img-alt="Image" img-top>
              <b-btn block variant="primary" :to="{name: 'locations'}">Locations (Where?)</b-btn>
            </b-card>
          </b-card-group>
        </b-jumbotron>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>

</style>

<template lang="pug">
  section#SprintSponsor.sponsor-section
      h2 Sprint Sponsor
      .card-block.uk-flex.uk-flex-wrap
        MediumCard(v-for="sponsor in sponsors" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import MediumCard from '../MediumCard';
  export default {
    name: 'platinum-sponsor',
    props: ["sponsors"],
    components: {
      MediumCard,
    }
  }
</script>

<style lang="scss" scoped>
</style>
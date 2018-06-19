<template lang="pug">
  section#SilverSponsor.sponsor-section
      h2 Silver Sponsor
      .card-block.uk-flex.uk-flex-wrap
        MediumCard(v-for="sponsor in sponsors" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import MediumCard from '../MediumCard';
  export default {
    name: 'Silver-sponsor',
    props: ["sponsors"],
    components: {
      MediumCard,
    }
  }
</script>

<style lang="scss" scoped>
</style>
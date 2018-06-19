<template lang="pug">
  section#PlatinumSponsor.sponsor-section
      h2 Platinum Sponsor
      .card-block.uk-flex.uk-flex-wrap
        BigCard(v-for="sponsor in sponsors" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import BigCard from '../BigCard';

  export default {
    name: 'platinum-sponsor',
    props: ['sponsors'],
    components: {
      BigCard,
    }
  }
</script>

<style lang="scss" scoped>
</style>
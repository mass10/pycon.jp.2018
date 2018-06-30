<template lang="pug">
  section#SilverSponsor.sponsor-section
      h2 Silver Sponsor
      .card-block.uk-flex.uk-flex-wrap.uk-flex-space-between
        MediumCard(v-for="(sponsor, index) in sponsors" :index="index" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import MediumCard from '~/components/Sponsor/Card/MediumCard';
  export default {
    name: 'Silver-sponsor',
    props: ["sponsors"],
    components: {
      MediumCard,
    }
  }
</script>

<style lang="scss" scoped>
.card-block {
  justify-content: space-between;
}
.card-block::before{
  content:"";
  display: block;
  width: 22%;
  order:1;
}
.card-block::after{
  content:"";
  display: block;
  width: 22%;
}
</style>
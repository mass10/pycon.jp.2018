<template lang="pug">
#pycon-sponsor
    Diamond(:sponsor="diamondSponsor")
    Platinum(:sponsors="platinumSponsors")
    Gold(:sponsors="goldSponsors")
    Sprint(:sponsors="sprintSponsors")
    Silver(:sponsors="silverSponsors")
    Patron(:sponsors="patron")
    Media(:sponsors="mediaSponsors")
</template>


<script>
  import axios from 'axios';
  import _ from 'lodash';
  import Diamond from '~/components/Sponsor/Diamond';
  import Platinum from '~/components/Sponsor/Platinum';
  import Gold from '~/components/Sponsor/Gold';
  import Sprint from '~/components/Sponsor/Sprint';
  import Silver from '~/components/Sponsor/Silver';
  import Patron from '~/components/Sponsor/Patron';
  import Media from '~/components/Sponsor/Media';

  const apiEndpint = 'https://script.google.com/macros/s/AKfycbyKmE6Ew9aWmOnj3VSwn435T8cx8kF0SkJb9fN7_PdE_ME2QpqP/exec';

  export default {
    name: 'sponsor',
    components: {
      Diamond,
      Platinum,
      Gold,
      Sprint,
      Silver,
      Patron,
      Media
    },
    data() {
      return {
        sponsors: null,
        diamondSponsor: null,
        platinumSponsors: null,
        goldSponsors: null,
        sprintSponsors: null,
        silverSponsors: null,
        patron: null,
        mediaSponsors: null
      }
    },
    mounted() {
      axios.get(apiEndpint)
        .then(res => (this.sponsors = res.data.data ))
    },
    watch: {
      sponsors: function(){
        this.diamondSponsor = _.filter(this.sponsors, {'package': 'Diamond'})[0];
        this.platinumSponsors = _.filter(this.sponsors, {'package': 'Platinum'});
        this.goldSponsors = _.filter(this.sponsors, {'package': 'Gold'});
        this.sprintSponsors = _.filter(this.sponsors, {'package': 'Sprint'});
        this.silverSponsors = _.filter(this.sponsors, {'package': 'Silver'});
        this.patron = _.filter(this.sponsors, {'package': 'Patron'});
        this.mediaSponsors = _.filter(this.sponsors, {'package': 'Media'}); 
      }
    },
    head () {
      return {
        title: this.$t('sponsor.title')
      }
    }
  }
</script>

<style lang="scss" scoped>
.sponsor-section {
    margin-bottom: 100px;
}
</style>
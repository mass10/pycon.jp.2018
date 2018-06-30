<template lang="pug">
#pycon-sponsor
  div.uk-container
    diamond(:sponsor="diamondSponsor")
    platinum(:sponsors="platinumSponsors")
    gold(:sponsors="goldSponsors")
    sprint(:sponsors="sprintSponsors")
    silver(:sponsors="silverSponsors")
    lunch(:sponsors="lunchSponsors")
    lanyard(:sponsors="lanyardSponsors")
    water(:sponsors="waterSponsors")
    patron(:sponsors="patron")
    media(:sponsors="mediaSponsors")
</template>


<script>
  import axios from 'axios';
  import _ from 'lodash';
  import Diamond from '~/components/Sponsor/Diamond';
  import Platinum from '~/components/Sponsor/Platinum';
  import Gold from '~/components/Sponsor/Gold';
  import Sprint from '~/components/Sponsor/Sprint';
  import Silver from '~/components/Sponsor/Silver';
  import Lunch from '~/components/Sponsor/Lunch';
  import Lanyard from '~/components/Sponsor/Lanyard';
  import Water from '~/components/Sponsor/Water';
  import Patron from '~/components/Sponsor/Patron';
  import Media from '~/components/Sponsor/Media';

  const apiEndpint = 'https://script.google.com/macros/s/AKfycbyKmE6Ew9aWmOnj3VSwn435T8cx8kF0SkJb9fN7_PdE_ME2QpqP/exec?stage=dev&noCache=true';

  export default {
    name: 'sponsor',
    components: {
      Diamond,
      Platinum,
      Gold,
      Sprint,
      Silver,
      Lunch,
      Lanyard,
      Water,
      Patron,
      Media
    },
    data() {
      return {
        sponsors: null,
        diamondSponsor: [],
        platinumSponsors: [],
        goldSponsors: [],
        sprintSponsors: [],
        silverSponsors: [],
        lunchSponsors: [],
        lanyardSponsors: [],
        waterSponsors: [],
        patron: [],
        mediaSponsors: [] 
      }
    },
    mounted() {
      axios.get(apiEndpint)
        .then(res => (this.sponsors = res.data.data))
    },
    watch: {
      sponsors: function(sponsors){
        sponsors.forEach(sponsor => {
          switch (sponsor['package']) {
            case 'Diamond': this.diamondSponsor = sponsor; break
            case 'Platinum': this.platinumSponsors.push(sponsor); break
            case 'Gold': this.goldSponsors.push(sponsor); break
            case 'Sprint': this.sprintSponsors.push(sponsor); break
            case 'Silver': this.silverSponsors.push(sponsor); break
            case 'Lunch': this.lunchSponsors.push(sponsor); break
            case 'Lanyard': this.lanyardSponsors.push(sponsor); break
            case 'Water': this.waterSponsors.push(sponsor); break
            case 'Patron': this.patron.push(sponsor); break
            case 'Media': this.mediaSponsors.push(sponsor); break
          }
        });
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
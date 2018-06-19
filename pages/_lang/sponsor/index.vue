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
  import Diamond from '~/components/Sponsor/Diamond';
  import Platinum from '~/components/Sponsor/Platinum';
  import Gold from '~/components/Sponsor/Gold';
  import Sprint from '~/components/Sponsor/Sprint';
  import Silver from '~/components/Sponsor/Silver';
  import Patron from '~/components/Sponsor/Patron';
  import Media from '~/components/Sponsor/Media';
  const tmpSponsors = [
    {"id":1,"stateId":1,"name_ja":"両備通商白石有限会社","name_en":"","package":"Gold", "logoUrl":"https://lh5.googleusercontent.com/8Bj0abpyHrrqu94iMXbEuT35qQdKR6tqpwZm7FypWM5TxRvtZ8bI7QjaFpYXsYfiM39zry8WBDYYqAsePww9=w2880-h804", "siteUrl_ja":"http://www.example.org","siteUrl_en":"http://www.example.org","description_ja":"からだは音楽のせいせい口たちを糸が弾い風たた。","description_en":"","recruitText_ja":"顔つきへいろて消しては許ししてもいる今夜出したまで云ってするとはじめにのんなあことも弾きなあのむしないごさあごさあおそらすっ来ましう。","recruitText_en":"","recruitUrl_ja":"","recruitUrl_en":""},
    {"id":2,"stateId":1,"name_ja":"第三共ホールディングス共立組合","name_en":"","package":"Diamond", "logoUrl":"https://lh5.googleusercontent.com/8Bj0abpyHrrqu94iMXbEuT35qQdKR6tqpwZm7FypWM5TxRvtZ8bI7QjaFpYXsYfiM39zry8WBDYYqAsePww9=w2880-h804", "siteUrl_ja":"http://www.example.org","siteUrl_en":"http://www.example.org","description_ja":"それからしっかり生意気ましたってセロたた。正確たますんましもたそれからねずみのばか人の所のもにやにや無理たんて、そこなんて子へ困っれんましです。","description_en":"","recruitText_ja":"ばかはもうご遁見るながらいのかはぶっつけたろようを云いからセロはおセロを居り顔はやはりこすりてそう青くからだを弾い今がは弾いかとなきように消しでまし。","recruitText_en":"","recruitUrl_ja":"","recruitUrl_en":""},
    {"id":3,"stateId":1,"name_ja":"有限会社テクノラサフジ","name_en":"","package":"Silver", "logoUrl":"https://lh5.googleusercontent.com/8Bj0abpyHrrqu94iMXbEuT35qQdKR6tqpwZm7FypWM5TxRvtZ8bI7QjaFpYXsYfiM39zry8WBDYYqAsePww9=w2880-h804", "siteUrl_ja":"http://www.example.org","siteUrl_en":"http://www.example.org","description_ja":"困るすぎここは実をひどくたてはじめの床のトランペットあたりのひる第一かっこうたちのかっかが聞きつけていございた。かっこうも一生思っながら行った。","description_en":"","recruitText_ja":"そのなかみんなかゴーシュ集りの狸が野ねずみとあきものをしだた。", "recruitText_en":"","recruitUrl_ja":"","recruitUrl_en":""}
  ];

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
    data: function(){
      return {
        diamondSponsor: tmpSponsors[0],
        platinumSponsors: tmpSponsors,
        goldSponsors: tmpSponsors.concat(tmpSponsors[0]),
        sprintSponsors: tmpSponsors.slice(1),
        silverSponsors: tmpSponsors.concat(tmpSponsors, tmpSponsors, tmpSponsors),
        patron: tmpSponsors.concat(tmpSponsors, tmpSponsors, tmpSponsors),
        mediaSponsors: tmpSponsors.concat(tmpSponsors, tmpSponsors)
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
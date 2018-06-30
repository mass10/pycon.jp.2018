<template lang="pug">
.big-card
  .decoration-box
  .card
    .img-block
      img.img(:src="this.imgSrc")  
    .body 
      // .name {{sponsor.name_ja}}
      .desc {{this.desc}}
      a.detail-link 詳細を表示する
</template>

<script>
  export default {
    name: 'card',
    props: ['sponsor', "lang"],
    computed: {
      imgSrc: function(){
        if (!this.sponsor.imgPath || this.sponsor.imgPath === ""){
          return require("~/assets/img/noImage.png") 
        } else {
          return require("~/assets/img/sponsor/" + this.sponsor.imgPath) 
        } 
      },
      name: function(){
        return this.sponsor.name_ja
      },
      desc: function(){
        return this.sponsor.description_ja
      }
    }
  }
</script>

<style lang="scss" scoped>
// sponsor
$sponsor-big-card-width: 30%;
* {
  box-sizing: border-box;
}
.big-card {
  position: relative;
  height: 470px;
  width: $sponsor-big-card-width;
}
.decoration-box {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(5deg);
  border-radius: 4px;
  transform: rotate(3deg);
  background-image: linear-gradient(46deg, #fff43f, #e8d600);
}
.card {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 15px 15px 0 15px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}
.img-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.img-outer {
  max-width: 100%;
  max-height: 100%;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.desc {
  font-size: 15px;
}
.detail-link {
  display: inline-block;
  padding: 10px 0;
}
</style>
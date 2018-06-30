<template lang="pug">
.micro-card
  .decoration-box(:style="this.decorationStyle")
  .card.uk-flex.uk-flex-wrap
    .uk-width-2-5
      .img-block
        img.img(:src="this.imgSrc")
    .uk-width-3-5.text
      .name {{this.name}}
</template>

<script>
  export default {
    name: 'medium-card',
    props: ["sponsor", "index"],
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
      decorationStyle: function(){
        if(this.index % 2 === 0)
          return "background-image: linear-gradient(62deg, #28aae2, #00dfd8);"
        if(this.index % 2 === 1)
          return "background-image: linear-gradient(46deg, #fff43f, #e8d600)";
      }
    }
  }
</script>

<style lang="scss" scoped>
$sponsor-micro-card-width: 22%;
* {
  box-sizing: border-box;
}
.micro-card {
  position: relative;
  height: 90px;
  width: 22%;
  margin: 0 0 50px;
}
.decoration-box {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(5deg);
  border-radius: 4px;
  transform: rotate(5deg);
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
  height: 60px;
}
.text {
  padding: 5px 0 0 15px;
}
</style>
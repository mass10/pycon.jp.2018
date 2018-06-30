<template lang="pug">
section#DiamondSponsor.sponsor-section
  h2 Diamond Sponsor
  .uk-flex.uk-flex-wrap.sponsor-block
    .uk-width-2-5.logo
        .decoration-box
        .logo-frame
            img.img(:src="this.imgSrc")  
    .uk-width-3-5.text
       .name {{ sponsor ? sponsor.name_ja : '' }} 
       .desc {{ sponsor ? sponsor.description_ja : '' }}
</template>

<script>
  export default {
    name: 'diamond',
    props: ["sponsor"],
    computed: {
      imgSrc: function(){
        if (!this.sponsor.imgPath || this.sponsor.imgPath === ""){
          return require("~/assets/img/noImage.png") 
        } else {
          return require("~/assets/img/sponsor/" + this.sponsor.imgPath) 
        } 
      }
    }
  }
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.sponsor-block {
  height: 326px;
}
.logo {
  position: relative;
//   height: 326px;
}
.text {
  padding: 15px 0 0 67px;
}
.name {
  font-size: 50px;
  font-weight: 300;
  line-height: normal;
  color: #4a4a4a;
}
.desc {
  padding: 20px 0 0 0;
}
.decoration-box, .logo-frame {
  position: absolute;
  width: 100%;
  height: 100%;
}
.decoration-box {
  transform: rotate(5deg);
  background-image: linear-gradient(62deg, #28aae2, #00dfd8);
}
.logo-frame {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}
.img {
  width: 100%;
}
</style>
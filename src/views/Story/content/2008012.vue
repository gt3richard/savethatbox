<template>
  <div class="content">
    <div class="row">
      <div class="col-12 col-lg-7">
        <div class="content" v-html="html"></div>
      </div>
      <div class="col-12 col-lg-5 stores">
        <h4>Visit these stores</h4>
        <div
          class="row justify-content-center"
          v-for="(id, idx) in business"
          :key="idx"
        >
          <div class="col-12 col-md-8 col-lg-12 storecard">
            <BusinessCard
              :business="businesses.find((b) => b.id === id)"
              staticBase="/"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BusinessCard from "../../../components/layout/BusinessSection/BusinessCard";
import data from "../../../assets/data.json";
export default {
  name: "Masks",
  components: { BusinessCard },
  data() {
    return {
      business: [888, 807, 709],
      businesses: data,
      html: `
      <h1>Face masks are the new accessory of 2020</h1>
      <div class="subheader">
      <h2>Richard</h2><h2>August 1, 2020</h2>
      </div>
      <p>Out of this pandemic a new category of accessory has arisen. Face masks have gone from plain fiber in white or light blue into fast fashion. There have never been more options to express your personal style in a new way. And with companies mandating masks to enter stores, retails are capitalizing on sales.
      </p>
      <img class="start figure" src="../../../static/story/2008012/asos.png"/>
      <p><a href="https://www.asos.com/us/search/?q=face+masks"><strong>Asos</strong></a> has a large selection of face masks for all different personalities. The great thing about these is most have adjustable straps to fit anyone’s face. Although they are made from similar fabrics used in their clothing so breathability may be harder compared with the material used in medical masks.
      </p>
      <img class="start figure" src="../../../static/story/2008012/bonobos.png"/>
      <p><a href="https://bonobos.com/products/riviera-face-mask"><strong>Bonobos</strong></a> is offering a pack of 3 face masks with a range of color designs from a simple solid color to a loud fashionable floral print. The biggest thing to research when buying these are the length of the straps since they are sold in a one size fits all.
      </p>
      <img class="start figure" src="../../../static/story/2008012/underarmour.png"/>
      <p><a href="https://www.underarmour.com/en-us/p/ua-sportsmask/1368010.html?start=0&breadCrumbLast=Headwear"><strong>Under Armour</strong></a> has their UA SPORTSMASK available for preorder with a more form fitting design that should fit better around the nose. The high-performance material is supposed to allow air to better flow into the masks while blocking moisture. With a lot of people having issues with current masks being too restrictive when exercising this should be a great alternative. 
      </p>
      <p>The biggest concern with a lot of these masks are the fit and being non-returnable be sure to read the reviews and make sure to measure your face.
      </p>
      `,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

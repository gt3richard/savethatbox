<template>
  <Content :business="business" :html="html" :other="other" />
</template>

<script>
import Content from "../Content";
export default {
  components: { Content },
  data() {
    return {
      business: [888, 807, 709],
      other: [2008013, 2008014, 2008041],
      html: `
      <h1>Face masks are the new accessory of 2020</h1>
      <div class="subheader">
      <h2>By Richard • August 1, 2020</h2>
      </div>
      <p>Out of this pandemic a new category of accessory has arisen. Face masks have gone from plain fiber in white or light blue into fast fashion. 
      </p>
      <p>There have never been more options to express your personal style in a new way. And with companies mandating masks to enter stores, retails are capitalizing on sales.
      </p>
      <img class="start figure" src="../../../static/story/2008012/asos.png"/>
      <p><a href="https://www.asos.com/us/search/?q=face+masks"><strong>Asos</strong></a> has a large selection of face masks for all different personalities. The great thing about these is most have adjustable straps to fit anyone’s face. 
      </p>
      <p>Although they are made from similar fabrics used in their clothing so breathability may be harder compared with the material used in medical masks.
      </p>
      <img class="start figure" src="../../../static/story/2008012/bonobos.png"/>
      <p><a href="https://bonobos.com/products/riviera-face-mask"><strong>Bonobos</strong></a> is offering a pack of 3 face masks with a range of color designs from a simple solid color to a loud fashionable floral print. 
      </p>
      <p>The biggest thing to research when buying these are the length of the straps since they are sold in a one size fits all.
      </p>
      <img class="start figure" src="../../../static/story/2008012/underarmour.png"/>
      <p><a href="https://www.underarmour.com/en-us/p/ua-sportsmask/1368010.html?start=0&breadCrumbLast=Headwear"><strong>Under Armour</strong></a> has their UA SPORTSMASK available for preorder with a more form fitting design that should fit better around the nose. The high-performance material is supposed to allow air to better flow into the masks while blocking moisture. 
      </p>
      <p>With a lot of people having issues with current masks being too restrictive when exercising this should be a great alternative. 
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

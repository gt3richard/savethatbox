<template>
  <Content :business="business" :html="html" />
</template>

<script>
import Content from "../Content";
export default {
  components: { Content },
  data() {
    return {
      business: [819, 804],
      html: `
      <h1>I tried to have a spa day</h1>
      <div class="subheader">
      <h2>Richard</h2><h2>August 4, 2020</h2>
      </div>
      <p>Since we’re not able to get professional massages because of the COVID shutdown I thought I’d bring the spa to us. Last weekend I was on the hunt for a foot bath and after visiting Target and Bed Bath and Beyond I was surprised to find footbaths are actually pretty expensive, being on average almost $100. Not wanting to spend that much I settled for ordering the <a href="https://www.target.com/p/conair-footbath-with-bubbles-heat/-/A-50909203"><strong>Conair Footbath with Bubbles & Heat</strong></a>, springing the extra $10 for the added benefits of bubbles compared to their base model. Here is where I made my first mistake, taking the average star rating of 3.5 stars out of 5 as reasonable for the price point and not reading any reviews. Target shipped the product promptly and I couldn’t wait to get my feet in it. 
      </p>
      <img class="start figure" src="../../../static/story/2008042/footbath.png"/>
      <p>Once it arrived I filled it with hot water and hit the on switch. I swear I thought something was broken because it was louder than my washing machine. Imagine the noise you hear when blowing up an air mattress. They must use the same compressor for powering those bubbles. Words cannot describe how loud this thing is and it’s supposed to be enjoyed while sitting quietly and enjoying tv or a book. Sadly the bubbles produced are barely even felt. I think the feature more just splashes the water out of the bath. And worse yet you can’t even turn the bubbles off and just use the massage feature. Or wait, there is no vibration massage! I honestly didn’t even know you could sell a footbath without the vibration massage, something the $10 cheaper base model offers. Quickly I re-read the product description to find it read “Foot bath with bubbles, heat, and massage” but I guess massage does not equal vibration. Then there was the promise of heat but my water went cold quickly. I now turned to read the reviews and it confirmed my suspicion with many other purchasers experiencing the same problems.
      </p>
      <img class="start figure" src="../../../static/story/2008042/review1.png"/>
      <img class="start figure" src="../../../static/story/2008042/review2.png"/>
      <p>At this point I packaged up the footbath in disgust and returned it to Target. I can’t say I blame anyone but myself because I was so ready to get that spa treatment I completely skipped doing my due diligence and reading reviews.
      </p>
      `,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

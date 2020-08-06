<template>
  <Content :business="business" :html="html" />
</template>

<script>
import Content from "../Content";
export default {
  components: { Content },
  data() {
    return {
      business: [852, 823],
      html: `
      <h1>Designing my own sneakers</h1>
      <div class="subheader">
      <h2>Richard • August 4, 2020</h2>
      </div>
      <p>I was in the market for a new pair of shoes and having been an Adidas guy for many years I couldn’t find a pair that interested me. I was looking to customize the colors but was disappointed to find Adidas had discontinued their custom color shoes. 
      </p>
      <p>While researching what happened to the service, I came across the <a href="https://www.nike.com/nike-by-you"><strong>Nike By You</strong></a> line. 
      </p>
      <p>For about the same price as a normal pair you can customize not just the colors for various parts of the shoes but also the material used for a leather, suede, or cloth look.
      </p>
      <p>The interface was pretty easy to use and the real-time display of the design choices was a fun all afternoon experience playing with the different colors. I’d compare this to the many hours I’ve spent configuring car and computer builds. 
      </p>
      <p>Nike allows you to change every aspect of the shoes from laces, logo colors, adding custom writing, and even the sole color. 
      </p>
      <img class="start figure" src="../../../static/story/2008041/nike2.png"/>
      <p>The biggest downside was once I placed my order the delivery time was about a month. So this is definitely not an impulse buy but when it finally did arrive I was absolutely satisfied with the result. 
      </p>
      <p>Nike even adds an extra touch by adding your name to the box to make it feel more like a unique creation. 
      </p>
      <p>I really enjoyed the experience with Nike By You and would recommend it to everyone.
      </p>
      `,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

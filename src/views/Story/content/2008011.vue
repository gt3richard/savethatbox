<template>
  <Content :business="business" :html="html" :other="other" />
</template>

<script>
import Content from "../Content";
export default {
  components: { Content },
  data() {
    return {
      business: [826],
      other: [2008012, 2008013, 2008014],
      html: `
      <h1>Apple is now requiring reservations</h1>
      <div class="subheader">
      <h2>By Richard • August 1, 2020</h2>
      </div>
      <div class="row"><div class="col-12">
      <p>This weekend my wife needed to visit Nordstrom and instead of following her around while she shopped I decided to explore the mall and see what retailers are open and how everyone is enforcing the masks requirements. 
      </p>
      <p>I was thinking of dropping by the <a href="https://www.apple.com/retail/unionsquare/"><strong>Apple Store</strong></a> to pick up a pair of AirPod Pros and found a few people waiting outside the store. 
      </p>
      <p>Figuring they were limiting the number of guests at a time into the store I decided to ask how long the wait was and learned Apple has enabled an appointment based reservation system that I would need to register with online before I could enter to shop.
      </p>
      </div>
      <div class="col-12">
      <img class="start figure" src="../../../static/story/2008011/apple2.png"/>
      </div>
      </div>
      <p>This applies for both indoor shopping and Genius Support which is normally something I schedule in advance anyway. The Apple specialist directed me to scan their QR code and could help me make the appointment. 
      </p>
      <p>At the time of your reservation a Specialist will greet you outside, use a touchless thermometer to take your temperature and provide you with a face mask if you don’t have one. Only then will you be brought into the store. The associate will accompany you in the store maintaining social distance to help you with your purchase. </p>
      <img class="figure" src="../../../static/story/2008011/apple1.png"/>
      <p>Because time was limited and I was more in the browsing mood I decided to pass on the visit that day but will make a future attempt to take in the full Apple Covid Experience. 
      </p>
      <p>As this pandemic continues I can see more people shifting to making purchases online and doing in store pickups. You get the ease of online ordering but same day pickup and don’t have to deal with the reservation process to get inside an Apple Store.
      </p>
      `,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

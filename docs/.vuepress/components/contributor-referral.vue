<template>
  <div class="referral-banner" v-if="referral">
    <img v-if="images[referral.toLowerCase()]" :src="images[referral]" :alt="`logo of ${referral}`">
    <div class="text-content" :class="{'only-text': !images[referral]}">
      <h1>
        Welcome {{ referralStrings[referral] }} users!
      </h1>
      Join the VueTube community as a contributor and help us improve video watching
    </div>
  </div>
</template>

<script>
export default {
  name: "contributor_referral",
  data() {
    return {
      referral: this.$route.query.referral?.toLowerCase() || null,
      images: {
        "revanced": "referral-icons/Revanced.svg",
        "vuetube": "logocircle.svg"
      },
      referralStrings: {
        "revanced": "ReVanced",
        "vuetube": "VueTube"
      }
    }
  }
}
</script>

<style scoped>
.referral-banner {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: 1fr;
  grid-gap: 25px;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: var(--c-brand) 1px solid;
  transition: background-color 0.5s;
  justify-items: center;
}

.referral-banner img {
  width: 100%;
  height: 100%;
  max-width: 200px;
  object-fit: contain;
}

.text-content {
  transition: color 0.5s;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.2rem;
  justify-content: center;
}

.text-content.only-text {
  grid-column: span 2;
}

.text-content h1 {
  font-weight: bold;
}

.text-content * {
  margin: 0
}
@media only screen and (max-width: 768px)  {
  .referral-banner {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0;
  }
  .text-content {
    grid-column: span 1;
    text-align: center;
  }
  .referral-banner img {
    max-width: 180px;
  }
}
</style>
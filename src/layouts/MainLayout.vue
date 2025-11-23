<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar class="q-py-sm">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-md"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-weight-bold text-h5 cursor-pointer" @click="$router.push('/')">
          CANTECHS
          <div class="text-caption text-grey-7" style="line-height: 1; margin-top: -4px">
            APPLIANCE SERVICE
          </div>
        </q-toolbar-title>

        <div class="gt-sm row items-center q-gutter-md">
          <q-btn flat no-caps label="Home" to="/" />
          <q-btn flat no-caps label="Service Request" to="/service-request" />
          <q-btn flat no-caps label="Parts Request" to="/parts-request" />
          <q-btn flat no-caps label="Our Service" to="/our-service" />
          <q-btn flat no-caps label="Service Area" to="/service-areas" />
          <q-btn
            unelevated
            color="primary"
            label="Call Us (306) 500-7575"
            href="tel:3065007575"
            icon="phone"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8"> Navigation </q-item-label>

        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/service-request">
          <q-item-section avatar>
            <q-icon name="build" />
          </q-item-section>
          <q-item-section>Service Request</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/parts-request">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>Parts Request</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/our-service">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>Our Service</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/service-areas">
          <q-item-section avatar>
            <q-icon name="map" />
          </q-item-section>
          <q-item-section>Service Areas</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-10 text-white q-py-lg">
      <div class="container q-px-md">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <div class="text-h6 q-mb-md">About Cantechs</div>
            <p class="text-grey-5">
              Saskatchewan's trusted appliance repair service. We provide professional repair
              services for all major household appliances.
            </p>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-h6 q-mb-md">Quick Links</div>
            <div class="column q-gutter-sm">
              <router-link to="/" class="text-grey-5 text-decoration-none hover-white"
                >Home</router-link
              >
              <router-link
                to="/service-request"
                class="text-grey-5 text-decoration-none hover-white"
                >Service Request</router-link
              >
              <router-link to="/parts-request" class="text-grey-5 text-decoration-none hover-white"
                >Parts Request</router-link
              >
              <router-link to="/our-service" class="text-grey-5 text-decoration-none hover-white"
                >Our Service</router-link
              >
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-h6 q-mb-md">Contact Us</div>
            <div class="text-grey-5 q-mb-sm">
              <q-icon name="phone" class="q-mr-sm" /> (306) 500-7575
            </div>
            <div class="text-grey-5 q-mb-sm">
              <q-icon name="email" class="q-mr-sm" /> service@cantechs.ca
            </div>
          </div>
        </div>
        <div class="row q-mt-lg border-top-grey q-pt-md justify-between items-center">
          <div class="text-grey-6 text-caption">
            © {{ new Date().getFullYear() }} Cantechs Appliance Service. All rights reserved.
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.hover-white:hover {
  color: white !important;
}
.border-top-grey {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>

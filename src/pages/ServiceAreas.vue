<template>
  <q-page class="q-py-xl bg-grey-1">
    <div class="container q-px-md">
      <div class="text-center q-mb-xl">
        <div class="text-h3 text-weight-bold text-primary">Service Area</div>
        <div class="text-subtitle1 text-grey-7 q-mt-sm">
          Proudly serving Saskatoon and surrounding areas.
        </div>
      </div>

      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-4">
          <q-card class="no-shadow border-grey h-100">
            <q-card-section>
              <div class="text-h5 text-weight-bold q-mb-md">Cities We Serve</div>
              <q-list separator>
                <q-item v-for="city in cities" :key="city" class="q-py-md">
                  <q-item-section avatar>
                    <q-icon name="location_on" color="primary" />
                  </q-item-section>
                  <q-item-section class="text-body1">{{ city }}</q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-8">
          <q-card class="no-shadow border-grey h-100 overflow-hidden">
            <q-img
              src="https://placehold.co/800x600/e0e0e0/757575?text=Map+of+Service+Areas"
              style="height: 100%; min-height: 400px"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Serving a 50km radius around Saskatoon
              </div>
            </q-img>
          </q-card>
        </div>
      </div>

      <div class="q-mt-xl text-center">
        <div class="text-h5 q-mb-md">Not sure if you're in our service area?</div>
        <q-btn
          color="primary"
          label="Call Us to Check"
          icon="phone"
          href="tel:3065007575"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
const cities = [
  'Saskatoon',
  'Warman',
  'Martensville',
  'Dalmeny',
  'Langham',
  'Osler',
  'Clavet',
  'Dundurn',
  'Vanscoy',
  'Delisle',
]
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.border-grey {
  border: 1px solid #e0e0e0;
}
.h-100 {
  height: 100%;
}
</style>

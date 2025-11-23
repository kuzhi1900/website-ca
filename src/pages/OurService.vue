<template>
  <q-page class="q-py-xl bg-grey-1">
    <div class="container q-px-md">
      <div class="text-center q-mb-xl">
        <div class="text-h3 text-weight-bold text-primary">Our Services</div>
        <div class="text-subtitle1 text-grey-7 q-mt-sm">
          Comprehensive appliance repair solutions for your home and business.
        </div>
      </div>

      <div class="row q-col-gutter-lg">
        <div v-for="service in services" :key="service.title" class="col-12 col-md-6">
          <q-card class="my-card h-100 no-shadow border-grey row no-wrap items-center q-pa-md">
            <q-card-section class="col-auto">
              <q-avatar
                size="80px"
                font-size="40px"
                color="primary"
                text-color="white"
                icon="build"
              />
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-weight-bold q-mb-sm">{{ service.title }}</div>
              <div class="text-grey-7">{{ service.description }}</div>
              <q-list dense class="q-mt-md text-grey-8">
                <q-item v-for="item in service.items" :key="item" class="q-pl-none">
                  <q-item-section avatar style="min-width: 24px">
                    <q-icon name="check" color="primary" size="xs" />
                  </q-item-section>
                  <q-item-section>{{ item }}</q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="text-center q-mt-xl">
        <div class="text-h4 text-weight-bold q-mb-md">Don't see your appliance?</div>
        <p class="text-grey-7 q-mb-lg">
          We repair a wide range of appliances. Contact us to see if we can help.
        </p>
        <q-btn
          color="primary"
          size="lg"
          label="Contact Us"
          to="/service-request"
          no-caps
          class="q-px-xl"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
const services = [
  {
    title: 'Refrigerator Repair',
    description:
      'We fix all major refrigerator brands. From cooling issues to ice maker failures, our technicians have you covered.',
    items: ['Not cooling', 'Leaking water', 'Ice maker not working', 'Strange noises'],
  },
  {
    title: 'Washer Repair',
    description:
      'Get your laundry routine back on track. We repair front-load and top-load washers efficiently.',
    items: ['Not draining', 'Not spinning', 'Leaking', 'Error codes'],
  },
  {
    title: 'Dryer Repair',
    description:
      'Stop hanging your clothes to dry. We service gas and electric dryers to ensure they heat properly.',
    items: ['Not heating', 'Taking too long to dry', 'Drum not turning', 'Noisy operation'],
  },
  {
    title: 'Dishwasher Repair',
    description:
      'Sparkling clean dishes every time. We resolve drainage, cleaning, and starting issues.',
    items: ['Not cleaning properly', 'Not draining', 'Leaking', 'Buttons not working'],
  },
  {
    title: 'Oven & Stove Repair',
    description:
      'Cook your meals with confidence. We repair electric and gas ranges, ovens, and cooktops.',
    items: ['Burners not lighting', 'Oven not heating', 'Temperature issues', 'Door glass broken'],
  },
  {
    title: 'Freezer Repair',
    description: 'Protect your food investment. We provide emergency freezer repair services.',
    items: ['Frost buildup', 'Not freezing', 'Running constantly', 'Clicking sounds'],
  },
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

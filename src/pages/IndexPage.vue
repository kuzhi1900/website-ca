<template>
  <q-page>
    <!-- Hero Section -->
    <div class="hero-section text-white flex flex-center column text-center q-px-md">
      <div class="text-h2 text-weight-bold q-mb-md">Saskatchewan's Trusted Appliance Repair</div>
      <div class="text-h5 q-mb-xl" style="max-width: 800px">
        Professional, reliable, and affordable appliance repair services for all major brands.
      </div>
      <div class="row q-gutter-md">
        <q-btn
          color="primary"
          size="lg"
          label="Book Service Now"
          to="/service-request"
          no-caps
          class="q-px-xl"
        />
        <q-btn
          color="white"
          text-color="primary"
          size="lg"
          label="Order Parts"
          to="/parts-request"
          no-caps
          class="q-px-xl"
        />
      </div>
    </div>

    <!-- Services Section -->
    <div class="q-py-xl bg-grey-1">
      <div class="container q-px-md">
        <div class="text-center q-mb-xl">
          <div class="text-primary text-weight-bold q-mb-sm">OUR SERVICES</div>
          <div class="text-h3 text-weight-bold">What We Repair</div>
        </div>

        <div class="row q-col-gutter-lg">
          <div v-for="service in services" :key="service.title" class="col-12 col-sm-6 col-md-4">
            <q-card class="my-card h-100 no-shadow border-grey">
              <q-card-section class="text-center q-py-lg">
                <q-icon :name="service.icon" size="64px" color="primary" class="q-mb-md" />
                <div class="text-h5 text-weight-bold q-mb-sm">{{ service.title }}</div>
                <div class="text-grey-7">{{ service.description }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Choose Us -->
    <div class="q-py-xl">
      <div class="container q-px-md">
        <div class="row q-col-gutter-xl items-center">
          <div class="col-12 col-md-6">
            <div class="text-primary text-weight-bold q-mb-sm">WHY CHOOSE US</div>
            <div class="text-h3 text-weight-bold q-mb-md">
              Expert Appliance Repair You Can Trust
            </div>
            <p class="text-grey-8 text-body1 q-mb-md">
              At Cantechs, we understand how inconvenient a broken appliance can be. That's why we
              offer fast, reliable, and professional repair services to get your household back on
              track.
            </p>
            <q-list class="q-mb-lg">
              <q-item v-for="feature in features" :key="feature" dense>
                <q-item-section avatar>
                  <q-icon name="check_circle" color="primary" />
                </q-item-section>
                <q-item-section class="text-body1">{{ feature }}</q-item-section>
              </q-item>
            </q-list>
            <q-btn color="primary" label="Learn More About Us" to="/our-service" no-caps />
          </div>
          <div class="col-12 col-md-6">
            <q-img
              src="https://placehold.co/600x400/0056b3/white?text=Technician+Working"
              class="rounded-borders shadow-3"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="bg-primary text-white q-py-xl text-center">
      <div class="container q-px-md">
        <div class="text-h3 text-weight-bold q-mb-md">Need a Repair?</div>
        <div class="text-h6 q-mb-xl opacity-80">
          Contact us today to schedule your service appointment.
        </div>
        <q-btn
          color="white"
          text-color="primary"
          size="lg"
          label="Schedule Service"
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
    title: 'Refrigerators',
    icon: 'kitchen',
    description: 'Expert repair for all refrigerator brands and models.',
  },
  {
    title: 'Washers',
    icon: 'local_laundry_service',
    description: 'Fixing leaks, spin issues, and more for your washer.',
  },
  {
    title: 'Dryers',
    icon: 'local_fire_department', // Using fire icon as proxy for heat/dryer
    description: 'Solving heating problems and noise issues in dryers.',
  },
  {
    title: 'Dishwashers',
    icon: 'water_damage', // Using water icon
    description: 'Restoring your dishwasher to peak cleaning performance.',
  },
  {
    title: 'Ovens & Stoves',
    icon: 'restaurant',
    description: 'Repairing heating elements, controls, and more.',
  },
  {
    title: 'Freezers',
    icon: 'ac_unit',
    description: 'Keeping your frozen goods safe with quick freezer repairs.',
  },
]

const features = [
  'Certified and Experienced Technicians',
  'Fast and Reliable Service',
  'Affordable Pricing',
  'Warranty on Parts and Labor',
  'Service for All Major Brands',
]
</script>

<style scoped>
.hero-section {
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://placehold.co/1920x1080/0056b3/white?text=Appliance+Repair+Background') no-repeat
      center center;
  background-size: cover;
  height: 600px;
}

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

.opacity-80 {
  opacity: 0.8;
}
</style>

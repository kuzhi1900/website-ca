<template>
  <q-page class="q-py-xl bg-grey-1">
    <div class="container q-px-md">
      <div class="text-center q-mb-xl">
        <div class="text-h3 text-weight-bold text-primary">Order Parts</div>
        <div class="text-subtitle1 text-grey-7 q-mt-sm">
          Find the right parts for your appliance.
        </div>
      </div>

      <q-card class="q-mb-xl shadow-3 q-pa-lg">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="text-h6">Appliance Information</div>
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-select
                v-model="form.applianceType"
                :options="applianceTypes"
                label="Appliance Type"
                outlined
                :rules="[(val) => !!val || 'Field is required']"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-input
                v-model="form.brand"
                label="Brand"
                outlined
                :rules="[(val) => !!val || 'Field is required']"
              />
            </div>
            <div class="col-12">
              <q-input
                v-model="form.model"
                label="Model Number"
                outlined
                hint="Please provide the exact model number found on the appliance tag"
                :rules="[(val) => !!val || 'Field is required']"
              />
            </div>
          </div>

          <div class="text-h6 q-mt-lg">Part Details</div>
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                v-model="form.partDescription"
                label="Description of Part Needed"
                type="textarea"
                outlined
                rows="3"
                :rules="[(val) => !!val || 'Field is required']"
              />
            </div>
          </div>

          <div class="text-h6 q-mt-lg">Contact Information</div>
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-input
                v-model="form.name"
                label="Full Name"
                outlined
                :rules="[(val) => !!val || 'Field is required']"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-input
                v-model="form.phone"
                label="Phone Number"
                outlined
                type="tel"
                :rules="[(val) => !!val || 'Field is required']"
              />
            </div>
            <div class="col-12">
              <q-input
                v-model="form.email"
                label="Email Address"
                outlined
                type="email"
                :rules="[(val) => !!val || 'Field is required']"
              />
            </div>
          </div>

          <div class="row justify-end q-mt-xl">
            <q-btn label="Submit Request" type="submit" color="primary" size="lg" no-caps />
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const form = reactive({
  applianceType: '',
  brand: '',
  model: '',
  partDescription: '',
  name: '',
  phone: '',
  email: '',
})

const applianceTypes = [
  'Refrigerator',
  'Washer',
  'Dryer',
  'Dishwasher',
  'Oven/Stove',
  'Freezer',
  'Microwave',
  'Other',
]

function onSubmit() {
  $q.notify({
    color: 'positive',
    message: 'Part request submitted successfully! We will contact you shortly.',
    icon: 'check',
  })
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>

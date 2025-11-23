<template>
  <q-page class="q-py-xl bg-grey-1">
    <div class="container q-px-md">
      <div class="text-center q-mb-xl">
        <div class="text-h3 text-weight-bold text-primary">Request Service</div>
        <div class="text-subtitle1 text-grey-7 q-mt-sm">
          Schedule a repair with our expert technicians.
        </div>
      </div>

      <q-card class="q-mb-xl shadow-3">
        <q-stepper v-model="step" ref="stepper" color="primary" animated>
          <q-step :name="1" title="Service Type" icon="settings" :done="step > 1">
            <div class="text-h6 q-mb-md">What type of service do you need?</div>
            <div class="row q-gutter-md justify-center q-mb-lg">
              <q-btn
                :color="form.serviceType === 'Residential' ? 'primary' : 'white'"
                :text-color="form.serviceType === 'Residential' ? 'white' : 'black'"
                label="Residential"
                icon="home"
                size="lg"
                class="q-px-xl q-py-md"
                @click="form.serviceType = 'Residential'"
              />
              <q-btn
                :color="form.serviceType === 'Commercial' ? 'primary' : 'white'"
                :text-color="form.serviceType === 'Commercial' ? 'white' : 'black'"
                label="Commercial"
                icon="business"
                size="lg"
                class="q-px-xl q-py-md"
                @click="form.serviceType = 'Commercial'"
              />
            </div>
          </q-step>

          <q-step :name="2" title="Schedule" icon="event" :done="step > 2">
            <div class="text-h6 q-mb-md">When would you like us to come?</div>
            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-6">
                <q-date v-model="form.date" class="full-width" minimal />
              </div>
              <div class="col-12 col-md-6">
                <div class="text-subtitle2 q-mb-sm">Preferred Time</div>
                <q-option-group v-model="form.timeSlot" :options="timeOptions" color="primary" />
              </div>
            </div>
          </q-step>

          <q-step :name="3" title="Appliance" icon="kitchen" :done="step > 3">
            <div class="text-h6 q-mb-md">Tell us about the appliance</div>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-select
                  v-model="form.applianceType"
                  :options="applianceTypes"
                  label="Appliance Type"
                  outlined
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="form.brand" label="Brand" outlined />
              </div>
              <div class="col-12">
                <q-input v-model="form.model" label="Model Number (Optional)" outlined />
              </div>
              <div class="col-12">
                <q-input
                  v-model="form.issue"
                  label="Description of Issue"
                  type="textarea"
                  outlined
                  rows="4"
                />
              </div>
            </div>
          </q-step>

          <q-step :name="4" title="Contact" icon="person" :done="step > 4">
            <div class="text-h6 q-mb-md">Your Contact Information</div>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-input v-model="form.firstName" label="First Name" outlined />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="form.lastName" label="Last Name" outlined />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="form.phone" label="Phone Number" outlined type="tel" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="form.email" label="Email Address" outlined type="email" />
              </div>
              <div class="col-12">
                <q-input v-model="form.address" label="Service Address" outlined />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="form.city" label="City" outlined />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="form.postalCode" label="Postal Code" outlined />
              </div>
            </div>
          </q-step>

          <template v-slot:navigation>
            <div class="row justify-end q-gutter-sm q-mt-lg">
              <q-btn
                v-if="step > 1"
                flat
                color="primary"
                @click="$refs.stepper.previous()"
                label="Back"
                class="q-ml-sm"
              />
              <q-btn
                @click="nextStep"
                color="primary"
                :label="step === 4 ? 'Submit Request' : 'Next'"
              />
            </div>
          </template>
        </q-stepper>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const step = ref(1)
const stepper = ref(null)

const form = reactive({
  serviceType: 'Residential',
  date: '',
  timeSlot: 'morning',
  applianceType: '',
  brand: '',
  model: '',
  issue: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  postalCode: '',
})

const timeOptions = [
  { label: 'Morning (8am - 12pm)', value: 'morning' },
  { label: 'Afternoon (12pm - 4pm)', value: 'afternoon' },
  { label: 'Evening (4pm - 8pm)', value: 'evening' },
]

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

function nextStep() {
  if (step.value === 4) {
    // Submit form
    $q.notify({
      color: 'positive',
      message: 'Service request submitted successfully!',
      icon: 'check',
    })
  } else {
    stepper.value.next()
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>

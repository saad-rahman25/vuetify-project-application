<script setup>
import {ref} from "vue"
const form= ref({
    email: '',
    password: '',
    remember: false
});

const isLoading= ref(false);

function submit() {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    alert(JSON.stringify(form.value));
  }, 1000);
  
}
</script>

<template>
  <v-container fluid>
    <v-overlay :model-value="isLoading"
      class="align-center justify-center">
      <v-progress-circular
        v-if="isLoading"
        indeterminate
        color="white">
      </v-progress-circular>
    </v-overlay>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-4 mx-auto" width="300">
            <v-class-title class="text-right">Login Here</v-class-title>
            <v-card-item>

                <v-form @submit.prevent="submit">
                    <v-text-field
                    prepend-inner-icon="mdi-email"
                    v-model="form.email"
                    label="Email"
                    ></v-text-field>
                    <v-text-field
                    type="password"
                    prepend-inner-icon="mdi-key"
                    v-model="form.password"
                    label="Password"
                    ></v-text-field>

                    <v-checkbox
                        v-model = "form.remember"
                        label="Remember Me"
                        color="white"
                        hide-details
                    ></v-checkbox>
                    <v-btn 
                    variant="outlined" 
                    class="mt-2" 
                    type="submit" 
                    block>
                      Submit
                    </v-btn>
                </v-form>

            </v-card-item>

            <v-card-action>
                <div class="mx-4">
                    <v-btn to="/Register" block color="red">Register</v-btn>
                </div>
            </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


  <script>
    export default {
      data: () => ({
        firstName: '',
        rules: [
          value => {
            if (value) return true
  
            return 'You must enter a first name.'
          },
        ],
      }),
    }
  </script>
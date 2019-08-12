<template>
    <v-container fluid grid-list-md>
        <v-layout
            align-center
            justify-center>

            
            <v-flex xs12 sm6 md3>
                <v-form ref="form"
                    v-model="valid"
                    lazy-validation>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title 
                                color="white"
                                class="title text-uppercase pb-3">
                                <h2 style="color: white">
                                    <strong>
                                        Log in 
                                    </strong>
                                </h2>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                
                            </v-list-item-subtitle>

                            <v-text-field
                                v-model="userName"
                                :rules="userNameRules"
                                type="text"
                                label="User name"
                                color="white"
                                clearable
                                flat
                                solo-inverted
                                prepend-inner-icon="mdi-account"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="password"
                                :rules="passwordRules"
                                type="password"
                                label="Password"
                                color="white"
                                clearable
                                flat
                                solo-inverted
                                prepend-inner-icon="mdi-lock"
                                required
                            ></v-text-field>

                            <v-btn
                                block
                                color="info">
                                Get start
                            </v-btn>
                        </v-list-item-content>
                    </v-list-item>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      userName: '',
      userNameRules: [
        v => !!v || 'Name is required',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style lang="scss">
    // .theme--light.v-text-field--outlined fieldset {
    //     border-color: rgba(255, 255, 255, 0.85);
    // }

    // .theme--light.v-label {
    //     color: rgba(255, 255, 255, 0.85);
    // }

    // .v-messages__message {
    //     color: #ffffff !important;
    //     caret-color: #ffffff !important;
    // }

    
</style>

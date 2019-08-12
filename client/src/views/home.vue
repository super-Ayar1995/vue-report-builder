<template>
    <v-container fluid grid-list-md>
        <v-layout
            wrap
            align-center
            justify-center>

            <v-flex xs2 grid-list-md
                class="pt-2 pb-2 pl-2 pr-2"
                v-for="card in cards"
                :key="card.key">
                <v-hover class="home-reports" v-slot:default="{ hover }">
                    <v-card
                        :elevation="hover ? 12 : 2"
                        color="primary"
                        class="mx-auto text-center ">
                        <h3 class="pb-3">
                            <img src="img/report.png" width="100%" alt="">
                            <strong>
                                {{ card.name }}
                            </strong>
                        </h3>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      cards: [{
            key: 1,
            name: 'Sale by Day'
        },{
            key: 2,
            name: 'Sale by Month'
        }, {
            key: 3,
            name: 'Sale by Year'
        }, {
            key: 4,
            name: 'Sale by Tax'
        }, {
            key: 5,
            name: 'Sale by Tax'
        }, {
            key: 6,
            name: 'Sale by Tax'
        }],
    }),
  }
</script>

<style lang="scss">
    .container {
        width: 85%;
        padding: 1em;
    }

    .v-card.home-reports {
        color: white!important;
        align-items: center;
        cursor: pointer;
        letter-spacing: .1em;

        img {
            position: relative;
            opacity: .1;
        }
    }

    .v-card.home-reports :hover{
        background-color: #488fef;
        opacity: 1 !important;

        img {
            opacity: .4 !important;
        }
    }
</style>


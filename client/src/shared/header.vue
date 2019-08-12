<template>
    <v-app-bar color="primary" app>
        <v-toolbar-title 
            class="headline text-uppercase"
            @click="$router.push('/home')">
            <span class="font-weight-bold text-white">CHROMIS POS</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items v-if="isAuthenticated == true">
            <v-btn text
                @click="$router.push('/home')"
                class="font-weight-bold"
                color="white">
                Reports
            </v-btn>
        </v-toolbar-items>

        <v-menu offset-y v-if="isAuthenticated == true">
            <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                    class="font-weight-light text-lowercase">
                    <v-icon>mdi-account</v-icon>
                    Super-steve
                    <v-icon>mdi-menu-down</v-icon>
                </v-btn>
            </template>
            
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="navDropDown(index)"
                >   
                    <v-icon class="pr-3">
                        {{ item.icon }}
                    </v-icon>
                    <v-list-item-title>
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-toolbar-items v-if="isAuthenticated == false">
            <v-btn text
                class="font-weight-bold"
                color="white"
                @click="$router.push('/login')">
                login
            </v-btn>
            <v-btn text
                class="font-weight-bold"
                color="white"
                @click="$router.push('/register')">
                signup
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        isAuthenticated: true,
        items: [
            { 
                title: 'Profile',
                icon: 'mdi-account-outline'  
            },
            { 
                title: 'Setting',
                icon: 'mdi-settings-outline'
            },
            { 
                title: 'Log out', 
                icon: 'mdi-logout'
            }
        ],
    }),
    methods: {
        navDropDown: function(index) {
            switch (index) {
                case 0:
                    this.$router.push({
                        name: 'Profile'
                    });

                    break;
                case 1:
                    this.$router.push({
                        name: 'Setting'
                    });

                    break;
                case 2:
                    this.$router.push({
                        name: 'Logout'
                    });

                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang="scss">
    .headline {
        color: white;
        cursor: pointer;
    }
</style>

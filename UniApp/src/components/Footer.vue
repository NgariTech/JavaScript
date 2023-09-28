<template>
   <v-footer class="d-flex flex-column">

        <div class="bg-teal d-flex w-100 align-center px-4">
            <strong>Get connected with us on social network!</strong>

            <v-spacer></v-spacer>

            <v-btn
            v-fore="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="small"
            ></v-btn>
        </div

        <div class="px-4 py-2 bg-black text-center w-100">
            {{new Data().GetFullYear()  }} - <strong>Iverson University</strong>
        </div>
    </v-footer>
</template>
<script>
export default {
    data:() => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedink',
            'mdi-instagramk',
    ],
}),
}
</script>
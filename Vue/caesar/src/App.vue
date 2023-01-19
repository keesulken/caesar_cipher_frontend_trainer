<template>
    <div class="root" v-for="blockType of blocks">
        <BigBlock v-bind:blockType='blockType'/>
    </div>
</template>


<script>
import BigBlock from '@/components/BigBlock.vue'
export default {
    components: {
        BigBlock,
    },
    data () {
        return {
            blocks: [
                'encrypter', 'decrypter',
            ]
        };
    },
    methods: {
    },
}
</script>


<style>

</style>
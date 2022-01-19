<template>
    <div>
        <RenderWedge
            :index="index"
            :wedge="wedge"
            v-for="(wedge, index) in wedges"
            :key="index"
        />
    </div>
</template>

<script>
import RenderWedge from './RenderWedge.vue';

export default {
    props: {
        wedges: {
            type: Array,
            default: () => [],
        },
    },

    components: { RenderWedge },
};
</script>

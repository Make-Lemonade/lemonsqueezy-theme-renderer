<template>
    <component
        :data-wedge-index="index"
        class="lsq-wedge"
        :is="wedge.component"
        v-bind="wedge.props"
    />
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true,
        },
        wedge: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            elements: this.wedge.elements || {},
        };
    },

    provide() {
        // Object needs to be observed to be reactive
        const wedgeData = {};
        Object.defineProperty(wedgeData, 'elements', {
            enumerable: true,
            get: () => this.elements,
        });

        return { wedgeData };
    },

    watch: {
        wedge: {
            handler(newVal) {
                this.elements = newVal.elements || {};
            },
            deep: true,
        },
    },
};
</script>

<template>
    <div class="easy-image-container">
        <div class="easy-overlay">
            <div class="easy-text easy-title">
                {{ title }}
            </div>
            <div class="easy-text easy-description">
                {{ description }}
            </div>
        </div>
        <img class="easy-image" :src="imgSrc" @load="handleLoad()" />
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'Title'
        },
        description: {
            type: String,
            default: 'Description'
        }
    },
    data() {
        return {
            opacity: 0
        }
    },
    methods: {
        handleLoad() {
            this.opacity = 1;
        }
    }
}
</script>

<style>
.easy-image-container {
    background-color: rgba(100, 100, 100, 0.4);
    position: relative;
    /* width: 500px; */
    /* height: 500px; */
    border-radius: 4%;
}

.easy-image-container:hover .easy-text {
    opacity: 1;
}

.easy-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
}

.easy-text {
    opacity: 0;
    transition: opacity .2s ease-in-out;
    position: absolute;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    padding: 8px 15px;
    max-width: 75%;
    font-size: 14px;
}

.easy-title {
    top: 15px;
    left: 15px;
}

.easy-description {
    bottom: 15px;
    right: 15px;
}

.easy-image {
    opacity: v-bind(opacity);
    transition: opacity .5s ease-in-out;
    max-width: 100%;
    height: auto;
    /* object-fit: cover */
    border-radius: 4%;
}
</style>
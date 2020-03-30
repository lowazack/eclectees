<template>
    <article class="card">
        <div class="card__image">
            <img :src="this.product.images[0].src" alt="">
        </div>
        <h4 class="card__name">{{product.title}}</h4>
        <h3 class="card__price">£{{product.variants[0].price}}</h3>
        <button class="card__add" @click="toggleOptions">Add To Cart</button>
        <button class="card__overview">Overview</button>
        <div class="card__options" :style="optionCardStyle" ref="options">
            <button v-for="option in product.options[0].values" class="card__option" @click="addToBasket(product, option)">{{ option }}</button>
            <button class="card__option" @click="toggleOptions">Cancel</button>
        </div>
    </article>
</template>

<script>
    export default {
        props: {
            product: Object
        },
        data() {
            return {
                optionCardActive: true,
                optionCardStyle: {}
            }
        },
        methods: {
            toggleOptions(){
                if (this.optionCardActive){
                    this.optionCardStyle = {
                        display: 'block'
                    }
                    this.optionCardActive = false
                } else {
                    this.optionCardStyle = {
                        display: 'none'
                    }
                    this.optionCardActive = true
                }
            },
            addToBasket(product, option){
                this.$store.commit('addToCart', {product, option} )
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        background-color: white;
        width: calc(33% - 5px);
        margin-bottom: 10px;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        overflow: auto;

        &__image {
            width: 100%;
            background-color: $grey-1;
            padding-bottom: 100%;
            position: relative;
            margin-bottom: 10px;

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 90%;
                height: 90%;
                object-fit: contain;
                transform: translate(-50%, -50%);
            }
        }

        &__name {
            width: 50%;
            margin: 0;
        }

        &__price {
            width: 50%;
            margin: 0;
            text-align: right;
        }

        &__add {
            border: none;
            background-color: $primary;
            width: 50%;
            padding: 10px;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            color: white;
            margin-top: 10px;
        }

        &__overview {
            border: none;
            background-color: $grey-2;
            width: 50%;
            padding: 10px;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            color: black;
            margin-top: 10px;

        }

        &__options {
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: black;
            overflow: auto;
            padding: 10px;
            top: 0;
            left: 0;
            display: none;
        }

        &__option {
            width: 100%;
            display: block;
            color: white;
            border: none;
            background-color: transparent;
            border-bottom: 2px solid white;
            padding: 10px;

            font-size: 18px;
        }
    }
</style>

<template>
    <div class="cart">
        <h3 class="cart__title">Cart</h3>
        <span class="cart__number">{{ this.$store.state.basket.length }}</span>
        <div class="cart__item" v-for="(item, key) in this.$store.state.basket">
            <div class="cart__item-info">
                {{ item.title }}
                <span>{{item.selectedOption}}</span>
            </div>
            <div class="cart__item-price">£{{item.variants[0].price}}</div>
            <button class="cart__item-remove" @click="$store.commit('removeFromCart', key)">
                <font-awesome-icon icon="times"/>
            </button>
        </div>

        <div class="cart__foot">
            <span class="cart__total">Total</span>
            <span class="cart__price">£{{ this.$store.state.total }}</span>
            <span class="cart__tax">Inc $3.16 in taxes</span>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .cart {
        background-color: white;
        width: 100%;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        &__title {
            margin: 0;
            text-transform: uppercase;
            margin-right: 10px;
        }

        &__number {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $primary;
            color: white;
            font-weight: 600;
        }

        &__foot {
            background-color: $grey-2;
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            padding: 10px;
            width: 100%;
        }

        &__total {
            width: 50%;
            font-size: 18px;
            font-weight: 600;
        }

        &__price {
            width: 50%;
            text-align: right;
            font-size: 18px;
            font-weight: 600;
        }

        &__tax {
            width: 50%;
        }

        &__item {
            width: 100%;
            border-bottom: 1px solid $grey-2;
            display: flex;
            padding: 5px 0;
            max-width: 100%;
            position: relative;
            &-info {
                font-weight: 600;
                flex-grow: 1;

                span {
                    color: $primary;
                    display: block;
                    width: 100%;
                }
            }

            &-price {
                font-weight: 600;
                flex-grow: 1;
                width: 25%;
                text-align: right;
            }

            &-remove {
                background-color: $primary;
                position: absolute;
                bottom: 0;
                right: 0;
                display: flex;
                color: white;
                height: 20px;
                width: 20px;
                align-items: center;
                justify-content: center;
                border: none;
            }
        }

    }
</style>

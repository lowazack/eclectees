<template>
    <header class="header">
        <div class="container">
            <h1 class="header__logo">Logo</h1>
            <div class="header__nav">
                <font-awesome-icon icon="shopping-cart"/>
                £{{ this.$store.state.total }}
                <span class="header__number">{{ this.$store.state.basket.length }}</span>
                <div class="header__menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        background-color: white;
        overflow: auto;

        &__logo {
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
            margin: 0 20px;
        }

        &__nav {
            font-weight: 600;
            display: flex;
            align-items: center;

            svg {
                color: $primary;
                margin-right: 20px;
            }
        }

        &__menu {
            width: 40px;
            margin-left: 60px;
            cursor: pointer;

            span {
                width: 20px;
                height: 3px;
                background-color: $primary;
                display: block;
                margin-bottom: 7px;
                border-radius: 10px;
                margin-left: auto;
                transition: all 300ms ease-in-out;

                &:first-of-type {
                    width: 40px;
                }

                &:last-of-type {
                    margin-bottom: 0;
                    width: 30px;
                }


            }

            &:hover {
                span {
                    &:first-of-type {
                        width: 30px;
                    }
                    &:last-of-type {
                        width: 40px;
                    }
                }
            }
        }
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>

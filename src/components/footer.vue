<template>
    <footer class="container footer">
        <a href="" class="footer__logo">Logo</a>

        <span class="footer__copy">Eclectees Co Ltd</span>

        <div class="footer__links">
            <a href="">Terms & Conditions</a>
            |
            <a href="">Privacy Policy</a>
            |
            <a href="">Contact Us</a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        display: flex;
        padding: 40px 10px;
        border-top: 3px solid black;
        margin-top: 40px;
        justify-content: space-between;
        width: calc(100% - 10px);

        &__copy {
            color: $grey-3;
        }

        &__links {
            color: $primary;
            a {
                color: $primary;
                text-decoration: none;
            }
        }
    }
</style>

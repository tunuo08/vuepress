<template>
    <header class="navbar home header-title">
        <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
        <router-link :to="$localePath" class="home-link">
            <img class="logo"
                 v-if="$site.themeConfig.logo"
                 :src="$withBase($site.themeConfig.logo)">
            <span class="site-name"
                  v-if="$siteTitle"
                  :class="{ 'can-hide': $site.themeConfig.logo }">
            {{ $siteTitle }}
            </span>
        </router-link>
        <div class="links">
            <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
            <SearchBox v-else-if="$site.themeConfig.search !== false"/>
            <NavLinks class="can-hide"/>
        </div>
    </header>
</template>

<script>
    import SidebarButton from './SidebarButton.vue'
    import AlgoliaSearchBox from './AlgoliaSearchBox'
    import SearchBox from './SearchBox.vue'
    import NavLinks from './NavLinks.vue'

    export default {
        components: {SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox},
        computed: {
            algolia() {
                return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
            },
            isAlgoliaSearch() {
                return this.algolia && this.algolia.apiKey && this.algolia.indexName
            }
        },
        mounted() {

        }
    }
</script>

<style lang="stylus">
    @import './styles/config.styl'

    .navbar
        border-bottom 1px solid rgba(0, 0, 0, 0.2)
        -webkit-box-shadow 0 1px 3px rgba(0, 0, 0, 0.2)
        box-shadow 0 1px 3px rgba(0, 0, 0, 0.1)
        opacity 0.9
        top 0
        left 0
        right 0
        height $navbarHeight
        /*animation fadein 0.3s*/
        padding 0.7rem 1.5rem
        line-height $navbarHeight - 1.2rem
        position fixed
        /*width 100vw*/
        z-index 1000
        &.home-head-style3
            background rgba(0, 0, 0, 0.2)
            color white
        &.home-head-style5
            background rgba(0, 0, 0, 0.2)
            color white
        a, span, img
            display inline-block
        .logo
            height $navbarHeight
            min-width $navbarHeight
            margin-right 0.8rem
            vertical-align top
        .site-name
            font-size 1.3rem
            font-weight 600
            color $textColor
            line-height $navbarHeight
            position relative
        .links
            font-size 0.9rem
            position absolute
            right 1.5rem
            top 0.7rem

    @media (max-width: $MQMobile)
        .navbar
            padding-left 4rem
            .can-hide
                display none
</style>

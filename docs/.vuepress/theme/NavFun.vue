<template>
    <a v-else href="javascript:void(0)" class="nav-link" @click="operation(item.fun)"
            :target="isMailto(link) || isTel(link) ? null : 'view_window'"
            :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'">
        {{ item.text }}
        <!--<OutboundLink/>-->
    </a>
</template>

<script>
    import {isExternal, isMailto, isTel, ensureExt} from './util'

    export default {
        props: {
            item: {
                required: true
            }
        },
        computed: {
            link() {
                return ensureExt(this.item.link)
            },
            exact() {
                if (this.$site.locales) {
                    return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
                }
                return this.link === '/'
            }
        },
        methods: {
            operation(fun){
               console.log(111)
            },
            isExternal,
            isMailto,
            isTel
        }
    }
</script>

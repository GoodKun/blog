import { defineConfig } from 'vitepress'
import navbar from './navbar'
import sidebar from './sidebar'
export default defineConfig({
    lang: 'zh-CN',
    // 主标题
    title: '前端之旅',
    base: '/blog',
    themeConfig:{
        logo: '/HZw.PNG',
        nav: navbar,
        sidebar: sidebar,
        footer: {
            message: '根据 MIT 许可证发布。',
            copyright: 'Copyright © 2023 Powered by AkA街头vue',
        },
        socialLinks: [
            // GitHub
            { icon: 'github', link: 'https://github.com/GoodKun' },
            // B站
            {
                icon: {
                    svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1669796930427" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" p-id="2712" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="2713"></path></svg>',
                },
                link: 'https://juejin.cn/user/3063665612307038',
            },
        ],
    }
})

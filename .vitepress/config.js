export default {
    title: 'Inforg',
    description: 'Inforg landpage website',
    appearance: true,
    srcDir: 'src/main',
    outDir: 'dist/',
    themeConfig: {
        siteTitle: 'Inforg',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/inforgdev' },
            { icon: 'twitter', link: 'https://twitter.com/inforgdev' },
            { icon: 'instagram', link: 'https://instagram.com/inforgdev' },
        ],
        nav: [
            { text: 'SpongiaCSS', link: 'https://inforg.dev/spongia-css' },
            { text: 'VesicJS', link: 'https://inforg.dev/vesic-js' },
            { text: 'OctopoJS', link: 'https://inforg.dev/octopo-js' },
        ],
        footer: {
            copyright: 'By Inforg',
        },
    }
}
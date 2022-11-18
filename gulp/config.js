const scrFolder =  `./src`;
const buildFolder = `./dist`;

export const path = {
    src: {
        html: `${scrFolder}/*.html`,
        scss: `${scrFolder}/sass/main.scss`,
        js: `${scrFolder}/js/scripts.js`,
        images: `${scrFolder}/images/*`
    },
    build: {
        html: `${buildFolder}`,
        css:  `${buildFolder}/css`,
        js: `${buildFolder}/js`,
        images: `${buildFolder}/images`,
    },
    watch: {
        html: `${scrFolder}/**/*.html`,
        scss: `${scrFolder}/sass/**/*.scss`,
        js: `${scrFolder}/js/**/*.scss`,
    },
    clean: `${buildFolder}`
}
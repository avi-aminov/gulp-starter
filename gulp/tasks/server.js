export const server = (done)=> {
    app.bs.init({
        server: {
            baseDir: `${app.p.build.html}`
        },
        notify: false,
        port: 3000
    })
}
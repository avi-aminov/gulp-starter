import webpack from 'webpack-stream';

export const js = ()=> {
    return app.g.src(app.p.src.js, {
        sourcemaps: true
    })
    .pipe(webpack({
        mode: 'development',
        output: {
            filename: 'app.min.js'
        }
    }))
    .pipe(app.g.dest(app.p.build.js))
}
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from "gulp-imagemin";

export const images = ()=> {
    return app.g.src(app.p.src.images)
    .pipe(imagemin([
        gifsicle({interlaced: true}),
        mozjpeg({quality: 75, progressive: true}),
        optipng({optimizationLevel: 5}),
        svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(app.g.dest(app.p.build.images));
}
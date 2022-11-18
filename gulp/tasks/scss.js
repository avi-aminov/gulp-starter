import compileSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import autofixer from 'gulp-autoprefixer';
import groupCssMediaQuery from 'gulp-group-css-media-queries';

const sass = gulpSass(compileSass);

export const scss = () => {
    return app.g.src(app.p.src.scss, {
        sourcemaps: true
    })
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQuery())
    .pipe(autofixer({
        grid: true,
        cascade: true,
        overrideBrowserlist: ['last 3 versions']
    }))
    .pipe(app.g.dest(app.p.build.css))
    .pipe(cleanCSS())
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(app.g.dest(app.p.build.css))
}
import clean from 'gulp-clean';

export const reset = ()=> {
    return app.g.src(app.p.clean, {
        read: false,
        allowEmpty:  true
    })
    .pipe(clean())
}
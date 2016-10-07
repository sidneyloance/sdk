//jQuery, Angular, OwlCarousel, NG Infinite Scroll,
// Owl CSS, Site CSS

// bundle.1.config.js
module.exports = {
    bundle: {
        main: {
            scripts: [
                'scripts/buildfire/components/carousel/carousel.js',
                'scripts/buildfire/components/pluginInstance/sortableList.js'
            ],
            styles: [
                'scripts/owlCarousel/owlCarousel.css',
                'styles/helper.css',
                'styles/siteIcons.css'
            ]
        },
        vendor: {
            scripts: [
                'scripts/jquery/jquery-1.11.2.min.js',
                'scripts/angular/angular.min.js',
                'scripts/angular/ng-infinite-scroll.custom.js',
                'scripts/owlCarousel/owlCarousel.js'
            ]
        }
    },
    copy: ''
};
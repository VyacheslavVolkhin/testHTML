module.exports = function (grunt) {
    grunt.initConfig({

        fixturesPath: "_includes",




        htmlbuild: {
            dist: {
                src: './_html/*.html',
                dest: './',
                options: {
                    beautify: true,
                    sections: {
                        head: '<%= fixturesPath %>/**/head.html',
                        header: '<%= fixturesPath %>/**/header.html',
                        footer: '<%= fixturesPath %>/**/footer.html',
                    },
                    data: {
                        version: "0.1.0",
                        title: "test",
                    },
                }
            }
        },

        sprite: {
            all: {
                src: 'img/spr/*.png',
                dest: 'img/spr.png',
                destCss: 'css/less/icons.less',
                padding: 20,
                imgPath: '../img/spr.png',
                cssFormat: 'css',
                cssOpts: {
                    'functions': false,

                    'cssClass': function (item) {
                        return '.i-' + item.name;
                    }
                },
                algorithm: 'binary-tree'
            }
        },

        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    "css/style.css": "css/less/style.less"
                }
            }
        },


        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')(),
                ]
            },
            dist: {
                src: 'css/style.css'
            }
        },


        watch: {
            html: {
                files: ['_includes/*.html', '_html/*.html'],
                tasks: 'htmlbuild'
            },
            sprite: {
                files: ['img/spr/*.png'],
                tasks: 'sprite'
            },
            styles: {
                files: ['css/less/*.less'],
                tasks: 'less',
                options: {
                    nospawn: true
                }
            },
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch'], ['less'], ['sprite'],  ['htmlbuild'], ['postcss']);
};
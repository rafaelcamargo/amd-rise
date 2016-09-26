module.exports = function(grunt) {

  var pathLibs = 'node_modules/';
  var pathSrc = 'src/';
  var pathScripts = pathSrc + 'js/';
  var pathStyles = pathSrc + 'styl/';

  var libFiles = pathLibs + '**/*.min.js';
  var styleFiles = pathStyles + '**/*.styl';
  var scriptFiles = [
    pathScripts + 'modules/**/*.js',
    '!' + pathScripts + 'main.js'
  ];
  var configFiles = [
    'package.json',
    'gruntfile.js',
    'karma.conf.js'
  ];

  grunt.initConfig({

    stylus: {
      compile: {
        files: {
          'assets/css/app.min.css': styleFiles
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'assets/css/app.min.css': 'assets/css/app.min.css',
          'assets/css/lib.min.css': 'assets/css/lib.min.css'
        }
      }
    },

    copy :{
      lib: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: pathLibs,
            src: [
              'jquery/dist/jquery.min.js',
              'jquery/dist/jquery.min.map'
            ],
            dest: 'assets/js/libs/'
          }
        ]
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      lib: {
        files: {
          'assets/js/libs/require.min.js': 'node_modules/requirejs/require.js'
        }
      },
      modules: {
        files : {
          'assets/js/shared.min.js' : 'assets/js/shared.min.js'
        }
      }
    },

    concat_in_order: {
      dist : {
        files : {
          'assets/js/shared.min.js' : scriptFiles
        }
      },
      lib : {
        files : {
          'assets/css/lib.min.css': [
            pathLibs + 'ggrid/dist/ggrid.min.css'
          ]
        }
      }
    },

    jshint: {
      conf: configFiles,
      dist: scriptFiles
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    watch: {
      styles: {
        files: styleFiles,
        tasks: ['stylus']
      },
      dist: {
        files: scriptFiles,
        tasks: [
          'jshint:dist',
          'concat_in_order:dist'
        ]
      },
      lib: {
        files: libFiles,
        tasks: ['concat_in_order:lib']
      },
      conf: {
        files: configFiles,
        tasks: ['jshint:conf']
      }
    },

    'http-server': {
      dev: {
        port: 9000,
        host: '0.0.0.0',
        showDir : true,
        autoIndex: true,
        ext: 'html',
        runInBackground: true
      }
    },

    exec: {
      deploy: 'echo "deploying..."'
    }

  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-in-order');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build', [
    'stylus',
    'copy',
    'uglify:lib',
    'concat_in_order',
    'jshint',
    'karma'
  ]);

  grunt.registerTask('start', [
    'http-server',
    'watch'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'cssmin',
    'uglify:modules',
    'exec:deploy'
  ]);

};

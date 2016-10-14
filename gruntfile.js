module.exports = function(grunt) {

  var pathLibs = 'node_modules/';
  var pathSrc = 'src/';
  var pathSpec = 'spec/';
  var pathScripts = pathSrc + 'js/';
  var pathStyles = pathSrc + 'styl/';

  var libFiles = pathLibs + '**/*.min.js';
  var styleFiles = pathStyles + '**/*.styl';
  var mainFile = pathScripts + 'main.js';
  var scriptFiles = pathScripts + '**/*.js';
  var specFiles = pathSpec + '**/*.js';
  var configFiles = [
    'package.json',
    'gruntfile.js',
    'karma.conf.js'
  ];

  grunt.initConfig({

    stylus: {
      compile: {
        files: {
          'dist/css/app.min.css': styleFiles
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/css/app.min.css': 'dist/css/app.min.css',
          'dist/css/lib.min.css': 'dist/css/lib.min.css'
        }
      }
    },

    copy :{
      main: {
        files: {
          'dist/js/main.min.js': 'src/js/main.js'
        }
      },
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
            dest: 'dist/js/libs/'
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
          'dist/js/libs/require.min.js': 'node_modules/requirejs/require.js'
        }
      },
      scripts: {
        files : {
          'dist/js/main.min.js' : 'dist/js/main.min.js',
          'dist/js/bundle.min.js' : 'dist/js/bundle.min.js'
        }
      }
    },

    concat_in_order: {
      scripts : {
        files : {
          'dist/js/bundle.min.js' : scriptFiles
        }
      },
      lib : {
        files : {
          'dist/css/lib.min.css': [
            pathLibs + 'ggrid/dist/ggrid.min.css'
          ]
        }
      }
    },

    jshint: {
      conf: configFiles,
      src: scriptFiles,
      spec: specFiles
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
      main: {
        files: mainFile,
        tasks: ['copy:main']
      },
      scripts: {
        files: [
          scriptFiles,
          specFiles
        ],
        tasks: [
          'jshint:src',
          'jshint:spec',
          'concat_in_order:scripts'
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

  grunt.registerTask('build', [
    'stylus',
    'copy',
    'uglify:lib',
    'concat_in_order',
    'jshint',
    'karma'
  ]);

  grunt.registerTask('start', [
    'build',
    'http-server',
    'watch'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'cssmin',
    'uglify:scripts'
  ]);

};

var specs = [];
for (var file in window.__karma__.files) {
  if (/Spec\.js$/.test(file))
    specs.push(file);
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/src/js/modules',

  // ask Require.js to load these files (all our specs)
  deps: specs,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});

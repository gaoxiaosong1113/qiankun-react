/* eslint-disable no-undef */
;(global => {
  if (global.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  }
  const { log } = console
  global['require'] = {
    bootstrap: () => {
      log('require bootstrap')
      return Promise.resolve()
    },
    mount: () => {
      var script = document.createElement('script')
      script.src = '//localhost:7106/plugins/requirejs/require.min.2.3.5.js'
      script.setAttribute('data-main', '//localhost:7106/config/require.config.js')
      document.getElementById('jd').appendChild(script)
      log('require mount')
      return Promise.resolve()
    },
    unmount: () => {
      log('require unmount')
      return Promise.resolve()
    },
  }
})(window)

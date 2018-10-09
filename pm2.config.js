const { join } = require('path')

module.exports = {
  apps: [{
    name            : "hello-world",
    script          : "./node_modules/nuxt-edge/bin/nuxt-start",
    exec_mode       : "cluster",
    watch           : false,
    instances       : "max",
    merge_logs      : true,
    log_type        : "raw",
		cwd: "./",
		args: `-c ${join(__dirname, 'nuxt.config.js')}`
  }]
};

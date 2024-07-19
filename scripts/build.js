const webpack = require('webpack')
const config = require('../webpack.prod.js')

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toJson().errors)
    return
  }
  console.log(
    stats.toString({
      all: false, // Disable all information
      modules: true, // Show information about modules
      maxModules: 15, // Limit the number of modules displayed
      errors: true, // Show errors
      warnings: true, // Show warnings
      timings: true, // Show build timing
      performance: true, // Show performance hints
      colors: true // Enable colors in the output
    })
  )
})

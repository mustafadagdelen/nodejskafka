var glob = require('glob');

module.exports = function(app, config) {
  var controllers = glob.sync(config.root + '/app/controllers/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app);
  });

  var homeController = require(config.root + '/app/controllers/homeController.js')();


  app.get("/", homeController.index);

}
class App {
  constructor() {
    this.plugins = [];
  }

  use(plugin) {
    plugin(this);
    this.plugins.push(plugin);
  }
}

const MyPlugin = function (app) {
  app.log = function (message) {
    console.log(message);
  };
};

const app = new App();
app.use(MyPlugin);
app.log("This is from plugin");

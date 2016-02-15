var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.activeTab.attach({
      contentScriptFile: [self.data.url('contextMenu/jquery-2.2.0.min.js'),
                          self.data.url('contextMenu/contextMenu.js'),
                          self.data.url('main.js')]
    });
}
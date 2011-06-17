var ToastPlugin = function() {
};

ToastPlugin.SHORT_LENGTH = 0;
ToastPlugin.LONG_LENGTH = 1;

ToastPlugin.prototype.show = function(message, length, win, fail) {
  PhoneGap.exec(win, fail, "ToastPlugin", "show", [message, length]);
};

/**
 * <ul>
 * <li>Register the ToastPlugin Javascript plugin.</li>
 * <li>Also register native call which will be called when this plugin runs</li>
 * </ul>
 */
PhoneGap.addConstructor(function() { 
  // Register the javascript plugin with PhoneGap
  PhoneGap.addPlugin('ToastPlugin', new ToastPlugin());

  // Register the native class of plugin with PhoneGap
  navigator.app.addService("ToastPlugin", "ToastPlugin"); 
});

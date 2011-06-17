## PhoneGap Toast Plugin

### Usage:

Add the PhoneGap Toast Plugin JAR to your libs/ directory

Add the PhoneGap Toast Plugin JS file along side your other assets and import.
<pre>
	&lt;script type="text/javascript" charset="utf-8" src="phonegap-toast.js"&gt;&lt;/script&gt;
</pre>

Then you can use the plugin like so:
<pre>
	window.plugins.ToastPlugin.show_long('Epic!');
</pre>

or

<pre>
	window.plugins.ToastPlugin.show_short('Epic!');
</pre>

The long vs short correspond to the Android options: (http://developer.android.com/reference/android/widget/Toast.html#LENGTH_LONG)
(http://developer.android.com/reference/android/widget/Toast.html#LENGTH_SHORT)
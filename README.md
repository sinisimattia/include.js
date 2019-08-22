# include.js
### Dynamically include scripts inside your pages

include.js allows you to request a script from inside another one.

##### How does it work?
There are 2 ways to include a script:

##### From the Script tag
Simply use the script tag you used to request include.js and add the "load" parameter, like so:
> <script src="include.js" load="script.js">

You can add multiple scripts at once by putting a valid JSON array inside the load parameter, here's an example:
> <script src="include.js" load='["script_1.js", "script_2.js"]'>

##### From inside a script
Simply use the include function and pass the parameters as an object, like so:
<code><pre>
include({
  url: "script.js" // or a valid JSON array like in the example above
});
</pre></code>

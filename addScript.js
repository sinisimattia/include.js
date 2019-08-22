/* 
 * "addScript.js"
 * Add scripts to your web pages without manually inserting lots of tags
 * Currently only made for Chrome and Firefox
 * Documentation: [ Coming Soon ]
 *
 * by Mattia Sinisi - SNISNI - 2019
 */
function addScript( url, callback, parameter ){
	const me = "addScript";
	var head = document.getElementsByTagName("head")[0];

	if ( head == undefined ){
		console.error( me + "@> Head element is not defined");
		return;
	}

	if ( url != "" && url != undefined ){
			if ( url.constructor === String ){
				var newScript = document.createElement("script");
				newScript.setAttribute("src", url);
				newScript.setAttribute("id", url + "_Script")
				head.appendChild(newScript);
				delete newScript;
			}
			else if ( url.constructor === Array ){
				var newScript;
				for ( var i = 0; i < url.length; i++ ){
					if ( url[i].constructor === String ){
						newScript = document.createElement("script");
						newScript.setAttribute("src", url[i]);
						newScript.setAttribute("id", url[i] + "_Script")
						head.appendChild(newScript);
					}
					else console.error( me + "@> URL number " + ( i + 1 ) + " is not a String. No script added." );
				}
				delete newScript;
			}
			else console.warn( me + "@> URL parameter's type can only be either 'string' or 'array'. Type given: " + typeof url);
	}
	else{
		console.warn( me + "@> No valid URL given");
	}

	window.onload = function(){
		if ( callback != undefined && callback != null && typeof callback == "function" )
			if ( parameter != undefined && parameter != null ) callback( prameter );
			else callback();
	}
}

// New Name: JSC ( JavaScript Collector )
// convert every script to object with name & url attributes
// make this function an object with a list of script objects
// add delScript() method - parameters: name / url of script i want to remove

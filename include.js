function include({url, method, isAsync, type}){
    var request = new XMLHttpRequest();
    request.responseType = type || "text";
    
    request.onreadystatechange = () => {
        if (request.readyState === 4){
            window.eval(request.response);
        }
        else if (request.readyState === 1){
            request.send();
        }
    }

    request.open(method || "get", url || "", isAsync || true);
}

var load = document.currentScript.getAttribute("load");
try {
    load = JSON.parse(load);
}
catch(e){
    console.error("%cThe json syntax inside the 'load' attribute is not correct.\n", "color:white; font-size: 15px; font-weight: bold", "The value is being passed as a string.\n\n",e);
};

if ( typeof load === "string" )
    include({url: load});
else if ( typeof load === "object" ){
    for ( var i = 0; i < load.length; i++ ){
        include({url: load[i]});
    }
}
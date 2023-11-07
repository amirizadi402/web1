let http = require("http");
let server = http.createServer(requestHandler);
server.listen(80);

let headers = {"Content-Type" : "Text/Plain"};



function requestHandler(request,response)
{
    let currentRoute = request.url.split('/');
    let routes = 
    {
        sayHello : function (request,response)
        {
            response.write("salam"+ " " + request.url + " "+  request.method + '\n');
            response.end();
        },
        "saySomeThing":function(request,response)
        {
            response.write( currentRoute[2] + '\n');
            response.end();
        },
        "favicon.ico" : function(request,response)
        {
            response.write("fav" + '\n');
            response.end();
        }
    }

    
    routes[currentRoute[1]](request,response);
}

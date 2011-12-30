steal('jquery/jquery.js').then('jqueryui/jqueryui.js').then('jquery.dform/jquery.dform-0.1.3.min.js',
    function () {
       $(document).ready(function(){
            // Create a form from some JSON
            $("#myjsform").buildForm({
                "action": "index.html",
                "method": "get",
                "elements": [{
                    "type": "p",
                    "html": "You must login"
                }, {
                    "name": "username",
                    "id": "txt-username",
                    "caption": "Username",
                    "type": "text",
                    "placeholder": "E.g. u...@example.com"
                }, {
                    "name": "password",
                    "caption": "Password",
                    "type": "password"
                }, {
                    "type": "submit",
                    "value": "Login"
                }, {
                    "type": "p",
                    "html": "Made with JavaScript"
                    }
                ]
            });
        
        });
    });

steal('steal/coffee').then( './example.coffee' );
steal('./example.css');
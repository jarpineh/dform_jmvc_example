root = global ? window

form = 
    action: "index.html"
    method: "get"
    elements: [
        type: "p"
        html: "You must login"
    ,
        name: "username"
        id: "txt-username"
        caption: "Username"
        type: "text"
        placeholder: "E.g. u...@example.com"
    ,
        name: "password"
        caption: "Password"
        type: "password"
    ,
        type: "submit"
        value: "Login"
    ,
        type: "p"
        html: "Made with CoffeeScript"
    ]

$("#mycoffeeform").buildForm form

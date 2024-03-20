// src/hello_backend/main.mo
actor {
public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
};
};
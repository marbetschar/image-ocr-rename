var messages = {
    root: document.getElementById("messages"),
    add: function(type, text) {
        var className = type ? ("message-" + type) : "message-info";

        var element = document.createElement("li");
        element.classList.add("message");
        element.classList.add(className);
        element.innerHTML = text;

        messages.root.appendChild(element);
    },
    clear: function(){
        while (messages.root.firstChild) {
            messages.root.removeChild(messages.root.firstChild);
        }
    }
};

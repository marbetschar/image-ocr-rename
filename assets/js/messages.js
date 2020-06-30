var messages = {
    root: document.getElementById("messages"),
    localeDateStringOptions: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    },
    add: function(type, text) {
        var className = type ? ("message-" + type) : "message-info";

        var element = document.createElement("li");
        element.classList.add("message");
        element.classList.add(className);
        element.innerHTML = "[" + (new Date().toLocaleDateString('de-CH', messages.localeDateStringOptions) + "] " + text);

        messages.root.appendChild(element);
    },
    clear: function(){
        while (messages.root.firstChild) {
            messages.root.removeChild(messages.root.firstChild);
        }
    }
};

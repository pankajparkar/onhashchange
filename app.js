function HideAllHashBasedNodes() {
    var nodes = document.getElementsByClassName('hash-based-content');
    Array.from(nodes).forEach(node => {
        node.style.display = 'none';
    });
}

function showHashBasedContent(hash) {
    // creating query like [id="#0.1_products"]
    var node = document.querySelector('[id="'+ hash +'"]');
    if (node) {
        node.style.display = 'block';
    }
}

function onHashChange (url = "") {
    var hash = url.split('#')[1];
    // On hash change
    HideAllHashBasedNodes();
    if (hash) {
        showHashBasedContent(hash);
    }
}

window.onhashchange = function (event) {
    onHashChange(event.newURL);
}

// on page load
onHashChange(window.location.href);

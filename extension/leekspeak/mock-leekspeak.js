var onions = document.documentElement.outerHTML.match(/[a-zA-Z2-7]{16}\.onion/);

//alert(onions.length);
console.log(onions);

// for (var n = 0; n < onions.length; n++) {
//     alert(onions[n]);
// }

var all_links = document.getElementsByTagName("a");
var onion_links = [];

console.log(all_links);

if (all_links !== null && all_links !== undefined) {
    for (var n = 0; n < all_links.length; n++) {
        var onion_urls = all_links[n].href.match(/[a-zA-Z2-7]{16}\.onion/);

        if (onion_urls !== null && onion_urls !== undefined) {
            if (onion_urls.length > 0) {
                // <a> tag computed height
                var a_tag_height = all_links[n].offsetHeight;

                var ls_label = document.createElement("div");
                ls_label.className = "ls-label";
                // Show label below the link
                ls_label.style.top = all_links[n].offsetTop + a_tag_height;
                // NOTE: Might be some i10n issues with setting left vs. right languages
                ls_label.style.left = all_links[n].offsetLeft;
                ls_label.innerHTML = "extensively red pear dean nils casket";
            }
        }
    }    
}

// Sanity check to make sure syntax is ok since Firefox add-ons just fail silently otherwise
document.body.style.borderTop = "5px solid green";

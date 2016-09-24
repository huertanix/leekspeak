//document.addEventListener("DOMContentLoaded", function() { // never fires lol

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
            //var onion_urls = all_links[n].href.match(/^(\w+:)?\/\/[a-zA-Z2-7]{16}\.onion$/);
            //var onion_url = all_links[n].href.match(/^[a-zA-Z2-7]{16}\.onion$/);
            //var onion_url = null;

            if (/[a-zA-Z2-7]{16}\.onion/.test(all_links[n].href)) {
            //}
            //if (onion_url !== null && onion_url !== undefined) {
                //if (onion_urls.length > 0) {
                    console.log("Found .onion link! " + all_links[n].href);
                    // <a> tag computed height
                    //var a_tag_height = all_links[n].offsetHeight;
                    var link_box = all_links[n].getBoundingClientRect(); // It's 2016 dawg!
                    var a_tag_height = link_box.height;

                    //var link_style = window.getComputedStyle(all_links[n], null);
                    //console.log("Top: " + all_links[n].offsetTop); // doesn't work
                    //console.log("Computed top: " + link_style.getPropertyValue("top")); // doesn't work
                    //console.log("Rect top: " + link_box.top + window.scrollY ); // ::thumbs up emoji::
                    var ls_label = document.createElement("div");
                    // Add common style attrbutes directly into style tags; Using a css 
                    // class would introduce the possibility of name collisions with anything
                    // on the page that would share the class name.
                    //ls_label.className = "ls-label";
                    ls_label.style.color = "#FFF";
                    ls_label.style.background = "rgba(0, 0, 0, 0.75)";
                    ls_label.style.position = "absolute";
                    ls_label.style.fontFamily = "Helvetica, Arial, Sans";
                    ls_label.style.fontSize = "1em";
                    ls_label.style.zIndex = 9000;
                    ls_label.style.border = "1px solid #800080";
                    ls_label.style.padding = "1px 5px";
                    
                    // Show label below the link
                    //ls_label.style.top = all_links[n].offsetTop + a_tag_height;
                    ls_label.style.top = (link_box.top + window.scrollY + a_tag_height + 5) + "px"; // magic number 5 is for padding offset
                    //console.log("New style top: " + ls_label.style.top);
                    // NOTE: Might be some i10n issues with setting left vs. right languages
                    ls_label.style.left = (link_box.left + window.scrollX) + "px";
                    ls_label.innerHTML = "extensively red pear dean nils casket";

                    document.body.appendChild(ls_label);
                //}
            }
        }    
    }

    // Sanity check to make sure syntax is ok since Firefox add-ons just fail silently otherwise
    document.body.style.borderTop = "5px solid green";
//}, false);
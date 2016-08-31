var onions = document.documentElement.outerHTML.match(/[a-zA-Z2-7]{16}\.onion/);

// Sanity check to make sure syntax is ok since Firefox add-ons just fail silently otherwise
document.body.style.borderTop = "5px solid green";

//alert(onions.length);
console.log(onions);

for (var n = 0; n < onions.length; n++) {
	alert(onions[n]);
}

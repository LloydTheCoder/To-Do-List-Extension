var textbox = document.getElementById("textbox");
var send = document.getElementById("send");
var list = document.getElementById("list");

send.addEventListener("click", function thing(){
	var messages = document.createElement("p");
	var button = document.createElement("button");
	messages.innerHTML = textbox.value;
	button.innerHTML = "Delete";
	list.appendChild(messages);
	list.appendChild(button);
	textbox.value = "";

	button.addEventListener("click", function some(){
		list.removeChild(messages);
		list.removeChild(button);

	});

	is_under = false;
	messages.addEventListener("click", function underline(){
		if (is_under == false) {
			messages.style.textDecoration = 'line-through';
			is_under = true;
		} else {
			messages.style.textDecoration = 'none';
			is_under = false;
		}
	});
});
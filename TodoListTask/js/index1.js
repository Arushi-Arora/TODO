window.onload = function() {
	//variables
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	var list = document.getElementById("list");		
	var id = 1;

	//button event listener
	btn.addEventListener("click", addTodoItem);

	//list event listener
	list.addEventListener("click", boxChecked);

	//add todo item to list
	function addTodoItem() {
		if(input.value === "") {
			alert("You must enter some value!");
		}
		else {
			var text = input.value;	
			var item = `<li id="li-${id}"><input id="box-${id}" class="checkboxes" type="checkbox">${text}<span onclick="this.parentElement.style.display='none'" ><button style="float:right;">&times</button></span></li>`;
			console.log(item);				
			list.insertAdjacentHTML('beforeend', item);		
			id++;
			form.reset();
		}
	}

	//adding string through style to list itme
	function boxChecked(event) {
		const element = event.target;
		if(element.type === "checkbox") {
			element.parentNode.style.textDecoration = "line-through";
			element.parentNode.style.backgroundColor= "darkgray";
		}
	}

}
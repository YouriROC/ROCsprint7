function converting(){
     var input = document.getElementById("inputText").value;
     var output = document.getElementById("outputText").value = input.split("go\n").join("\nGO\n");
}





// Blocks codes Functions

var code = document.querySelectorAll(".code");

	var i = 0;

    while(i < code.length){

	    code[i].addEventListener('click', function (e) {

	        addCode(e.currentTarget.id);

	    });

    	i++;
    }



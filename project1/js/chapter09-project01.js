/* add code here  */
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    } else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

window.addEventListener("load", function() {
    var cssSelector = "input[type=text], select[name=genre], select[name=subject]";
    var fields = document.querySelectorAll(cssSelector);
    
    for (var i = 0; i<fields.length; i++) {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});
//add handler for the submit event of the form
function init() {
    document.getElementById("mainForm").addEventListener("submit", checkForEmptyfields);
    
}
/*	initialize	handlers	once	page	is	ready	*/
window.addEventListener("load",	init);
/*	ensures	form	fields	are	not	empty	*/
function checkForEmptyfields(event) {

        var fields = document.getElementsByClassName("required hilightable");
        //console.log(fields);
    	//	loop	thru	the	input	elements	looking	for	empty	values
    	var	fieldList	=	[];
		for	(var i=0;	i<fields.length;	i++) {
				if	(fields[i].value	==	null	||	fields[i].value	==	"")	{
				    	//	since	a	field	is	empty	prevent	the	form	submission
					event.preventDefault();
					fieldList.push(fields[i]);
				} 
		}
		//console.log(fieldList);
			//	now	set	up	the	error	message
		
		
		//var img = document.createElement("img");
		if	(fieldList.length	>	0)	{
			for	(i=0;	i<fieldList.length;	i++)	{
				//msg	+=	fieldList[i].id	+	",";
				//fieldList[i].style.borderColor = "red";
				//fieldList[i].style.background = "pink";
				//fieldList[i].appendChild(img);
				//fieldList[i].setAttribute("src","../css/error.png");
				fieldList[i].setAttribute("class", "error");
			}
			//alert(msg);
		}
}

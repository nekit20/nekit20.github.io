function change(i) {
var b=1;
var c=1;
var il = document.getElementById("workMenu" + i);
var al = document.getElementById("photo-works" + i);

for (b;b<6;b++)  {
var el = document.getElementById("workMenu" + (b));
el.setAttribute("style","color:black");
};

il.setAttribute("style","color:#d06455");
for (c;c<6;c++) {
	var sl = document.getElementById("photo-works" + (c));
	sl.setAttribute("style","display:none");
	al.setAttribute("style","display:block");
};

}
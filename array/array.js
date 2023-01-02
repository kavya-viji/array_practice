//first way
var arr1 = new Array("cat",11,12.45)
document.write(arr1[0]);
document.write("<br>");
document.write(arr1[1]);
document.write("<br>");
document.write(arr1[2]);
// alert(arr1[0]);
// alert(arr1[1]);
// alert(arr1[2]);

document.write("<br>");
document.write("<br>");

//second way
var arr2 = ["cat",12,13]
document.write(arr2[0]);
document.write("<br>");
document.write(arr2[1]);
document.write("<br>");
document.write(arr2[2]);
document.write("<br>");
document.write(arr2[3]);

arr2.length=3
//alert(arr2);
document.write("<br>");
document.write("<br>");

//associative array---index can be string
var arr3 = new Array()
arr3["a"]="html"
arr3["b"]="css"
arr3["c"]="js"
for (var aa in arr3)
{
	document.write("The index is"+" "+aa+ ". The value is"+" "+arr3[aa]+"<br><br>");
}




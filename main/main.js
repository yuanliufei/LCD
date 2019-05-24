module.exports = function main(a) {
  //var top=["._.","...","._.","._.","...","._.","._.","._.","._.","._."];	//top style
  var middle=["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];	//middle style
  var bottom=["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];	// bottom style
  var tops=["._.","...","._.","._.","...","._.","._.","._.","._.","._."];	//top style
 //var a="910";
  var length=a.length;
  var array=new Array();
  for(var k=0;k<3;k++){			
    array[k]=new Array();
  }
  for(var k=0;k<length;k++){
   	var tmp=a[k];
    array[0].push(tops[tmp]);
    array[1].push(middle[tmp]);
    array[2].push(bottom[tmp]);
  }
  /*for(var k=0;k<3;k++){			
    array[k].push('\n');
  }*/
  //var str=array[0].join(' ')+"<br>"+array[1].join(' ')+"<br>"+array[2].join(' ');
  var strs=array[0].join(" ") + "\n" + array[1].join(" ")+ "\n" + array[2].join(" ") + "\n";
	//document.getElementById("demo").innerHTML=str;
	console.log(strs);
	//return parseInt(a);
	return strs
};
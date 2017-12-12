"use strict";
var hari="hello";
function testing(){
				var har="bye";
				q=1;
			}
var string="hello ,hari";
			console.log(string.length);
			console.log(string.split(","));
			console.log(string.replace("hello","bye"));
			var array=[1,2,3,4];
			var array2=[6,7,8,9];
			console.log(array.toString());
			array[1]=5;
			console.log(array.splice(0,1));
			console.log(array.toString());
			console.log(array.toString().split());
			console.log(array.splice(0,0,2,3))
			;console.log(array.toString());
			console.log(array.indexOf(3));
			console.log(array.indexOf(5));
			console.log(array.concat(array2));
			console.log(array.toString());
			console.log(array2.toString());
			for(var i=array.length;i>=0;i--){                   
				console.log(array[i]);
			}
			if(array[1]==10){
				console.log("i am 10");
			}
			else{
				console.log("i am not 10");
			}  
			var j=0;
			while(j<array.length){
				console.log(array[j]);
			}
			// function insertion(var arr){
				// var temp,i,j;
				// for(j=1;j<arr.length();j++){
					// i=j-1;
					// while(i>0&&arr[i]<arr[j]){
						// temp=arr[i];
					// arr[i]=arr[i+1];
					// arr[i+1]=temp;
						// i--;
					// }
					// temp=arr[i];
					// arr[i]=arr[j];
					// arr[j]=temp;
					// }
				// }
			// }
			var a=[5,2,1,0,8];
			console.log(sort(a));
			var myjson ={name:"hari"};
			myjson.age=20;
			console.log(myjson);
			console.log(json.stringify(myjson));


/*

////////1st///////////

function multiply(a){
	return a*a;
}
console.log(multiply(10));


/////////2nd/////////

function res(x){
	sum= x*x;
	console.log(sum);


}
res(3);


////////////////////////////

console.log(Math.pow(16,2));



///////////////Prime1///////////////



function isPrime(x){
	var count=0;
	for (var i = x.length/2; i >= 1; i--) {
		if(x%i==0)
			count++;
	}
	if(count>=1){
		 return "Not Prime";
		}
	return "Prime";


}
console.log(isPrime(2));


///////////////Prime2 ///////////////


function Prime(x){
	var count=0;
	for (var i = x.length/2; i >= 1; i--) {
		if(x%i==0)
			count++;
	}
	if(count>=1){
		 console.log("Not Prime");
		}
	else res= console.log("Prime");


}
Prime(27);



*/


///////////duzbucaqlinin perimetri, sahesi, cemi////////////////

function perimeter(a,b){
	return 2*(a+b);
}
console.log(perimeter(3,4));

function sahe(a,b){
	return a*b;
}

console.log(sahe(3,4))


function cem(a,b){
	return perimeter(a,b)+sahe(a,b);
}


console.log(cem(3,4))

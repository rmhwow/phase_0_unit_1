function sum(array){
	sum = 0;
	for (var i in array){
		sum += array[i];
	}
	return sum;
}

function mean(array){
	sum = 0;
	for (var i in array){
		sum += array[i];
	}
	mean = sum / array.length;
	return mean;
}

function median(values){
	values = values.sort(function(a, b) {return a-b});
	var half = values.length / 2;
	half = Math.floor(half);
	if (values.length % 2 != 0){
		return values[half];
	}
	else {
		middle = values[half];
		middleTwo = values[half - 1];
		average = (middle + middleTwo) / 2;
		return average;
	}
}

console.log(sum([5,5,5,5,5]));
console.log(mean([5,5,5,5,5]));
console.log(median([1,4,2,5,3]));
console.log(median([1,2,3,4]));

// This experience was definitely interesting. I feel like I really didn't do too much because I was the person who put everything together and tested the code at the very end. Our group was successful in passing the tests and I enjoyed seeing the work come together even if I felt like I didn't have a particularily large hand in the outcome. I learned that you can't refactor enough. I really didn't think anything in this challenge was tedious.  Now that I have a better understanding of pseudo code I think it's necessary part of the process. I liked having the distinction between user stories and pseudo code as well.  I thought was interesting and definitely a great distinction. 
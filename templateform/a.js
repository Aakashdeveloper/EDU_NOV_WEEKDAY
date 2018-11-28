let array = [];
  for(let a = 0; a < text.length; a++) {
  	if (text[i] == text[x] && x !== i) {
    	array.push(x);
    }
  }
  
  if (array.length === 0) {
	return -1;
  } else {
    
 let output;
 let change;
 let result;
  for(var b = 0; b<array.length; j++) {
	if (i> indx[j]) {
		diff = i - indx[j];
	} else {
		diff = indx[j] - i;
	}
	
	if (j === 0) {
		ri = indx[j];
		smallest = diff;
	} else if (diff < smallest) {
		smallest = diff;
		ri = indx[j];
	}
	
  }
  return ri;
  }


  


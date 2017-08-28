'use strict';

module.exports = {
	aritGeo: (value) => {
		// Check input validity
		let invalidInput = (elem) => {
			return (typeof(elem) !== "number");
		}

		if(!Array.isArray(value)) {
			return "Argument is not an Array";
		} else if(value.length == 0) {
			return 0;
		} else if(value.find(invalidInput)) {
			return "Your Array should contain only numbers";
		}

		// Define AP/GP condition by getting difference 
		// between/ratio of consecutive values in the array
		let difference = value[1] - value[0];
		let ratio = value[1] / value[0];
		
		// Initialize progression check
		let arithmetic = true;
		let geometric = true;

		// Loop through each value of the array and check 
		// against the previous value for progression
		for(let i = 0; i < value.length - 1; i++)
		{
		    if( value[i + 1] - value[i] !== difference ) {
		      	arithmetic = false;
		    } 

		    if (value[i + 1] / value[i] !== ratio) {
		    	geometric = false;
		    }
		      
		}
		
		if(arithmetic === true) {
		    return "Arithmetic";
		}
		else if(geometric === true) {
		    return "Geometric";
		}
		else {
		    return -1;
		}

	}
}

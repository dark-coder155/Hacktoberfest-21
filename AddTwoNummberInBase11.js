<script>
	// Function to add two
	// numbers in base 14
	function sumBase14(num1,num2)
	{
		let l1 = num1.length;
		let l2 = num2.length;
		
		// Note the size of the allocated
		// memory is one more than i/p
		// lenghts for the cases where we
		// have carry at the last like
		// adding D1 and A1
		let res = new Array(4 * (l1 + 1));
		let i = 0;
		let nml1 = 0, nml2 = 0, res_nml = 0;
		let carry = 0;
		if(l1 != l2)
		{
			document.write("Function doesn't support " +
					"numbers of different " +
					"lengths. If you want to " +
					"dd such numbers then " +
					"prefix smaller number " +
					"with required no. of zeroes");
			
		}
		
		// Add all numerals from
		// right to left
		for(i = l1 - 1; i >= 0; i--)
		{
		
			// Get decimal values of the
			// numerals of i/p numbers
			nml1 = getNumeralValue(num1[i]);
			nml2 = getNumeralValue(num2[i]);
			
			// Add decimal values of
			// numerals and carry
			res_nml = carry + nml1 + nml2;
			
			// Check if we have carry for
			// next addition of numerals
			if(res_nml >= 14)
			{
				carry = 1;
				res_nml -= 14;
			}
			else
			{
				carry = 0;
			}
			res[i + 1] = getNumeral(res_nml);
		}
		
		// If there is no carry after
		// last iteration then result
		// should not include 0th
		// character of the resultant
		// String
		if(carry == 0)
		{
			return res;
		}
		
		// If we have carry after last
		// iteration then result should
		// include 0th character
		res[0] = '1';
		return res.join('');
	}
	
	// Function to get value of a numeral
	// For example it returns 10 for input
	// 'A' 1 for '1', etc
	function getNumeralValue(num)
	{
		if(num >= '0' && num <= '9')
		{
			return (num.charCodeAt(0) - '0'.charCodeAt(0));
		}
		if(num >= 'A' && num <= 'D')
		{
			return (num.charCodeAt(0) - 'A'.charCodeAt(0) + 10);
		}
		
		// If we reach this line
		// caller is giving invalid
		// character so we assert
		// and fail
		// assert(0);
		return 0;
	}
	
	// Function to get numeral
	// for a value. For example
	// it returns 'A' for input 10
	// '1' for 1, etc
	function getNumeral(val)
	{
		if(val >= 0 && val <= 9)
		{
			return String.fromCharCode(val + '0'.charCodeAt(0));
		}
		if(val >= 10 && val <= 14)
		{
			return String.fromCharCode(val + 'A'.charCodeAt(0) - 10);
		}
		
		// If we reach this line
		// caller is giving invalid
		// no. so we assert and fail
		// assert(0);
		return 0;
	}
	
	// Driver code
	let num1 = ['D','C','2'];
	let num2 = ['0','A','3'];
	
	document.write("Result is " + sumBase14(num1, num2));
	
	// This code is contributed by avanitrachhadiya2155
</script>

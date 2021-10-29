# Function to get value of a numeral
# For example it returns 10 for input 'A'
# 1 for '1', etc
def getNumeralValue(num) :

	if( num >= '0' and num <= '9') :
		return ord(num) - ord('0')
	if( num >= 'A' and num <= 'D') :
		return ord(num ) - ord('A') + 10

# Function to get numeral for a value.
# For example it returns 'A' for input 10
# '1' for 1, etc
def getNumeral(val):

	if( val >= 0 and val <= 9):
		return chr(val + ord('0'))
	if( val >= 10 and val <= 14) :
		return chr(val + ord('A') - 10)

# Function to add two numbers in base 14
def sumBase14(num1, num2):

	l1 = len(num1)
	l2 = len(num2)
	carry = 0
		
	if(l1 != l2) :
	
		print("Function doesn't support numbers of different"
				" lengths. If you want to add such numbers then"
				" prefix smaller number with required no. of zeroes")
	
	# Note the size of the allocated memory is one
	# more than i/p lengths for the cases where we
	# have carry at the last like adding D1 and A1
	res = [0]*(l1 + 1)
			
	# dd all numerals from right to left
	for i in range(l1 - 1, -1, -1):
	
		# Get decimal values of the numerals of
		# i/p numbers
		nml1 = getNumeralValue(num1[i])
		nml2 = getNumeralValue(num2[i])
		
		# Add decimal values of numerals and carry
		res_nml = carry + nml1 + nml2;
		
		# Check if we have carry for next addition
		# of numerals
		if(res_nml >= 14) :
			carry = 1
			res_nml -= 14
		else:
			carry = 0
		res[i+1] = getNumeral(res_nml)
		
	# if there is no carry after last iteration
	# then result should not include 0th character
	# of the resultant string
	if(carry == 0):
		return (res + 1)
	
	# if we have carry after last iteration then
	# result should include 0th character
	res[0] = '1'
	return res

# Driver code
if __name__ == "__main__":
	
	num1 = "DC2"
	num2 = "0A3"

	print("Result is ",end="")
	res = sumBase14(num1, num2)
	for i in range(len(res)):
		print(res[i],end="")

# This code is contributed by chitranayal

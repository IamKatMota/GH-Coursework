//unit test 
1.
expect multiply (2 * 3) to be 6
expect multiply(2 * 3) to be a number
expect multiply ("two" * 3) to be an error
expect multiplt (2*2*3) to be an error

2. 
expect non-integer inputs, empty arrays, missing arguements to be an error

expect final array to be sorted in ascending order 

expects filter numbers to only give odds from both arrays

expects duplicates to be removed from the final array

expects mix of integer and non-integer values to ignore non-integer numbers from array

//functional tests
1.
When a user clicks "check-out" ask to log in, checkout as guest, or create account

when a user clicks "check-out" with an empty cart show an error message 

When a guest user fills out their information and clicks “Place Order,” they should see an order confirmation page

When a guest user clicks “Place Order” without filling in required fields, they should see an error message highlighting the missing information.

When a logged-in user clicks “Checkout,” they should see their saved shipping and payment information pre-filled.

When a guest user completes a purchase, they should be prompted to create an account.

When a user tries to checkout an out-of-stock item, they should see a message and the item should be removed from their cart.






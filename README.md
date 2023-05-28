# Lab 8 - Starter

1. Within a Github action that runs whenever code is pushed. 
   
   Reason: Choosing to have the automated tests run when I push allows me to immediately know if there are possible bugs in the code I am modifying and can fix them. Compared with the other two options: If I choose manual testing, it will spend too much time on repetitive work, and I may miss some test cases. And if I test after all the development is done, my code is likely to be coupled with many other functions, making it a risky and difficult thing to modify the program.

2. No. 
   
   Reason: E2E test simulates the flow of the user in the entire program. It is too inefficient to use it to test the return value of a function. I prefer to use unit test.
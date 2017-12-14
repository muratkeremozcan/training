package day5.varArgs;

public class ExampleVarArgs { // variable arguments
	
	 public static void addNumbers (String b, int...a) // we use variable arguments if we are unsure how many elements are coming in  // (int a, int b, int c)  we use this if we know the number of elements coming in
	 {												   // you can send different datatypes, but the series have to be at the end
		 // int sum = a + b + c;    // if we are using 3 
		 int sum = 0;
		 
		 for (int i: a)   // we can treat a as an array or collection
		 {
			 sum += i;  // increment some by the number that comes in
		 }
		 
		 
		 System.out.println("text : " + b + "\nSum = " + sum);
	 }
	 
	 public static void main (String args[])
	 {
		 // ExampleVarArgs obj = new ExampleVarArgs();   IF not using static , need to declare an object of type Class (initialize) and then use the method
		 // obj.addNumbers(3, 4, 5);
		 
//		 ExampleVarArgs.addNumbers(3, 4, 5);    // if using static, no need to intialize, can just call from the class

		 // WHAT DO WE DO IF WE DO NOT KNOW HOW MANY ELEMENTS ARE COMING IN?
	 
		 ExampleVarArgs.addNumbers("Some text", 3, 4, 5, 78, 92, 34);
		 
	 
	 
	 
	 }
	
}

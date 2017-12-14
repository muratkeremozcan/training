package com._9lambdaExample;
import com._8functionalInterface.*;

// Lambda expression simplies the use of functional interfaces. To define the methods that the interface uses, we no longer need a seperate class

public class LambdaDemo 
{

	public static double someMethod(CalculateB cb, int x, int y)
	{
		System.out.println("--LambdaDemo--someMethod--");
		return cb.method(x, y);
	}
		
	public static void main(String[] args) 
	{
		// LAMBDAs are a simpler way to write anonymous methods
		/*
		 * int methodName(int x)
		 * {
		 * 		return x*2;
		 * }
		 * 
		 * (x) -> x*2;
		 * (x,y) -> x*y;
		 * () - > 100 * Math.random();
		 */
		
		// lambda expressions have to be associated with a functional interface
		// whenever we want to ASSOCIATE METHODS WITH FUNCTIONAL INTERFACES
		// instead of creating a class and new methods like we did with MyClass.java
		// we can write those methods on the fly!  
		CalculateA calca = (x) -> x*2; // take in x , multiply it by 2. The f.interface's method takes x and returns x
		System.out.println("CalculateA " + calca.method(4));
		// we can CHANGE THE IMPLEMENTATION OF THE METHOD AT RUNTIME!
		calca = (x) -> x*3;
		System.out.println("CalculateA " + calca.method(4));
		//////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////
		CalculateB calcb = (x,y) -> x*y;
		System.out.println("CalculateB " + calcb.method(3, 20));
		//////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////
		CalculateE calce = () -> 100 * Math.random();
		System.out.println("CalculateB " + calce.method());
		//////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////
		// here is a lambda expression with multiple lines of code. Put it in { }; 
		calcb = (x,y) -> {System.out.println("Multiple lines of code");
								double result = x*y;
								return result;
						};
		System.out.println("CalculateB " + calcb.method(3, 5)); 
		System.out.println("---------------------------------"); 
		//////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////
		// associate calcb with x/y and x-y
		// AND make use of someMethod, which takes in calcb, 10, 2 , print out, and return 
		calcb = (x,y) -> x/y;
		System.out.println(someMethod(calcb, 10, 2));
		
		calcb = (x,y) -> x-y;
		System.out.println(someMethod(calcb, 10, 2));
		//////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////

		// LAMBDA expressions and other methods can also be associated with GENERIC FUNCTION INTERFACE
		System.out.println("-------USING GENERICS---------");
		GenFunc<Integer, String> gf  = (x,y) -> {	// type GenFunc<T, S> , object gf takes x,y (Integer, String)
													return x + " " + y;
											    };
		GenFunc<Integer, String> gf2 = (x,y) -> x + " " + y;  // this is the same thing
		GenFunc<Double, Double>  gf3 = (x,y) -> x * y; 	// passing double
		System.out.println(gf.method(10, "Hello"));
		System.out.println(gf2.method(20, "Goodbye"));
		System.out.println(gf3.method(3.0, 2.0));
		//////////////////////////////////////////////////////////
		// how about if functional interface takes no parameters, like calcc
		CalculateC calcc = () -> {
									System.out.println("Nothing here");
									return;
								};
		calcc.method();
		System.out.println("---------------------------------"); 
		//////////////////////////////////////////////////////////
		// functional interfae object calcd is associated with MyClass' constructor
		CalculateD calcd = (x) -> new MyClass(x);
		MyClass myobj = calcd.method(5); // call calcd's method which takes in integer x, returns type myclass (myobj)
		System.out.println("CalculateD myVal " + myobj.getMyVal());
	
		}
	
	
		
		
	}



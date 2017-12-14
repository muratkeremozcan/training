package com._8functionalInterface;

public class MyClass 
{
	int myVal;
	
	public int getMyVal()
	{
		return myVal;
	}
	
	// constructors create and return objects of the class.
	// CONSTRUCTORS DO NOT HAVE A RETURN TYPE, but it is assumed they return an object 
	// constructors HAVE THE SAME NAME as the class
	public MyClass (int x)  // this constructor agrees with the signature of CalculateD,  
	{						// which takes in int x and returns an instance of Myclass
							// MyClass method (int x);
		this.myVal = x;
	}
	public MyClass ()  // this constructor takes nothing, returns nothing
	{
		
	}
	

	
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// THESE TWO METHODS AGREE WITH THE SIGNATURE OF functional interface CalculateAs 
	//method agrees with signature of CalculateA functional interface. For this reason we can ASSOCIATE the method to the functional interface
	// this one is a non-static (instance method)
	public int methodA(int x)
	{
		System.out.println("MyClass - methodA");
		return x * 100;
	}
	public static int methodSA (int x)
	{
		System.out.println("MyClass - static methodA");
		return x * 200;
	}
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// THESE TWO METHODS  agree with the SIGNATURE of functional interface CalculateB
	public static double methodBM(double x, double y)
	{
		System.out.println("MyClass - static methodB multiplies");
		return x*y;
	}
	public static double methodBD(double x, double y)
	{
		System.out.println("MyClass - static methodB divides");
		return x/y;		
	}
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// THIS METHOD AGREES WITH the signature of functional interface CalculateC
	public static void methodC()
	{
		System.out.println("MyClass - static methodC");
		return;
	}
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// THIS METHOD AGREES with the signature of functional interface CalculateD
	public static MyClass methodD(int x)  // takes in int x , returns MyClass object
	{
		System.out.println("MyClass - static methodD");
		return new MyClass(x);
	}
	
	
	
}

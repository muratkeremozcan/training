package com._8functionalInterface;

public class FunctionalInterfaceDemo 
{
	
	public static double someMethod(CalculateB cb, int x, int y)
	{	// take in CalculateB functional interface (cb), pass x and y to  the method of the functional interface
		System.out.println("--FunctionalInterfaceDemo--someMethod--");
		return cb.method(x,y); 
	}
	

	
	
	
	public static void main(String[] args) 
	{
		// functional interfaces are associated with methods that agree with its signature and return type
		
		////////////////////////////////////////////////////////////////////////
		// create an object of type MyClass
		MyClass myClassObj = new MyClass();
		// and then i'm creating an instance of the functional interface CalculateA
		// and then associate this instance (myClassObj)  with myClassObj's method A
		CalculateA calc1 = myClassObj::methodA;  // why not myClassObj.methodA(x)? because that returns an integer, and CalculateA is not of type int, it's a functional interface
		System.out.println("CalculateA " + calc1.method(4));
		// here afterwards calc1 will act  as methodA
		// THIS IS ALL DONE FOR AN INSTANCE METHOD (non-static) such as method A 
				
		// if you have STATIC methods such as methodSA from class MyClass, you don't have to worry about creating objects of Myclass (myClassObj)
		CalculateA calc2 = MyClass::methodSA;
		System.out.println("CalculateA " + calc2.method(4));
		System.out.println("-----------------------");
		// the same method from the functional interface is behaving differently because we are changing it's behavior at runtime
		////////////////////////////////////////////////////////////////////////
		
		////////////////////////////////////////////////////////////////////////\
		// create an instance of functional interface CalculateB
		// since the methodBM is static, no need to create an instance of MyClass, just call it
		CalculateB calcb = MyClass::methodBM;
		System.out.println("CalculateB " + calcb.method(4, 2));
		//reassign to methodBD
		calcb = MyClass::methodBD;
		System.out.println("CalculateB " + calcb.method(4, 2));
		System.out.println("-----------------------");
		////////////////////////////////////////////////////////////////////////
		
		////////////////////////////////////////////////////////////////////////
		// take in CalculateB functional interface (calcb), pass 8 and 3 to  the method of the functional interface
		// currently calcb points to methodBD of MyClass which divides x with y
		System.out.println("someMethod has passed a pointer to methodBD " + someMethod(calcb, 8, 3));
		// if we want we can make calcb point to MyClass methodBM so it multiplies x and y
		// we are changing the behavior of someMethod at runtime!
		calcb = MyClass::methodBM;
		System.out.println("someMethod has now passed a pointer to methodBM " + someMethod(calcb, 8,3));
		System.out.println("-----------------------");
		///////////////////////////////////////////////////////////////////////
		
		///////////////////////////////////////////////////////////////////////
		// functional interface object calcc is associated with MyClass' methodC
		CalculateC calcc = MyClass::methodC;
		calcc.method(); // when calcc calls method, it will act like methodC of myClass
		System.out.println("-----------------------");
		///////////////////////////////////////////////////////////////////////
		
		///////////////////////////////////////////////////////////////////////
		// functional interfae object calcd is associated with MyClass' constructor (the one tha thas a matching signature to public MyClass (int x))
		CalculateD calcd = MyClass::new; // call calcd's method , it returns an object o ftype MyClass
		MyClass myobj = calcd.method(5);  // caclcd method(5) takes in integer 5, returns 5 of type MyClass. We store that in a new object of MyClass called   myobj
		System.out.println("CalculateD myVal " + myobj.getMyVal());
		System.out.println("-----------------------");
		//////////////////////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////////////////////
		// It is not necessary that if the functional interface returns MyClass, you always have to associate a constructor with it
		// instead of associating calcd with MyClass' constructor ( CalculateD calcd = MyClass::new; ) 
		// we can also associate calcd with methodD
		calcd = MyClass::methodD;
		myobj = calcd.method(20); // takes in integer 20, returns 20 of type MyClass, but this time through the METHOD NOT THE CONSTRUCTOR
		System.out.println("CalculateD myVal " + myobj.getMyVal());
		System.out.println("-----------------------");
		
	
	}

}

package day5.varArgs;

public class ExampleFinal {   // final public class ExampleFinal {   this would make the class final and not enable it to have a childd
	
	// final data, method or class 
	// final data cannot be changed 
	// final method cannot be overridden 
	// final class cannot have a child/sub class
	
	
	
	final double pi = 3.14;  // can't change final data, it is constant
	
	final public void methodA()   // can't override this method in another class 
	{
		// pi = 4;   
		System.out.println("pi = " + pi);
	}
}

package day3.staticExample;

public class ExampleStatic {
	
	//static int and nonstatic int
	static int staticVariable;
	int nonstaticVariable;
	
	//static and nonstatic functions
	static public void staticMethod()
	{
		System.out.println("static variable = " + staticVariable);
		staticVariable++;
	}
	
	public void nonstaticMethod()
	{
		System.out.println("non-static variable = " + nonstaticVariable);
		nonstaticVariable++;	
	}
	
	static { System.out.println("Static block of code"); } // whenever a class is referenced, it fires that the static line of code even before the constructor
	
	ExampleStatic() { System.out.println("Constructor"); } // constructor
	
	
	

}

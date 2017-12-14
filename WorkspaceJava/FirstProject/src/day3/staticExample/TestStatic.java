package day3.staticExample;

public class TestStatic {

	public static void main(String[] args) {
		
		ExampleStatic obj = new ExampleStatic();
//		ExampleStatic obj2 = new ExampleStatic(); // static is only fired the first time and not in subsequent calls, but for every object constructor is fired
		
		obj.staticMethod();
		obj.staticMethod();
		//ExampleStatic.staticMethod(); // static methods can be called using the class name, without using an object (obj)
		
		obj.nonstaticMethod();
		obj.nonstaticMethod();
		
		System.out.println("--------------");

		ExampleStatic obj2 = new ExampleStatic();
		
		obj2.staticMethod(); 	// when calling static method, it continues using the same value, 1 per class
		obj2.staticMethod();
		
		obj2.nonstaticMethod();  // non static is 1 per object, starts a fresh copy
		obj2.nonstaticMethod();
		

	}

}

package day3.abstractExample;

public abstract class Container  // an abstract class has fully defined as well as empty methods. A NON-ABSTRACT PARENT DOES NOT HAVE EMPTY METHODS
{ 
	
	public void calculateVolume(int length, int height)   // fully defined method
	{
		double volume = calculateAreaOfBase(length) * height;
		System.out.println("Volume = " + volume);
	}
	
	public abstract double calculateAreaOfBase(int length); // empty method. declaring but not defining it, because THE WAY IT IS IMPLEMENTED IS DIFFERENT FOR DIFFERENT SUB-CLASSES
	
	
	
}

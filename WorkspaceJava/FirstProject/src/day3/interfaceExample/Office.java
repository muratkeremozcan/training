package day3.interfaceExample;   // AN INTERFACE HAS ONLY EMPTY METHODS.
/*
It goes like this 
TOP TIER (no empty methods)   - PARENT CLASS (regular Inheritance)
2nd TIER (some empty methods) - ABSTRACT (parent) CLASS
3rd TIER (all empty methods)  - INTERFACE 		
		
*/		

public interface Office 
{
	// an interface is a class with empty methods. It is used to bring a consistency across classes  
	public void New();
	public void Open();
	public void Save();
}

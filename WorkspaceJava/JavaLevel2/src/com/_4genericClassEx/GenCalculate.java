package com._4genericClassEx;
// GENERIC CLASS IS A CLASS INDEPENDANT OF DATATYPES
public class GenCalculate <T, S>    // this class can act on any datatype T and S   . You can also restrict to certain values, <T extends Number, S extends String>
{

	T t;	// instead of int t
	S s;	// instead of String s
	
	public GenCalculate(T t, S s)   // constructor
	{
		this.t = t;
		this.s = s;
		
	}
	
	public void printOut()			// print method
	{
		System.out.println("The value of T is " + t);
		System.out.println("The value of S is " + s);
	}
}

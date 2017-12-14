package com._3genericEx;

public class Calculate 
{
	// WE CAN CREATE GENERIC METHODS, these can be applied across many datatypes
	// all you need to do is to specify the datatype T (ex: instead of void it's T) and the return value: <T>  . public <T> T isEqualGeneric (T var1, T var2) 
	public void isEqual (int var1, int var2)
	{
		if (var1 == var2)
		{
			System.out.println("the values are equal");
		}
		else
		{
			System.out.println("not equal");
		}
	}
	
	// simpler version was :  public <T> T isEqualGeneric (T var1, T var2)  
	
	public <T extends Number> T isEqualGeneric (T var1, T var2)     // instead of int int you can do Object Object, but then you have a problem of different datatypes being able to be compared
	{													// this is to solve that problem
		if (var1 == var2)								// to make the generic method only Numbers you can add  'extends Number'
		{												// the method returns of type T
			System.out.println("the values are equal");
		}
		else
		{
			System.out.println("not equal");
		}
		return var1;
	}
	
	public <T extends Comparable<T>> int isEqualGenericFour( T var1, T var2 )// Comparable interfae is used to compare 2 datas
	{																		//  here it compares 2 datas of type T
		if (var1.compareTo(var2) == 0)
		{
			System.out.println("the values are equal");
		}
		else if (var1.compareTo(var2) > 0)
		{
			System.out.println("var 1 is greater");
		}
		else 
		{ 
			System.out.println("var 2 is greater");
		}
		return var1.compareTo(var2);
		
	}
	
	public <T, S> void isEqualGenericMulti(T var1, S var2)
	{
		System.out.println(var1.getClass().getSimpleName());
		System.out.println(var2.getClass());
		
	}
	
	
	
}

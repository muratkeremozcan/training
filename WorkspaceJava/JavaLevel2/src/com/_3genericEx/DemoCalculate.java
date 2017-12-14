package com._3genericEx;

public class DemoCalculate {

	public static void main(String[] args) 
	{
		Calculate obj = new Calculate();
		
		obj.isEqual(6, 5);
		obj.isEqualGeneric(10, 10);
	//	obj.isEqualGeneric("Hello", "Hello");
	//	obj.<String>isEqualGeneric("Hello", "Hello");  // forcing to compare String
		obj.<Integer>isEqualGeneric(10,10);   	// you cannot use primitive data type like int, you have to use class type like Integer, something that inherits Object

		System.out.println("__________________________________");
		
		System.out.println("Generic return " + obj.<Integer>isEqualGeneric(10,10));
		
		System.out.println("__________________________________");
		
		System.out.println(obj.isEqualGenericFour(11.4, 11.4));
		System.out.println(obj.isEqualGenericFour(10, 11));
		System.out.println(obj.isEqualGenericFour("hello", "hello"));
		
		System.out.println("__________________________________");
		
		obj.isEqualGenericMulti(10.4, "Hello");
	}	

}

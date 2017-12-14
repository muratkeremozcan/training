package com._5genericwildcard;

public class CalcAvgTest
{
	public static void main (String[] args)
	{
		
		Integer[] inums = {10, 20, 30, 40};							// array of integers
		// creating an object of CalcAvg (iobj), passing in an Integer so we have an array of integers
		CalcAvg<Integer> iobj = new CalcAvg<Integer>(inums);	// and to the constructor we are passing in an array of integers with inums	
		
		System.out.println("Average is " + iobj.average());		// call the average method
		//	
		//
		//
		Double[] dnums = {10.0, 20.0, 30.0, 40.0};					// array of doubles
		// creating an object of CalcAvg (dobj), passing in a Double so we have an array of doubles
		CalcAvg<Double> dobj = new CalcAvg<Double>(dnums);		// and to the constructor we are passing in an array of doubles with dnums	
		
		System.out.println("Average is " + dobj.average());		// call the average method
		
		System.out.println(iobj.sameAverage(dobj));
		
	}
	
	
	
}
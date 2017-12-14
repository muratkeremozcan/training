package com._5genericwildcard;

public class CalcAvg <T extends Number>   // generic class  CalcAvg takes in any type T , but only as number
{

	T[] numarray;    // generic array of the numbers the class will take
	
	CalcAvg(T[] arr)   // the constructor. It sets the array of numbers
	{
		this.numarray = arr;
	}
	
	// you cannot add sum += temp because temp may be a string
	// you cannot add sum += temp 
	double average()
	{
		double sum = 0.0;
		for (T temp : numarray)  // loops through the array
		{
			sum += temp.doubleValue();   // find the sum of the numbers
		}
		return sum/numarray.length;   // find the average 
	}
	
	
	// you can't compare Integer with double so use wild card
	// you can also use bounds for wildcard
	boolean sameAverage (CalcAvg<?> obj)	// <?> means it will take any object of type CalcAvg.  you could also do :       (CalcAvg<? extends Number> obj) to get only number type	
	{
		return this.average() == obj.average();    // check if both the averages are the same
												   // iobj calls sameAverage method and passes dobj, so this is  checking  iobj = dobj
	}
	
	
}

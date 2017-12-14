package com._9lambdaExample;
// predefined functions save time from having to create our own functional interfaces
// first we eliminated the need for a class to calculate the method USING LAMBDA EXPRESSIONS
// then we elimated the need for having functional interfaces by USING PREDEFINED FUNCTIONAL INTERFACES
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Predicate;

public class LambdaDemoPredefined {

	public static void main(String[] args) 
	{
		// using the in-built functional interface called Function<T, S> , it's method apply takes in T and returns R. Select the function and hit F3 to see more
		// this saves us time from writing our own functional interface
		/*
		public interface Function<T, R>{
		R apply(T t);
		}
		*/
		Function<Integer, Double> f = (x) -> x * 3.14;   // f now points to a method
		System.out.println(f.apply(100));				 // now we're using Functions apply method
		/////////////////////////////////////////////////////////////////////////////////////////
		/*
		public interface BiFunction<T, U, R>{
		R apply(T t, U u);
		}
		 */
		// takes in 3 types, the first 2 get passed to the apply method, and the 3rd is the return type
		BiFunction<Integer, Double, String> bo2 = (x,y) -> x * y + " is result"; // x and y get passed in, get calculated and get returned as String
		System.out.println(bo2.apply(10, 3.14));					// return type is string!
		/////////////////////////////////////////////////////////////////////////////////////////
		/*
		 public interface Predicate<T>{
		boolean test(T t);
		}
		 */
		// Predicate can take in some type and return a boolean  
		Predicate<Integer> p = (x) -> x > 0;		// p now points to method which checks if whats taken in is greater than 0
		System.out.println(p.test(-5));				// returns boolean whether the method held or not
		/////////////////////////////////////////////////////////////////////////////////////////
		
	}

}

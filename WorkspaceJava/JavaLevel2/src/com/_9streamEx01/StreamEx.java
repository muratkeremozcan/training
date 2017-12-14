package com._9streamEx01;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.stream.Stream;

import org.omg.Messaging.SyncScopeHelper;

import com._8functionalInterface.CalculateA;
import com._8functionalInterface.MyClass;

public class StreamEx 
{

	public static void cube(double i)
	{
		System.out.println((int) (i*i*i));
	}
	
	public static void main(String[] args) 
	{	// we are creating a list of double values and inserting them in list
		List<Double> list = Arrays.asList(1.1,2.2,-1.0,5.5,10.0,-7.1,8.8,20.0);
		
		
		/////////////////////////////////////
		/////////////////////////////////////
		/////////////////////////////////////
		// 3 WAYS OF PRINTING THE LIST
		// 1ST WAY
		// we print the list. For each element of the list, we insert into Double temp and print out the temp value
		for (Double temp : list)
		{
			System.out.println(temp + " ");
		}	System.out.println("--------");
		
		/////////////////////////////////////
		// 2ND WAY
		// list.forEach can also take a lambda expression. 
		// forEach takes a functional interface of type Consumer. 
		// Consumer takes in type T and returns void
		/*	default void forEach(Consumer<? super T> action) {
        	Objects.requireNonNull(action);
        	for (T t : this) {
            action.accept(t);
        }
		 	public interface Consumer<T> {
		 	void accept (T t); 
		}
		
		*/    
		// this all means that for every element x, consumer takes in 1 element of type T, and for every elemnt x print out its value    
		list.forEach(x -> System.out.println(x + " "));
						  System.out.println("------");
			  
		/////////////////////////////////////
		// 3RD WAY
		//associate methods with functional interface instead of lambdas
        //because there is a functional interface (forEach) , you can use a lamda expression like above, you can also assign a method to that functional interface
		// like we were doing with CalculateA calc2 = MyClass::methodSA;
		list.forEach(System.out::print);
		/////////////////////////////////////
		/////////////////////////////////////
		/////////////////////////////////////
		
		/////////////////////////////////////
		// forEach can be assigned any method as long as it agrees with the signature of the Consumer functional interface
		// for example we can assign the cube method of this class StreamEx 
		list.forEach(StreamEx::cube);
		/////////////////////////////////////
		
		/////////////////////////////////////
		// forEach can be assigned absolute value method. 
		System.out.println("\n--Math::abs---");
		list.forEach(Math::abs);
		// but the method abs (absolute value) does not have a print method, how do we resolve that?
		// We USE A STREAM !
		// A stream operates on data souce like collections and arrays
		// never provides storage for the data. It is temporary
		// It simply moves data sorting and filtering
		// A stream represents a sequence of elements and supports different kind of operations to perfom
		// computations upon those elements
		// let's say we have a list and we want a new to sorted version of the list
		System.out.println("\n--strea().sorted()---");
		list.stream().sorted().forEach(System.out::print); // produce the stream in a temp, sort it, and print them out
		
		System.out.println("\n--strea().sorted().filter---");
		list.stream().sorted().filter(x -> x > 0).forEach(System.out::print); // produce the stream i na temp, sort it, filter out those greater than 0, and print
		
		// to print this out line by line
		System.out.println("\n--Stream<Double> sortedStream---");
		
		Stream<Double> sortedStream = list.stream().sorted();	// here we are creating a new stream of double elements and we are assigning it the list that is in a temp and sorted
		sortedStream.forEach(System.out::println);				// we have a sorted stream , so we loop through it and print
		System.out.println("\n--filter( x -> x > 0 ---");		// Stream is temp, once the forEach runs you can no longer use it
		/////////////////////////////////////					// forEach is a terminal operation, once you use it it kills the stream, sorted is an intermediate operation, you can keep using the stream
																// Stream.filter, Stream.map, Strea.sorted are intermediate methods. Stream.forEach and Stream.reduce are terminal operators.
		
		Stream<Double> filterStream = list.stream();
		filterStream.filter( x -> x > 0 ).forEach(System.out::println);	//filter the stream for positive values , and call forEach. filter here is intermediate, forEach is terminal
		// since filter is intermediate , you can apply multiples of it
		System.out.println("--filter (x -> x > 0 ** x < 10)--");
		filterStream = list.stream().filter(x -> x > 0.0 && x < 10.0 )
									.filter(x -> x * 2 < 10);
		filterStream.forEach(System.out::println);
		///////////////////////////////////////
		///////////////////////////////////////
		
		System.out.println("\n--Math::abs---");
		list.forEach(Math::abs);
		//   list.replaceAll(Math::abs);
		// 	 list.forEach(System.out::println);     // this replaces all the orignal values, we don't want it
		
		// we create a new list, we have the original ones from list.stream, we add new elements with map them using the absolute values, and print it out
		list.stream().map(Math::abs).forEach(System.out::println);
		////////////////////////////////////////
		
		// reduction operations reduce a stream into a single value
		// optional instance can either contain a a value of type T or be empty. You can use isPresent() to determine if a value is present.If it is avilable it can be obtained by calling get()
		System.out.println("---Optional & reduce---");
		Optional<Double> opt = list.stream().reduce((a,b) -> a + b );   // keep adding them objects. Optional can accept NULL values
		if (opt.isPresent()) {System.out.println("sum = " + opt.get());  // if Optional is present, get the value and print it
		///////////////////////////
		/// you can use optional if you don't want to give a default value
		// if you want to simply find the sum , just use the below
		double sum = list.stream().reduce(0.0,  (a,b)  -> a+b);   // need to give initial value 0.0 first,
		System.out.println("sum = " + sum);
		// Stream.filter, Stream.map, Strea.sorted are intermediate methods. Stream.forEach and Stream.reduce are terminal operators.
		
		
		}
	
	
	}
	
}



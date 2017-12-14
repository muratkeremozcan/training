package day4.collections;

import java.util.ArrayList; // needed to use ArrayList
import java.util.List; 

public class ExampleList {

	public static void main(String[] args) {
		
		String arr[] = new String[10];
		arr[0] = "zero";
		arr[9] = "nine";
		// arr[10] = "one more"; doesn't work!  ArrayIndexOutOfBoundsException!
		
		// non generic list, you can add anything
		List list = new ArrayList();  // ArrayList is a subclass of List. List is used to hold any collection of data
		list.add("zero"); 
		list.add("one");
		list.add(2);
		list.add(true);   // i can add any type of object to the array list
		
		// how do I fetch the data? Each data type is different
		for (Object temp : list)   // Object class is the parent of every class
		{
			System.out.println(temp);
		}
		
		System.out.println("------------------");
		
		// generic list takes only 1 datatype
		List<String> genericList = new ArrayList<String>();
		genericList.add("zero");
		genericList.add("two");
		genericList.add("three");
		genericList.add("four");
//		genericList.add(5);  //doesn't work
		
		genericList.remove("three");  // you can remove any specific element in the list
		genericList.add(0, "-> Start"); // you can add to a list at any location you want
		
		for (String temp : genericList)
		{
			System.out.println(temp);
			
		}

		

	}

}

package com._1scannerEx;

import java.util.Scanner;

public class ReadInput {
// THIS WILL SHOW HOW TO USE THE SCANNER CLASS, in-built to Java, you can use it to read inputs from the user 
	public static void main(String[] args) {
		
		
		//String name = "Alex";
		Scanner input = new Scanner(System.in);	// to take in from the console
		System.out.println("What is the input name? ");
		
		String name = input.next();	// read the String that gets input at the console and set it to the variable  name 
		System.out.println("name = " + name + "\nnow enter the integer");

		// how to read in integer
		
		// this is the hard way
		/*		String aint = input.next(); // read another string (this will be parsed to an integer)
		int a = Integer.parseInt(aint);   // parse the string into an integer and assign it to integer 'a' */
		
		// this is the better way
		int a = input.nextInt();   // this automatically changes into integer
		System.out.println("integer = " + a);
		
		// input many numbers
		System.out.println("Input many numbers");
		int total = 0;
		
		while(input.hasNextInt())   // loop through every element, as long as the next input is an integer
		{
			total += input.nextInt();   // convert it to int and add to the total
		}
		
		System.out.println("Total =" + total);
		
		// input many texts
		System.out.println("Input many texts");
		String temp ="";  // initialize the string as nothing
		
		while(input.hasNext())  // loop through eevery element 
		{
			temp = input.next();  // aggregate to the strings
			if(temp.equals("exit")) break;   // when exit is typed, break
		}
		
		System.out.println("out of loop");
	}

}

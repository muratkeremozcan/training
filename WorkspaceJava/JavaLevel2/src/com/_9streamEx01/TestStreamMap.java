package com._9streamEx01;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.*;

	public class TestStreamMap 
	
	{

		public static void main(String[] args) 
		{

			List<Employee> emps = new ArrayList<>();
			emps.add(new Employee("Alex", 110000.54, 34));
			emps.add(new Employee("Lynda", 120000.82, 35));
			emps.add(new Employee("Sara", 90000.97, 25));

			/////////////////////////////////////////////
			// once we have all the employees in the array, we want to create a new list for EmpSal , which just has name and salary
			System.out.println("--Mapping---");
			//map the elements of one stream to another
			
			// get the list emps, convert it to a stream because we need to extract data,
			// and then map to a new set of values. For each employe get the name and salary and
			// pass it to EmpSal constructor so we can create new employee and salary objects
			Stream<EmpSal> empsals = emps.stream().map(e -> new EmpSal(e.name, e.salary));
			/* empsals.forEach((s) ->
			{
			System.out.println(s.name + " " + s.salary);
			}
			);*/
			
			/////////////////////////////////////////////
			System.out.println("--convert stream to list---");
			//obtain a collection from a stream. The syntax on the right converts the list into the stream on the left 
			List<EmpSal> result = empsals.collect(Collectors.toList());
			result.forEach(System.out :: println);
			/////////////////////////////////////////////
				
			/////////////////////////////////////////////
			System.out.println("--Mapping with filter A---");
			// create a stream of emps list and apply a filter
			// find the names that start with A, and only map those new ones into the new list 
			Stream<EmpSal> empsalsnamecontains = emps.stream().filter((e)-> e.name.startsWith("A")) 
															  .map(e -> new EmpSal(e.name, e.salary));
			empsalsnamecontains.forEach(System.out :: println);
			/////////////////////////////////////////////
			
			/////////////////////////////////////////////
			System.out.println("--Mapping to double primitive---");
			//Get the salaries and assign it to a stream
			DoubleStream empsalsdouble = emps.stream().mapToDouble((e) -> e.salary); // the delta in DoubleStream is the one with lowercase d, primitive datatype double
			empsalsdouble.forEach(System.out :: println);
			/////////////////////////////////////////////
						
			/////////////////////////////////////////////
			System.out.println("--Mapping to Double objects---");
			Stream<Double> empsalsdoubl = emps.stream().map((e) -> e.salary);
			empsalsdoubl.forEach(System.out :: println);
			System.out.println("--Mapping to int primitive---");
			/////////////////////////////////////////////
						
			/////////////////////////////////////////////

			//Convert the salaries to integers and assign it to a stream
			IntStream empsalsint = emps.stream()
			.mapToInt((e) -> (int)e.salary);
			empsalsint.forEach(System.out :: println);
		}
}
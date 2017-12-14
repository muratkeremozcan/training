package com._2interfaceEx;

public class Excel implements Office
{


	public void New()
	{
		System.out.println("Excel New .xls");
		
	}

	public void Open()
	{
		System.out.println("Excel Open .xls");
		
	}
	
	public void Save()
	{
		System.out.println("Excel Save .xls");
	}
	
	
}

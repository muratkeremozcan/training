package com._2interfaceEx;

public class Word implements Office
{

	public void New()
	{
		System.out.println("Word New .doc");
		
	}

	public void Open()
	{
		System.out.println("Word Open .doc");
		
	}
	
	public void Save()
	{
		System.out.println("Word Save .doc");
	}
	
	@Override
	public void print()
	{
		System.out.println("Print method WORD");
	}
	
	
}


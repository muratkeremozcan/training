package com._2interfaceEx;

public interface Office {

	public void New();
	public void Open();
	public void Save();
	default public void print() {System.out.println("Print Method");}
}

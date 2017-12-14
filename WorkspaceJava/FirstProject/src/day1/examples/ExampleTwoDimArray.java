package day1.examples;

public class ExampleTwoDimArray 
{

	public static void main(String[] args) 
	{
		int[][][] ThreeDim = new int[4][3][2];
		
		//TwoDim[2][1] = 10;
		
		int temp = 10;
		
		for (int i=0; i < 4; i++) 
		{
			for (int j=0; j<3; j++) 
			{
				for (int k=0; k < 2; k++)
				{
				ThreeDim[i][j][k] = temp;
				temp += 10; 
				System.out.print(ThreeDim[i][j][k] + "  ");
				}
			} System.out.println();
			
		}
		
	
		
	}

}

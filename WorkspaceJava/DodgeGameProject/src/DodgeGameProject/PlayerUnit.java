package DodgeGameProject;

public class PlayerUnit extends Unit // PlayerUnit class is a child of Unit class
{ // this is a generic player unit that moves in any direction
	public PlayerUnit(int x, int y, String unitGraphic)
	{ //playerUnit construct requires 3 parameters because it's a child class of Unit which is in format Unit(int x, int y, string unitGraphic)
		super(x, y, unitGraphic);
	} //and we still pass the parameters (x, y, unitGraphic) to the base class Unit

	@Override
	public void Update(int deltaTimeMS) // need to match Update function in parent class Unit which has int deltaTimeMS
	{
		// when the PLAYER's update function gets called, execute this Update() function instead of parent class Unit's Update() function
		// goes hand in hand with parent classes' virtual public void Update() function
		// call our base class' Update() function in case it has any important work to do


		if (Console.KeyAvailable == true) // has the user pressed a key? If so, continue and later move towards that direction
		{
			ConsoleKeyInfo cki = Console.ReadKey(true); //ReadKey reads 1 key, doesn't wait for enter to be hit.
														  //If true (if it read) it doesn't print the key to the screen
														   //ConsoleKeyInfo is a class that holds information about what key was hit
															 //.Key function of the ConsoleKeyInfo class, gets the hardware console key info that is held by ConsoleKeyInfo
			switch (cki.Key)
			{
				case UpArrow:
				case W:
					if (getY() > 0) // do not allow out of bounds, same for other directions....
					{
						setY(getY() - 1);
					}
					break;
				case DownArrow:
				case S:
					if (getY() < Console.WindowHeight - 2)
					{
						setY(getY() + 1);
					}
					break;
				case LeftArrow:
				case A:
					if (getX() > 0)
					{
						setX(getX() - 1);
					}
					break;
				case RightArrow:
				case D:
					if (getX() < Console.WindowWidth - 2)
					{
						setX(getX() + 1);
					}
					break;
			}

		}

		super.Update(deltaTimeMS); // base goes up the chain to the parent and runs the parent's Update function
	}

}
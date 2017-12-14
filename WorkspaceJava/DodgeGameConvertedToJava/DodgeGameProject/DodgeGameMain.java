package DodgeGameProject;

public class DodgeGameMain
{
	static void main() // no need to instantiate Main, entry point of program
	{
		Console.CursorVisible = false; // hide the blinking cursor

		Game game = new Game(); // instantiate a variable called game of type Game using the Game() constructor

		game.Run(); // run the game, calling the Run() function from Game class

		Console.SetCursorPosition(0, Console.WindowHeight - 1); //Program end, display it at the final line
	}
}
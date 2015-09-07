#pragma strict

	var isQuit = false;

	// Update is called once per frame
	function OnTouchDown()
	{
	if(isQuit)
		{
			Application.Quit();
	}
		else
		{
			playerScript.Score = 0;
			playerScript.Lives = 5;
			Application.LoadLevel(2);
		}
}

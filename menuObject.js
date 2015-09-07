#pragma strict 

	var isQuit = false;

	function OnMouseEnter()
	{
		renderer.material.color = Color.white;
	}
	
	function OnMouseExit()
	{
		renderer.material.color = Color.white;
	}
	
	// Update is called once per frame
	function OnMouseDown()
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

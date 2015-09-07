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
			Application.OpenURL("https://twitter.com/APPlaudGames");
		}
	}

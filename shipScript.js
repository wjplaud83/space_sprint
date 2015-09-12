#pragma strict

	var speed = -11f; 

	// Update is called once per frame
	function Update ()
	{
		transform.Translate(0f, speed * Time.deltaTime, 0f);
	}

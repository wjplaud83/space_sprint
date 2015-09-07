#pragma strict

	var float speed = -11f; //';' expected semicolon at end (UCE0001)

	// Update is called once per frame
	function Update ()
	{
		transform.Translate(0f, speed * Time.deltaTime, 0f);
	}

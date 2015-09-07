#pragma strict
	var speed: float = -1;

	// Update is called once per frame
function Update() {
		transform.Translate(0, speed * Time.deltaTime, 0);
		if(transform.position.y <= -15)
			transform.Translate(0, 30, 0);
	}

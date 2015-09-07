#pragma strict


//spawn timers
	var float = spawnThreshold;
	var float = spawnDecrement;

	//ship prefab
	var GameObject = ship;
	
	// Update is called once per frame
	function Update ()
	{
	
	//random ranges for ship spawn
		if(Random.Range(0, spawnThreshold) <=1)
		{
			//shipSpawnScript spawn Attribute random x positionVector3 pos = transform.position;
			Vector3 = (transform.position);
			Instantiate(ship, new Vector3(pos.x + Random.Range(-10, 11), pos.y, pos.z), Quaternion.identity);

			spawnThreshold -= (spawnDecrement);
			if(spawnThreshold < 10)
			{
				spawnThreshold = 10;
			}
		}
	}

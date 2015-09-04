using UnityEngine;
using System.Collections;

public class ShipSpawnScript : MonoBehaviour
{

//spawn timers
	public float spawnThreshold;
	public float spawnDecrement;

	//ship prefab
	public GameObject ship;
	
	// Update is called once per frame
	void Update ()
	{
	
	//random ranges for ship spawn
		if(Random.Range(0, spawnThreshold) <=1)
		{
			//ShipSpawnScript spawn Attribute random x positionVector3 pos = transform.position;
			Vector3 pos = transform.position;
			Instantiate(ship, new Vector3(pos.x + Random.Range(-10, 11), pos.y, pos.z), Quaternion.identity);

			spawnThreshold -= spawnDecrement;
			if(spawnThreshold < 10)
			{
				spawnThreshold = 10;
			}
		}
	}
}

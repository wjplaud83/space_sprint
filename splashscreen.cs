using UnityEngine;
using System.Collections;

public class splashscreen : MonoBehaviour
{
	public float delayTime = 3;

	IEnumerator Start ()
	{
		yield return new WaitForSeconds(delayTime);
		Application.LoadLevel(1);
	}
}

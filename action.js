var addedHTML = 
	'<table>\
		<tr>\
			<td style="width: 33%; text-align: center;">\
				<select id="mccGame">\
					<option value="allgames" selected="selected">All Games</option>\
					<option value="Halo1">Halo: CEA</option>\
					<option value="Halo2">Halo 2A</option>\
					<option value="Halo3">Halo3</option>\
					<option value="Halo4">Halo 4</option>\
					<option value="Cross">Cross-Game</option>\
				</select>\
			</td>\
			<td style="width: 33%; text-align: center;">\
				<select id="mccType">\
					<option value="alltypes" selected="selected">All Game Types</option>\
					<option value="Campaign">Campaign</option>\
					<option value="Multi">Multiplayer</option>\
					<option value="Play">Playlists</option>\
				</select>\
			</td>\
			<td style="width: 33%; text-align: center;">\
				<select id="mccCategory">\
					<option value="allcategories" selected="selected">All Achievement Categories</option>\
					<option value="Campaign">Campaign</option>\
					<option value="Collectibles">Collectibles</option>\
					<option value="Kills">Kills</option>\
					<option value="Medals">Medals</option>\
					<option value="Miscellaneous">Miscellaneous</option>\
					<option value="Multiplayer">Multiplayer</option>\
					<option value="Playcount">Playcount</option>\
					<option value="Playlists">Playlists</option>\
					<option value="Score Attack">Score Attack</option>\
					<option value="Skulls">Skulls</option>\
					<option value="Spartan Ops">Spartan Ops</option>\
					<option value="Terminals">Terminals</option>\
					<option value="Time Attack">Time Attack</option>\
				</select>\
			</td>\
		</tr>\
		<tr>\
			<td style="width: 33%; text-align: center;"><a href="#" onclick=\'alert(\"In order for the list on True Achievements to match up with their in-game counterpart, click the blue View button and set the following:\\n\\nAchievement View: Uncheck \\\"Won First\\\" and set Xbox.com order.\\n\\nDLC: Uncheck \\\"Group DLC Packs together in list\\\" and set \\\"Filter\\\" to \\\"All DLC\\\"\\n\\nNow hit Apply!\");\'>How to match in-game list.</a></td>\
			<td style="width: 33%; text-align: center;">\
				<button id="mccSubmit" onclick="return false;">Check It</button>\
			</td>\
			<td style="width: 33%; text-align: center;"></td>\
		</tr>\
	</table>';

function logmccGame(){console.log('mccGame = '+document.getElementById('mccGame').value);}
function logmccType(){console.log('mccType = '+document.getElementById('mccType').value);}
function logmccCategory(){console.log('mccCategory = '+document.getElementById('mccCategory').value);}
function viewAchievements(){
	var mccGame = document.getElementById('mccGame').value, 
		mccType = document.getElementById('mccType').value, 
		mccCategory = document.getElementById('mccCategory').value, 
		i;
	console.log("Game: "+mccGame+"\nType: "+mccType+"\nCategory: "+mccCategory);
		
	for(i = 0; i < achData.length; i++)
	{
		if(document.getElementById('ap'+achData[i].ID) != null)
		{
			if(mccGame == "allgames" || (mccGame == "Halo1" && achData[i].Halo1 == true) || (mccGame == "Halo2" && achData[i].Halo2 == true) || (mccGame == "Halo3" && achData[i].Halo3 == true) || (mccGame == "Halo4" && achData[i].Halo4 == true) || (mccGame == "Cross" && achData[i].Cross == true))
			{
				//document.getElementById('ap'+achData[i].ID).style.display = 'block';
				if(mccType == "alltypes" || (mccType == "Campaign" && achData[i].Campaign == true) || (mccType == "Multi" && achData[i].Multi == true) || (mccType == "Play" && achData[i].Play == true))
				{
					//if(mccCategory == "allcategories" || (mccCategory == "Campaign" && achData[i].Category == "Campaign") || (mccCategory == "Playlists" && achData[i].Category == "Playlists")	|| (mccCategory == "Kills" && achData[i].Category == "Kills") || (mccCategory == "Medals" && achData[i].Category == "Medals") || (mccCategory == "Miscellaneous" && achData[i].Category == "Miscellaneous") || (mccCategory == "Playcount" && achData[i].Category == "Playcount") || (mccCategory == "Missions" && achData[i].Category == "Missions") || (mccCategory == "Terminals" && achData[i].Category == "Terminals") || (mccCategory == "Time Attack" && achData[i].Category == "Time Attack")|| (mccCategory == "Score Attack" && achData[i].Category == "Score Attack")|| (mccCategory == "Skulls" && achData[i].Category == "Skulls")|| (mccCategory == "Collectibles" && achData[i].Category == "Collectibles")|| (mccCategory == "Multiplayer" && achData[i].Category == "Multiplayer") || (mccCategory == "Spartan Ops" && achData[i].Category == "Spartan Ops"))
					if(mccCategory == "allcategories" || achData[i].Category == mccCategory)
					{
						document.getElementById('ap'+achData[i].ID).style.display = 'block';
					}
					else
					{
						document.getElementById('ap'+achData[i].ID).style.display = 'none';
					}
				}
				else
				{
					document.getElementById('ap'+achData[i].ID).style.display = 'none';
				}
				
			}
			else
			{
				document.getElementById('ap'+achData[i].ID).style.display = 'none';
			}
				
		}
	}
}

function viewAchievementsTest(){
		var i;
		for(i = 0; i < achData.length; i++)
		{
			console.log(achData[i].ID + ": " + achData[i].Name);
		}
}
window.addEventListener("load", function() 
{
	console.log('action.js loaded.');
	document.getElementsByTagName("h1")[1].insertAdjacentHTML('afterend', addedHTML);
	console.log('Form injected.');
	document.getElementById('mccGame').addEventListener("change", logmccGame);
	document.getElementById('mccSubmit').addEventListener("click", viewAchievements);
});
//document.getElementById('mccGame').addEventListener("change", function(){
//	console.log('mccGame = ' +document.getElementById('mccGame').value);
//}
//);
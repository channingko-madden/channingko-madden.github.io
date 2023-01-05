/**
 * Title: climbing.js
 * Date: 2023-01-04
 *
 * Script for climbing.html page
 */

/* Load Embedded YouTube feature video */

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// callback that is called when the player is ready to play
//var onPlayerReady = function(event) {
//};

// YouTube API will replace <div id="feature_player"> tag with an
// iframe element containing the youtube video

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('feature_player', {
			height: '410',
			width: '620',
			videoId: 'yY9VLJHXzqQ',
			playerVars: {
				'playsinline': 1
			},
			events: {
				//'onReady': onPlayerReady
			}
		});
}

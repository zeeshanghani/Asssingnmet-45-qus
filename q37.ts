// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist:string,title:string,tracks?:number)
{
var album={artist,title,tracks}
return album
}
var album1=make_album("Sajjad Ali","Boss")
var album2=make_album("Abrar Ul Haq","Bilo",10)
var album3=make_album("Naseebo Lal","Punjabi Hitts",9)
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album1.artist,album1.title,album1.tracks);
console.log(album2.artist,album2.title,album2.tracks);
console.log(album3.artist,album3.title,album3.tracks);

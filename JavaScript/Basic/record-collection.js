// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold",
  }
};

// Only change code below this line
function isPropAvailable(id, prop){
  var target = collection[id];
  return target.hasOwnProperty(prop);
}

function updateRecords(id, prop, value) {
  var propAvailable = isPropAvailable(id,prop);

  if(value == ""){
    if(propAvailable){
      delete collection[id][prop];
    }else return "No "+ prop + " to delete from "+id;
  }else{
    if(prop == "artist" || prop == "album"){
        collection[id][prop]=value;
    }else if(prop == "tracks"){
      if(propAvailable){
        collection[id][prop].push(value);
      }else if(!propAvailable){
        collection[id].tracks = [];
        collection[id].tracks.push(value); 
      }
    }
  }
  return collection;
}
//console.log(isPropAvailable(5439,"album"));
console.log(updateRecords(1245, "album", "zzz"));
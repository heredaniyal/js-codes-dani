// as per freecodecamp
function truncateString(name, num) {
    // NEW NAME MEANING UPDATED AND REMOVAL
    // MEANING IS THE PART TO REMOVE FROM 
    // original STRING
    let newname, removal;
    
    if (name.length > num) {
       removal = name.slice(num, name.length);
       newname = name.replace(removal, "");
       newname = newname + "...";
    }
    else { // unchanged
      return name;
    }

    return newname; // RETURN
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

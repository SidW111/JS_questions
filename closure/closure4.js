function secretHolder(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(newSecret) { secret = newSecret; }
  };
}

const holder = secretHolder("abc");
console.log(holder.getSecret());
holder.setSecret("xyz");
console.log(holder.getSecret());

//abc 
//xyz
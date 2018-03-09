function theBeatlesPlay(musicians,instruments){
  var temp =new Array();
  for(var i = 0; i < musicians.length ; i++ ){
    temp.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return temp;
}
function johnLennonFacts(facts){
  var temp = new Array();
  var i = 0;

  while(i < facts.length){
    var factStore = facts[i];
    var factMod = factStore + "!!!";
    temp.push(factMod);
    i++;
  }
  return temp;
}
function iLoveTheBeatles(n){
  var temp = new Array();
  var i=0;
  do{
    temp.push("I love the Beatles!");
    if(n == 17){break;}

    i++;

  }while(i <= n);
  return temp;
}

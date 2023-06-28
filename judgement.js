function get_achievement(x,y,z) {
  let sum = x + y + z;
  if(sum >= 250 && sum <=300){
    return "A";
  } else if(sum >= 200 && sum <=249){
    return "B";
  } else if(sum >= 100 && sum <= 199){
    return "C";
  } else{
    return "D";
  }
}

console.log(get_achievement(60,100,3900));

function get_pass_or_failure(x,y,z) {
  if(x >= 60 && y >= 60 && z >= 60){
    return "合格";
  } else{
    return "不合格";
  }
}

console.log(get_pass_or_failure(60,60,60))

function judgement(x,y,z){
  let achievement = get_achievement();
  let pass_or_failure = get_pass_or_failure();
  return `あなたの成績は${achievement}です。${pass_or_failure}です！`;
}

console.log(judgement(59,60,60))
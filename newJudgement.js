function get_achievement(points) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += points[i];
  }
  let full_score = number*100;
  let percent = sum/full_score*100;
  if(percent >= 80){
    return "A";
  } else if(percent >= 60){
    return "B";
  } else if(percent >= 40){
    return "C";
  } else{
    return "D";
  }
}

function get_pass_or_failure(points) {
  if(min >= 60){
    return "合格";
  } else{
    return "不合格";
  }
}

function judgement(points){
  let achievement = get_achievement(points);
  let pass_or_failure = get_pass_or_failure(points);
  return `あなたの成績は${achievement}です。${pass_or_failure}です！`;
}

let points = [100,80,60,87,80];
let number = points.length;
let min = Math.min.apply(null, points);

console.log(judgement(points));
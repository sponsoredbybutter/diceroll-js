var keys = ['two', 'four', 'six', 'eight', 'ten', 'twelve', 'twenty', 'hundred'];

var diceTypes = {
  two: [1, 0],
  four: [3, 0],
  six: [5, 0],
  eight: [7, 0],
  ten: [9, 0],
  twelve: [11, 0],
  twenty: [19, 1],
  hundred: [99, 0]
};

//Macro start
$(".m_macro").click(function(){
  var id = this.id;
  var dice = id + "_text";

  var dice_str = $("#" + dice).text();
  var dice_num = dice_str.substr(0, dice_str.indexOf('d'));
  var dice_val = dice_str.substr(dice_str.indexOf('d') + 1);

  var macro_name = $("#" + id).text();
  //macro_name = macro_name.substr(0, macro_name.indexOf(' '));

  var result = rollmacro(dice_num, dice_val);
  $('#outcome').html(macro_name + ": " + result);
});

function rollmacro(dice_num, dice_val)
{
  var result = "";
  var total = 0;

  var roll = Math.round(Math.random() * dice_val) + 1;

  result += roll;
  total += roll;

  for(var i = 0; i < dice_num - 1; i++)
  {
    roll = Math.round(Math.random() * dice_val) + 1;
    result += " + " + roll;
    total += roll;
  }

  result += " = " + total;

  return result;
}



//100 sided dice controller

$("#counter-100-plus").click(function(){
    diceTypes["hundred"][1] += 1;
    $("#counter-100-val").text(diceTypes["hundred"][1]);
});

$("#counter-100-min").click(function(){
    if(diceTypes["hundred"][1] > 0)
    {
      diceTypes["hundred"][1] -= 1;
      $("#counter-100-val").text(diceTypes["hundred"][1]);
    }
});

//20 sided dice controller

$("#counter-20-plus").click(function(){
    diceTypes["twenty"][1] += 1;
    $("#counter-20-val").text(diceTypes["twenty"][1]);
});

$("#counter-20-min").click(function(){
    if(diceTypes["twenty"][1] > 0)
    {
      diceTypes["twenty"][1] -= 1;
      $("#counter-20-val").text(diceTypes["twenty"][1]);
    }
});

//12 sided dice controller

$("#counter-12-plus").click(function(){
    diceTypes["twelve"][1] += 1;
    $("#counter-12-val").text(diceTypes["twelve"][1]);
});

$("#counter-12-min").click(function(){
    if(diceTypes["twelve"][1] > 0)
    {
      diceTypes["twelve"][1] -= 1;
      $("#counter-12-val").text(diceTypes["twelve"][1]);
    }
});

//10 sided dice controller

$("#counter-10-plus").click(function(){
    diceTypes["ten"][1] += 1;
    $("#counter-10-val").text(diceTypes["ten"][1]);
});

$("#counter-10-min").click(function(){
    if(diceTypes["ten"][1] > 0)
    {
      diceTypes["ten"][1] -= 1;
      $("#counter-10-val").text(diceTypes["ten"][1]);
    }
});

//8 sided dice controller

$("#counter-8-plus").click(function(){
    diceTypes["eight"][1] += 1;
    $("#counter-8-val").text(diceTypes["eight"][1]);
});

$("#counter-8-min").click(function(){
    if(diceTypes["eight"][1] > 0)
    {
      diceTypes["eight"][1] -= 1;
      $("#counter-8-val").text(diceTypes["eight"][1]);
    }
});

//6 sided dice controller

$("#counter-6-plus").click(function(){
    diceTypes["six"][1] += 1;
    $("#counter-6-val").text(diceTypes["six"][1]);
});

$("#counter-6-min").click(function(){
    if(diceTypes["six"][1] > 0)
    {
      diceTypes["six"][1] -= 1;
      $("#counter-6-val").text(diceTypes["six"][1]);
    }
});

//4 sided dice controller

$("#counter-4-plus").click(function(){
    diceTypes["four"][1] += 1;
    $("#counter-4-val").text(diceTypes["four"][1]);
});

$("#counter-4-min").click(function(){
    if(diceTypes["four"][1] > 0)
    {
      diceTypes["four"][1] -= 1;
      $("#counter-4-val").text(diceTypes["four"][1]);
    }
});

$("#roll-button").click(function() {
  rollDice();
});

//rolls dice and prints outcome

function rollDice()
{
  var singleRoll = 0;
  var total = 0;
  var rollstring = '<p class="text-center"  id="outcome">';
  var rollMax = 0; //cap to number of rolls printed to single line

  keys.forEach(function(dice){
    var rollNumber = diceTypes[dice][1];

    if(rollNumber > 0)
    {
      rollstring += "<br />" + rollNumber + "d" + (diceTypes[dice][0]+1) + ": ";
    }

    for(var i = 0; i < rollNumber; i++)
    {
      singleRoll = Math.round(Math.random() * diceTypes[dice][0]) + 1;
      total += singleRoll;

      if(rollMax == 0)
      {

        rollstring += singleRoll;
        rollMax += 1;
      }

      else if(rollMax == 10)
      {

        rollstring += "<br />" + singleRoll;
        rollMax = 1;
      }
      else
      {

        rollstring += " + " + singleRoll;
        rollMax += 1;
      }

    }
    if(rollNumber > 1)
    {
      rollstring += " = " + total;
    }



    total = 0;
    rollMax = 0;
  });

  rollstring += "</p>";
  $('#outcome').html(rollstring);
}

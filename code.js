var age_ ,income_, home_ownership_, emplength_, loan_intent_, loan_grade_, loan_amount_, interest_rate_, percent_income_, historical_, credit_history_;

$(document).ready(function(){
  // fetch all DOM elements for the input
  age_ = document.getElementById("age");
  income_ = document.getElementById("income");
  home_ownership_ = document.getElementById("home_ownership");
  emplength_ = document.getElementById("emplength");
  loan_intent_ = document.getElementById("loan_intent");
  loan_grade_ = document.getElementById("loan_grade");
  loan_amount_ = document.getElementById("loan_amount");
  interest_rate_ = document.getElementById("interest_rate");
  percent_income_ = document.getElementById("percent_income");
  historical_ = document.getElementById("historical");
  credit_history_ = document.getElementById("credit_history");
})

$(document).on('click','.button',function(e){
    // on clicking submit fetch values from DOM elements and use them to make request to our flask API
    var age = age_.value;
    var income = income_.value;
    var home_ownership = home_ownership_.value;
    var emplength = emplength_.value;
    var loan_intent = loan_intent_.value;
    var loan_grade = loan_grade_.value;
    var loan_amount = loan_amount_.value;
    var interest_rate = interest_rate_.value;
    var percent_income = percent_income_.value;
    var historical = historical_.value;
    var credit_history = credit_history_.value;
    if(age == ""){
      // you may allow it as per your model needs
      // you may mark some fields with * (star) and make sure they aren't empty here
      alert("empty fields not allowed");
    }
    else{
      // replace <username> with your pythonanywhere username
      // also make sure to make changes in the url as per your flask API argument names
      // var requestURL = "http://127.0.0.1:5000/predict?Age="+Age+"&Sex="+Sex+"&Job="+Job+"&Housing="+Housing+"&saving_account="+saving_account+"&checking_account="+checking_account+"&credit_amount="+credit_amount+"&duration="+duration+"&purpose="+purpose;
      // console.log(requestURL); // log the requestURL for troubleshooting
      
      // $.getJSON(requestURL, function(data) {
      //   console.log(data); // log the data for troubleshooting
      //   prediction = data['result'];
      //   $(".result").html("Prediction is: "+prediction);
      //   $(".result").css({
      //     "color": "#666666",
      //     "text-align": "center"
      //   });
      // });
      
      var data = {
          "age": age,
          "income": income, 
          "home_ownership": home_ownership, 
          "emplength": emplength, 
          "loan_intent": loan_intent,  
          "loan_grade": loan_grade, 
          "loan_amount": loan_amount, 
          "percent_income": percent_income, 
          "interest_rate": interest_rate, 
          "historical": historical, 
          "credit_history": credit_history
      };

      // # https://api.jquery.com/jquery.post/
      // # https://stackoverflow.com/questions/56032972/sending-a-dictionary-from-js-to-flask-via-ajax
      $.ajax({
        url: 'https://credit-scorer.herokuapp.com/predict',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({data}),
        dataType: "json",
        type: 'POST',
        success: function(response){
            // console.log(response);
            prediction = response['result'];
            $(".result").html("Prediction is: "+prediction);
            $(".result").css({
              "color": "#666666",
              "text-align": "center"
            });
        },
        error: function(error){
            console.log(error);
        }
    });
      // following lines consist of action that would be taken after the request has been read
      // for now i am just changing a <h2> tag's inner html using jquery
      // you may simple do: 
      // alert(prediction);
      e.preventDefault();
    }
  });

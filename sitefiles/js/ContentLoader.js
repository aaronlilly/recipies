const obj = 
{"fruit" :
  [
  {
    "fruit": "This was populated by pressing a button",
    "belong9a": "Something",
    "eval":1
  },
     {
    "fruit": "This is auto Populated",
    "belong9a": "Something",
    "eval":1
  }

    ]}
;
//log,id,presentation number..etc
const obj2 = 
{"Enhanced":
{"siteinfo":{"$":"also auto populated"},
  "received":
  {"enhancedCallLogsExtendedEntry":
    {"countryCode":{"$":"1"},
    "callLogId":{"$":"A812"},
    "callId":{"$":"249"},
    "subscriberType":{"$":"User"},
    "callingPresentationNumber":{"$":"+1674"},
    "callingPresentationName":{"$":"LARGE"},
    "callingPresentationIndicator":{"$":"Public"},
    "connectedNumber":{"$":"+1ad419"},
    "connectedNumberSource":{"$":"h7088op8759-ll"},
    "connectedName":{"$":"Support"},
    "connectedPresentationIndicator":{"$":"Public"},
    "basicCallType":{"$":"Group"},
    "time":{"$":"2020-01-03T17:26:53.058-05:00"},
    "startTime":{"$":"1578090413058"},
    "answerTime":{"$":"1578090418986"},
    "releaseTime":{"$":"1578090643999"},
    "redirectingNumber":{"$":"+1293"},
    "redirectingName":{"$":"Support"},
    "redirectingPresentationIndicator":{"$":"Public"},
    "redirectingReason":{"$":"call"}}}}}    
;


//on page load
$(document).ready(function () {  

    $('#ArrayD').append(obj.fruit[1].fruit +"<br>")
    $('#ArrayD').append(obj2.Enhanced.siteinfo.$ +"<br>")
    });
// end on page load


//on click populate
$(document).ready(function () {  
$('#autoLoadR').click(function () {
    $('#buttnLodr').append(obj.fruit[0].fruit)
      
    });
 });
//end on click populate



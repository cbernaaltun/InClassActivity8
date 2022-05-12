$(document).ready(function() {


  $(function(){
       $( "#birthday" ).datepicker();
  });
  
  var languages = [
  "Java",
  "C",
  "Python",
  "C++",
  "PHP",
  "C#",
  "JavaScript"
  ];
  
  $(function(){
       $( "#lname" ).autocomplete({
       source: languages
  });
  });
  
  
  
  })
  
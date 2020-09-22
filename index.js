// ==UserScript==
// @name Count line
// @name:ru Количество строк
// @version 0.1
// @author Omar "SonOfStep" Nurmakhanov
// @updateURL https://raw.githubusercontent.com/SonOfStep/setCountLine/master/index.js
// @match *://172.30.149.11:8282/OE/appointment/remsandapps*
// @grant none
// ==/UserScript==
$(window).on("load", () => {
  "use strict";
  
  let countLine = localStorage.getItem('countLine');
  
  $("#pag_selectmovem").on("change", function(){
    countLine = $("#pag_selectmovem").val();
    localStorage.setItem('countLine', countLine)
  })
  
  $("#pag_selectmovem").val(countLine);
  $("#pag_selectmovem").trigger("change");
  
})

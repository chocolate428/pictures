var images = ["images/0.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg"]var current = Math.floor(Math.random() * 4);$(document).ready(function() {    $("body").append("<img src='images/" + current + ".jpg'/>")}); 
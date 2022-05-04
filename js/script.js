// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-HTML/sw.js", {
    scope: "/ICS2O-Unit5-01-HTML/",
  })
}

"use strict"

/**
 * This function calculates random number and checks if you guessed it correctly
 */
function check() {
  // input
  var guess = parseFloat(document.getElementById("slider").value)

  // process and output
  const random = Math.floor(Math.random() * 6) + 1
  if (guess == random) {
    document.getElementById("answers").innerHTML = "You are correct!"
  }

  if (guess != random) {
    document.getElementById("answers").innerHTML = "You are incorrect!"
  }
}

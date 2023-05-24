// Import the feedback functions
import { message, warn, fail, markdown } from "danger"

// Add a message to the table
message("This is a normal message")

//  Adds a warning to the table
warn("This is a warning.");

// Declares a blocking 
fail(`This is a failure message.`);

// Show markdown under the table:
markdown("## New module Danger");

const { additions =0, deletions = 0 } = danger.github.pr;

message(`:tada: The PR added ${additions} and removed ${deletions} line.`);
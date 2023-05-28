// Import the feedback functions
import { message, warn, fail, markdown, danger } from "danger";
import * as fs from 'fs';

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

function jestCodeCoverage() {
    const config = {
        resultPath: './coverage/coverage-summary.json',
        successMessage: 'Code Coverage results are all good!',
        failMessage: 'Code Coverage checks failed',
        errorMessage: 'Could not read code coverage results'
    }

    
        try {
            if(fs.existsSync(config.resultPath)) {
                
                const jsonResults = JSON.parse(fs.readFileSync(config.resultPath, 'utf8'));
                console.log('--------------------', jsonResults.total);
                message(jsonResults);
            }
        }catch(error) {
            fail(error);
        }
}

jestCodeCoverage();

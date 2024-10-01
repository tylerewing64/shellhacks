Created at shellhacks 2024 hackathon
Simple web app that uses ai to help you find jobs based off your resume. 
-Note Resume must be a pdf format. 



Sequence - 
Resume is uploaded as a pdf file. 
API parses pdf file into string format. 
API generates a prompt based on the parsed pdf data and specifies the response schema. Sends request to Groq API. 
Groq API retuns list of jobs related to parsed pdf data.


Technologies used: 
Front end - React.js
Backend - Express.js / Node
AI - Groq API used for AI prompting.

--Indeed's jobs API was deprecated so we opted for a quick AI solution...

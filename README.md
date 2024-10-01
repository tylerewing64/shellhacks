<h2>Created at shellhacks 2024 hackathon</h2>
<br>Simple web app that uses ai to help you find jobs based off your resume. 
<br>-Note Resume must be a pdf format. 
<h2>Sequence of steps</h2>  
<br>1) Resume is uploaded as a pdf file. 
<br>2) API parses pdf file into string format. 
<br>3) API generates a prompt based on the parsed pdf data and specifies the response schema. Sends request to Groq API. 
<br>4) Groq API retuns list of jobs related to parsed pdf data.
<h2>Technologies used:</h2> 
<br>Front end - React.js
<br>Backend - Express.js / Node
<br>AI - Groq API used for AI prompting.

--Indeed's jobs API was deprecated so we opted for a quick AI solution...

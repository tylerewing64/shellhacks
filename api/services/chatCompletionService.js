const Groq = require('groq-sdk');
const {GROQ_API_KEY} = require('../env/grokapikey');
const groq = new Groq({ apiKey: GROQ_API_KEY})

const schema = {
    $defs: {
      Jobs: {
        properties: {
          role: { title: "role", type: "string" },
          company: { title: "company", type: "string" },
          salary: { title: "salary", type: "number" },
          job_description: { title: "job_description", type: "string" },
          location: { title: 'location', type : "string"}
          
        },
        required: ["role", "company", "job_description", 'salary', 'location'],
        title: "Jobs",
        type: "object",
      },
    }
  };
  const jsonSchema = JSON.stringify(schema, null, 4);

  class Jobs { 
    constructor(role, company, salary, job_description, location){ 
        this.role = role;
        this.company = company; 
        this.salary = salary; 
        this.job_description = job_description;
        this.location = location
    }
  }

   
const getGroqChatCompletion = async( resumeParsedData) => { 
   
    const chat_completion = await groq.chat.completions.create({ 
        messages: [ 
            { 
                role:"system", 
                content: `Find related jobs based on this resume: ${resumeParsedData} but display it in this json format: ${jsonSchema} give it a new company name, new salary, new location but similar job title and make to come up with 15 jobs. Dont repeat jobs on the resume.`
            }
        ], 
        model: "llama3-8b-8192", 
        response_format: { type: "json_object"}
    }); 
    return Object.assign( 
        new Jobs(), 
        JSON.parse(chat_completion.choices[0].message.content)
    );
}

const compareJobs = async(resumeData) => { 
    
    const response = await getGroqChatCompletion(resumeData);
    return response;
}

module.exports = { 
    compareJobs
}
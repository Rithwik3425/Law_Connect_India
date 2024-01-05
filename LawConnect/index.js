const http=require('http');
const fs=require('fs');
const url=require('url');

const lawyerCard=fs.readFileSync('./templates/lawcard.html','utf8');

const lawyerhome=fs.readFileSync('./templates/home.html','utf8');
const replacetemp=(temp,jsn)=>{
     let output=temp.replace('{%NAME%}',jsn.name);
      output=output.replace('{%PLACE%}',jsn.location);
      output=output.replace('{%EXP%}',jsn.experience);
      output=output.replace('{%SKILL%}',jsn.skill);
      return output;
}
const data= fs.readFileSync('./data.json','utf8');
const pdata=JSON.parse(data);


const server=http.createServer((req,res)=>{
   if(req.url==='/'||req.url==='/home') {
    
   }
   else if(req.url==='/lawyers') {
    
    const loutput=pdata.map(el=>replacetemp(lawyerCard,el)).join('<br>');
    const lawcards=lawyerhome.replace('{%Lawyer_CARDS%}',loutput);
     res.end(lawcards);
   }
   else{
    res.writeHead(404,{
        'Content-Type':'text/html',
    })
    res.end('<h1>404 Page Not Found</h1>');
   }
})

server.listen(8500,'127.0.0.1',()=>{
    console.log("Server is running");
})
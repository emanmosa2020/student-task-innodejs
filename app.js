
const yargs = require("yargs");

const notes = require('./notes')


yargs.command({
    command: "add",
    describe: "Add student",
    builder: {
      id: {
        describe: "This is student id",
        demandOption: true,
        type: "number",
      },
      name: {
        describe: "This is name of student",
        demandOption: true,
        type: "string",
      },
      grade: {
        describe: "This is grade of student",
        demandOption: true,
        type: "string",
      },
      feedback: {
        describe: "This is feedback of student",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      notes.addStudent(argv.id,argv.name,argv.grade,argv.feedback)
    },
  });
  




  yargs.command({
    command: "delete",
    describe: "Delete student",
    builder: {
      id: {
        describe: "This is student id",
        demandOption: true,
        type: "number",
      },
    },
    handler: (argv) => {
      console.log("Delete student");
      notes.removeStudent(argv.id)
    },
  });

  

  yargs.command({
    command: "read",
    describe: "Read students",
    builder: {
      id: {
        describe: "This is student id",
        demandOption: true,
        type: "number",
      },
    },
    handler: (argv) => {
      notes.readStudent(argv.id)
    },
  });




  
  yargs.command({
    command: "list",
    describe: "List students",
    handler: () => {
      notes.showall()
    },
  });
  
 
  
  
  
  
  
  
  
  
  //console.log(yargs.argv);
  
  
   yargs.parse()
  
const fs = require('fs')
const { id } = require('process')


const addStudent = (id,name,grade,feedback) => {
    const notes = loadNotes() 

    //check dublicate title
    const doublcatetitle=notes.filter((note)=>{
        return note.id===id
    })

   if  (doublcatetitle.length==0){
    notes.push({
        id:id,
        name:name,
        grade:grade,
        feedback:feedback
   })
   saveNotes(notes)
   console.log("sucsess ")
}
   else {
    console.log("error ")
    }

}


const removeStudent=(id)=>{
    const notes =loadNotes()
    const studenttokeep=notes.filter((note)=>{
        return note.id !==id
    })
   
    console.log('student to keep',studenttokeep)
    saveNotes(studenttokeep)
}



const readStudent=(id)=>{
    const notes=loadNotes()
    const mystudent=notes.find((note)=>{
        return note.id==id
    })
    if(mystudent){
        console.log(mystudent)
        console.log(mystudent.id)
        console.log(mystudent.name)
        console.log(mystudent.grade)
        console.log(mystudent.feedback)
    }
    else{
        console.log("not found")
    }
}


const showall=()=>{
    const notes=loadNotes()
    const mystudent= notes.forEach(element => {
       // return notes[element]
       console.log(element)
       console.log(element.id)
        console.log(element.name)
        console.log(element.grade)
        console.log(element.feedback)
    });
    
}

const loadNotes = () =>{
    try{
    const dataBuffer = fs.readFileSync('notes.json').toString()
    return JSON.parse(dataBuffer)
   
    }
    catch(e){
        return [];
    }
  
}



const saveNotes = (notes) =>{
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
    console.log(fs.readFileSync('notes.json').toString())
}


module.exports = {
    addStudent,
    removeStudent,
    readStudent,
    showall
}

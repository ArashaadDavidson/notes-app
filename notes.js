

// const getNotes = (x,z)=>{
//     return 'Your notes...'
// }
// const addNotes = (title,body)=>{
//     const notes = loadNote()
//     notes.push({ //this objects gets pushed to the notes object
//         title: title,
//         body: body
//     })
//     saveNotes(notes)
//     console.log(notes)
// }

// const saveNotes =(notes)=>{ //takes the altered object 
//     return JSON.stringify(notes)
// }
// const loadNote = ()=>{
//     try{
//         const dataBuffer = fs.readFileSync('notes.json') //reads buffer data
//         const dataJSON = dataBuffer.toString() //Turned into json data
//         return JSON.parse(dataJSON) //returns json data parsed into object data
//     }catch(e){
//         return []
//     }
// }
    
// module.exports= {
//     getNotes: getNotes,
//     addNotes: addNotes
// }
// const fs = require('fs')

// const getNote = ()=>{

// }

// const addNotes =(title,body)=>{
//     const notes = loadNote()// tries to read from a file, toString it into json data then parse into object data and return the object containing the data. if no data, it will return a array. The array gets stores in this variable

//     const duplicateNotes = notes.filter((note)=>{ // filters the array, checks if it has objects with a title property matching the new object title property, and if it does, it stores the object in this constant
//         return note.title === title
//     })

//     if(duplicateNotes.length === 0){ //checks if the duplicateNotes array has no/zero elements, if no elements push a new object onto the array with the title and body arguments
//         notes.push({// push an object onto the notes object or the empty array returned that is now stored in the notes constant
//             title: title,
//             body: body
//         })
//         console.log('New note added')
//     }else{// if array is not empty/has elements, then do not push new object and log this to console
//         console.log('note title taken')
//     }

    
//     // console.log(notes)
//     saveNotes(notes) //stringify the object into json data and write it to the file
// }
// const loadNote=()=>{
//     try{
//         const dataBuffer= fs.readFileSync('notes.json') //read buffer data from json file
//         const jsonData = dataBuffer.toString()// turn buffered data to json data
//         return JSON.parse(jsonData)// return json data parsed into object data
    
//     }catch(e){
//         return []
//     }
// }

// const saveNotes=(notes)=>{
//     const stringifiedData = JSON.stringify(notes) // stringify the object into json data
//     fs.writeFileSync('notes.json',stringifiedData)// write it to the file
// }

const fs = require('fs')
const chalk = require('chalk')
const addNote = (title, body)=>{
    const note = loadNotes()
    // const duplicateNotes = note.filter(nt => nt.title === title) filter() checks each array index value even if the condition is met, continuing to check the whole array
    const duplicateNote = note.find(nt => nt.title === title) // find() checks each array index value until the condition is met, stopping once the condition is met and found.


    if(!duplicateNote){
        note.push({
            title: title,
            body: body
        })
        saveNotes(note)
        console.log(chalk.green.inverse('note adding lol'))
    }else{
        console.log(chalk.yellow.inverse('note title is taken'))
    }

    

    
}

const removeNote =(title)=>{
    const loadedNotes = loadNotes()
    const keep = loadedNotes.filter(value=> value.title !== title)
    if(keep.length < loadedNotes.length){
        saveNotes(keep)
        console.log(chalk.green.inverse('note removed'))
    }else{
        console.log(chalk.red.inverse("note not found"))
    }
    
}
const getNotes = ()=>{

}
const readNote=(title)=>{
    const note = loadNotes()
    const noteFound = note.find(nt => nt.title === title)
    if(noteFound){
        console.log(chalk.green.inverse(noteFound.title), noteFound.body)
    }else{
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNotes=()=>{
    const loadedNotes = loadNotes()
    console.log(chalk.inverse('The Notes'))
    loadedNotes.forEach((value)=>{
        console.log(chalk.yellow.inverse(value.title))
    })
    
}

const loadNotes= ()=>{
    try{
        const bufferData = fs.readFileSync('notes.json')
        const jsonData = bufferData.toString()
        return JSON.parse(jsonData)
    }catch(e){
        return []
    }
    
}
const saveNotes =(note)=>{
    const newNote = JSON.stringify(note)
    fs.writeFileSync('notes.json',newNote)
}

module.exports = {
    addNote,
    removeNote,
    getNotes,
    listNotes,
    readNote
}
// const fs = require('fs')

// const add = require('./utils.js') // this file is required and its exports are saved in this varibleonst add = require('./utils.js') // this file is required and its exports are saved in this varible

// fs.writeFileSync('notes.txt','this was written with node.js')

// fs.appendFileSync('notes.txt','\n my name is ari')

// const name = require('./utils.js') //requires the utils.js file and then executes the code inside. When requiring files, the file path is used and it must be a path FROM this file

// all exports from the requried file will be saved in the variabled assigned 



// // console.log(add(1,3))//const sum = add(1,2)   //this varible contains the output of the function within add variable
// const chalk = require('chalk')
// const notes = require('./notes.js')
// const yargs = require('yargs')

// // add, remove, read, list
// //create add command

// yargs.command({
//     command: 'add',
//     describe: 'add new note',
//     builder:{
//         title:{
//             describe:"Note Title",
//             demandOption:true,
//             type:'string'
//         },
//         body:{
//             describe:"Note Body",
//             demandOption:true,
//             type:'string'
//         }
        
//     },
//     handler: (argv)=>{
//         // console.log(argv.title, argv.body)
//         notes.addNotes(argv.title, argv.body)
//     }

// })
// //create remove command

// yargs.command({
//     command: 'remove',
//     describe: 'remove note',
//     builder:{
//         title:{
//             describe:"note title",
//             demandOption:true,
//             type:"string"
//         },
//         body:{
//             describe:"note body",
//             demandOption:true,
//             type:"string"
//         }
//     },
//     handler: (argv)=>{
//         console.log(`Title: ${argv.title} Body: ${argv.body}`)
//     }
// })
// yargs.parse()

const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of note',
            demandOption:true,
            type:'string'
        }
    },
     handler(argv){
            // console.log(argv.ttle)
            notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        }
    },
     handler(argv){
            notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'read note',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        },
        // body:{
        //     describe:'body of note',
        //     demandOption:true,
        //     type:'string'
        // }
    },
     handler(argv){
            notes.readNote(argv.title)
           
    }
})
yargs.command({
    command: 'list',
    describe: 'list note',
    // builder:{
    //     title:{
    //         describe:'title of note',
    //         demandOption:true,
    //         type:'string'
    //     },
    //     body:{
    //         describe:'body of note',
    //         demandOption:true,
    //         type:'string'
    //     }
    // },
     handler(argv){
            notes.listNotes()
    }
})


yargs.parse()



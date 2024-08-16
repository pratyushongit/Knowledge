const yargs = require('yargs');
const functions = require('./app');

yargs.command({
    command : 'add',
    describe : 'Adding Note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        functions.addNote(argv);
    }
});

yargs.parse();
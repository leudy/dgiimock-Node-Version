const express = require('express');
const path = require('path');
const fs = require('fs');

var app = express();
app.get('/', (req, res, next) => {

    try {
        //seting path of file txt
        var filePath = path.join(__dirname, '../../DB.txt')
            //extract all line of the file
        var DB = fs.readFileSync(filePath, 'utf8').toString().split('\n');
        res.status(200).json({
            ok: true,
            msg: "All data for testing propuse",
            data: DB
        })

    } catch (er) {

        res.status(500).json({
            proce: 'error',
            data: er
        })

        console.log(er);

    }


});

app.get('/:rnc', (req, res, next) => {

    var rnc = req.params.rnc;

    //seting path of file txt
    var filePath = path.join(__dirname, '../../DB.txt')
        //extract all line of the file
    var DB = fs.readFileSync(filePath, 'utf8').toString().split('\n');
    DB.forEach(line => {
        console.log(line.split('|')[0], rnc)
        if (line.split('|')[0] === rnc) {
            // set reponse here
            var _persona = {
                RNC: line.split('|')[0],
                Nombre: line.split('|')[1],
                Categoria: line.split('|')[3],
                Nombre_Comercial: line.split('|')[2]
            }
            res.status(200).json({
                ok: true,
                data: _persona
            });
        }
    });
    res.status(500).json({
        ok: false,
        data: "Not found"
    });
})

module.exports = app;
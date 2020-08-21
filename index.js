// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','CENTRO DE CAPACITACIÓN TÉCNICA')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

//nuevas rutas

app.get('/academico', (req, res) => {
    var title = app.get('appName')+" | Academico"
    res.render('academico.ejs', {title: title} )
})

//Rutas admin
app.get('/admin', (req, res) => {
    var title = app.get('appName')+" | admin"
    res.render('admin.ejs', {title: title} )
})

//ruta institucional
app.get('/institucional', (req, res) => {
    var title = app.get('appName')+" | Institucional"
    res.render('institucional.ejs', {title: title} )
})


//ruta nuestra historia
app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" | Nuestra Historia"
    res.render('nuestrahistoria.ejs', {title: title} )
})

// ruta actividades
app.get('/contactos', (req, res) => {
    var title = app.get('appName')+" | Contactos"
    res.render('contactos.ejs', {title: title} )
})

//ruta CCT-Noticias
app.get('/cct-noticias', (req, res) => {
    var title = app.get('appName')+" | CCT-Noticias"
    res.render('cct-noticias.ejs', {title: title} )
})


// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

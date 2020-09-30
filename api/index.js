/*
    Nombre
    Teléfono
    Fecha de nacimiento
    Dirección
    Correo electrónico
    name, phone, birthday, address, email
    dbmongo.
    user: contactbookmaster,
    pass: +contactbookmaster#
    mongodb+srv://contactbookmaster:<password>@cluster0.jbg8o.mongodb.net/<dbname>?retryWrites=true&w=majority

    mongodb+srv://contactbookmaster:+contactbookmaster#@cluster0.jbg8o.mongodb.net/test?retryWrites=true&w=majority
*/
const app = require('./app')
app.listen(app.get('port'))
console.log('App listening on port ', app.get('port'))

var express = require('express')

var app = express()

var hbs = require('hbs')

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getTime', () => {
    return new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + ' ' + new Date().toString()
})

var port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.render('home', {
        titlepage: 'Home'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        titlepage: 'About'
    })
})

app.get('/blog', (req, res) => {
    res.render('blog', {
        titlepage: 'Blog'
    })
})

app.listen(port, () => {
    console.log(`You are listinig at port ${port}`)
})
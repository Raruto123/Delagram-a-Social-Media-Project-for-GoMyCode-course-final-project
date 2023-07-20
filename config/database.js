const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://proplayer54:raruto123@cluster0.lvmwmio.mongodb.net/", {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(function() {
    console.log("Connecté à MongoDB")
}).catch(function(err) {
    console.log("Echec de connexion", err);
})
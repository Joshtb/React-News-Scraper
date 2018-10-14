
var mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/scrape"
  );
  
// Save a reference to the Schema constructor
 var Schema = mongoose.Schema

// Using the Schema constructor, create a new UserSchema object

  var ArticleSchema = new Schema({
  // `title` and 'link' are required and of type String
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },
 date: {
   type:Date

 }
})





// This creates our model from the above schema, using mongoose's model method
 var Article = mongoose.model("Article", ArticleSchema)


 module.exports = Article;


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true,  useUnifiedTopology: true });

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

/////////Request targetting All Articles////////////////////

app.route("/articles")

.get(function(req, res){
    Article.find(function(err, foundArticles){
        if(!err){
            res.send(foundArticles);
        } else {
            res.send(err);
        }
        
    });
})

.post(function(req, res){
    console.log();

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    })

    newArticle.save(function(err){
        if(!err){
            res.send("added empty undefined objects");
        } else {
            res.send(err);
        }
    });
})

.delete(function(req, res){
    Article.deleteMany(function(err){
        if(!err){
            res.send("successfully deleted");
        } else {
            res.send(err);
        }

});
});


/////////Request targetting All Articles////////////////////

app.route("/articles/:articleTitle")

.get(function(req, res){

    Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
        if (foundArticle){
            res.send(foundArticle);
        } else {
            res.send("no articles matching were found");
        }
    })
})

.put(function(req, res){
    Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send("Successfully updated article.");
            }
            else{
                res.send(err);
            }
        }

        
    );
})

.patch(function(req, res){
    

    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err){
        if(!err){
            res.send("Successfully updated article");
        } else {
            res.send(err);
        }
        });
})

.delete(function(req, res){
    Article.deleteOne(
        {title: req.params.articleTitle},
        function(err){
            if(!err){
                res.send("successfully deleted the article");
            } else {
                res.send(err);
            }
        }
    );
});

app.listen(3000, function(){
    console.log("app listening on port 3000");
});
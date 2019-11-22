const homelist = function(req, res){
    res.render('index',{title:'Welcome to Movies Store'});
};

const listDisplay = function(req,res){
    res.render('list-display',{movie:movieArray});
};

var movieArray = [
                 {
                   title:"Toy Story 4", 
                   year:"2017",
                    distributor:"Disney"
                    
                 },
                 {
                title:"Avengers-End Game",
                year:"2018",
                distributor:"Disney"
                },
                 {
                title:"Joker",
                year:"2019",
                distributor:"Warner Bros"
                }   
];


module.exports = {
  homelist,
  listDisplay
};
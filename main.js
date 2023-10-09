var count=0
function generateId(){
    return count ++
}
 
function makeSm(name,image,price){
    return{
    name,
    image,
    price,
    id:generateId(),
    date: Date()
    }
}
var food=makeSm("pizza",["https://img.freepik.com/photos-gratuite/pizza-fraichement-italienne-tranche-fromage-mozzarella-ia-generative_188544-12347.jpg" ,"https://www.shutterstock.com/shutterstock/photos/1060535249/display_1500/stock-photo-concept-promotional-flyer-and-poster-for-restaurants-or-pizzerias-template-with-delicious-taste-1060535249.jpg"],10)

    $("#vit").append(`
    <h1>${food.name}</h1>
    <img src = ${food.image[0]}>
    `)
function toggleImage(){

var counter=0

 $("img").attr("src",food.image[counter])
    if(counter===Array.length-1){
        counter=0
    }
    counter++
}
$("img").click(toggleImage)
function makeWebsite(){
    var obj={}
    obj.list=[]
    obj.add=add
    return obj
    obj.update=update
    obj.remove=remove
}.
function add(name,price,categorie){
this.list.push(makeSm("pizza",15,"fast food"))
}
var web=makeWebsite()
web.add("pizza",15,"fast food",["https://img.freepik.com/photos-gratuite/pizza-fraichement-italienne-tranche-fromage-mozzarella-ia-generative_188544-12347.jpg" ,"https://www.shutterstock.com/shutterstock/photos/1060535249/display_1500/stock-photo-concept-promotional-flyer-and-poster-for-restaurants-or-pizzerias-template-with-delicious-taste-1060535249.jpg"])
function remove(id){
for (var i=0;i<this.list.length;i++){
if(id===this.list[i].id) {  
    this.list.splice(i,1)//(the index,how many elements we wanna remove after the index)
}

}
}
function update(){
  return  this.list.map(function(element){
        if(element.id===id){
            element[key]=value
            return element //return of if to return the element that have the condition of if
        }
        return element //this return for returning the other elements 
    })
}
function search (name){
return this.list.filter(function(element){
   return  element.name===name
})
}

function search(categorie){
return this.list.filter(function(element){
    return element.categorie===categorie
})
}

function sortByPrice(price){
    return this.list.sort (function(a,b){
        return a.price-b.price
    })
}
function display(obj){
   $("#img").append(h1${"obj.name"}h1)
   >img< src=${obj.image[0]}"


    }
function displayAll(){
    this.list.forEach(function(element){
        display(element)
    })
}
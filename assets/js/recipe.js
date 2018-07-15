"use strict";

class JSONReader {
    
  constructor()
  {
    this.constructedRecipes = [];
  }
  
  findRecipes()
  {
    let recipes = $("blockquote p").map(function()
    {
      return $(this).text();
    })
    .get();
    //$("blockquote").remove();
    console.log(recipes);

    let recipe = this;
    $.each(recipes, function(index, value)
    {
      //recipe.getNameAndReadData(value)
      recipe.readData(value);
      console.log(index + ":" + value);
    });

    //for (let i=0; i<recipes.length; i++) {
        //this.getNameAndReadData(recipes[i]);
        //console.log(recipes[i]);
      //}
  }

  //We read the data from the JSON specified and add it to the document
  readData(recipeName)
  {
    if(this.contains(recipeName))
    {
      return;
    }
    this.add(recipeName);
    let fileName = "../assets/data/recipes/" + recipeName + ".json";
    //JQuery to read from a JSON file
    $.getJSON(fileName, function(data)
    {
      //For each recipe defined in the JSON file, we add it to our output
      for (var i in data.recipes) 
      {
        //We empty the previous loaded data
        let output = "";
        output += `
        <div class="crafting-table">
          <div class="ct-input">
            <div class="ct-row">
              <div class="invslot">`;
                if (data.recipes[i].firstRow.firstItem !== "")
                {
                    output += "<img src=\"../assets/images/icons/" + data.recipes[i].firstRow.firstItem + ".png\" alt=" + data.recipes[i].firstRow.firstItem + " class=\"inv-sprite\">";
                }
              output += `
              </div>
              <div class="invslot">`;
                if (data.recipes[i].firstRow.secondItem !== "")
                {
                    output += "<img src=\"../assets/images/icons/" + data.recipes[i].firstRow.secondItem + ".png\" alt=" + data.recipes[i].firstRow.secondItem + " class=\"inv-sprite\">";
                }
              output += `
              </div>
              <div class="invslot">`;
                if (data.recipes[i].firstRow.thirdItem !== "")
                {
                    output += "<img src=\"../assets/images/icons/" + data.recipes[i].firstRow.thirdItem + ".png\" alt=" + data.recipes[i].firstRow.thirdItem + " class=\"inv-sprite\">";
                }
              output += `
              </div>
            </div>
            <div class="ct-row">
              <div class="invslot">`;
              if (data.recipes[i].secondRow.firstItem !== "")
              {
                  output += "<img src=\"../assets/images/icons/" + data.recipes[i].secondRow.firstItem + ".png\" alt=" + data.recipes[i].secondRow.firstItem + " class=\"inv-sprite\">";
              }
              output += `
              </div>
              <div class="invslot">`;
                if (data.recipes[i].secondRow.secondItem !== "")
                {
                    output += "<img src=\"../assets/images/icons/" + data.recipes[i].secondRow.secondItem + ".png\" alt=" + data.recipes[i].secondRow.secondItem + " class=\"inv-sprite\">";
                }
              output += `
              </div>
              <div class="invslot">`;
                if (data.recipes[i].secondRow.thirdItem !== "")
                {
                    output += "<img src=\"../assets/images/icons/" + data.recipes[i].secondRow.thirdItem + ".png\" alt=" + data.recipes[i].secondRow.thirdItem + " class=\"inv-sprite\">";
                }
              output += `
              </div>
            </div>
            <div class="ct-row">
              <div class="invslot">`;
                if (data.recipes[i].thirdRow.firstItem !== "")
                {
                    output += "<img src=\"../assets/images/icons/" + data.recipes[i].thirdRow.firstItem + ".png\" alt=" + data.recipes[i].thirdRow.firstItem + " class=\"inv-sprite\">";
                }
              output += `
              </div>
              <div class="invslot">`;
                if (data.recipes[i].thirdRow.secondItem !== "")
                {
                    output += "<img src=\"../assets/images/icons/" + data.recipes[i].thirdRow.secondItem + ".png\" alt=" + data.recipes[i].thirdRow.secondItem + " class=\"inv-sprite\">";
                }
              output += `
              </div>
              <div class="invslot">`;
                if (data.recipes[i].thirdRow.thirdItem !== "")
                {
                    output += "<img src=\"../assets/images/icons/" + data.recipes[i].thirdRow.thirdItem + ".png\" alt=" + data.recipes[i].thirdRow.thirdItem + " class=\"inv-sprite\">";
                }
              output += `
              </div>
            </div>
          </div>
          <div class="ct-arrow"></div>
          <div class="ct-output">
            <div class="invslot invslot-large">
              <div class="invslot-item">`;
                if (data.recipes[i].product !== "")
                {
                    output += "<img src=\"../assets/images/icons/" + data.recipes[i].product + ".png\" alt=" + data.recipes[i].product + " class=\"inv-sprite\">";
                }
              output += `
              </div>
            </div>
          </div>
        </div>`;
            
        let recipes = $("blockquote p").map(function()
        {
          return $(this);
        })
        .get();
        
        $.each(recipes, function(index, value)
        {
          if(value.text() == recipeName)
          {
            value.before(output);
          }
        });
      }
    });
    return;
  }
  
  getNameAndReadData(recipename)
  {
  //We get the value on the text box, add the .json termination and call the method readData with that as parameter
    this.readData("../assets/data/recipes/" + recipename + ".json");
  //console.log(recipename);
  }
  
  contains(recipeName)
  {
    for(var i = 0; i < this.constructedRecipes.length; i++)
    {
      if(this.constructedRecipes[i] == recipeName)
      return true;
    }
    return false;
  }
  
  add(recipeName)
  {
    this.constructedRecipes.push(recipeName);
  }
}

//We create our reader to be accessed from the document
var reader = new JSONReader();
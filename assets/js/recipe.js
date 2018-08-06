"use strict";

class JSONReader {
    
  constructor()
  {
    this.constructedRecipes = [];
  }
  
  findRecipes()
  {
    let recipes = $("code").map(function()
    {
      return $(this).text();
    })
    .get();

    let recipe = this;
    $.each(recipes, function(index, value)
    {
      recipe.readData(value);
    });
    
  }

  readData(recipeName)
  {
    if(this.contains(recipeName))
    {
      return;
    }
    this.add(recipeName);
    let fileName = "../../assets/data/recipes/" + recipeName + ".json";
    //JQuery to read from a JSON file
    $.getJSON(fileName, function(data)
    {
      for (var i in data.recipes) 
      {
        let output = "";
        output += `
        <div class="crafting-table">
          <div class="ct-input">
            <div class="ct-row">
              <div class="invslot">
                <div class="invslot-item">`;
                  if (data.recipes[i].firstRow.firstItem !== "")
                  {
                    output += "<img src=\"../../assets/images/icons/" + data.recipes[i].firstRow.firstItem + ".png\" alt=" + data.recipes[i].firstRow.firstItem + " class=\"inv-sprite\">";
                  }
                output += `
                </div>
              </div>
              <div class="invslot">
                <div class="invslot-item">`;
                  if (data.recipes[i].firstRow.secondItem !== "")
                  {
                    output += "<img src=\"../../assets/images/icons/" + data.recipes[i].firstRow.secondItem + ".png\" alt=" + data.recipes[i].firstRow.secondItem + " class=\"inv-sprite\">";
                  }
                output += `
                </div>
              </div>
              <div class="invslot">
                <div class="invslot-item">`;
                  if (data.recipes[i].firstRow.thirdItem !== "")
                  {
                    output += "<img src=\"../../assets/images/icons/" + data.recipes[i].firstRow.thirdItem + ".png\" alt=" + data.recipes[i].firstRow.thirdItem + " class=\"inv-sprite\">";
                  }
                output += `
                </div>
              </div>
            </div>
            <div class="ct-row">
              <div class="invslot">
                <div class="invslot-item">`;
                  if (data.recipes[i].secondRow.firstItem !== "")
                  {
                    output += "<img src=\"../../assets/images/icons/" + data.recipes[i].secondRow.firstItem + ".png\" alt=" + data.recipes[i].secondRow.firstItem + " class=\"inv-sprite\">";
                  }
                output += `
                </div>
              </div>
              <div class="invslot">
                <div class="invslot-item">`;
                  if (data.recipes[i].secondRow.secondItem !== "")
                  {
                    output += "<img src=\"../../assets/images/icons/" + data.recipes[i].secondRow.secondItem + ".png\" alt=" + data.recipes[i].secondRow.secondItem + " class=\"inv-sprite\">";
                  }
                output += `
                </div>
              </div>
              <div class="invslot">
                <div class="invslot-item">`;
                  if (data.recipes[i].secondRow.thirdItem !== "")
                  {
                    output += "<img src=\"../../assets/images/icons/" + data.recipes[i].secondRow.thirdItem + ".png\" alt=" + data.recipes[i].secondRow.thirdItem + " class=\"inv-sprite\">";
                  }
                output += `
                </div>
              </div>
            </div>
            <div class="ct-row">
              <div class="invslot">
                <div class="invslot-item">`;
                  if (data.recipes[i].thirdRow.firstItem !== "")
                  {
                    output += "<img src=\"../../assets/images/icons/" + data.recipes[i].thirdRow.firstItem + ".png\" alt=" + data.recipes[i].thirdRow.firstItem + " class=\"inv-sprite\">";
                  }
                output += `
                </div>
              </div>
              <div class="invslot">
                <div class="invslot-item">`;
                  if (data.recipes[i].thirdRow.secondItem !== "")
                  {
                    output += "<img src=\"../../assets/images/icons/" + data.recipes[i].thirdRow.secondItem + ".png\" alt=" + data.recipes[i].thirdRow.secondItem + " class=\"inv-sprite\">";
                  }
                output += `
                </div>
              </div>
              <div class="invslot">
                <div class="invslot-item">`;
                  if (data.recipes[i].thirdRow.thirdItem !== "")
                  {
                    output += "<img src=\"../../assets/images/icons/" + data.recipes[i].thirdRow.thirdItem + ".png\" alt=" + data.recipes[i].thirdRow.thirdItem + " class=\"inv-sprite\">";
                  }
                output += `
                </div>
              </div>
            </div>
          </div>
          <div class="ct-arrow"></div>
          <div class="ct-output">
            <div class="invslot invslot-large">
              <div class="invslot-item">`;
                if (data.recipes[i].product !== "")
                {
                  output += "<img src=\"../../assets/images/icons/" + data.recipes[i].product + ".png\" alt=" + data.recipes[i].product + " class=\"inv-sprite\">";
                }
              output += `
              </div>
            </div>
          </div>`;
          if (data.recipes[i].shapeless == "yes")
          {
            output += `
            <div class="ct-icons">
              <div class="ct-shapeless" title="This recipe is shapeless, the items may be placed anywhere in the crafting grid."></div>
            </div>
            `;
          }
        output += `
        </div>`;
            
        let recipes = $("code").map(function()
        {
          return $(this);
        })
        .get();

        $.each(recipes, function(index, value)
        {
          if(value.text() == recipeName)
          {
            value.before(output);
            value.remove();
          }
        });
      }
    });
    return;
  }
  
  getNameAndReadData(recipename)
  {
    this.readData("../../../assets/data/recipes/" + recipename + ".json");
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

  convertToSlideshow()
  {
    $("img[src*='planks']").attr("src", "../../assets/images/icons/minecraft/planks_any.gif");
    $("img[src*='log']").attr("src", "../../assets/images/icons/minecraft/log_any.gif");
    $("img[src*='boat']").attr("src", "../../assets/images/icons/minecraft/any_boat.gif");
    $("img[src*='oak_frame']").attr("src", "../../assets/images/icons/minecolonies/frames_input.gif");
    $("img[src*='oak_doublecrossed']").attr("src", "../../assets/images/icons/minecolonies/frames_output.gif");
  }
}

var reader = new JSONReader();
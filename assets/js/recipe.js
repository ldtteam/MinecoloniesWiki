"use strict";

class JSONReader {
    
  constructor()
  {
    this.constructedRecipes = [];
  }
  
  findRecipes()
  {
    let recipes = $("recipe").map(function()
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

  createTooltip(text)
  {
    let arr = text.split("/");
    text = arr[1].replace(/\_/g, " ");
    arr = text.split(" ");
    for (let i = 0; i < arr.length; i++)
    {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  }

  createDiv(element, large = false, stacksize = 0, shapeless = false)
  {
    let output = "";
    let recipe = this;
    output += `<div `; (Array.isArray(element) ? ( large ? output += `class="invslot invslot-large animate"` : output += `class="invslot animate"`) : (large ? output += `class="invslot invslot-large"`: output +=`class="invslot"`)); output += ` >`;
    if (element !== "")
    {
      if (Array.isArray(element))
      {
        element.forEach(item =>
                  {
                    output += `
                    <div class="invslot-item switch"
                    `; (item !== element[0] ? output +=`style="display: none"` : output +=``); output += `>
                      <img src="../../assets/images/icons/` + item + `.png" alt="` + item + `" class="inv-sprite" data-toggle="tooltip" title="`+ recipe.createTooltip(item) +`">
                    </div>`;
                  });
      }
      else
      {
        output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite" data-toggle="tooltip" title="` + recipe.createTooltip(element) + `">
                    </div>`;
      }
      if (stacksize >= 1 && stacksize <= 64)
        {
          output += "<div class=\"invslot-stacksize\">" + stacksize + "</div>"
        }
      if (shapeless == "yes")
      {
        output += `
            <div class="ct-icons">
              <div class="ct-shapeless" title="This recipe is shapeless. The items may be placed anywhere in the crafting grid."></div>
            </div>`;
      }
    }
    output += `</div> `;
    return output;
  }

  readData(recipeName)
  {
    if(this.contains(recipeName))
    {
      return;
    }
    this.add(recipeName);
    let fileName = "../../assets/data/recipes/" + recipeName + ".json";
    let recipe = this;
    //JQuery to read from a JSON file
    $.getJSON(fileName, function(data)
    {
      for (var i in data.recipes) 
      {
        let output = "";
        output += `
        <div class="crafting-table">
          <div class="ct-input">
            <div class="ct-row">`;
              output += recipe.createDiv(data.recipes[i].firstRow.firstItem);
              output += recipe.createDiv(data.recipes[i].firstRow.secondItem);
              output += recipe.createDiv(data.recipes[i].firstRow.thirdItem);
              output += `
            </div>
            <div class="ct-row">`;
            output += recipe.createDiv(data.recipes[i].secondRow.firstItem);
            output += recipe.createDiv(data.recipes[i].secondRow.secondItem);
            output += recipe.createDiv(data.recipes[i].secondRow.thirdItem);
            output += `</div> <div class="ct-row">`;
            output += recipe.createDiv(data.recipes[i].thirdRow.firstItem);
            output += recipe.createDiv(data.recipes[i].thirdRow.secondItem);
            output += recipe.createDiv(data.recipes[i].thirdRow.thirdItem);
            output += `</div>
          </div>
          <div class="ct-arrow"></div>
          <div class="ct-output">
            `;
            output += recipe.createDiv(data.recipes[i].product, true, data.recipes[i].amount, data.recipes[i].shapeless);
        output += `
        </div>`;

        let recipes = $("recipe").map(function()
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

        $('.inv-sprite').each(function () {
          $(this).tooltip();
        })
      }
    })
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

  animateRecipes()
  {
    setInterval(function()
    {
      $("div.animate").each(function()
      {
        $(this).find(".switch:first")
        .toggle()
        .appendTo(this);

        $(this).find(".switch:first")
        .toggle()
        $(this).find(".switch:last")
        .find('.inv-sprite').tooltip('hide');
      });
      }, 2000)
  }
}

var reader = new JSONReader();

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
              <div `; (Array.isArray(data.recipes[i].firstRow.firstItem) ? output +=`class="invslot animate"` : output +=`class="invslot"`); output += ` >`;
                if (data.recipes[i].firstRow.firstItem !== "")
                {
                  if (Array.isArray(data.recipes[i].firstRow.firstItem))
                  {
                    data.recipes[i].firstRow.firstItem.forEach(element =>
                    {
                      output += `
                      <div class="invslot-item switch"
                      `; (element !== data.recipes[i].firstRow.firstItem[0] ? output +=`style="display: none"` : output +=``); output += `>
                        <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                      </div>`;
                    });
                  }
                  else
                  {
                    output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + data.recipes[i].firstRow.firstItem + `.png" alt="` + data.recipes[i].firstRow.firstItem + `" class="inv-sprite">
                    </div>`;
                  }
                }
              output += `
              </div>
              <div `; (Array.isArray(data.recipes[i].firstRow.secondItem) ? output +=`class="invslot animate"` : output +=`class="invslot"`); output += ` >`;
                if (data.recipes[i].firstRow.secondItem !== "")
                {
                  if (Array.isArray(data.recipes[i].firstRow.secondItem))
                  {
                    data.recipes[i].firstRow.secondItem.forEach(element =>
                    {
                      output += `
                      <div class="invslot-item switch"
                      `; (element !== data.recipes[i].firstRow.secondItem[0] ? output +=`style="display: none"` : output +=``); output += `>
                        <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                      </div>`;
                    });
                  }
                  else
                  {
                    output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + data.recipes[i].firstRow.secondItem + `.png" alt="` + data.recipes[i].firstRow.secondItem + `" class="inv-sprite">
                    </div>`;
                  }
                }
              output += `
              </div>
              <div `; (Array.isArray(data.recipes[i].firstRow.thirdItem) ? output +=`class="invslot animate"` : output +=`class="invslot"`); output += ` >`;
                if (data.recipes[i].firstRow.thirdItem !== "")
                {
                  if (Array.isArray(data.recipes[i].firstRow.thirdItem))
                  {
                    data.recipes[i].firstRow.thirdItem.forEach(element =>
                    {
                      output += `
                      <div class="invslot-item switch"
                      `; (element !== data.recipes[i].firstRow.thirdItem[0] ? output +=`style="display: none"` : output +=``); output += `>
                        <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                      </div>`;
                    });
                  }
                  else
                  {
                    output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + data.recipes[i].firstRow.thirdItem + `.png" alt="` + data.recipes[i].firstRow.thirdItem + `" class="inv-sprite">
                    </div>`;
                  }
                }
              output += `
              </div>
            </div>
            <div class="ct-row">
              <div `; (Array.isArray(data.recipes[i].secondRow.firstItem) ? output +=`class="invslot animate"` : output +=`class="invslot"`); output += ` >`;
                if (data.recipes[i].secondRow.firstItem !== "")
                {
                  if (Array.isArray(data.recipes[i].secondRow.firstItem))
                  {
                    data.recipes[i].secondRow.firstItem.forEach(element =>
                    {
                      output += `
                      <div class="invslot-item switch"
                      `; (element !== data.recipes[i].secondRow.firstItem[0] ? output +=`style="display: none"` : output +=``); output += `>
                        <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                      </div>`;
                    });
                  }
                  else
                  {
                    output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + data.recipes[i].secondRow.firstItem + `.png" alt="` + data.recipes[i].secondRow.firstItem + `" class="inv-sprite">
                    </div>`;
                  }
                }
              output += `
              </div>
              <div `; (Array.isArray(data.recipes[i].secondRow.secondItem) ? output +=`class="invslot animate"` : output +=`class="invslot"`); output += ` >`;
                if (data.recipes[i].secondRow.secondItem !== "")
                {
                  if (Array.isArray(data.recipes[i].secondRow.secondItem))
                  {
                    data.recipes[i].secondRow.secondItem.forEach(element =>
                    {
                      output += `
                      <div class="invslot-item switch"
                      `; (element !== data.recipes[i].secondRow.secondItem[0] ? output +=`style="display: none"` : output +=``); output += `>
                        <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                      </div>`;
                    });
                  }
                  else
                  {
                    output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + data.recipes[i].secondRow.secondItem + `.png" alt="` + data.recipes[i].secondRow.secondItem + `" class="inv-sprite">
                    </div>`;
                  }
                }
              output += `
              </div>
              <div `; (Array.isArray(data.recipes[i].secondRow.thirdItem) ? output +=`class="invslot animate"` : output +=`class="invslot"`); output += ` >`;
                if (data.recipes[i].secondRow.thirdItem !== "")
                {
                  if (Array.isArray(data.recipes[i].secondRow.thirdItem))
                  {
                    data.recipes[i].secondRow.thirdItem.forEach(element =>
                    {
                      output += `
                      <div class="invslot-item switch"
                      `; (element !== data.recipes[i].secondRow.thirdItem[0] ? output +=`style="display: none"` : output +=``); output += `>
                        <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                      </div>`;
                    });
                  }
                  else
                  {
                    output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + data.recipes[i].secondRow.thirdItem + `.png" alt="` + data.recipes[i].secondRow.thirdItem + `" class="inv-sprite">
                    </div>`;
                  }
                }
              output += `
              </div>
            </div>
            <div class="ct-row">
              <div `; (Array.isArray(data.recipes[i].thirdRow.firstItem) ? output +=`class="invslot animate"` : output +=`class="invslot"`); output += ` >`;
                if (data.recipes[i].thirdRow.firstItem !== "")
                {
                  if (Array.isArray(data.recipes[i].thirdRow.firstItem))
                  {
                    data.recipes[i].thirdRow.firstItem.forEach(element =>
                    {
                      output += `
                      <div class="invslot-item switch"
                      `; (element !== data.recipes[i].thirdRow.firstItem[0] ? output +=`style="display: none"` : output +=``); output += `>
                        <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                      </div>`;
                    });
                  }
                  else
                  {
                    output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + data.recipes[i].thirdRow.firstItem + `.png" alt="` + data.recipes[i].thirdRow.firstItem + `" class="inv-sprite">
                    </div>`;
                  }
                }
              output += `
              </div>
              <div `; (Array.isArray(data.recipes[i].thirdRow.secondItem) ? output +=`class="invslot animate"` : output +=`class="invslot"`); output += ` >`;
                if (data.recipes[i].thirdRow.secondItem !== "")
                {
                  if (Array.isArray(data.recipes[i].thirdRow.secondItem))
                  {
                    data.recipes[i].thirdRow.secondItem.forEach(element =>
                    {
                      output += `
                      <div class="invslot-item switch"
                      `; (element !== data.recipes[i].thirdRow.secondItem[0] ? output +=`style="display: none"` : output +=``); output += `>
                        <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                      </div>`;
                    });
                  }
                  else
                  {
                    output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + data.recipes[i].thirdRow.secondItem + `.png" alt="` + data.recipes[i].thirdRow.secondItem + `" class="inv-sprite">
                    </div>`;
                  }
                }
              output += `
              </div>
              <div `; (Array.isArray(data.recipes[i].thirdRow.thirdItem) ? output +=`class="invslot animate"` : output +=`class="invslot"`); output += ` >`;
                if (data.recipes[i].thirdRow.thirdItem !== "")
                {
                  if (Array.isArray(data.recipes[i].thirdRow.thirdItem))
                  {
                    data.recipes[i].thirdRow.thirdItem.forEach(element =>
                    {
                      output += `
                      <div class="invslot-item switch"
                      `; (element !== data.recipes[i].thirdRow.thirdItem[0] ? output +=`style="display: none"` : output +=``); output += `>
                        <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                      </div>`;
                    });
                  }
                  else
                  {
                    output += `
                    <div class="invslot-item">
                      <img src="../../assets/images/icons/` + data.recipes[i].thirdRow.thirdItem + `.png" alt="` + data.recipes[i].thirdRow.thirdItem + `" class="inv-sprite">
                    </div>`;
                  }
                }
              output += `
              </div>
            </div>
          </div>
          <div class="ct-arrow"></div>
          <div class="ct-output">
            <div `; (Array.isArray(data.recipes[i].product) ? output +=`class="invslot invslot-large animate"` : output +=`class="invslot invslot-large"`); output += ` >`;
              if (data.recipes[i].product !== "")
              {
                if (Array.isArray(data.recipes[i].product))
                {
                  data.recipes[i].product.forEach(element =>
                  {
                    output += `
                    <div class="invslot-item switch"
                    `; (element !== data.recipes[i].product[0] ? output +=`style="display: none"` : output +=``); output += `>
                      <img src="../../assets/images/icons/` + element + `.png" alt="` + element + `" class="inv-sprite">
                    </div>`;
                  })
                }
                else
                {
                  output += `
                  <div class="invslot-item">
                    <img src="../../assets/images/icons/` + data.recipes[i].product + `.png" alt="` + data.recipes[i].product + `" class="inv-sprite">
                  </div>`;
                }
              }

              if (data.recipes[i].amount >= 1 && data.recipes[i].amount <= 64)
              {
                output += "<div class=\"invslot-stacksize\">" + data.recipes[i].amount + "</div>"
              }
            output += `
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
      });
      }, 2000)
  }
}

var reader = new JSONReader();

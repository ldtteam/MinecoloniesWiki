---
title: Search
layout: default
---
# Search

<!-- HTML elements for search -->
<input type="text" id="search-input" placeholder="Search Wiki...">
<ul id="results-container"></ul>

<!-- or without installing anything -->
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>

<script type="text/javascript">
	var sjs = SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  limit: 100,
  sortMiddleware: function(a, b)
  {
  	searchstr = document.getElementById('search-input').value.toLowerCase();
  	console.log(searchstr);
  	if (a.title.toLowerCase().includes(searchstr))
  	{
  		return -1;
  	}
  	else if (b.title.toLowerCase().includes(searchstr))
  	{
  		return 1;
  	}


    var astr = String(a.title);
    var bstr = String(b.title);
    return astr.localeCompare(bstr)
  }
})
</script>
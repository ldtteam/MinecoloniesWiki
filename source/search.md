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
  limit: 100
})
</script>
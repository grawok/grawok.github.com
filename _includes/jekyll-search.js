


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>Simple-Jekyll-Search/jekyll-search.js at master · christian-fei/Simple-Jekyll-Search · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="christian-fei/Simple-Jekyll-Search" name="twitter:title" /><meta content="Simple-Jekyll-Search - A JavaScript library to add search functionality to any Jekyll blog." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/2662706?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/2662706?v=3&amp;s=400" property="og:image" /><meta content="christian-fei/Simple-Jekyll-Search" property="og:title" /><meta content="https://github.com/christian-fei/Simple-Jekyll-Search" property="og:url" /><meta content="Simple-Jekyll-Search - A JavaScript library to add search functionality to any Jekyll blog." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="500BCB5E:5925:1A3A96F9:564B0C71" name="octolytics-dimension-request_id" />

<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="883eb1ada33703d2ef079aa263275d4554a1def5" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-b4865242c2bd687b237f7ffe32b5266433a4c91ae4288c6f52b4d9ecf6424e5f.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-7048b51d8e88507e1babbe42418137bac3f5ef75f4b1957242327b23ebacd292.css" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="55c5195616484cefe73374f699bb729d">

      
  <meta name="description" content="Simple-Jekyll-Search - A JavaScript library to add search functionality to any Jekyll blog.">
  <meta name="go-import" content="github.com/christian-fei/Simple-Jekyll-Search git https://github.com/christian-fei/Simple-Jekyll-Search.git">

  <meta content="2662706" name="octolytics-dimension-user_id" /><meta content="christian-fei" name="octolytics-dimension-user_login" /><meta content="11387755" name="octolytics-dimension-repository_id" /><meta content="christian-fei/Simple-Jekyll-Search" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11387755" name="octolytics-dimension-repository_network_root_id" /><meta content="christian-fei/Simple-Jekyll-Search" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/christian-fei/Simple-Jekyll-Search/commits/master.atom" rel="alternate" title="Recent Commits to Simple-Jekyll-Search:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fchristian-fei%2FSimple-Jekyll-Search%2Fblob%2Fmaster%2Fexample%2Fjs%2Fjekyll-search.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/christian-fei/Simple-Jekyll-Search/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/christian-fei/Simple-Jekyll-Search/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fchristian-fei%2FSimple-Jekyll-Search"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/christian-fei/Simple-Jekyll-Search/watchers">
    14
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fchristian-fei%2FSimple-Jekyll-Search"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/christian-fei/Simple-Jekyll-Search/stargazers">
      384
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fchristian-fei%2FSimple-Jekyll-Search"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/christian-fei/Simple-Jekyll-Search/network" class="social-count">
      44
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/christian-fei" class="url fn" itemprop="url" rel="author"><span itemprop="title">christian-fei</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/christian-fei/Simple-Jekyll-Search" data-pjax="#js-repo-pjax-container">Simple-Jekyll-Search</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/christian-fei/Simple-Jekyll-Search/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/christian-fei/Simple-Jekyll-Search" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /christian-fei/Simple-Jekyll-Search">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/christian-fei/Simple-Jekyll-Search/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /christian-fei/Simple-Jekyll-Search/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/christian-fei/Simple-Jekyll-Search/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /christian-fei/Simple-Jekyll-Search/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/christian-fei/Simple-Jekyll-Search/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /christian-fei/Simple-Jekyll-Search/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/christian-fei/Simple-Jekyll-Search/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /christian-fei/Simple-Jekyll-Search/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/christian-fei/Simple-Jekyll-Search.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/christian-fei/Simple-Jekyll-Search" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="883eb1ada33703d2ef079aa263275d4554a1def5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ako5whqepYiHW6RzpCcQTOQXI46HeEHCGeMOjC4K4A8QNK+7HqrHqnmLGm0H7ho2hWCz3vutXdwt+1nJWcKiQQ==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="883eb1ada33703d2ef079aa263275d4554a1def5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="fnhTv7uRKYK0fg9qgehwOEAKLH3Hnf2NujBrblW1ywHCuY8lReFddwnZobaTzYlrXWnyXreWPZdA6Dm78EHNUg==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>

              <a href="/christian-fei/Simple-Jekyll-Search/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of christian-fei/Simple-Jekyll-Search as a zip file"
                 title="Download the contents of christian-fei/Simple-Jekyll-Search as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/christian-fei/Simple-Jekyll-Search/blob/b6b6419f2da3d80c47d7bf15ebef0c2e066e600c/example/js/jekyll-search.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:5f2ec6d35100b4dc2555bb9b8692b654 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/christian-fei/Simple-Jekyll-Search/blob/gh-pages/example/js/jekyll-search.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/christian-fei/Simple-Jekyll-Search/blob/master/example/js/jekyll-search.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/christian-fei/Simple-Jekyll-Search/blob/refactoring_and_tests/example/js/jekyll-search.js"
               data-name="refactoring_and_tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="refactoring_and_tests">
                refactoring_and_tests
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/v1.0.2/example/js/jekyll-search.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/v1.0.1/example/js/jekyll-search.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/v1.0.0/example/js/jekyll-search.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/v0.0.9/example/js/jekyll-search.js"
                 data-name="v0.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.0.9">v0.0.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/1.0.8/example/js/jekyll-search.js"
                 data-name="1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.8">1.0.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/1.0.7/example/js/jekyll-search.js"
                 data-name="1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.7">1.0.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/1.0.6/example/js/jekyll-search.js"
                 data-name="1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.6">1.0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/1.0.5/example/js/jekyll-search.js"
                 data-name="1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.5">1.0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/1.0.4/example/js/jekyll-search.js"
                 data-name="1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.4">1.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/1.0.3/example/js/jekyll-search.js"
                 data-name="1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.3">1.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/1.0/example/js/jekyll-search.js"
                 data-name="1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0">1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/christian-fei/Simple-Jekyll-Search/tree/0.0.9/example/js/jekyll-search.js"
                 data-name="0.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.0.9">0.0.9</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/christian-fei/Simple-Jekyll-Search/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/christian-fei/Simple-Jekyll-Search" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">Simple-Jekyll-Search</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/christian-fei/Simple-Jekyll-Search/tree/master/example" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">example</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/christian-fei/Simple-Jekyll-Search/tree/master/example/js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">jekyll-search.js</strong>
    </div>
  </div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/christian-fei/Simple-Jekyll-Search/commit/36d78fd2dafbe920eb90c007905f8706025fedb4" data-pjax>
          36d78fd
        </a>
        <time datetime="2015-10-04T12:25:57Z" is="relative-time">Oct 4, 2015</time>
      </span>
      <div>
        <img alt="@christian-fei" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2662706?v=3&amp;s=40" width="20" />
        <a href="/christian-fei" class="user-mention" rel="author">christian-fei</a>
          <a href="/christian-fei/Simple-Jekyll-Search/commit/36d78fd2dafbe920eb90c007905f8706025fedb4" class="message" data-pjax="true" title="moved jekyll to sub dir">moved jekyll to sub dir</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@christian-fei" height="24" src="https://avatars1.githubusercontent.com/u/2662706?v=3&amp;s=48" width="24" />
            <a href="/christian-fei">christian-fei</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/christian-fei/Simple-Jekyll-Search/raw/master/example/js/jekyll-search.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/christian-fei/Simple-Jekyll-Search/blame/master/example/js/jekyll-search.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/christian-fei/Simple-Jekyll-Search/commits/master/example/js/jekyll-search.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      365 lines (307 sloc)
      <span class="file-info-divider"></span>
    23.5 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> <span class="pl-en">e</span>(<span class="pl-smi">t</span>,<span class="pl-smi">n</span>,<span class="pl-smi">r</span>){<span class="pl-k">function</span> <span class="pl-en">s</span>(<span class="pl-smi">o</span>,<span class="pl-smi">u</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>n[o]){<span class="pl-k">if</span>(<span class="pl-k">!</span>t[o]){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-k">typeof</span> <span class="pl-c1">require</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">require</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>u<span class="pl-k">&amp;&amp;</span>a)<span class="pl-k">return</span> a(o,<span class="pl-k">!</span><span class="pl-c1">0</span>);<span class="pl-k">if</span>(i)<span class="pl-k">return</span> i(o,<span class="pl-k">!</span><span class="pl-c1">0</span>);<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Cannot find module &#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>o<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>)}<span class="pl-k">var</span> f<span class="pl-k">=</span>n[o]<span class="pl-k">=</span>{exports<span class="pl-k">:</span>{}};t[o][<span class="pl-c1">0</span>].<span class="pl-c1">call</span>(f.exports,<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> n<span class="pl-k">=</span>t[o][<span class="pl-c1">1</span>][e];<span class="pl-k">return</span> s(n<span class="pl-k">?</span>n<span class="pl-k">:</span>e)},f,f.exports,e,t,n,r)}<span class="pl-k">return</span> n[o].exports}<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-k">typeof</span> <span class="pl-c1">require</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">require</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> o<span class="pl-k">=</span><span class="pl-c1">0</span>;o<span class="pl-k">&lt;</span>r.<span class="pl-c1">length</span>;o<span class="pl-k">++</span>)s(r[o]);<span class="pl-k">return</span> s})({<span class="pl-c1">1</span><span class="pl-k">:</span>[<span class="pl-k">function</span>(<span class="pl-smi">require</span>,<span class="pl-smi">module</span>,<span class="pl-smi">exports</span>){</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.exports <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">  load<span class="pl-k">:</span> load</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">load</span>(<span class="pl-smi">location</span>,<span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> xhr</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>( <span class="pl-c1">window</span>.<span class="pl-c1">XMLHttpRequest</span> ){</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    xhr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>()</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">  }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    xhr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ActiveXObject</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Microsoft.XMLHTTP<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">  xhr.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>GET<span class="pl-pds">&#39;</span></span>, location, <span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">xhr</span>.<span class="pl-en">onreadystatechange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( xhr.<span class="pl-c1">status</span><span class="pl-k">===</span><span class="pl-c1">200</span> <span class="pl-k">&amp;&amp;</span> xhr.<span class="pl-c1">readyState</span><span class="pl-k">===</span><span class="pl-c1">4</span> ){</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        callback(<span class="pl-c1">null</span>, <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(xhr.responseText) )</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">      }<span class="pl-k">catch</span>(err){</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        callback(err, <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">  xhr.<span class="pl-c1">send</span>()</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">},{}],<span class="pl-c1">2</span><span class="pl-k">:</span>[<span class="pl-k">function</span>(<span class="pl-smi">require</span>,<span class="pl-smi">module</span>,<span class="pl-smi">exports</span>){</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.<span class="pl-en">exports</span> <span class="pl-k">=</span> <span class="pl-k">function</span> <span class="pl-en">OptionsValidator</span>(<span class="pl-smi">params</span>){</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>( <span class="pl-k">!</span>validateParams(params) ){</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>-- OptionsValidator: required options missing<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>( <span class="pl-k">!</span>(<span class="pl-v">this</span> <span class="pl-k">instanceof</span> OptionsValidator) ){</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">OptionsValidator</span>(params)</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> requiredOptions <span class="pl-k">=</span> params.required</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">getRequiredOptions</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> requiredOptions</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">validate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">parameters</span>){</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> errors <span class="pl-k">=</span> []</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    requiredOptions.forEach(<span class="pl-k">function</span>(<span class="pl-smi">requiredOptionName</span>){</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>( parameters[requiredOptionName] <span class="pl-k">===</span> <span class="pl-c1">undefined</span> ){</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        errors.<span class="pl-c1">push</span>(requiredOptionName)</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> errors</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">validateParams</span>(<span class="pl-smi">params</span>){</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( <span class="pl-k">!</span>params ) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> params.required <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> params.required <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">},{}],<span class="pl-c1">3</span><span class="pl-k">:</span>[<span class="pl-k">function</span>(<span class="pl-smi">require</span>,<span class="pl-smi">module</span>,<span class="pl-smi">exports</span>){</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.exports <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">  put<span class="pl-k">:</span>put,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">  clear<span class="pl-k">:</span> clear,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">  get<span class="pl-k">:</span> get,</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">  search<span class="pl-k">:</span> search,</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">  setOptions<span class="pl-k">:</span> setOptions</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> FuzzySearchStrategy <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./SearchStrategies/FuzzySearchStrategy<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> LiteralSearchStrategy <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./SearchStrategies/LiteralSearchStrategy<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data <span class="pl-k">=</span> []</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> opt <span class="pl-k">=</span> {}</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">opt.fuzzy <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">opt.limit <span class="pl-k">=</span> <span class="pl-c1">10</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">opt.searchStrategy <span class="pl-k">=</span> opt.fuzzy <span class="pl-k">?</span> FuzzySearchStrategy <span class="pl-k">:</span> LiteralSearchStrategy</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">put</span>(<span class="pl-smi">data</span>){</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>( isObject(data) ){</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> addObject(data)</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>( isArray(data) ){</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> addArray(data)</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">clear</span>(){</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">  data.<span class="pl-c1">length</span> <span class="pl-k">=</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> data</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">get</span>(){</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> data</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">isObject</span>(<span class="pl-smi">obj</span>){ <span class="pl-k">return</span> <span class="pl-k">!!</span>obj <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.toString.<span class="pl-c1">call</span>(obj) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Object]<span class="pl-pds">&#39;</span></span> }</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">isArray</span>(<span class="pl-smi">obj</span>){ <span class="pl-k">return</span> <span class="pl-k">!!</span>obj <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.toString.<span class="pl-c1">call</span>(obj) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Array]<span class="pl-pds">&#39;</span></span> }</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">addObject</span>(<span class="pl-smi">_data</span>){</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">  data.<span class="pl-c1">push</span>(_data)</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> data</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">addArray</span>(<span class="pl-smi">_data</span>){</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> added <span class="pl-k">=</span> []</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> _data.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( isObject(_data[i]) ){</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">      added.<span class="pl-c1">push</span>(addObject(_data[i]))</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> added</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">search</span>(<span class="pl-smi">crit</span>){</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>( <span class="pl-k">!</span>crit ){</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> []</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> findMatches(data,crit,opt.searchStrategy,opt)</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">setOptions</span>(<span class="pl-smi">_opt</span>){</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">  opt <span class="pl-k">=</span> _opt <span class="pl-k">||</span> {}</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">  opt.fuzzy <span class="pl-k">=</span> _opt.fuzzy <span class="pl-k">||</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">  opt.limit <span class="pl-k">=</span> _opt.limit <span class="pl-k">||</span> <span class="pl-c1">10</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">  opt.searchStrategy <span class="pl-k">=</span> _opt.fuzzy <span class="pl-k">?</span> FuzzySearchStrategy <span class="pl-k">:</span> LiteralSearchStrategy</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">findMatches</span>(<span class="pl-smi">data</span>,<span class="pl-smi">crit</span>,<span class="pl-smi">strategy</span>,<span class="pl-smi">opt</span>){</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> matches <span class="pl-k">=</span> []</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> data.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> matches.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> opt.limit; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> match <span class="pl-k">=</span> findMatchesInObject(data[i],crit,strategy,opt)</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( match ){</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">      matches.<span class="pl-c1">push</span>(match)</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> matches</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">findMatchesInObject</span>(<span class="pl-smi">obj</span>,<span class="pl-smi">crit</span>,<span class="pl-smi">strategy</span>,<span class="pl-smi">opt</span>){</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span>(<span class="pl-k">var</span> key <span class="pl-k">in</span> obj) {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( <span class="pl-k">!</span>isExcluded(obj[key], opt.exclude) <span class="pl-k">&amp;&amp;</span> strategy.matches(obj[key], crit) ){</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> obj</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">isExcluded</span>(<span class="pl-smi">term</span>, <span class="pl-smi">excludedTerms</span>){</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> excluded <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">  excludedTerms <span class="pl-k">=</span> excludedTerms <span class="pl-k">||</span> []</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span>excludedTerms.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> excludedTerm <span class="pl-k">=</span> excludedTerms[i]</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( <span class="pl-k">!</span>excluded <span class="pl-k">&amp;&amp;</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(term).<span class="pl-c1">test</span>(excludedTerm) ){</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">      excluded <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> excluded</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">},{<span class="pl-s"><span class="pl-pds">&quot;</span>./SearchStrategies/FuzzySearchStrategy<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">4</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>./SearchStrategies/LiteralSearchStrategy<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">5</span>}],<span class="pl-c1">4</span><span class="pl-k">:</span>[<span class="pl-k">function</span>(<span class="pl-smi">require</span>,<span class="pl-smi">module</span>,<span class="pl-smi">exports</span>){</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.exports <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">FuzzySearchStrategy</span>()</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">FuzzySearchStrategy</span>(){</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">fuzzyRegexFromString</span>(<span class="pl-smi">string</span>){</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>( string.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.*?<span class="pl-pds">&#39;</span></span>), <span class="pl-s"><span class="pl-pds">&#39;</span>gi<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">matches</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">string</span>,<span class="pl-smi">crit</span>){</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( <span class="pl-k">typeof</span> string <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ){</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    string <span class="pl-k">=</span> string.trim()</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">!!</span>fuzzyRegexFromString(crit).<span class="pl-c1">test</span>(string)</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">},{}],<span class="pl-c1">5</span><span class="pl-k">:</span>[<span class="pl-k">function</span>(<span class="pl-smi">require</span>,<span class="pl-smi">module</span>,<span class="pl-smi">exports</span>){</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.exports <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">LiteralSearchStrategy</span>()</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">LiteralSearchStrategy</span>(){</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">matchesString</span>(<span class="pl-smi">string</span>,<span class="pl-smi">crit</span>){</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> string.<span class="pl-c1">toLowerCase</span>().<span class="pl-c1">indexOf</span>(crit.<span class="pl-c1">toLowerCase</span>()) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">matches</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">string</span>,<span class="pl-smi">crit</span>){</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( <span class="pl-k">typeof</span> string <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ){</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">    string <span class="pl-k">=</span> string.trim()</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> matchesString(string, crit)</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">},{}],<span class="pl-c1">6</span><span class="pl-k">:</span>[<span class="pl-k">function</span>(<span class="pl-smi">require</span>,<span class="pl-smi">module</span>,<span class="pl-smi">exports</span>){</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.exports <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">  compile<span class="pl-k">:</span> compile,</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">  setOptions<span class="pl-k">:</span> setOptions</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options <span class="pl-k">=</span> {}</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">options.pattern <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\{</span>(<span class="pl-c1">.</span><span class="pl-k">*?</span>)<span class="pl-cce">\}</span><span class="pl-pds">/</span>g</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">options.template <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">options</span>.<span class="pl-en">middleware</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){}</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">setOptions</span>(<span class="pl-smi">_options</span>){</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">  options.pattern <span class="pl-k">=</span> _options.pattern <span class="pl-k">||</span> options.pattern</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">  options.template <span class="pl-k">=</span> _options.template <span class="pl-k">||</span> options.template</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>( <span class="pl-k">typeof</span> _options.middleware <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ){</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">    options.middleware <span class="pl-k">=</span> _options.middleware</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">compile</span>(<span class="pl-smi">data</span>){</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> options.template.<span class="pl-c1">replace</span>(options.pattern, <span class="pl-k">function</span>(<span class="pl-smi">match</span>, <span class="pl-smi">prop</span>) {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> value <span class="pl-k">=</span> options.middleware(prop, data[prop], options.template)</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( value <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> ){</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> value</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> data[prop] <span class="pl-k">||</span> match</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">},{}],<span class="pl-c1">7</span><span class="pl-k">:</span>[<span class="pl-k">function</span>(<span class="pl-smi">require</span>,<span class="pl-smi">module</span>,<span class="pl-smi">exports</span>){</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">;(<span class="pl-k">function</span>(<span class="pl-smi">window</span>, <span class="pl-smi">document</span>, <span class="pl-smi">undefined</span>){</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> options <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">    searchInput<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">    resultsContainer<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">    json<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">    searchResultTemplate<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li&gt;&lt;a href=&quot;{url}&quot; title=&quot;{desc}&quot;&gt;{title}&lt;/a&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">templateMiddleware</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){},</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">    noResultsText<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>No results found<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">    limit<span class="pl-k">:</span> <span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">    fuzzy<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">    exclude<span class="pl-k">:</span> []</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> requiredOptions <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>searchInput<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>resultsContainer<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>json<span class="pl-pds">&#39;</span></span>]</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> templater <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./Templater<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> repository <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./Repository<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> jsonLoader <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./JSONLoader<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> optionsValidator <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./OptionsValidator<span class="pl-pds">&#39;</span></span>)({</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">    required<span class="pl-k">:</span> requiredOptions</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> utils <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./utils<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    Public API</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  */</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">window</span>.<span class="pl-en">SimpleJekyllSearch</span> <span class="pl-k">=</span> <span class="pl-k">function</span> <span class="pl-en">SimpleJekyllSearch</span>(<span class="pl-smi">_options</span>){</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> errors <span class="pl-k">=</span> optionsValidator.validate(_options)</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( errors.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ){</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">      throwError(<span class="pl-s"><span class="pl-pds">&#39;</span>You must specify the following required options: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> requiredOptions)</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">    options <span class="pl-k">=</span> utils.merge(options, _options)</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">    templater.setOptions({</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">      template<span class="pl-k">:</span> options.searchResultTemplate,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">      middleware<span class="pl-k">:</span> options.templateMiddleware,</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">    repository.setOptions({</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">      fuzzy<span class="pl-k">:</span> options.fuzzy,</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">      limit<span class="pl-k">:</span> options.limit,</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( utils.isJSON(options.json) ){</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">      initWithJSON(options.json)</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">    }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">      initWithURL(options.json)</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// for backwards compatibility</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">window</span>.SimpleJekyllSearch.init <span class="pl-k">=</span> <span class="pl-c1">window</span>.SimpleJekyllSearch</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">initWithJSON</span>(<span class="pl-smi">json</span>){</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">    repository.put(json)</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">    registerInput()</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">initWithURL</span>(<span class="pl-smi">url</span>){</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">    jsonLoader.<span class="pl-c1">load</span>(url, <span class="pl-k">function</span>(<span class="pl-smi">err</span>,<span class="pl-smi">json</span>){</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>( err ){</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">        throwError(<span class="pl-s"><span class="pl-pds">&#39;</span>failed to get JSON (<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> url <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">      initWithJSON(json)</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">emptyResultsContainer</span>(){</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">    options.resultsContainer.innerHTML <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">appendToResultsContainer</span>(<span class="pl-smi">text</span>){</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">    options.resultsContainer.innerHTML <span class="pl-k">+=</span> text</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">registerInput</span>(){</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">    options.searchInput.addEventListener(<span class="pl-s"><span class="pl-pds">&#39;</span>keyup<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">      emptyResultsContainer()</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>( e.<span class="pl-c1">target</span>.<span class="pl-c1">value</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ){</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">        render( repository.<span class="pl-c1">search</span>(e.<span class="pl-c1">target</span>.<span class="pl-c1">value</span>) )</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">render</span>(<span class="pl-smi">results</span>){</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( results.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> ){</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> appendToResultsContainer(options.noResultsText)</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> results.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">      appendToResultsContainer( templater.<span class="pl-c1">compile</span>(results[i]) )</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">throwError</span>(<span class="pl-smi">message</span>){ <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SimpleJekyllSearch --- <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> message) }</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">})(<span class="pl-c1">window</span>, <span class="pl-c1">document</span>);</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">},{<span class="pl-s"><span class="pl-pds">&quot;</span>./JSONLoader<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">1</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>./OptionsValidator<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">2</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>./Repository<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">3</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>./Templater<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">6</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>./utils<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">8</span>}],<span class="pl-c1">8</span><span class="pl-k">:</span>[<span class="pl-k">function</span>(<span class="pl-smi">require</span>,<span class="pl-smi">module</span>,<span class="pl-smi">exports</span>){</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.exports <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">  merge<span class="pl-k">:</span> merge,</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">  isJSON<span class="pl-k">:</span> isJSON,</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">merge</span>(<span class="pl-smi">defaultParams</span>, <span class="pl-smi">mergeParams</span>){</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> mergedOptions <span class="pl-k">=</span> {}</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span>(<span class="pl-k">var</span> option <span class="pl-k">in</span> defaultParams){</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">    mergedOptions[option] <span class="pl-k">=</span> defaultParams[option]</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( mergeParams[option] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> ){</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">      mergedOptions[option] <span class="pl-k">=</span> mergeParams[option]</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> mergedOptions</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">isJSON</span>(<span class="pl-smi">json</span>){</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>( json <span class="pl-k">instanceof</span> <span class="pl-c1">Object</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(<span class="pl-c1">JSON</span>.stringify(json)) ){</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">  }<span class="pl-k">catch</span>(e){</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">},{}]},{},[<span class="pl-c1">7</span>])</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWlwaC9Eb2N1bWVudHMvcGxheWdyb3VuZC9TaW1wbGUtSmVreWxsLVNlYXJjaC9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2FpcGgvRG9jdW1lbnRzL3BsYXlncm91bmQvU2ltcGxlLUpla3lsbC1TZWFyY2gvc3JjL0pTT05Mb2FkZXIuanMiLCIvVXNlcnMvc2FpcGgvRG9jdW1lbnRzL3BsYXlncm91bmQvU2ltcGxlLUpla3lsbC1TZWFyY2gvc3JjL09wdGlvbnNWYWxpZGF0b3IuanMiLCIvVXNlcnMvc2FpcGgvRG9jdW1lbnRzL3BsYXlncm91bmQvU2ltcGxlLUpla3lsbC1TZWFyY2gvc3JjL1JlcG9zaXRvcnkuanMiLCIvVXNlcnMvc2FpcGgvRG9jdW1lbnRzL3BsYXlncm91bmQvU2ltcGxlLUpla3lsbC1TZWFyY2gvc3JjL1NlYXJjaFN0cmF0ZWdpZXMvRnV6enlTZWFyY2hTdHJhdGVneS5qcyIsIi9Vc2Vycy9zYWlwaC9Eb2N1bWVudHMvcGxheWdyb3VuZC9TaW1wbGUtSmVreWxsLVNlYXJjaC9zcmMvU2VhcmNoU3RyYXRlZ2llcy9MaXRlcmFsU2VhcmNoU3RyYXRlZ3kuanMiLCIvVXNlcnMvc2FpcGgvRG9jdW1lbnRzL3BsYXlncm91bmQvU2ltcGxlLUpla3lsbC1TZWFyY2gvc3JjL1RlbXBsYXRlci5qcyIsIi9Vc2Vycy9zYWlwaC9Eb2N1bWVudHMvcGxheWdyb3VuZC9TaW1wbGUtSmVreWxsLVNlYXJjaC9zcmMvZmFrZV83NzUxZWJmMC5qcyIsIi9Vc2Vycy9zYWlwaC9Eb2N1bWVudHMvcGxheWdyb3VuZC9TaW1wbGUtSmVreWxsLVNlYXJjaC9zcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2FkOiBsb2FkXG59XG5cbmZ1bmN0aW9uIGxvYWQobG9jYXRpb24sY2FsbGJhY2spe1xuICB2YXIgeGhyXG4gIGlmKCB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgKXtcbiAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICB9ZWxzZXtcbiAgICB4aHIgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKVxuICB9XG5cbiAgeGhyLm9wZW4oJ0dFVCcsIGxvY2F0aW9uLCB0cnVlKVxuXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICggeGhyLnN0YXR1cz09PTIwMCAmJiB4aHIucmVhZHlTdGF0ZT09PTQgKXtcbiAgICAgIHRyeXtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSApXG4gICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHhoci5zZW5kKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBPcHRpb25zVmFsaWRhdG9yKHBhcmFtcyl7XG4gIGlmKCAhdmFsaWRhdGVQYXJhbXMocGFyYW1zKSApe1xuICAgIHRocm93IG5ldyBFcnJvcignLS0gT3B0aW9uc1ZhbGlkYXRvcjogcmVxdWlyZWQgb3B0aW9ucyBtaXNzaW5nJylcbiAgfVxuICBpZiggISh0aGlzIGluc3RhbmNlb2YgT3B0aW9uc1ZhbGlkYXRvcikgKXtcbiAgICByZXR1cm4gbmV3IE9wdGlvbnNWYWxpZGF0b3IocGFyYW1zKVxuICB9XG5cbiAgdmFyIHJlcXVpcmVkT3B0aW9ucyA9IHBhcmFtcy5yZXF1aXJlZFxuXG4gIHRoaXMuZ2V0UmVxdWlyZWRPcHRpb25zID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gcmVxdWlyZWRPcHRpb25zXG4gIH1cblxuICB0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24ocGFyYW1ldGVycyl7XG4gICAgdmFyIGVycm9ycyA9IFtdXG4gICAgcmVxdWlyZWRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24ocmVxdWlyZWRPcHRpb25OYW1lKXtcbiAgICAgIGlmKCBwYXJhbWV0ZXJzW3JlcXVpcmVkT3B0aW9uTmFtZV0gPT09IHVuZGVmaW5lZCApe1xuICAgICAgICBlcnJvcnMucHVzaChyZXF1aXJlZE9wdGlvbk5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVBhcmFtcyhwYXJhbXMpe1xuICAgIGlmKCAhcGFyYW1zICkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBwYXJhbXMucmVxdWlyZWQgIT09IHVuZGVmaW5lZCAmJiBwYXJhbXMucmVxdWlyZWQgaW5zdGFuY2VvZiBBcnJheVxuICB9XG59IiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHV0OnB1dCxcbiAgY2xlYXI6IGNsZWFyLFxuICBnZXQ6IGdldCxcbiAgc2VhcmNoOiBzZWFyY2gsXG4gIHNldE9wdGlvbnM6IHNldE9wdGlvbnNcbn1cblxudmFyIEZ1enp5U2VhcmNoU3RyYXRlZ3kgPSByZXF1aXJlKCcuL1NlYXJjaFN0cmF0ZWdpZXMvRnV6enlTZWFyY2hTdHJhdGVneScpXG52YXIgTGl0ZXJhbFNlYXJjaFN0cmF0ZWd5ID0gcmVxdWlyZSgnLi9TZWFyY2hTdHJhdGVnaWVzL0xpdGVyYWxTZWFyY2hTdHJhdGVneScpXG5cbnZhciBkYXRhID0gW11cbnZhciBvcHQgPSB7fVxub3B0LmZ1enp5ID0gZmFsc2Vcbm9wdC5saW1pdCA9IDEwXG5vcHQuc2VhcmNoU3RyYXRlZ3kgPSBvcHQuZnV6enkgPyBGdXp6eVNlYXJjaFN0cmF0ZWd5IDogTGl0ZXJhbFNlYXJjaFN0cmF0ZWd5XG5cblxuZnVuY3Rpb24gcHV0KGRhdGEpe1xuICBpZiggaXNPYmplY3QoZGF0YSkgKXtcbiAgICByZXR1cm4gYWRkT2JqZWN0KGRhdGEpXG4gIH1cbiAgaWYoIGlzQXJyYXkoZGF0YSkgKXtcbiAgICByZXR1cm4gYWRkQXJyYXkoZGF0YSlcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5mdW5jdGlvbiBjbGVhcigpe1xuICBkYXRhLmxlbmd0aCA9IDBcbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gZ2V0KCl7XG4gIHJldHVybiBkYXRhXG59XG5cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKXsgcmV0dXJuICEhb2JqICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJyB9XG5mdW5jdGlvbiBpc0FycmF5KG9iail7IHJldHVybiAhIW9iaiAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJyB9XG5cbmZ1bmN0aW9uIGFkZE9iamVjdChfZGF0YSl7XG4gIGRhdGEucHVzaChfZGF0YSlcbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gYWRkQXJyYXkoX2RhdGEpe1xuICB2YXIgYWRkZWQgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IF9kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICBpZiggaXNPYmplY3QoX2RhdGFbaV0pICl7XG4gICAgICBhZGRlZC5wdXNoKGFkZE9iamVjdChfZGF0YVtpXSkpXG4gICAgfVxuICB9XG4gIHJldHVybiBhZGRlZFxufVxuXG5cblxuZnVuY3Rpb24gc2VhcmNoKGNyaXQpe1xuICBpZiggIWNyaXQgKXtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gZmluZE1hdGNoZXMoZGF0YSxjcml0LG9wdC5zZWFyY2hTdHJhdGVneSxvcHQpXG59XG5cbmZ1bmN0aW9uIHNldE9wdGlvbnMoX29wdCl7XG4gIG9wdCA9IF9vcHQgfHwge31cblxuICBvcHQuZnV6enkgPSBfb3B0LmZ1enp5IHx8IGZhbHNlXG4gIG9wdC5saW1pdCA9IF9vcHQubGltaXQgfHwgMTBcbiAgb3B0LnNlYXJjaFN0cmF0ZWd5ID0gX29wdC5mdXp6eSA/IEZ1enp5U2VhcmNoU3RyYXRlZ3kgOiBMaXRlcmFsU2VhcmNoU3RyYXRlZ3lcbn1cblxuZnVuY3Rpb24gZmluZE1hdGNoZXMoZGF0YSxjcml0LHN0cmF0ZWd5LG9wdCl7XG4gIHZhciBtYXRjaGVzID0gW11cbiAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoICYmIG1hdGNoZXMubGVuZ3RoIDwgb3B0LmxpbWl0OyBpKyspIHtcbiAgICB2YXIgbWF0Y2ggPSBmaW5kTWF0Y2hlc0luT2JqZWN0KGRhdGFbaV0sY3JpdCxzdHJhdGVneSxvcHQpXG4gICAgaWYoIG1hdGNoICl7XG4gICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpXG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaGVzXG59XG5cbmZ1bmN0aW9uIGZpbmRNYXRjaGVzSW5PYmplY3Qob2JqLGNyaXQsc3RyYXRlZ3ksb3B0KXtcbiAgZm9yKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYoICFpc0V4Y2x1ZGVkKG9ialtrZXldLCBvcHQuZXhjbHVkZSkgJiYgc3RyYXRlZ3kubWF0Y2hlcyhvYmpba2V5XSwgY3JpdCkgKXtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFeGNsdWRlZCh0ZXJtLCBleGNsdWRlZFRlcm1zKXtcbiAgdmFyIGV4Y2x1ZGVkID0gZmFsc2VcbiAgZXhjbHVkZWRUZXJtcyA9IGV4Y2x1ZGVkVGVybXMgfHwgW11cbiAgZm9yICh2YXIgaSA9IDA7IGk8ZXhjbHVkZWRUZXJtcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBleGNsdWRlZFRlcm0gPSBleGNsdWRlZFRlcm1zW2ldXG4gICAgaWYoICFleGNsdWRlZCAmJiBuZXcgUmVnRXhwKHRlcm0pLnRlc3QoZXhjbHVkZWRUZXJtKSApe1xuICAgICAgZXhjbHVkZWQgPSB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBleGNsdWRlZFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBGdXp6eVNlYXJjaFN0cmF0ZWd5KClcblxuZnVuY3Rpb24gRnV6enlTZWFyY2hTdHJhdGVneSgpe1xuICBmdW5jdGlvbiBmdXp6eVJlZ2V4RnJvbVN0cmluZyhzdHJpbmcpe1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCBzdHJpbmcuc3BsaXQoJycpLmpvaW4oJy4qPycpLCAnZ2knKVxuICB9XG5cbiAgdGhpcy5tYXRjaGVzID0gZnVuY3Rpb24oc3RyaW5nLGNyaXQpe1xuICAgIGlmKCB0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyApe1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHN0cmluZyA9IHN0cmluZy50cmltKClcbiAgICByZXR1cm4gISFmdXp6eVJlZ2V4RnJvbVN0cmluZyhjcml0KS50ZXN0KHN0cmluZylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBMaXRlcmFsU2VhcmNoU3RyYXRlZ3koKVxuXG5mdW5jdGlvbiBMaXRlcmFsU2VhcmNoU3RyYXRlZ3koKXtcbiAgZnVuY3Rpb24gbWF0Y2hlc1N0cmluZyhzdHJpbmcsY3JpdCl7XG4gICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoY3JpdC50b0xvd2VyQ2FzZSgpKSA+PSAwXG4gIH1cblxuICB0aGlzLm1hdGNoZXMgPSBmdW5jdGlvbihzdHJpbmcsY3JpdCl7XG4gICAgaWYoIHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnICl7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgc3RyaW5nID0gc3RyaW5nLnRyaW0oKVxuICAgIHJldHVybiBtYXRjaGVzU3RyaW5nKHN0cmluZywgY3JpdClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcGlsZTogY29tcGlsZSxcbiAgc2V0T3B0aW9uczogc2V0T3B0aW9uc1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnBhdHRlcm4gPSAvXFx7KC4qPylcXH0vZ1xub3B0aW9ucy50ZW1wbGF0ZSA9ICcnXG5vcHRpb25zLm1pZGRsZXdhcmUgPSBmdW5jdGlvbigpe31cblxuZnVuY3Rpb24gc2V0T3B0aW9ucyhfb3B0aW9ucyl7XG4gIG9wdGlvbnMucGF0dGVybiA9IF9vcHRpb25zLnBhdHRlcm4gfHwgb3B0aW9ucy5wYXR0ZXJuXG4gIG9wdGlvbnMudGVtcGxhdGUgPSBfb3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlXG4gIGlmKCB0eXBlb2YgX29wdGlvbnMubWlkZGxld2FyZSA9PT0gJ2Z1bmN0aW9uJyApe1xuICAgIG9wdGlvbnMubWlkZGxld2FyZSA9IF9vcHRpb25zLm1pZGRsZXdhcmVcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21waWxlKGRhdGEpe1xuICByZXR1cm4gb3B0aW9ucy50ZW1wbGF0ZS5yZXBsYWNlKG9wdGlvbnMucGF0dGVybiwgZnVuY3Rpb24obWF0Y2gsIHByb3ApIHtcbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zLm1pZGRsZXdhcmUocHJvcCwgZGF0YVtwcm9wXSwgb3B0aW9ucy50ZW1wbGF0ZSlcbiAgICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApe1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBkYXRhW3Byb3BdIHx8IG1hdGNoXG4gIH0pXG59XG4iLCI7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCl7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIHZhciBvcHRpb25zID0ge1xuICAgIHNlYXJjaElucHV0OiBudWxsLFxuICAgIHJlc3VsdHNDb250YWluZXI6IG51bGwsXG4gICAganNvbjogW10sXG4gICAgc2VhcmNoUmVzdWx0VGVtcGxhdGU6ICc8bGk+PGEgaHJlZj1cInt1cmx9XCIgdGl0bGU9XCJ7ZGVzY31cIj57dGl0bGV9PC9hPjwvbGk+JyxcbiAgICB0ZW1wbGF0ZU1pZGRsZXdhcmU6IGZ1bmN0aW9uKCl7fSxcbiAgICBub1Jlc3VsdHNUZXh0OiAnTm8gcmVzdWx0cyBmb3VuZCcsXG4gICAgbGltaXQ6IDEwLFxuICAgIGZ1enp5OiBmYWxzZSxcbiAgICBleGNsdWRlOiBbXVxuICB9XG5cbiAgdmFyIHJlcXVpcmVkT3B0aW9ucyA9IFsnc2VhcmNoSW5wdXQnLCdyZXN1bHRzQ29udGFpbmVyJywnanNvbiddXG5cbiAgdmFyIHRlbXBsYXRlciA9IHJlcXVpcmUoJy4vVGVtcGxhdGVyJylcbiAgdmFyIHJlcG9zaXRvcnkgPSByZXF1aXJlKCcuL1JlcG9zaXRvcnknKVxuICB2YXIganNvbkxvYWRlciA9IHJlcXVpcmUoJy4vSlNPTkxvYWRlcicpXG4gIHZhciBvcHRpb25zVmFsaWRhdG9yID0gcmVxdWlyZSgnLi9PcHRpb25zVmFsaWRhdG9yJykoe1xuICAgIHJlcXVpcmVkOiByZXF1aXJlZE9wdGlvbnNcbiAgfSlcbiAgdmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbiAgLypcbiAgICBQdWJsaWMgQVBJXG4gICovXG4gIHdpbmRvdy5TaW1wbGVKZWt5bGxTZWFyY2ggPSBmdW5jdGlvbiBTaW1wbGVKZWt5bGxTZWFyY2goX29wdGlvbnMpe1xuICAgIHZhciBlcnJvcnMgPSBvcHRpb25zVmFsaWRhdG9yLnZhbGlkYXRlKF9vcHRpb25zKVxuICAgIGlmKCBlcnJvcnMubGVuZ3RoID4gMCApe1xuICAgICAgdGhyb3dFcnJvcignWW91IG11c3Qgc3BlY2lmeSB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIG9wdGlvbnM6ICcgKyByZXF1aXJlZE9wdGlvbnMpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHV0aWxzLm1lcmdlKG9wdGlvbnMsIF9vcHRpb25zKVxuXG4gICAgdGVtcGxhdGVyLnNldE9wdGlvbnMoe1xuICAgICAgdGVtcGxhdGU6IG9wdGlvbnMuc2VhcmNoUmVzdWx0VGVtcGxhdGUsXG4gICAgICBtaWRkbGV3YXJlOiBvcHRpb25zLnRlbXBsYXRlTWlkZGxld2FyZSxcbiAgICB9KVxuXG4gICAgcmVwb3NpdG9yeS5zZXRPcHRpb25zKHtcbiAgICAgIGZ1enp5OiBvcHRpb25zLmZ1enp5LFxuICAgICAgbGltaXQ6IG9wdGlvbnMubGltaXQsXG4gICAgfSlcblxuICAgIGlmKCB1dGlscy5pc0pTT04ob3B0aW9ucy5qc29uKSApe1xuICAgICAgaW5pdFdpdGhKU09OKG9wdGlvbnMuanNvbilcbiAgICB9ZWxzZXtcbiAgICAgIGluaXRXaXRoVVJMKG9wdGlvbnMuanNvbilcbiAgICB9XG4gIH1cblxuICAvLyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgd2luZG93LlNpbXBsZUpla3lsbFNlYXJjaC5pbml0ID0gd2luZG93LlNpbXBsZUpla3lsbFNlYXJjaFxuXG5cbiAgZnVuY3Rpb24gaW5pdFdpdGhKU09OKGpzb24pe1xuICAgIHJlcG9zaXRvcnkucHV0KGpzb24pXG4gICAgcmVnaXN0ZXJJbnB1dCgpXG4gIH1cblxuICBmdW5jdGlvbiBpbml0V2l0aFVSTCh1cmwpe1xuICAgIGpzb25Mb2FkZXIubG9hZCh1cmwsIGZ1bmN0aW9uKGVycixqc29uKXtcbiAgICAgIGlmKCBlcnIgKXtcbiAgICAgICAgdGhyb3dFcnJvcignZmFpbGVkIHRvIGdldCBKU09OICgnICsgdXJsICsgJyknKVxuICAgICAgfVxuICAgICAgaW5pdFdpdGhKU09OKGpzb24pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtcHR5UmVzdWx0c0NvbnRhaW5lcigpe1xuICAgIG9wdGlvbnMucmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kVG9SZXN1bHRzQ29udGFpbmVyKHRleHQpe1xuICAgIG9wdGlvbnMucmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gdGV4dFxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJJbnB1dCgpe1xuICAgIG9wdGlvbnMuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKXtcbiAgICAgIGVtcHR5UmVzdWx0c0NvbnRhaW5lcigpXG4gICAgICBpZiggZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMCApe1xuICAgICAgICByZW5kZXIoIHJlcG9zaXRvcnkuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKSApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcihyZXN1bHRzKXtcbiAgICBpZiggcmVzdWx0cy5sZW5ndGggPT09IDAgKXtcbiAgICAgIHJldHVybiBhcHBlbmRUb1Jlc3VsdHNDb250YWluZXIob3B0aW9ucy5ub1Jlc3VsdHNUZXh0KVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFwcGVuZFRvUmVzdWx0c0NvbnRhaW5lciggdGVtcGxhdGVyLmNvbXBpbGUocmVzdWx0c1tpXSkgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSl7IHRocm93IG5ldyBFcnJvcignU2ltcGxlSmVreWxsU2VhcmNoIC0tLSAnKyBtZXNzYWdlKSB9XG59KSh3aW5kb3csIGRvY3VtZW50KTsiLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXJnZTogbWVyZ2UsXG4gIGlzSlNPTjogaXNKU09OLFxufVxuXG5mdW5jdGlvbiBtZXJnZShkZWZhdWx0UGFyYW1zLCBtZXJnZVBhcmFtcyl7XG4gIHZhciBtZXJnZWRPcHRpb25zID0ge31cbiAgZm9yKHZhciBvcHRpb24gaW4gZGVmYXVsdFBhcmFtcyl7XG4gICAgbWVyZ2VkT3B0aW9uc1tvcHRpb25dID0gZGVmYXVsdFBhcmFtc1tvcHRpb25dXG4gICAgaWYoIG1lcmdlUGFyYW1zW29wdGlvbl0gIT09IHVuZGVmaW5lZCApe1xuICAgICAgbWVyZ2VkT3B0aW9uc1tvcHRpb25dID0gbWVyZ2VQYXJhbXNbb3B0aW9uXVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VkT3B0aW9uc1xufVxuXG5mdW5jdGlvbiBpc0pTT04oanNvbil7XG4gIHRyeXtcbiAgICBpZigganNvbiBpbnN0YW5jZW9mIE9iamVjdCAmJiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGpzb24pKSApe1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1jYXRjaChlKXtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIl19</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.06306s from github-fe126-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2e7fc3d264a208e1383de85b815379beccff56c1f977714515d4cac7820eef3e.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-ad3afa2166b01280a8ade8889a9a7dea8ec9428d62c892b216456b35e9574dcc.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>


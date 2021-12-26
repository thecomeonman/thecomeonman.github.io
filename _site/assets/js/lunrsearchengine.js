
var documents = [{
    "id": 0,
    "url": "http://0.0.0.0:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://0.0.0.0:4000/about",
    "title": "About",
    "body": "Hello. I'm a full stack data scientist with over ten years of experience working on a wide variety of problems, domains, environments, and with teams and clients from across the world. This website lists things that have kept me busy. Get in TouchTwitter Github e-mail: mail dot thecomeonman at gmail "
    }, {
    "id": 2,
    "url": "http://0.0.0.0:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://0.0.0.0:4000/",
    "title": "Home",
    "body": "      Featured:                                                                       POV                  :         An R library with some high and low level functions for 3D geometry in a ggplot2 compatible fashion:                                                                                                                                                                                                 Measuring Defensive Interactions                  :         A model to quantify the impact of a player on preventing goals, passes, and carries from happening. :                                                                                                                                                                               RAO - Road Accessibility Optimiser                  :         An R-Shiny based tool for solving the warehouse problem:                                                                                                                                         All Projects:                                 Measuring Press Resistance              :       Measuring successful execution under pressure and comparing it to a baseline:                                                                                                                         Predicting Transfer Successes              :       Trying to predict successful transfers using VAEP:                                                                                                                         Intent vs. Outcome Based Models              :       Most models seem to be outcome based. What changes if try to incorporate intent?:                                                                                                                         xG Based Infographics              :       Understanding how to use xG instead of just summing it up:                                                                                                                         Coda Bonito              :       An R library for football analytics which offers visualisations, simple models, and other things:                                                                                                                         Player Profile Visualisation              :       Data dense scouting report of players:                                                                                                        &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://0.0.0.0:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://0.0.0.0:4000/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Projects:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://0.0.0.0:4000/measuring-press-resistance/",
    "title": "Measuring Press Resistance",
    "body": "2021/09/01 - We build a model to predict how likely an average player is to successfully perform the action of their choice. Think of it as having an xWhateverTheyAreDoing model. Next we use it for the actions of these players when they were under pressure. By comparing how often specific players executed an action successfully compared to the model estimated probabilities of them executing their actions successfully, we can find out players that are good at escaping pressures, and so on. Full post here "
    }, {
    "id": 7,
    "url": "http://0.0.0.0:4000/predicting-transfer-successes/",
    "title": "Predicting Transfer Successes",
    "body": "2021/06/01 - Using graph models and regreesion to try and predict the change in VAEP per minute, as a proxy for performance, based on the leagues, teams, and some other factors. Full post here "
    }, {
    "id": 8,
    "url": "http://0.0.0.0:4000/outcome-vs-intent/",
    "title": "Intent vs. Outcome Based Models",
    "body": "2021/06/01 - Pass related models, such as pass success probability and pitch control, usually implicitly assume that a pass would precisely reach a target coordinate. However, we need to account for the fact that sometimes, and probably very often, the player may intend to pass to a particular location but may pass somewhere in the neighbourhood of that location and not exactly at that location. Full post here "
    }, {
    "id": 9,
    "url": "http://0.0.0.0:4000/xGInfographics/",
    "title": "xG Based Infographics",
    "body": "2021/04/01 - Posting sums of xG over the game is a common practice on Twiiter. And it’s wrong. Probabilities are weird and just summing them is over simplifying it. I have put together an xG based inforgraphic of a game. This is created after simulating the sequence of shots and the xG of each many many times over, recording each shot as a goal or not based on the simulation, and doing aggregations and rolling sums of the simulated goals. This is not meant to be an easy to digest, Twitter friendly, kind of viz. That’s why I’m not calling it a viz. My objective is to get viewers to appreciate the nuance to using xG to predicting game results, and in general the nuance behind working with probabilities. xG totals and timelines is clearly terrific to get engagement on social media but you may not want to use it like that at your job. You don’t recruit players based on their pass completion percentage either, do you? Full post here "
    }, {
    "id": 10,
    "url": "http://0.0.0.0:4000/pov/",
    "title": "POV",
    "body": "2021/04/01 - Another video of Thiago’s passing Aguero’s EPL career Repository here with code "
    }, {
    "id": 11,
    "url": "http://0.0.0.0:4000/coda-bonito/",
    "title": "Coda Bonito",
    "body": "2021/04/01 - An R library that has some football analysis and visualisation helper functions. Some examples below -       Plot sonars   Performance lanes   Pitch control                        xG build up   Football pitch   Radars                  Repository here with code "
    }, {
    "id": 12,
    "url": "http://0.0.0.0:4000/player-profile-viz/",
    "title": "Player Profile Visualisation",
    "body": "2020/08/01 - Data dense scouting report of players "
    }, {
    "id": 13,
    "url": "http://0.0.0.0:4000/xPo/",
    "title": "xPo",
    "body": "2020/05/01 - An framework to quantify the contributions of players who aren’t the ones registering assists or scoring goals. This concept and the dashboard won an honourable mention at the Seattle Sounders Analytics Competition 2020.  A post explaining how it works with some EPL teams and players analysed A dashboard which you could use to analyse a team built on data from Barcelona’s 2008-09 season data from Statsbomb"
    }, {
    "id": 14,
    "url": "http://0.0.0.0:4000/player-similarity-from-aggregated-data/",
    "title": "Player Similarity Using Aggregated Data",
    "body": "2020/05/01 - Built a model to identify players with similar or better profiles. Built an interactive visualisation around it to understand various aspects of the player better. Original post here. in which I analyse multiple players amongst the transfer rumours at the point and anecdotally validate the model with some of the results that show up, eg. Fernandinho’s list has pretty much every player whom Guardiola has either played in the same position earlier or was rumoured to be interested in buying - Alcantara, Jorginho, Busquets, and Rodri, amongst others who have similar playing styles. I also posted this Twitter thread for some transfers during the summer transfer window of 2020. I also posted my attempt at finding replacements for Messi and Suarez here around the 2020 summer transfer window. Of course, Dybala came on that list - "
    }, {
    "id": 15,
    "url": "http://0.0.0.0:4000/defensive-interactions/",
    "title": "Measuring Defensive Interactions",
    "body": "2020/02/15 - Used tracking data to quantify off ball defensive activity, possibly one of the first methods to do so. This method was:  Presented at the Stats Preform Pro Forum 2021 Covered on a Friends of Tracking talk Covered in an article in SpaceSpaceSpace Covered in an article in Analytics FC Blog"
    }, {
    "id": 16,
    "url": "http://0.0.0.0:4000/montek/",
    "title": "Montek",
    "body": "2018/03/01 - A very flexible and extendible tool which can be used in a browser to create and run your own Monte Carlo simulations. Repository here with code "
    }, {
    "id": 17,
    "url": "http://0.0.0.0:4000/rao/",
    "title": "RAO - Road Accessibility Optimiser",
    "body": "2017/09/01 - A tool which can be used in a browser to maximise the accessibility of charging stations with the minimum number of charging stations over a given road network. You can use it for maximising the accessibility of anything else though, doesn’t have to be just charging stations. Repository here with code "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});
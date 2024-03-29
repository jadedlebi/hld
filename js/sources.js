function addMapSources(map) {
    
    // MINORITY POP SOURCE
    // map.addSource("min-pop", {
    //     type: "vector",
    //     url: "mapbox://jedlebi.1n33b2o4"
    // });

    // HOLC SOURCES
    map.addSource("holc", {
        type: "vector",
        url: "mapbox://jedlebi.697c6bxp"
    });
    map.addSource("holc-boundary", {
        type: "vector",
        url: "mapbox://jedlebi.3w72uw8h"
    });
    
    // HLD COUNTY AND CBSA SOURCES
    map.addSource("hld-co1", {
        type: "vector",
        url: "mapbox://jedlebi.11bd7d8n"
    });
    map.addSource("hld-co2", {
        type: "vector",
        url: "mapbox://jedlebi.136xvf85"
    });
    map.addSource("hld-cbsa1", {
        type: "vector",
        url: "mapbox://jedlebi.6gg1e5d7"
    });
    map.addSource("hld-cbsa2", {
        type: "vector",
        url: "mapbox://jedlebi.57b79mao"
    });

    // HLD TRACT POLYGON SOURCES
    map.addSource("hld-0", {
        type: "vector",
        url: "mapbox://jedlebi.7uyakeap"
    });
    map.addSource("hld-11", {
        type: "vector",
        url: "mapbox://jedlebi.ckivzw0y"
    });
    map.addSource("hld-12", {
        type: "vector",
        url: "mapbox://jedlebi.2kjpyx3u"
    });
    map.addSource("hld-13", {
        type: "vector",
        url: "mapbox://jedlebi.c1pc45fv"
    });
    map.addSource("hld-14", {
        type: "vector",
        url: "mapbox://jedlebi.684om161"
    });
    map.addSource("hld-21", {
        type: "vector",
        url: "mapbox://jedlebi.6in3br79"
    });
    map.addSource("hld-22", {
        type: "vector",
        url: "mapbox://jedlebi.d5554xta"
    });
    map.addSource("hld-23", {
        type: "vector",
        url: "mapbox://jedlebi.2sivnefb"
    });
    map.addSource("hld-24", {
        type: "vector",
        url: "mapbox://jedlebi.82k91cy0"
    });
    map.addSource("hld-31", {
        type: "vector",
        url: "mapbox://jedlebi.bc6mo3o5"
    });
    map.addSource("hld-32", {
        type: "vector",
        url: "mapbox://jedlebi.80utplhf"
    });
    map.addSource("hld-33", {
        type: "vector",
        url: "mapbox://jedlebi.0ri5zwk7"
    });
    map.addSource("hld-34", {
        type: "vector",
        url: "mapbox://jedlebi.7a45ckzo"
    });
    map.addSource("hld-41", {
        type: "vector",
        url: "mapbox://jedlebi.1orjtbh3"
    });
    map.addSource("hld-42", {
        type: "vector",
        url: "mapbox://jedlebi.93l13jd8"
    });
    map.addSource("hld-43", {
        type: "vector",
        url: "mapbox://jedlebi.adhjejte"
    });
    map.addSource("hld-44", {
        type: "vector",
        url: "mapbox://jedlebi.1ry9e906"
    });

    // HLD TRACT CIRCLE SOURCES
    map.addSource("hld-c0", {
        type: "vector",
        url: "mapbox://jedlebi.1hf1dflv"
    });
    map.addSource("hld-c1", {
        type: "vector",
        url: "mapbox://jedlebi.9ff494jh"
    });
    map.addSource("hld-c2", {
        type: "vector",
        url: "mapbox://jedlebi.0motqnmx"
    });
    map.addSource("hld-c31", {
        type: "vector",
        url: "mapbox://jedlebi.5jlgfvo5"
    });
    map.addSource("hld-c32", {
        type: "vector",
        url: "mapbox://jedlebi.3b1uhi66"
    });
    map.addSource("hld-c33", {
        type: "vector",
        url: "mapbox://jedlebi.4sw3ci45"
    });
    map.addSource("hld-c4", {
        type: "vector",
        url: "mapbox://jedlebi.7gh96y7y"
    });
}

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
        url: "mapbox://jedlebi.4288ejea"
    });
    map.addSource("hld-11", {
        type: "vector",
        url: "mapbox://jedlebi.6yc77zw0"
    });
    map.addSource("hld-12", {
        type: "vector",
        url: "mapbox://jedlebi.c8msph5h"
    });
    map.addSource("hld-13", {
        type: "vector",
        url: "mapbox://jedlebi.asjw9gd3"
    });
    map.addSource("hld-14", {
        type: "vector",
        url: "mapbox://jedlebi.acygmt2m"
    });
    map.addSource("hld-21", {
        type: "vector",
        url: "mapbox://jedlebi.bvtolgh6"
    });
    map.addSource("hld-22", {
        type: "vector",
        url: "mapbox://jedlebi.0cjlv6bv"
    });
    map.addSource("hld-23", {
        type: "vector",
        url: "mapbox://jedlebi.aaqrgtfv"
    });
    map.addSource("hld-24", {
        type: "vector",
        url: "mapbox://jedlebi.6hjfx4nu"
    });
    map.addSource("hld-31", {
        type: "vector",
        url: "mapbox://jedlebi.anrjta64"
    });
    map.addSource("hld-32", {
        type: "vector",
        url: "mapbox://jedlebi.a1wwj6lp"
    });
    map.addSource("hld-33", {
        type: "vector",
        url: "mapbox://jedlebi.6089k8yo"
    });
    map.addSource("hld-34", {
        type: "vector",
        url: "mapbox://jedlebi.ah2ju266"
    });
    map.addSource("hld-41", {
        type: "vector",
        url: "mapbox://jedlebi.b58ghezr"
    });
    map.addSource("hld-42", {
        type: "vector",
        url: "mapbox://jedlebi.8808ld85"
    });
    map.addSource("hld-43", {
        type: "vector",
        url: "mapbox://jedlebi.4tje7i23"
    });
    map.addSource("hld-44", {
        type: "vector",
        url: "mapbox://jedlebi.a1s7f4km"
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

//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
/*specifying the extent of the map*/
//var extents = new OpenLayers.Bounds(4079939, -162296, 4131475, -127987); 
var extents = new OpenLayers.Bounds(4860419, 2766516, 7065043, 4944092); 

/*loading various controls to the map*/
var control, controls = [];

   var map = new OpenLayers.Map("map" /*this map is the div id in the html code*/, {
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.ArgParser(),
            //new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('dropdown-content')}),
            new OpenLayers.Control.MousePosition(),
            //new OpenLayers.Control.ScaleLine(),
            new OpenLayers.Control.PanZoomBar(),
             //new OpenLayers.Control.Zoom(),
            new OpenLayers.Control.KeyboardDefaults()
        ],
        maxExtent: extents,
        minExtent: "auto",
        restrictedExtent: extents /*one cannot pan outside the specified extent*/
    },
        {projection: new OpenLayers.Projection("EPSG:4326")}, /*specifying the projection*/
    
         //EPSG:900913 or 3857 is web mercator and 4326 is wgs1984

       {units: 'degrees'},
       // {units: 'm'},
        {allOverlays: true} /*all other data added will overlay on the basemap*/
        );


   

 //var google_sat = new OpenLayers.Layer.Google("Google Satellite",{type:google.maps.MapTypeId.SATELLITE,numZoomLevels:40});

 var OSM = new OpenLayers.Layer.OSM("OpenStreetMap");  /*loading the OSM basemap*/


/*loading the overlays from GeoServer.web_map is the workspace name. Loading the layer as a WMS*/
  var a1 = new OpenLayers.Layer.WMS (
 "مرز ایران",
        "http://localhost:8080/geoserver/iranweb/wms",
        {layers:"iranweb:marz",transparent: true, format: "image/gif"},
        {visibility: true},
        {'displayInLayerSwitcher':true}
);

var a2 = new OpenLayers.Layer.WMS (
        "راه های ایران",
        "http://localhost:8080/geoserver/iranweb/wms",
        {layers:"iranweb:iranroads",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);

 var a3 = new OpenLayers.Layer.WMS (
        "مراکز استانها",
        "http://localhost:8080/geoserver/iranweb/wms",
        {layers:"iranweb:irancen",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);
var a4 = new OpenLayers.Layer.WMS (
        "استانها",
        "http://localhost:8080/geoserver/iranweb/wms",
        {layers:"iranweb:ostan",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);
var a5 = new OpenLayers.Layer.WMS (
        "مرزهای آبی",
        "http://localhost:8080/geoserver/iranweb/wms",
        {layers:"iranweb:seaslakes",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



/*adding the data to the map object*/ 

map.addLayers([OSM,a1,a2,a3,a4,a5]);

/*specifying the center of the map and a zoom level of 11*/

map.setCenter(new OpenLayers.LonLat(4099485,-142884),6 );
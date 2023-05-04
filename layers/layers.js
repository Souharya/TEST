var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_COLLEGEOUTERBOUNDARY_2 = new ol.format.GeoJSON();
var features_COLLEGEOUTERBOUNDARY_2 = format_COLLEGEOUTERBOUNDARY_2.readFeatures(json_COLLEGEOUTERBOUNDARY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLLEGEOUTERBOUNDARY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLLEGEOUTERBOUNDARY_2.addFeatures(features_COLLEGEOUTERBOUNDARY_2);
var lyr_COLLEGEOUTERBOUNDARY_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COLLEGEOUTERBOUNDARY_2, 
                style: style_COLLEGEOUTERBOUNDARY_2,
                interactive: true,
                title: '<img src="styles/legend/COLLEGEOUTERBOUNDARY_2.png" /> COLLEGE OUTER BOUNDARY'
            });
var format_ROADS_3 = new ol.format.GeoJSON();
var features_ROADS_3 = format_ROADS_3.readFeatures(json_ROADS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_3.addFeatures(features_ROADS_3);
var lyr_ROADS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROADS_3, 
                style: style_ROADS_3,
                interactive: true,
    title: 'ROADS<br />\
    <img src="styles/legend/ROADS_3_0.png" /> AMTA COLLEGE ROAD<br />\
    <img src="styles/legend/ROADS_3_1.png" /> UDAYNARAYNPUR AMTA ROAD<br />\
    <img src="styles/legend/ROADS_3_2.png" /> WAY 1<br />\
    <img src="styles/legend/ROADS_3_3.png" /> WAY 2<br />\
    <img src="styles/legend/ROADS_3_4.png" /> WAY 4<br />\
    <img src="styles/legend/ROADS_3_5.png" /> WAY 5<br />\
    <img src="styles/legend/ROADS_3_6.png" /> WAY 6<br />\
    <img src="styles/legend/ROADS_3_7.png" /> <br />'
        });
var format_Inner_4 = new ol.format.GeoJSON();
var features_Inner_4 = format_Inner_4.readFeatures(json_Inner_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inner_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inner_4.addFeatures(features_Inner_4);
var lyr_Inner_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Inner_4, 
                style: style_Inner_4,
                interactive: true,
    title: 'Inner<br />\
    <img src="styles/legend/Inner_4_0.png" /> Acharya Jagadish Chandra bose bhavan<br />\
    <img src="styles/legend/Inner_4_1.png" /> Acharya prafulla chandara Bhavan<br />\
    <img src="styles/legend/Inner_4_2.png" /> Bike & Cycle Parking<br />\
    <img src="styles/legend/Inner_4_3.png" /> Botany Department Garden<br />\
    <img src="styles/legend/Inner_4_4.png" /> Botany department\'s Garden<br />\
    <img src="styles/legend/Inner_4_5.png" /> Car Parking<br />\
    <img src="styles/legend/Inner_4_6.png" /> GARDEN<br />\
    <img src="styles/legend/Inner_4_7.png" /> GATE 1 ( TOWARDS COLLEGE ROAD)<br />\
    <img src="styles/legend/Inner_4_8.png" /> GATE 2<br />\
    <img src="styles/legend/Inner_4_9.png" /> GATE 3<br />\
    <img src="styles/legend/Inner_4_10.png" /> Gate 4 (TOWARDS UDAYNARAYANPUR AMTA ROAD)<br />\
    <img src="styles/legend/Inner_4_11.png" /> Gitanjali Bhavan<br />\
    <img src="styles/legend/Inner_4_12.png" /> GRDEN GEETANJALI BHAVAN<br />\
    <img src="styles/legend/Inner_4_13.png" /> Ground 1<br />\
    <img src="styles/legend/Inner_4_14.png" /> Ground 2<br />\
    <img src="styles/legend/Inner_4_15.png" /> GROUND OF GEETANJALI BHAVAN<br />\
    <img src="styles/legend/Inner_4_16.png" /> Heritage Bhavan<br />\
    <img src="styles/legend/Inner_4_17.png" /> IMD WEATER STATION INSTRUMENTS<br />\
    <img src="styles/legend/Inner_4_18.png" /> Meterological Intruments<br />\
    <img src="styles/legend/Inner_4_19.png" /> Open Canteen<br />\
    <img src="styles/legend/Inner_4_20.png" /> Panchanan Chongdar Bhavan<br />\
    <img src="styles/legend/Inner_4_21.png" /> Pond<br />\
    <img src="styles/legend/Inner_4_22.png" /> Pond 2<br />\
    <img src="styles/legend/Inner_4_23.png" /> Rabindra Bhavan<br />\
    <img src="styles/legend/Inner_4_24.png" /> Security Room<br />\
    <img src="styles/legend/Inner_4_25.png" /> Vidyasagar Bhavan<br />\
    <img src="styles/legend/Inner_4_26.png" /> Vivekananda Bhavan<br />'
        });
var format_GATE1TOWARDSAMTACOLLEGEROAD_5 = new ol.format.GeoJSON();
var features_GATE1TOWARDSAMTACOLLEGEROAD_5 = format_GATE1TOWARDSAMTACOLLEGEROAD_5.readFeatures(json_GATE1TOWARDSAMTACOLLEGEROAD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GATE1TOWARDSAMTACOLLEGEROAD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GATE1TOWARDSAMTACOLLEGEROAD_5.addFeatures(features_GATE1TOWARDSAMTACOLLEGEROAD_5);
var lyr_GATE1TOWARDSAMTACOLLEGEROAD_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GATE1TOWARDSAMTACOLLEGEROAD_5, 
                style: style_GATE1TOWARDSAMTACOLLEGEROAD_5,
                interactive: true,
                title: '<img src="styles/legend/GATE1TOWARDSAMTACOLLEGEROAD_5.png" /> GATE 1 TOWARDS AMTA COLLEGE ROAD'
            });
var format_Others_6 = new ol.format.GeoJSON();
var features_Others_6 = format_Others_6.readFeatures(json_Others_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Others_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Others_6.addFeatures(features_Others_6);
var lyr_Others_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Others_6, 
                style: style_Others_6,
                interactive: true,
                title: '<img src="styles/legend/Others_6.png" /> Others'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_COLLEGEOUTERBOUNDARY_2.setVisible(true);lyr_ROADS_3.setVisible(true);lyr_Inner_4.setVisible(true);lyr_GATE1TOWARDSAMTACOLLEGEROAD_5.setVisible(true);lyr_Others_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_COLLEGEOUTERBOUNDARY_2,lyr_ROADS_3,lyr_Inner_4,lyr_GATE1TOWARDSAMTACOLLEGEROAD_5,lyr_Others_6];
lyr_COLLEGEOUTERBOUNDARY_2.set('fieldAliases', {'id': 'id', });
lyr_ROADS_3.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_Inner_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'PHOTO': 'PHOTO', });
lyr_GATE1TOWARDSAMTACOLLEGEROAD_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'PHOTO': 'PHOTO', });
lyr_Others_6.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_COLLEGEOUTERBOUNDARY_2.set('fieldImages', {'id': 'TextEdit', });
lyr_ROADS_3.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Inner_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'PHOTO': 'ExternalResource', });
lyr_GATE1TOWARDSAMTACOLLEGEROAD_5.set('fieldImages', {'id': '', 'Name': '', 'PHOTO': '', });
lyr_Others_6.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_COLLEGEOUTERBOUNDARY_2.set('fieldLabels', {'id': 'header label', });
lyr_ROADS_3.set('fieldLabels', {'id': 'no label', 'NAME': 'header label', });
lyr_Inner_4.set('fieldLabels', {'id': 'header label', 'Name': 'inline label', 'PHOTO': 'header label', });
lyr_GATE1TOWARDSAMTACOLLEGEROAD_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'PHOTO': 'inline label', });
lyr_Others_6.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_Others_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
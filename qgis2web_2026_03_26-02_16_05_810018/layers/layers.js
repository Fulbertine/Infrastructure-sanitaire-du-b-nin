var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Limitesdesdpartementsdubnin_1 = new ol.format.GeoJSON();
var features_Limitesdesdpartementsdubnin_1 = format_Limitesdesdpartementsdubnin_1.readFeatures(json_Limitesdesdpartementsdubnin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdesdpartementsdubnin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdesdpartementsdubnin_1.addFeatures(features_Limitesdesdpartementsdubnin_1);
var lyr_Limitesdesdpartementsdubnin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdesdpartementsdubnin_1, 
                style: style_Limitesdesdpartementsdubnin_1,
                popuplayertitle: 'Limites des départements du bénin',
                interactive: true,
                title: '<img src="styles/legend/Limitesdesdpartementsdubnin_1.png" /> Limites des départements du bénin'
            });
var format_Limitesdescommunesdubnin_2 = new ol.format.GeoJSON();
var features_Limitesdescommunesdubnin_2 = format_Limitesdescommunesdubnin_2.readFeatures(json_Limitesdescommunesdubnin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdescommunesdubnin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdescommunesdubnin_2.addFeatures(features_Limitesdescommunesdubnin_2);
var lyr_Limitesdescommunesdubnin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdescommunesdubnin_2, 
                style: style_Limitesdescommunesdubnin_2,
                popuplayertitle: 'Limites des communes du bénin',
                interactive: true,
                title: '<img src="styles/legend/Limitesdescommunesdubnin_2.png" /> Limites des communes du bénin'
            });
var format_Infrastructuresanitaire_3 = new ol.format.GeoJSON();
var features_Infrastructuresanitaire_3 = format_Infrastructuresanitaire_3.readFeatures(json_Infrastructuresanitaire_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastructuresanitaire_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastructuresanitaire_3.addFeatures(features_Infrastructuresanitaire_3);
var lyr_Infrastructuresanitaire_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastructuresanitaire_3, 
                style: style_Infrastructuresanitaire_3,
                popuplayertitle: 'Infrastructure sanitaire',
                interactive: true,
    title: 'Infrastructure sanitaire<br />\
    <img src="styles/legend/Infrastructuresanitaire_3_0.png" /> CENTRE DE SANTE<br />\
    <img src="styles/legend/Infrastructuresanitaire_3_1.png" /> CENTRE HOSPITALIER DEPARTEMENTAL<br />\
    <img src="styles/legend/Infrastructuresanitaire_3_2.png" /> CENTRE HOSPITALIER NATIONAL<br />\
    <img src="styles/legend/Infrastructuresanitaire_3_3.png" /> CLINIQUE<br />\
    <img src="styles/legend/Infrastructuresanitaire_3_4.png" /> DISPENSAIRE<br />\
    <img src="styles/legend/Infrastructuresanitaire_3_5.png" /> HOPITAL DE ZONE<br />\
    <img src="styles/legend/Infrastructuresanitaire_3_6.png" /> MATERNITE<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Limitesdesdpartementsdubnin_1.setVisible(true);lyr_Limitesdescommunesdubnin_2.setVisible(true);lyr_Infrastructuresanitaire_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limitesdesdpartementsdubnin_1,lyr_Limitesdescommunesdubnin_2,lyr_Infrastructuresanitaire_3];
lyr_Limitesdesdpartementsdubnin_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Nom_Dept': 'Nom_Dept', 'Pop_2013': 'Pop_2013', 'Superficie': 'Superficie', 'Densité': 'Densité', });
lyr_Limitesdescommunesdubnin_2.set('fieldAliases', {'COMM_L': 'COMM_L', 'ZS': 'ZS', 'Dept': 'Dept', 'PDA': 'PDA', });
lyr_Infrastructuresanitaire_3.set('fieldAliases', {'Type': 'Type', 'Nature': 'Nature', 'Nom': 'Nom', 'Commune': 'Commune', 'Départeme': 'Départeme', });
lyr_Limitesdesdpartementsdubnin_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nom_Dept': 'TextEdit', 'Pop_2013': 'TextEdit', 'Superficie': 'TextEdit', 'Densité': 'TextEdit', });
lyr_Limitesdescommunesdubnin_2.set('fieldImages', {'COMM_L': 'TextEdit', 'ZS': 'TextEdit', 'Dept': 'TextEdit', 'PDA': 'TextEdit', });
lyr_Infrastructuresanitaire_3.set('fieldImages', {'Type': 'TextEdit', 'Nature': 'TextEdit', 'Nom': 'TextEdit', 'Commune': 'TextEdit', 'Départeme': 'TextEdit', });
lyr_Limitesdesdpartementsdubnin_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Nom_Dept': 'header label - always visible', 'Pop_2013': 'no label', 'Superficie': 'no label', 'Densité': 'no label', });
lyr_Limitesdescommunesdubnin_2.set('fieldLabels', {'COMM_L': 'header label - always visible', 'ZS': 'no label', 'Dept': 'header label - always visible', 'PDA': 'no label', });
lyr_Infrastructuresanitaire_3.set('fieldLabels', {'Type': 'header label - always visible', 'Nature': 'header label - always visible', 'Nom': 'header label - always visible', 'Commune': 'header label - always visible', 'Départeme': 'header label - always visible', });
lyr_Infrastructuresanitaire_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
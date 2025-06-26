var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_PosteriorMeanSVCFieldC_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Posterior Mean SVC Field (°C)<br />\
    <img src="styles/legend/PosteriorMeanSVCFieldC_1_0.png" /> -0,7044<br />\
    <img src="styles/legend/PosteriorMeanSVCFieldC_1_1.png" /> -0,5108<br />\
    <img src="styles/legend/PosteriorMeanSVCFieldC_1_2.png" /> -0,3172<br />\
    <img src="styles/legend/PosteriorMeanSVCFieldC_1_3.png" /> -0,1236<br />\
    <img src="styles/legend/PosteriorMeanSVCFieldC_1_4.png" /> 0,0700<br />\
    <img src="styles/legend/PosteriorMeanSVCFieldC_1_5.png" /> 0,2636<br />\
    <img src="styles/legend/PosteriorMeanSVCFieldC_1_6.png" /> 0,4572<br />\
    <img src="styles/legend/PosteriorMeanSVCFieldC_1_7.png" /> 0,6508<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PosteriorMeanSVCFieldC_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var lyr_PosteriorMeanSpaceFieldC_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Posterior Mean Space Field (°C)<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_0.png" /> -8,9776<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_1.png" /> -6,5383<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_2.png" /> -4,0989<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_3.png" /> -1,6596<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_4.png" /> 0,7798<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_5.png" /> 3,2191<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_6.png" /> 5,6585<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_7.png" /> 8,0978<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_8.png" /> 10,5372<br />\
    <img src="styles/legend/PosteriorMeanSpaceFieldC_2_9.png" /> 12,9765<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PosteriorMeanSpaceFieldC_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var format_Buildings_3 = new ol.format.GeoJSON();
var features_Buildings_3 = format_Buildings_3.readFeatures(json_Buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_3.addFeatures(features_Buildings_3);
var lyr_Buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_3, 
                style: style_Buildings_3,
                popuplayertitle: 'Buildings',
                interactive: false,
                title: '<img src="styles/legend/Buildings_3.png" /> Buildings'
            });
var format_MeanoftheSpatialFieldintheGreenAreasC_4 = new ol.format.GeoJSON();
var features_MeanoftheSpatialFieldintheGreenAreasC_4 = format_MeanoftheSpatialFieldintheGreenAreasC_4.readFeatures(json_MeanoftheSpatialFieldintheGreenAreasC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeanoftheSpatialFieldintheGreenAreasC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeanoftheSpatialFieldintheGreenAreasC_4.addFeatures(features_MeanoftheSpatialFieldintheGreenAreasC_4);
var lyr_MeanoftheSpatialFieldintheGreenAreasC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeanoftheSpatialFieldintheGreenAreasC_4, 
                style: style_MeanoftheSpatialFieldintheGreenAreasC_4,
                popuplayertitle: 'Mean of the Spatial Field in the Green Areas (°C)',
                interactive: false,
    title: 'Mean of the Spatial Field in the Green Areas (°C)<br />\
    <img src="styles/legend/MeanoftheSpatialFieldintheGreenAreasC_4_0.png" /> -5,6 - -4,3<br />\
    <img src="styles/legend/MeanoftheSpatialFieldintheGreenAreasC_4_1.png" /> -4,3 - -3,1<br />\
    <img src="styles/legend/MeanoftheSpatialFieldintheGreenAreasC_4_2.png" /> -3,1 - -1,9<br />\
    <img src="styles/legend/MeanoftheSpatialFieldintheGreenAreasC_4_3.png" /> -1,9 - -0,6<br />\
    <img src="styles/legend/MeanoftheSpatialFieldintheGreenAreasC_4_4.png" /> -0,6 - 0,6<br />\
    <img src="styles/legend/MeanoftheSpatialFieldintheGreenAreasC_4_5.png" /> 0,6 - 1,9<br />\
    <img src="styles/legend/MeanoftheSpatialFieldintheGreenAreasC_4_6.png" /> 1,9 - 3,1<br />\
    <img src="styles/legend/MeanoftheSpatialFieldintheGreenAreasC_4_7.png" /> 3,1 - 4,4<br />\
    <img src="styles/legend/MeanoftheSpatialFieldintheGreenAreasC_4_8.png" /> 4,4 - 5,6<br />' });
var format_GreenAreas_5 = new ol.format.GeoJSON();
var features_GreenAreas_5 = format_GreenAreas_5.readFeatures(json_GreenAreas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenAreas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenAreas_5.addFeatures(features_GreenAreas_5);
var lyr_GreenAreas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenAreas_5, 
                style: style_GreenAreas_5,
                popuplayertitle: 'Green Areas',
                interactive: false,
                title: '<img src="styles/legend/GreenAreas_5.png" /> Green Areas'
            });
var format_MunicipalityofBologna_6 = new ol.format.GeoJSON();
var features_MunicipalityofBologna_6 = format_MunicipalityofBologna_6.readFeatures(json_MunicipalityofBologna_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalityofBologna_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalityofBologna_6.addFeatures(features_MunicipalityofBologna_6);
var lyr_MunicipalityofBologna_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalityofBologna_6, 
                style: style_MunicipalityofBologna_6,
                popuplayertitle: 'Municipality of Bologna',
                interactive: false,
                title: '<img src="styles/legend/MunicipalityofBologna_6.png" /> Municipality of Bologna'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PosteriorMeanSVCFieldC_1.setVisible(false);lyr_PosteriorMeanSpaceFieldC_2.setVisible(true);lyr_Buildings_3.setVisible(true);lyr_MeanoftheSpatialFieldintheGreenAreasC_4.setVisible(false);lyr_GreenAreas_5.setVisible(true);lyr_MunicipalityofBologna_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PosteriorMeanSVCFieldC_1,lyr_PosteriorMeanSpaceFieldC_2,lyr_Buildings_3,lyr_MeanoftheSpatialFieldintheGreenAreasC_4,lyr_GreenAreas_5,lyr_MunicipalityofBologna_6];
lyr_Buildings_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_MeanoftheSpatialFieldintheGreenAreasC_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'addr:city': 'addr:city', 'description': 'description', 'garden:type': 'garden:type', 'wikipedia': 'wikipedia', 'boundary': 'boundary', 'allocation:it': 'allocation:it', 'wikidata': 'wikidata', 'type': 'type', 'name': 'name', 'area': 'area', 'LST_space_count': 'LST_space_count', 'LST_space_mean': 'LST_space_mean', 'LST_space_median': 'LST_space_median', 'LST_space_stdev': 'LST_space_stdev', 'LST_space_min': 'LST_space_min', 'LST_space_max': 'LST_space_max', 'LST_space_range': 'LST_space_range', 'LST_space_variance': 'LST_space_variance', });
lyr_GreenAreas_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'addr:city': 'addr:city', 'description': 'description', 'garden:type': 'garden:type', 'wikipedia': 'wikipedia', 'boundary': 'boundary', 'allocation:it': 'allocation:it', 'wikidata': 'wikidata', 'type': 'type', 'name': 'name', 'area': 'area', });
lyr_MunicipalityofBologna_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ISTAT': 'ISTAT', 'NOME_C': 'NOME_C', 'CD_BLF': 'CD_BLF', 'PRV_ID_E': 'PRV_ID_E', 'TY_E': 'TY_E', 'ID_E': 'ID_E', 'DT_INI_VAL': 'DT_INI_VAL', 'DATA_AGG': 'DATA_AGG', 'D_TIPO_AGG': 'D_TIPO_AGG', 'DT_PRES': 'DT_PRES', 'ST_VALID': 'ST_VALID', 'ST_CERTIF': 'ST_CERTIF', 'QUALITA': 'QUALITA', 'METODO': 'METODO', 'D_METODO': 'D_METODO', 'COMP_FONTI': 'COMP_FONTI', 'SEZ_ID_E': 'SEZ_ID_E', 'INT_FONTI': 'INT_FONTI', 'VISIBILITA': 'VISIBILITA', 'TIPO_FONTE': 'TIPO_FONTE', 'DATA_DA': 'DATA_DA', 'DATA_A': 'DATA_A', 'SHAPE_Leng': 'SHAPE_Leng', 'DT_FIN_VAL': 'DT_FIN_VAL', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Buildings_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_MeanoftheSpatialFieldintheGreenAreasC_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'leisure': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:street': 'TextEdit', 'addr:city': 'TextEdit', 'description': 'TextEdit', 'garden:type': 'TextEdit', 'wikipedia': 'TextEdit', 'boundary': 'TextEdit', 'allocation:it': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'area': 'Range', 'LST_space_count': 'TextEdit', 'LST_space_mean': 'TextEdit', 'LST_space_median': 'TextEdit', 'LST_space_stdev': 'TextEdit', 'LST_space_min': 'TextEdit', 'LST_space_max': 'TextEdit', 'LST_space_range': 'TextEdit', 'LST_space_variance': 'TextEdit', });
lyr_GreenAreas_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'leisure': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:street': 'TextEdit', 'addr:city': 'TextEdit', 'description': 'TextEdit', 'garden:type': 'TextEdit', 'wikipedia': 'TextEdit', 'boundary': 'TextEdit', 'allocation:it': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'area': 'Range', });
lyr_MunicipalityofBologna_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ISTAT': 'TextEdit', 'NOME_C': 'TextEdit', 'CD_BLF': 'TextEdit', 'PRV_ID_E': 'TextEdit', 'TY_E': 'TextEdit', 'ID_E': 'TextEdit', 'DT_INI_VAL': 'DateTime', 'DATA_AGG': 'DateTime', 'D_TIPO_AGG': 'TextEdit', 'DT_PRES': 'DateTime', 'ST_VALID': 'TextEdit', 'ST_CERTIF': 'TextEdit', 'QUALITA': 'TextEdit', 'METODO': 'TextEdit', 'D_METODO': 'TextEdit', 'COMP_FONTI': 'TextEdit', 'SEZ_ID_E': 'TextEdit', 'INT_FONTI': 'TextEdit', 'VISIBILITA': 'TextEdit', 'TIPO_FONTE': 'TextEdit', 'DATA_DA': 'DateTime', 'DATA_A': 'DateTime', 'SHAPE_Leng': 'TextEdit', 'DT_FIN_VAL': 'DateTime', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Buildings_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_MeanoftheSpatialFieldintheGreenAreasC_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'addr:city': 'no label', 'description': 'no label', 'garden:type': 'no label', 'wikipedia': 'no label', 'boundary': 'no label', 'allocation:it': 'no label', 'wikidata': 'no label', 'type': 'no label', 'name': 'inline label - always visible', 'area': 'no label', 'LST_space_count': 'no label', 'LST_space_mean': 'no label', 'LST_space_median': 'no label', 'LST_space_stdev': 'no label', 'LST_space_min': 'no label', 'LST_space_max': 'no label', 'LST_space_range': 'no label', 'LST_space_variance': 'no label', });
lyr_GreenAreas_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'addr:city': 'no label', 'description': 'no label', 'garden:type': 'no label', 'wikipedia': 'no label', 'boundary': 'no label', 'allocation:it': 'no label', 'wikidata': 'no label', 'type': 'no label', 'name': 'inline label - always visible', 'area': 'no label', });
lyr_MunicipalityofBologna_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ISTAT': 'no label', 'NOME_C': 'no label', 'CD_BLF': 'no label', 'PRV_ID_E': 'no label', 'TY_E': 'no label', 'ID_E': 'no label', 'DT_INI_VAL': 'no label', 'DATA_AGG': 'no label', 'D_TIPO_AGG': 'no label', 'DT_PRES': 'no label', 'ST_VALID': 'no label', 'ST_CERTIF': 'no label', 'QUALITA': 'no label', 'METODO': 'no label', 'D_METODO': 'no label', 'COMP_FONTI': 'no label', 'SEZ_ID_E': 'no label', 'INT_FONTI': 'no label', 'VISIBILITA': 'no label', 'TIPO_FONTE': 'no label', 'DATA_DA': 'no label', 'DATA_A': 'no label', 'SHAPE_Leng': 'no label', 'DT_FIN_VAL': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_MunicipalityofBologna_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
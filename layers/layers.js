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
var lyr_ModelDPosteriorMeanSVCFieldC_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Model D: Posterior Mean SVC Field (°C)<br />\
    <img src="styles/legend/ModelDPosteriorMeanSVCFieldC_1_0.png" /> -0,7044<br />\
    <img src="styles/legend/ModelDPosteriorMeanSVCFieldC_1_1.png" /> -0,5108<br />\
    <img src="styles/legend/ModelDPosteriorMeanSVCFieldC_1_2.png" /> -0,3172<br />\
    <img src="styles/legend/ModelDPosteriorMeanSVCFieldC_1_3.png" /> -0,1236<br />\
    <img src="styles/legend/ModelDPosteriorMeanSVCFieldC_1_4.png" /> 0,0700<br />\
    <img src="styles/legend/ModelDPosteriorMeanSVCFieldC_1_5.png" /> 0,2636<br />\
    <img src="styles/legend/ModelDPosteriorMeanSVCFieldC_1_6.png" /> 0,4572<br />\
    <img src="styles/legend/ModelDPosteriorMeanSVCFieldC_1_7.png" /> 0,6508<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ModelDPosteriorMeanSVCFieldC_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var lyr_ModelCPosteriorMeanSVCFieldC_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Model C: Posterior Mean SVC Field (°C)<br />\
    <img src="styles/legend/ModelCPosteriorMeanSVCFieldC_2_0.png" /> -0,7525<br />\
    <img src="styles/legend/ModelCPosteriorMeanSVCFieldC_2_1.png" /> -0,5515<br />\
    <img src="styles/legend/ModelCPosteriorMeanSVCFieldC_2_2.png" /> -0,3505<br />\
    <img src="styles/legend/ModelCPosteriorMeanSVCFieldC_2_3.png" /> -0,1495<br />\
    <img src="styles/legend/ModelCPosteriorMeanSVCFieldC_2_4.png" /> 0,0515<br />\
    <img src="styles/legend/ModelCPosteriorMeanSVCFieldC_2_5.png" /> 0,2525<br />\
    <img src="styles/legend/ModelCPosteriorMeanSVCFieldC_2_6.png" /> 0,4535<br />\
    <img src="styles/legend/ModelCPosteriorMeanSVCFieldC_2_7.png" /> 0,6545<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ModelCPosteriorMeanSVCFieldC_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var lyr_ModelBPosteriorMeanSVCFieldC_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Model B: Posterior Mean SVC Field (°C)<br />\
    <img src="styles/legend/ModelBPosteriorMeanSVCFieldC_3_0.png" /> -0,7502<br />\
    <img src="styles/legend/ModelBPosteriorMeanSVCFieldC_3_1.png" /> -0,5498<br />\
    <img src="styles/legend/ModelBPosteriorMeanSVCFieldC_3_2.png" /> -0,3494<br />\
    <img src="styles/legend/ModelBPosteriorMeanSVCFieldC_3_3.png" /> -0,1491<br />\
    <img src="styles/legend/ModelBPosteriorMeanSVCFieldC_3_4.png" /> 0,0513<br />\
    <img src="styles/legend/ModelBPosteriorMeanSVCFieldC_3_5.png" /> 0,2516<br />\
    <img src="styles/legend/ModelBPosteriorMeanSVCFieldC_3_6.png" /> 0,4520<br />\
    <img src="styles/legend/ModelBPosteriorMeanSVCFieldC_3_7.png" /> 0,6523<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ModelBPosteriorMeanSVCFieldC_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var lyr_ModelAPosteriorMeanSVCFieldC_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Model A: Posterior Mean SVC Field (°C)<br />\
    <img src="styles/legend/ModelAPosteriorMeanSVCFieldC_4_0.png" /> -0,7044<br />\
    <img src="styles/legend/ModelAPosteriorMeanSVCFieldC_4_1.png" /> -0,5108<br />\
    <img src="styles/legend/ModelAPosteriorMeanSVCFieldC_4_2.png" /> -0,3172<br />\
    <img src="styles/legend/ModelAPosteriorMeanSVCFieldC_4_3.png" /> -0,1236<br />\
    <img src="styles/legend/ModelAPosteriorMeanSVCFieldC_4_4.png" /> 0,0700<br />\
    <img src="styles/legend/ModelAPosteriorMeanSVCFieldC_4_5.png" /> 0,2636<br />\
    <img src="styles/legend/ModelAPosteriorMeanSVCFieldC_4_6.png" /> 0,4572<br />\
    <img src="styles/legend/ModelAPosteriorMeanSVCFieldC_4_7.png" /> 0,6508<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ModelAPosteriorMeanSVCFieldC_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var lyr_ModelDPosteriorMeanSpaceFieldC_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Model D: Posterior Mean Space Field (°C)<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_0.png" /> -9,3286<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_1.png" /> -6,7471<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_2.png" /> -4,1655<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_3.png" /> -1,5839<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_4.png" /> 0,9977<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_5.png" /> 3,5793<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_6.png" /> 6,1609<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_7.png" /> 8,7425<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_8.png" /> 11,3241<br />\
    <img src="styles/legend/ModelDPosteriorMeanSpaceFieldC_5_9.png" /> 13,9057<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ModelDPosteriorMeanSpaceFieldC_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var lyr_ModelCPosteriorMeanSpaceFieldC_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Model C: Posterior Mean Space Field (°C)<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_0.png" /> -9,3286<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_1.png" /> -6,7471<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_2.png" /> -4,1655<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_3.png" /> -1,5839<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_4.png" /> 0,9977<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_5.png" /> 3,5793<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_6.png" /> 6,1609<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_7.png" /> 8,7425<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_8.png" /> 11,3241<br />\
    <img src="styles/legend/ModelCPosteriorMeanSpaceFieldC_6_9.png" /> 13,9057<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ModelCPosteriorMeanSpaceFieldC_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var lyr_ModelBPosteriorMeanSpaceFieldC_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Model B: Posterior Mean Space Field (°C)<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_0.png" /> -9,3686<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_1.png" /> -6,7903<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_2.png" /> -4,2121<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_3.png" /> -1,6338<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_4.png" /> 0,9445<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_5.png" /> 3,5227<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_6.png" /> 6,1010<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_7.png" /> 8,6792<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_8.png" /> 11,2575<br />\
    <img src="styles/legend/ModelBPosteriorMeanSpaceFieldC_7_9.png" /> 13,8358<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ModelBPosteriorMeanSpaceFieldC_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var lyr_ModelAPosteriorMeanSpaceFieldC_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Model A: Posterior Mean Space Field (°C)<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_0.png" /> -8,9776<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_1.png" /> -6,5383<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_2.png" /> -4,0989<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_3.png" /> -1,6596<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_4.png" /> 0,7798<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_5.png" /> 3,2191<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_6.png" /> 5,6585<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_7.png" /> 8,0978<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_8.png" /> 10,5372<br />\
    <img src="styles/legend/ModelAPosteriorMeanSpaceFieldC_8_9.png" /> 12,9765<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ModelAPosteriorMeanSpaceFieldC_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122]
        })
    });
var format_IndustrialBuildings_9 = new ol.format.GeoJSON();
var features_IndustrialBuildings_9 = format_IndustrialBuildings_9.readFeatures(json_IndustrialBuildings_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustrialBuildings_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndustrialBuildings_9.addFeatures(features_IndustrialBuildings_9);
var lyr_IndustrialBuildings_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndustrialBuildings_9, 
                style: style_IndustrialBuildings_9,
                popuplayertitle: 'Industrial Buildings',
                interactive: false,
                title: '<img src="styles/legend/IndustrialBuildings_9.png" /> Industrial Buildings'
            });
var format_Buildings_10 = new ol.format.GeoJSON();
var features_Buildings_10 = format_Buildings_10.readFeatures(json_Buildings_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_10.addFeatures(features_Buildings_10);
var lyr_Buildings_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_10, 
                style: style_Buildings_10,
                popuplayertitle: 'Buildings',
                interactive: false,
                title: '<img src="styles/legend/Buildings_10.png" /> Buildings'
            });
var format_GreenAreas_11 = new ol.format.GeoJSON();
var features_GreenAreas_11 = format_GreenAreas_11.readFeatures(json_GreenAreas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenAreas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenAreas_11.addFeatures(features_GreenAreas_11);
var lyr_GreenAreas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenAreas_11, 
                style: style_GreenAreas_11,
                popuplayertitle: 'Green Areas',
                interactive: false,
                title: '<img src="styles/legend/GreenAreas_11.png" /> Green Areas'
            });
var format_MunicipalityofBologna_12 = new ol.format.GeoJSON();
var features_MunicipalityofBologna_12 = format_MunicipalityofBologna_12.readFeatures(json_MunicipalityofBologna_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalityofBologna_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalityofBologna_12.addFeatures(features_MunicipalityofBologna_12);
var lyr_MunicipalityofBologna_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalityofBologna_12, 
                style: style_MunicipalityofBologna_12,
                popuplayertitle: 'Municipality of Bologna',
                interactive: false,
                title: '<img src="styles/legend/MunicipalityofBologna_12.png" /> Municipality of Bologna'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ModelDPosteriorMeanSVCFieldC_1.setVisible(false);lyr_ModelCPosteriorMeanSVCFieldC_2.setVisible(false);lyr_ModelBPosteriorMeanSVCFieldC_3.setVisible(false);lyr_ModelAPosteriorMeanSVCFieldC_4.setVisible(false);lyr_ModelDPosteriorMeanSpaceFieldC_5.setVisible(false);lyr_ModelCPosteriorMeanSpaceFieldC_6.setVisible(false);lyr_ModelBPosteriorMeanSpaceFieldC_7.setVisible(false);lyr_ModelAPosteriorMeanSpaceFieldC_8.setVisible(false);lyr_IndustrialBuildings_9.setVisible(true);lyr_Buildings_10.setVisible(true);lyr_GreenAreas_11.setVisible(false);lyr_MunicipalityofBologna_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ModelDPosteriorMeanSVCFieldC_1,lyr_ModelCPosteriorMeanSVCFieldC_2,lyr_ModelBPosteriorMeanSVCFieldC_3,lyr_ModelAPosteriorMeanSVCFieldC_4,lyr_ModelDPosteriorMeanSpaceFieldC_5,lyr_ModelCPosteriorMeanSpaceFieldC_6,lyr_ModelBPosteriorMeanSpaceFieldC_7,lyr_ModelAPosteriorMeanSpaceFieldC_8,lyr_IndustrialBuildings_9,lyr_Buildings_10,lyr_GreenAreas_11,lyr_MunicipalityofBologna_12];
lyr_IndustrialBuildings_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_Buildings_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_GreenAreas_11.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'addr:city': 'addr:city', 'description': 'description', 'garden:type': 'garden:type', 'wikipedia': 'wikipedia', 'boundary': 'boundary', 'allocation:it': 'allocation:it', 'wikidata': 'wikidata', 'type': 'type', 'name': 'name', 'area': 'area', });
lyr_MunicipalityofBologna_12.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ISTAT': 'ISTAT', 'NOME_C': 'NOME_C', 'CD_BLF': 'CD_BLF', 'PRV_ID_E': 'PRV_ID_E', 'TY_E': 'TY_E', 'ID_E': 'ID_E', 'DT_INI_VAL': 'DT_INI_VAL', 'DATA_AGG': 'DATA_AGG', 'D_TIPO_AGG': 'D_TIPO_AGG', 'DT_PRES': 'DT_PRES', 'ST_VALID': 'ST_VALID', 'ST_CERTIF': 'ST_CERTIF', 'QUALITA': 'QUALITA', 'METODO': 'METODO', 'D_METODO': 'D_METODO', 'COMP_FONTI': 'COMP_FONTI', 'SEZ_ID_E': 'SEZ_ID_E', 'INT_FONTI': 'INT_FONTI', 'VISIBILITA': 'VISIBILITA', 'TIPO_FONTE': 'TIPO_FONTE', 'DATA_DA': 'DATA_DA', 'DATA_A': 'DATA_A', 'SHAPE_Leng': 'SHAPE_Leng', 'DT_FIN_VAL': 'DT_FIN_VAL', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_IndustrialBuildings_9.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_Buildings_10.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_GreenAreas_11.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'leisure': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:street': 'TextEdit', 'addr:city': 'TextEdit', 'description': 'TextEdit', 'garden:type': 'TextEdit', 'wikipedia': 'TextEdit', 'boundary': 'TextEdit', 'allocation:it': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'area': 'Range', });
lyr_MunicipalityofBologna_12.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ISTAT': 'TextEdit', 'NOME_C': 'TextEdit', 'CD_BLF': 'TextEdit', 'PRV_ID_E': 'TextEdit', 'TY_E': 'TextEdit', 'ID_E': 'TextEdit', 'DT_INI_VAL': 'DateTime', 'DATA_AGG': 'DateTime', 'D_TIPO_AGG': 'TextEdit', 'DT_PRES': 'DateTime', 'ST_VALID': 'TextEdit', 'ST_CERTIF': 'TextEdit', 'QUALITA': 'TextEdit', 'METODO': 'TextEdit', 'D_METODO': 'TextEdit', 'COMP_FONTI': 'TextEdit', 'SEZ_ID_E': 'TextEdit', 'INT_FONTI': 'TextEdit', 'VISIBILITA': 'TextEdit', 'TIPO_FONTE': 'TextEdit', 'DATA_DA': 'DateTime', 'DATA_A': 'DateTime', 'SHAPE_Leng': 'TextEdit', 'DT_FIN_VAL': 'DateTime', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IndustrialBuildings_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_Buildings_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_GreenAreas_11.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'addr:city': 'no label', 'description': 'no label', 'garden:type': 'no label', 'wikipedia': 'no label', 'boundary': 'no label', 'allocation:it': 'no label', 'wikidata': 'no label', 'type': 'no label', 'name': 'inline label - always visible', 'area': 'no label', });
lyr_MunicipalityofBologna_12.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ISTAT': 'no label', 'NOME_C': 'no label', 'CD_BLF': 'no label', 'PRV_ID_E': 'no label', 'TY_E': 'no label', 'ID_E': 'no label', 'DT_INI_VAL': 'no label', 'DATA_AGG': 'no label', 'D_TIPO_AGG': 'no label', 'DT_PRES': 'no label', 'ST_VALID': 'no label', 'ST_CERTIF': 'no label', 'QUALITA': 'no label', 'METODO': 'no label', 'D_METODO': 'no label', 'COMP_FONTI': 'no label', 'SEZ_ID_E': 'no label', 'INT_FONTI': 'no label', 'VISIBILITA': 'no label', 'TIPO_FONTE': 'no label', 'DATA_DA': 'no label', 'DATA_A': 'no label', 'SHAPE_Leng': 'no label', 'DT_FIN_VAL': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_MunicipalityofBologna_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
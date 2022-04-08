var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_NakhonNayok_1 = new ol.format.GeoJSON();
var features_NakhonNayok_1 = format_NakhonNayok_1.readFeatures(json_NakhonNayok_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NakhonNayok_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NakhonNayok_1.addFeatures(features_NakhonNayok_1);
var lyr_NakhonNayok_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NakhonNayok_1, 
                style: style_NakhonNayok_1,
                interactive: true,
                title: '<img src="styles/legend/NakhonNayok_1.png" /> NakhonNayok'
            });
var lyr_image_savi_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "image_savi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/image_savi_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11233620.000000, 1569761.714331, 11299560.000000, 1633117.854547]
                            })
                        });
var lyr_image_ndvi_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "image_ndvi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/image_ndvi_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11233620.000000, 1569761.714331, 11299560.000000, 1633117.854547]
                            })
                        });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_NakhonNayok_1.setVisible(true);lyr_image_savi_2.setVisible(true);lyr_image_ndvi_3.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_NakhonNayok_1,lyr_image_savi_2,lyr_image_ndvi_3];
lyr_NakhonNayok_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_NakhonNayok_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_NakhonNayok_1.set('fieldLabels', {'Shape_Leng': 'inline label', 'Shape_Area': 'no label', 'ADM1_EN': 'header label', 'ADM1_TH': 'inline label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'inline label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_NakhonNayok_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
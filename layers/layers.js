ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31980").setExtent([829816.404721, 9652455.958978, 831006.885308, 9653112.721804]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ImveisTombados_1 = new ol.format.GeoJSON();
var features_ImveisTombados_1 = format_ImveisTombados_1.readFeatures(json_ImveisTombados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_ImveisTombados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisTombados_1.addFeatures(features_ImveisTombados_1);
var lyr_ImveisTombados_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisTombados_1, 
                style: style_ImveisTombados_1,
                popuplayertitle: 'Imóveis Tombados ',
                interactive: true,
                title: '<img src="styles/legend/ImveisTombados_1.png" /> Imóveis Tombados '
            });
var format_reasUrbanaseRurais_2 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_2 = format_reasUrbanaseRurais_2.readFeatures(json_reasUrbanaseRurais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasUrbanaseRurais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_2.addFeatures(features_reasUrbanaseRurais_2);
var lyr_reasUrbanaseRurais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_2, 
                style: style_reasUrbanaseRurais_2,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_2.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_3 = format_FundeadourosLongoPrazo_3.readFeatures(json_FundeadourosLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_FundeadourosLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_3.addFeatures(features_FundeadourosLongoPrazo_3);
var lyr_FundeadourosLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_3, 
                style: style_FundeadourosLongoPrazo_3,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_3.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_4 = format_FundeadourosMdioPrazo_4.readFeatures(json_FundeadourosMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_FundeadourosMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_4.addFeatures(features_FundeadourosMdioPrazo_4);
var lyr_FundeadourosMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_4, 
                style: style_FundeadourosMdioPrazo_4,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_4.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_5 = format_FundeadourosCurtoPrazo_5.readFeatures(json_FundeadourosCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_FundeadourosCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_5.addFeatures(features_FundeadourosCurtoPrazo_5);
var lyr_FundeadourosCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_5, 
                style: style_FundeadourosCurtoPrazo_5,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_5.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_6 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_6 = format_FundeadourosSituaoAtual_6.readFeatures(json_FundeadourosSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_FundeadourosSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_6.addFeatures(features_FundeadourosSituaoAtual_6);
var lyr_FundeadourosSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_6, 
                style: style_FundeadourosSituaoAtual_6,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_6.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_7 = format_BaciasdeEvoluoLongoPrazo_7.readFeatures(json_BaciasdeEvoluoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_BaciasdeEvoluoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_7.addFeatures(features_BaciasdeEvoluoLongoPrazo_7);
var lyr_BaciasdeEvoluoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_7, 
                style: style_BaciasdeEvoluoLongoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_7.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_8 = format_BaciasdeEvoluoMdioPrazo_8.readFeatures(json_BaciasdeEvoluoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_BaciasdeEvoluoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_8.addFeatures(features_BaciasdeEvoluoMdioPrazo_8);
var lyr_BaciasdeEvoluoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_8, 
                style: style_BaciasdeEvoluoMdioPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_8.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_9 = format_BaciasdeEvoluoCurtoPrazo_9.readFeatures(json_BaciasdeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_9.addFeatures(features_BaciasdeEvoluoCurtoPrazo_9);
var lyr_BaciasdeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_9, 
                style: style_BaciasdeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_9.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_10 = format_BaciasdeEvoluoSituaoAtual_10.readFeatures(json_BaciasdeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_BaciasdeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_10.addFeatures(features_BaciasdeEvoluoSituaoAtual_10);
var lyr_BaciasdeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_10, 
                style: style_BaciasdeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_10.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_11 = format_CanaisdeAcessoLongoPrazo_11.readFeatures(json_CanaisdeAcessoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_CanaisdeAcessoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_11.addFeatures(features_CanaisdeAcessoLongoPrazo_11);
var lyr_CanaisdeAcessoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_11, 
                style: style_CanaisdeAcessoLongoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_11.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_12 = format_CanaisdeAcessoMdioPrazo_12.readFeatures(json_CanaisdeAcessoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_CanaisdeAcessoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_12.addFeatures(features_CanaisdeAcessoMdioPrazo_12);
var lyr_CanaisdeAcessoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_12, 
                style: style_CanaisdeAcessoMdioPrazo_12,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_12.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_13 = format_CanaisdeAcessoCurtoPrazo_13.readFeatures(json_CanaisdeAcessoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_CanaisdeAcessoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_13.addFeatures(features_CanaisdeAcessoCurtoPrazo_13);
var lyr_CanaisdeAcessoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_13, 
                style: style_CanaisdeAcessoCurtoPrazo_13,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_13.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_14 = format_CanaisdeAcessoSituaoAtual_14.readFeatures(json_CanaisdeAcessoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_CanaisdeAcessoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_14.addFeatures(features_CanaisdeAcessoSituaoAtual_14);
var lyr_CanaisdeAcessoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_14, 
                style: style_CanaisdeAcessoSituaoAtual_14,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_14.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosHidroviriosExternos_15 = new ol.format.GeoJSON();
var features_AcessosHidroviriosExternos_15 = format_AcessosHidroviriosExternos_15.readFeatures(json_AcessosHidroviriosExternos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcessosHidroviriosExternos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosExternos_15.addFeatures(features_AcessosHidroviriosExternos_15);
var lyr_AcessosHidroviriosExternos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosExternos_15, 
                style: style_AcessosHidroviriosExternos_15,
                popuplayertitle: 'Acessos Hidroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosExternos_15.png" /> Acessos Hidroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_16 = format_AcessosRodoviriosInternosLongoPrazo_16.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_16.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_16);
var lyr_AcessosRodoviriosInternosLongoPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_16, 
                style: style_AcessosRodoviriosInternosLongoPrazo_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_16.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_17 = format_AcessosRodoviriosInternosMdioPrazo_17.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_17.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_17);
var lyr_AcessosRodoviriosInternosMdioPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_17, 
                style: style_AcessosRodoviriosInternosMdioPrazo_17,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_17.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_18 = format_AcessosRodoviriosInternosCurtoPrazo_18.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_18.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_18);
var lyr_AcessosRodoviriosInternosCurtoPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_18, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_18,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_18.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_19 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_19 = format_AcessosRodoviriosInternosSituaoAtual_19.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_19.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_19);
var lyr_AcessosRodoviriosInternosSituaoAtual_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_19, 
                style: style_AcessosRodoviriosInternosSituaoAtual_19,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_19.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_20 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_20 = format_AcessosRodoviriosExternos_20.readFeatures(json_AcessosRodoviriosExternos_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcessosRodoviriosExternos_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_20.addFeatures(features_AcessosRodoviriosExternos_20);
var lyr_AcessosRodoviriosExternos_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_20, 
                style: style_AcessosRodoviriosExternos_20,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_20.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_27 = format_reasNoAfetassOperaesPorturiasLongoPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_28 = format_reasNoAfetassOperaesPorturiasMdioPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_29 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_30 = format_reasNoAfetassOperaesPorturiasSituaoAtual_30.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_30.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_30);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_30, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_30.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_31 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_31 = format_AcostagemLongoPrazo_31.readFeatures(json_AcostagemLongoPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcostagemLongoPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_31.addFeatures(features_AcostagemLongoPrazo_31);
var lyr_AcostagemLongoPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_31, 
                style: style_AcostagemLongoPrazo_31,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_31.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_32 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_32 = format_AcostagemMdioPrazo_32.readFeatures(json_AcostagemMdioPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcostagemMdioPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_32.addFeatures(features_AcostagemMdioPrazo_32);
var lyr_AcostagemMdioPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_32, 
                style: style_AcostagemMdioPrazo_32,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_32.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_33 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_33 = format_AcostagemCurtoPrazo_33.readFeatures(json_AcostagemCurtoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcostagemCurtoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_33.addFeatures(features_AcostagemCurtoPrazo_33);
var lyr_AcostagemCurtoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_33, 
                style: style_AcostagemCurtoPrazo_33,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_33.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_34 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_34 = format_AcostagemSituaoAtual_34.readFeatures(json_AcostagemSituaoAtual_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_AcostagemSituaoAtual_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_34.addFeatures(features_AcostagemSituaoAtual_34);
var lyr_AcostagemSituaoAtual_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_34, 
                style: style_AcostagemSituaoAtual_34,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_34.png" /> Acostagem - Situação Atual '
            });
var format_TerminaisdePassageirosLongoPrazo_35 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosLongoPrazo_35 = format_TerminaisdePassageirosLongoPrazo_35.readFeatures(json_TerminaisdePassageirosLongoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_TerminaisdePassageirosLongoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosLongoPrazo_35.addFeatures(features_TerminaisdePassageirosLongoPrazo_35);
var lyr_TerminaisdePassageirosLongoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosLongoPrazo_35, 
                style: style_TerminaisdePassageirosLongoPrazo_35,
                popuplayertitle: 'Terminais de Passageiros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosLongoPrazo_35.png" /> Terminais de Passageiros - Longo Prazo '
            });
var format_TerminaisdePassageirosMdioPrazo_36 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosMdioPrazo_36 = format_TerminaisdePassageirosMdioPrazo_36.readFeatures(json_TerminaisdePassageirosMdioPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_TerminaisdePassageirosMdioPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosMdioPrazo_36.addFeatures(features_TerminaisdePassageirosMdioPrazo_36);
var lyr_TerminaisdePassageirosMdioPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosMdioPrazo_36, 
                style: style_TerminaisdePassageirosMdioPrazo_36,
                popuplayertitle: 'Terminais de Passageiros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosMdioPrazo_36.png" /> Terminais de Passageiros - Médio Prazo '
            });
var format_TerminaisdePassageirosCurtoPrazo_37 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosCurtoPrazo_37 = format_TerminaisdePassageirosCurtoPrazo_37.readFeatures(json_TerminaisdePassageirosCurtoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_TerminaisdePassageirosCurtoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosCurtoPrazo_37.addFeatures(features_TerminaisdePassageirosCurtoPrazo_37);
var lyr_TerminaisdePassageirosCurtoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosCurtoPrazo_37, 
                style: style_TerminaisdePassageirosCurtoPrazo_37,
                popuplayertitle: 'Terminais de Passageiros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosCurtoPrazo_37.png" /> Terminais de Passageiros - Curto Prazo '
            });
var format_TerminaisdePassageirosSituaoAtual_38 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosSituaoAtual_38 = format_TerminaisdePassageirosSituaoAtual_38.readFeatures(json_TerminaisdePassageirosSituaoAtual_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_TerminaisdePassageirosSituaoAtual_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosSituaoAtual_38.addFeatures(features_TerminaisdePassageirosSituaoAtual_38);
var lyr_TerminaisdePassageirosSituaoAtual_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosSituaoAtual_38, 
                style: style_TerminaisdePassageirosSituaoAtual_38,
                popuplayertitle: 'Terminais de Passageiros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosSituaoAtual_38.png" /> Terminais de Passageiros - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_39 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_39 = format_ArmazenagemLongoPrazo_39.readFeatures(json_ArmazenagemLongoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_ArmazenagemLongoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_39.addFeatures(features_ArmazenagemLongoPrazo_39);
var lyr_ArmazenagemLongoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_39, 
                style: style_ArmazenagemLongoPrazo_39,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_39.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_40 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_40 = format_ArmazenagemMdioPrazo_40.readFeatures(json_ArmazenagemMdioPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_ArmazenagemMdioPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_40.addFeatures(features_ArmazenagemMdioPrazo_40);
var lyr_ArmazenagemMdioPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_40, 
                style: style_ArmazenagemMdioPrazo_40,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_40.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_41 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_41 = format_ArmazenagemCurtoPrazo_41.readFeatures(json_ArmazenagemCurtoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_ArmazenagemCurtoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_41.addFeatures(features_ArmazenagemCurtoPrazo_41);
var lyr_ArmazenagemCurtoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_41, 
                style: style_ArmazenagemCurtoPrazo_41,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_41.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_42 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_42 = format_ArmazenagemSituaoAtual_42.readFeatures(json_ArmazenagemSituaoAtual_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_ArmazenagemSituaoAtual_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_42.addFeatures(features_ArmazenagemSituaoAtual_42);
var lyr_ArmazenagemSituaoAtual_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_42, 
                style: style_ArmazenagemSituaoAtual_42,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_42.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_46.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_Passageiros_47 = new ol.format.GeoJSON();
var features_Passageiros_47 = format_Passageiros_47.readFeatures(json_Passageiros_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_Passageiros_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_47.addFeatures(features_Passageiros_47);
var lyr_Passageiros_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_47, 
                style: style_Passageiros_47,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_47.png" /> Passageiros'
            });
var format_Multipropsito_48 = new ol.format.GeoJSON();
var features_Multipropsito_48 = format_Multipropsito_48.readFeatures(json_Multipropsito_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_Multipropsito_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_48.addFeatures(features_Multipropsito_48);
var lyr_Multipropsito_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_48, 
                style: style_Multipropsito_48,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_48.png" /> Multipropósito'
            });
var format_CargaGeral_49 = new ol.format.GeoJSON();
var features_CargaGeral_49 = format_CargaGeral_49.readFeatures(json_CargaGeral_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_CargaGeral_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_49.addFeatures(features_CargaGeral_49);
var lyr_CargaGeral_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_49, 
                style: style_CargaGeral_49,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_49.png" /> Carga Geral'
            });
var format_Passageiros_50 = new ol.format.GeoJSON();
var features_Passageiros_50 = format_Passageiros_50.readFeatures(json_Passageiros_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_Passageiros_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_50.addFeatures(features_Passageiros_50);
var lyr_Passageiros_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_50, 
                style: style_Passageiros_50,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_50.png" /> Passageiros'
            });
var format_Multipropsito_51 = new ol.format.GeoJSON();
var features_Multipropsito_51 = format_Multipropsito_51.readFeatures(json_Multipropsito_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_Multipropsito_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_51.addFeatures(features_Multipropsito_51);
var lyr_Multipropsito_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_51, 
                style: style_Multipropsito_51,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_51.png" /> Multipropósito'
            });
var format_CargaGeral_52 = new ol.format.GeoJSON();
var features_CargaGeral_52 = format_CargaGeral_52.readFeatures(json_CargaGeral_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_CargaGeral_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_52.addFeatures(features_CargaGeral_52);
var lyr_CargaGeral_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_52, 
                style: style_CargaGeral_52,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_52.png" /> Carga Geral'
            });
var format_Passageiros_53 = new ol.format.GeoJSON();
var features_Passageiros_53 = format_Passageiros_53.readFeatures(json_Passageiros_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_Passageiros_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_53.addFeatures(features_Passageiros_53);
var lyr_Passageiros_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_53, 
                style: style_Passageiros_53,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_53.png" /> Passageiros'
            });
var format_Multipropsito_54 = new ol.format.GeoJSON();
var features_Multipropsito_54 = format_Multipropsito_54.readFeatures(json_Multipropsito_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_Multipropsito_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_54.addFeatures(features_Multipropsito_54);
var lyr_Multipropsito_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_54, 
                style: style_Multipropsito_54,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_54.png" /> Multipropósito'
            });
var format_CargaGeral_55 = new ol.format.GeoJSON();
var features_CargaGeral_55 = format_CargaGeral_55.readFeatures(json_CargaGeral_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_CargaGeral_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_55.addFeatures(features_CargaGeral_55);
var lyr_CargaGeral_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_55, 
                style: style_CargaGeral_55,
                popuplayertitle: 'Carga Geral ',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_55.png" /> Carga Geral '
            });
var format_Passageiros_56 = new ol.format.GeoJSON();
var features_Passageiros_56 = format_Passageiros_56.readFeatures(json_Passageiros_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_Passageiros_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_56.addFeatures(features_Passageiros_56);
var lyr_Passageiros_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_56, 
                style: style_Passageiros_56,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_56.png" /> Passageiros'
            });
var format_Multipropsito_57 = new ol.format.GeoJSON();
var features_Multipropsito_57 = format_Multipropsito_57.readFeatures(json_Multipropsito_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_Multipropsito_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_57.addFeatures(features_Multipropsito_57);
var lyr_Multipropsito_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_57, 
                style: style_Multipropsito_57,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_57.png" /> Multipropósito'
            });
var format_CargaGeral_58 = new ol.format.GeoJSON();
var features_CargaGeral_58 = format_CargaGeral_58.readFeatures(json_CargaGeral_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_CargaGeral_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_58.addFeatures(features_CargaGeral_58);
var lyr_CargaGeral_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_58, 
                style: style_CargaGeral_58,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_58.png" /> Carga Geral'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_59 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_59 = format_reasAfetassOperaesPorturiasLongoPrazo_59.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_59.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_59);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_59, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_59,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_59.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_60 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_60 = format_reasAfetassOperaesPorturiasMdioPrazo_60.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_60.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_60);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_60, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_60,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_60.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_61 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_61 = format_reasAfetassOperaesPorturiasCurtoPrazo_61.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_61.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_61);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_61, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_61,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_61.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_62 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_62 = format_reasAfetassOperaesPorturiasSituaoAtual_62.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_62.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_62);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_62, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_62,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_62.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeManaus_63 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeManaus_63 = format_PoligonaldareadoPortoOrganizadodeManaus_63.readFeatures(json_PoligonaldareadoPortoOrganizadodeManaus_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31980'});
var jsonSource_PoligonaldareadoPortoOrganizadodeManaus_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeManaus_63.addFeatures(features_PoligonaldareadoPortoOrganizadodeManaus_63);
var lyr_PoligonaldareadoPortoOrganizadodeManaus_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeManaus_63, 
                style: style_PoligonaldareadoPortoOrganizadodeManaus_63,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Manaus',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeManaus_63.png" /> Poligonal da Área do Porto Organizado de Manaus'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeManaus_63,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_59,lyr_reasAfetassOperaesPorturiasMdioPrazo_60,lyr_reasAfetassOperaesPorturiasCurtoPrazo_61,lyr_reasAfetassOperaesPorturiasSituaoAtual_62,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_Passageiros_56,lyr_Multipropsito_57,lyr_CargaGeral_58,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiros_53,lyr_Multipropsito_54,lyr_CargaGeral_55,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiros_50,lyr_Multipropsito_51,lyr_CargaGeral_52,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiros_47,lyr_Multipropsito_48,lyr_CargaGeral_49,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_39,lyr_ArmazenagemMdioPrazo_40,lyr_ArmazenagemCurtoPrazo_41,lyr_ArmazenagemSituaoAtual_42,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_TerminaldePassageiros = new ol.layer.Group({
                                layers: [lyr_TerminaisdePassageirosLongoPrazo_35,lyr_TerminaisdePassageirosMdioPrazo_36,lyr_TerminaisdePassageirosCurtoPrazo_37,lyr_TerminaisdePassageirosSituaoAtual_38,],
                                fold: 'open',
                                title: 'Terminal de Passageiros '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_31,lyr_AcostagemMdioPrazo_32,lyr_AcostagemCurtoPrazo_33,lyr_AcostagemSituaoAtual_34,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_20,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_16,lyr_AcessosRodoviriosInternosMdioPrazo_17,lyr_AcessosRodoviriosInternosCurtoPrazo_18,lyr_AcessosRodoviriosInternosSituaoAtual_19,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosHidroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosExternos_15,],
                                fold: 'open',
                                title: 'Acessos Hidroviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_11,lyr_CanaisdeAcessoMdioPrazo_12,lyr_CanaisdeAcessoCurtoPrazo_13,lyr_CanaisdeAcessoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_7,lyr_BaciasdeEvoluoMdioPrazo_8,lyr_BaciasdeEvoluoCurtoPrazo_9,lyr_BaciasdeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_3,lyr_FundeadourosMdioPrazo_4,lyr_FundeadourosCurtoPrazo_5,lyr_FundeadourosSituaoAtual_6,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_2,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_ImveisTombados = new ol.layer.Group({
                                layers: [lyr_ImveisTombados_1,],
                                fold: 'open',
                                title: 'Imóveis Tombados '});

lyr_GoogleSatellite_0.setVisible(true);lyr_ImveisTombados_1.setVisible(false);lyr_reasUrbanaseRurais_2.setVisible(false);lyr_FundeadourosLongoPrazo_3.setVisible(false);lyr_FundeadourosMdioPrazo_4.setVisible(false);lyr_FundeadourosCurtoPrazo_5.setVisible(false);lyr_FundeadourosSituaoAtual_6.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_8.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_11.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_12.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_13.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_14.setVisible(false);lyr_AcessosHidroviriosExternos_15.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_16.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_17.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_18.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_19.setVisible(false);lyr_AcessosRodoviriosExternos_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30.setVisible(false);lyr_AcostagemLongoPrazo_31.setVisible(false);lyr_AcostagemMdioPrazo_32.setVisible(false);lyr_AcostagemCurtoPrazo_33.setVisible(false);lyr_AcostagemSituaoAtual_34.setVisible(false);lyr_TerminaisdePassageirosLongoPrazo_35.setVisible(false);lyr_TerminaisdePassageirosMdioPrazo_36.setVisible(false);lyr_TerminaisdePassageirosCurtoPrazo_37.setVisible(false);lyr_TerminaisdePassageirosSituaoAtual_38.setVisible(false);lyr_ArmazenagemLongoPrazo_39.setVisible(false);lyr_ArmazenagemMdioPrazo_40.setVisible(false);lyr_ArmazenagemCurtoPrazo_41.setVisible(false);lyr_ArmazenagemSituaoAtual_42.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46.setVisible(false);lyr_Passageiros_47.setVisible(false);lyr_Multipropsito_48.setVisible(false);lyr_CargaGeral_49.setVisible(false);lyr_Passageiros_50.setVisible(false);lyr_Multipropsito_51.setVisible(false);lyr_CargaGeral_52.setVisible(false);lyr_Passageiros_53.setVisible(false);lyr_Multipropsito_54.setVisible(false);lyr_CargaGeral_55.setVisible(false);lyr_Passageiros_56.setVisible(false);lyr_Multipropsito_57.setVisible(false);lyr_CargaGeral_58.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_59.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_60.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_61.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_62.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeManaus_63.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_ImveisTombados,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosHidroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_TerminaldePassageiros,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_ImveisTombados_1.set('fieldAliases', {'Nome': 'Nome', 'Inst_Legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', });
lyr_reasUrbanaseRurais_2.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', 'Tipo': 'Tipo de Área ', 'Área': 'Área (m²) ', });
lyr_FundeadourosLongoPrazo_3.set('fieldAliases', {'N_Identi': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_4.set('fieldAliases', {'N_Identi': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_5.set('fieldAliases', {'N_Identi': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_6.set('fieldAliases', {'N_Identi': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosHidroviriosExternos_15.set('fieldAliases', {'nome': 'Nome ', 'Calado': 'Calado (m) ', 'Atual': 'Atualização ', });
lyr_AcessosRodoviriosInternosLongoPrazo_16.set('fieldAliases', {'n_pistas': 'Número de Pistas de Rolamento ', 'Ident': 'Identificação ', });
lyr_AcessosRodoviriosInternosMdioPrazo_17.set('fieldAliases', {'n_pistas': 'Número de Pistas de Rolamento ', 'Ident': 'Identificação ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_18.set('fieldAliases', {'n_pistas': 'Número de Pistas de Rolamento ', 'Ident': 'Identificação ', });
lyr_AcessosRodoviriosInternosSituaoAtual_19.set('fieldAliases', {'n_pistas': 'Número de Pistas de Rolamento ', 'Ident': 'Identificação ', });
lyr_AcessosRodoviriosExternos_20.set('fieldAliases', {'Jurisdicao': 'Jurisdição ', 'Sigla': 'Sigla', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.set('fieldAliases', {'Área': 'Área (m²)', 'Nome': 'Nome', 'Util_área': 'Utilização Atual da Área ', 'Tipo_expl': 'Tipo de Exploração ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.set('fieldAliases', {'Área': 'Área (m²)', 'Nome': 'Nome', 'Util_área': 'Utilização Atual da Área ', 'Tipo_expl': 'Tipo de Exploração ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.set('fieldAliases', {'Área': 'Área (m²)', 'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Util_área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.set('fieldAliases', {'Área': 'Área (m²)', 'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Util_área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Respons': 'Responsável ', 'D_Início': 'Data de Início do Contrato ', 'T_Cessão': 'Tipo de Cessão ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Respons': 'Responsável ', 'D_Início': 'Data de Início do Contrato ', 'T_Cessão': 'Tipo de Cessão ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_AcostagemLongoPrazo_31.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berço': 'Identificador do Berço ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'C_Const': 'Características Construtivas ', });
lyr_AcostagemMdioPrazo_32.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berço': 'Identificador do Berço ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', 'C_Const': 'Características Construtivas ', });
lyr_AcostagemCurtoPrazo_33.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berço': 'Identificador do Berço ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', 'C_Const': 'Características Construtivas ', });
lyr_AcostagemSituaoAtual_34.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berço': 'Identificador do Berço ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', 'C_Const': 'Características Construtivas ', });
lyr_TerminaisdePassageirosLongoPrazo_35.set('fieldAliases', {'Nome': 'Nome', 'A_Term': 'Área do Terminal (m²) ', 'A_Estac': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosMdioPrazo_36.set('fieldAliases', {'Nome': 'Nome', 'A_Term': 'Área do Terminal (m²) ', 'A_Estac': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosCurtoPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'A_Term': 'Área do Terminal (m²) ', 'A_Estac': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosSituaoAtual_38.set('fieldAliases', {'Nome': 'Nome', 'A_Term': 'Área do Terminal (m²) ', 'A_Estac': 'Área do Estacionamento (m²) ', });
lyr_ArmazenagemLongoPrazo_39.set('fieldAliases', {'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'T_Instal': 'Tipo da Instalação ', });
lyr_ArmazenagemMdioPrazo_40.set('fieldAliases', {'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'T_Instal': 'Tipo da Instalação ', });
lyr_ArmazenagemCurtoPrazo_41.set('fieldAliases', {'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'T_Instal': 'Tipo da Instalação ', });
lyr_ArmazenagemSituaoAtual_42.set('fieldAliases', {'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'T_Instal': 'Tipo da Instalação ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'N_cont': 'Número do Contrato ', 'Arrend': 'Arrendatário ', 'D_inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_Passageiros_47.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Multipropsito_48.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeral_49.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Passageiros_50.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Multipropsito_51.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeral_52.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Passageiros_53.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Multipropsito_54.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeral_55.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Passageiros_56.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Multipropsito_57.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeral_58.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_59.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_60.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_61.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_62.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodeManaus_63.set('fieldAliases', {'Ins_legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_ImveisTombados_1.set('fieldImages', {'Nome': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasUrbanaseRurais_2.set('fieldImages', {'Ins_Legal': 'TextEdit', 'Tipo': 'TextEdit', 'Área': 'TextEdit', });
lyr_FundeadourosLongoPrazo_3.set('fieldImages', {'N_Identi': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_4.set('fieldImages', {'N_Identi': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_5.set('fieldImages', {'N_Identi': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_6.set('fieldImages', {'N_Identi': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosHidroviriosExternos_15.set('fieldImages', {'nome': 'TextEdit', 'Calado': 'TextEdit', 'Atual': 'DateTime', });
lyr_AcessosRodoviriosInternosLongoPrazo_16.set('fieldImages', {'n_pistas': 'TextEdit', 'Ident': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_17.set('fieldImages', {'n_pistas': 'TextEdit', 'Ident': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_18.set('fieldImages', {'n_pistas': 'TextEdit', 'Ident': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_19.set('fieldImages', {'n_pistas': 'TextEdit', 'Ident': 'TextEdit', });
lyr_AcessosRodoviriosExternos_20.set('fieldImages', {'Jurisdicao': 'TextEdit', 'Sigla': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Util_área': 'TextEdit', 'Tipo_expl': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Util_área': 'TextEdit', 'Tipo_expl': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Util_área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Util_área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Respons': 'TextEdit', 'D_Início': 'DateTime', 'T_Cessão': 'TextEdit', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Respons': 'TextEdit', 'D_Início': 'DateTime', 'T_Cessão': 'TextEdit', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcostagemLongoPrazo_31.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berço': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'C_Const': 'TextEdit', });
lyr_AcostagemMdioPrazo_32.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berço': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', 'C_Const': 'TextEdit', });
lyr_AcostagemCurtoPrazo_33.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berço': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', 'C_Const': 'TextEdit', });
lyr_AcostagemSituaoAtual_34.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berço': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', 'C_Const': 'TextEdit', });
lyr_TerminaisdePassageirosLongoPrazo_35.set('fieldImages', {'Nome': 'TextEdit', 'A_Term': 'TextEdit', 'A_Estac': 'TextEdit', });
lyr_TerminaisdePassageirosMdioPrazo_36.set('fieldImages', {'Nome': 'TextEdit', 'A_Term': 'TextEdit', 'A_Estac': 'TextEdit', });
lyr_TerminaisdePassageirosCurtoPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'A_Term': 'TextEdit', 'A_Estac': 'TextEdit', });
lyr_TerminaisdePassageirosSituaoAtual_38.set('fieldImages', {'Nome': 'TextEdit', 'A_Term': 'TextEdit', 'A_Estac': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_39.set('fieldImages', {'Área': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_40.set('fieldImages', {'Área': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_41.set('fieldImages', {'Área': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_42.set('fieldImages', {'Área': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'N_cont': 'TextEdit', 'Arrend': 'TextEdit', 'D_inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', });
lyr_Passageiros_47.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Multipropsito_48.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeral_49.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Passageiros_50.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Multipropsito_51.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeral_52.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Passageiros_53.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Multipropsito_54.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeral_55.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Passageiros_56.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Multipropsito_57.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeral_58.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_59.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_60.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_61.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_62.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeManaus_63.set('fieldImages', {'Ins_legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_ImveisTombados_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_2.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_3.set('fieldLabels', {'N_Identi': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_4.set('fieldLabels', {'N_Identi': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_5.set('fieldLabels', {'N_Identi': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_6.set('fieldLabels', {'N_Identi': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosHidroviriosExternos_15.set('fieldLabels', {'nome': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Atual': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_16.set('fieldLabels', {'n_pistas': 'inline label - visible with data', 'Ident': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_17.set('fieldLabels', {'n_pistas': 'inline label - visible with data', 'Ident': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_18.set('fieldLabels', {'n_pistas': 'inline label - visible with data', 'Ident': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_19.set('fieldLabels', {'n_pistas': 'inline label - visible with data', 'Ident': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_20.set('fieldLabels', {'Jurisdicao': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', 'Tipo_expl': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', 'Tipo_expl': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_25.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Início': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_26.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Início': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_27.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_28.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_29.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_30.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_31.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berço': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_32.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berço': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_33.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berço': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_34.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berço': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', });
lyr_TerminaisdePassageirosLongoPrazo_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A_Term': 'inline label - visible with data', 'A_Estac': 'inline label - visible with data', });
lyr_TerminaisdePassageirosMdioPrazo_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A_Term': 'inline label - visible with data', 'A_Estac': 'inline label - visible with data', });
lyr_TerminaisdePassageirosCurtoPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A_Term': 'inline label - visible with data', 'A_Estac': 'inline label - visible with data', });
lyr_TerminaisdePassageirosSituaoAtual_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A_Term': 'inline label - visible with data', 'A_Estac': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_39.set('fieldLabels', {'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_40.set('fieldLabels', {'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_41.set('fieldLabels', {'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_42.set('fieldLabels', {'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_46.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'N_cont': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'D_inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_Passageiros_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Multipropsito_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeral_49.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Passageiros_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Multipropsito_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeral_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Passageiros_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Multipropsito_54.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeral_55.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Passageiros_56.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Multipropsito_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeral_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeManaus_63.set('fieldLabels', {'Ins_legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeManaus_63.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
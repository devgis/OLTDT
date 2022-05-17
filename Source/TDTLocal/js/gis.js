//var tdtMapLayer = new ol.layer.Tile({
//    source: new ol.source.XYZ({
//        url: 'map.ashx?t=map&x={x}&y={y}&z={z}'
//        //url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
//        //                  url: 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0'  //地图
//        //                  url:'http://mt0.google.cn/maps/vt?lyrs=s@773&gl=cn&x={x}&y={y}&z={z}' //卫星地图
//        //                    url:'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}' //普通二维地图
//        //                    url:'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
//        //                    url:'http://www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}' //影像标记
//        //                      url: 'http://www.google.cn/maps/vt?lyrs=t@189&gl=cn&x={x}&y={y}&z={z}'

//    })
//});

var tdtMapLayer = new ol.layer.Tile({
    title: "google",
    source: new ol.source.XYZ({
        url: 'map.ashx?t=map&x={x}&y={y}&z={z}'
    })
//    source: new ol.source.XYZ({
//        url: "http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}"
//    })
});

var tdtSTLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: './map.ashx?t=st&x={x}&y={y}&z={z}'
        //url: 'http://www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}'
        //                  url: 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0'  //地图
        //                  url:'http://mt0.google.cn/maps/vt?lyrs=s@773&gl=cn&x={x}&y={y}&z={z}'
        //                    url:'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
        //                    url:'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
        //                    url:'http://www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}'
        //                      url: 'http://www.google.cn/maps/vt?lyrs=t@189&gl=cn&x={x}&y={y}&z={z}'

    })
});

//var txtstyle = new ol.style.Text({
//        font: '12px Calibri,sans-serif',
//        overflow: true,
//        fill: new ol.style.Fill({
//            color: '#000'
//        }),
//        stroke: new ol.style.Stroke({
//            color: '#fff',
//            width: 3
//        })
//        });

//var shipsource = new ol.source.Vector({ wrapX: false });
////轮船图层
////shipsource.on({
////    'featureselected': function (feature) {
////        alert("clicked");
////    },
////    'featureunselected': function (feature) {
////        alert("clicked2");
////    }

////});

//var createShipTextStyle = function (feature, resolution, angle) {
//            return new ol.style.Text({
//                //textAlign: align == '' ? undefined : align,
//                //textBaseline: baseline,
//                font:'12px Calibri,sans-serif',
//                text: feature["ShipName"],
//                fill: new ol.style.Fill({ color: '#233399' }),
//                stroke: new ol.style.Stroke({ color: '#040089', width:1 }),
//                //offsetX: offsetX,
//                //offsetY: offsetY,
//                //placement: placement,
//                //maxAngle: maxAngle,
//                //overflow: overflow,
//                rotation: angle
//            });
//        };

//function shipStyleFunction(feature, resolution) {
//    var angle = getAngle(feature["Lon0"], feature["Lat0"], feature["Lon"], feature["Lat"]);
//    return new ol.style.Style({
//        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
//            anchor: [0.5, 30],
//            anchorXUnits: 'fraction',
//            anchorYUnits: 'pixels',
//            opacity: 0.95,
//            rotation:angle,
//            src: './img/ship.png'
//        })),
//        text: createShipTextStyle(feature, resolution, angle)
//    });
//}

//var shiplayer = new ol.layer.Vector({
//    source: shipsource,
//    style:shipStyleFunction
////    ,style: new ol.style.Style({
////        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
////            anchor: [0.5, 46],
////            anchorXUnits: 'fraction',
////            anchorYUnits: 'pixels',
////            opacity: 0.95,
////            src: './img/ship.png'
////        }))
////    })
//});


//var createBSTextStyle = function (feature, resolution, angle) {
//    return new ol.style.Text({
//        //textAlign: align == '' ? undefined : align,
//        //textBaseline: baseline,
//        font: '12px Calibri,sans-serif',
//        text: feature["BSName"],
//        fill: new ol.style.Fill({ color: '#000' }),
//        stroke: new ol.style.Stroke({ color: '#111', width: 1 }),
//        //offsetX: offsetX,
//        offsetY: 20,
//        //placement: placement,
//        //maxAngle: maxAngle,
//        //overflow: overflow,
//        rotation: 0
//    });
//};

//function bsStyleFunction(feature, resolution) {
//    return new ol.style.Style({
//        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
//            anchor: [0.5, 30],
//            anchorXUnits: 'fraction',
//            anchorYUnits: 'pixels',
//            opacity: 0.95,
//            src: './img/bs.png'
//        })),
//        text: createBSTextStyle(feature, resolution, 0)
//    });
//}



////基站图层
//var bssource = new ol.source.Vector({ wrapX: false });
//var bslayer = new ol.layer.Vector({
//    source: bssource,
//    style: bsStyleFunction
////    style: new ol.style.Style({
////        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
////            anchor: [0.5, 30],
////            anchorXUnits: 'fraction',
////            anchorYUnits: 'pixels',
////            opacity: 0.95,
////            src: './img/bs.png'
////        }))
////    })
//});

////基站范围图层
//var bsrangesource = new ol.source.Vector({ wrapX: false });
//var bsrangelayer = new ol.layer.Vector({
//    source: bsrangesource,
//    style: new ol.style.Style({
//        stroke: new ol.style.Stroke({
//            width: 1,
//            color: [200, 94, 83, 0.5]
//        }),
//        fill: new ol.style.Fill({
//            color: [200, 232, 89, 0.2]
//        })
//    })
//});

//鼠标移动显示经纬度信息
var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:3857',  //4326
    // comment the following two lines to have the mouse position
    // be placed within the map.
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});

var map = new ol.Map({
    controls: ol.control.defaults({
        attributionOptions: {
            collapsible: false
        }
    }).extend([mousePositionControl]),
    layers: [tdtMapLayer],  //tdtSTLayer
    view: new ol.View({
        center: [12089191, 4076471], //108.51, 34.55
        projection: 'EPSG:3857',
        zoom: 5
    }),
    target: 'map'
});

////添加船舶 
//var pointFeature = new  ol.Feature(new ol.geom.Point([0,0]));
//shipsource.addFeature(pointFeature);



////添加基站 
//var bcpoint = new ol.Feature(new ol.geom.Point([5, 5]));
//bssource.addFeature(bcpoint);

//基站范围 半径是米
//var circle = new ol.geom.Circle(ol.proj.transform([0, 0], 'EPSG:4326',
//'EPSG:3857'), 1000);
//bssource.addFeature(circle);



//var x, y;
//for (x = -180; x < 180; x += 30) {
//    for (y = -90; y < 90; y += 30) {
//        var circle4326 = ol.geom.Polygon.circular(wgs84Sphere, [x, y], radius, 64);
//        //var circle3857 = circle4326.clone().transform('EPSG:4326', 'EPSG:3857');
//        bssource.addFeature(new ol.Feature(circle4326));
//        //vectorLayer3857.getSource().addFeature(new ol.Feature(circle3857));
//    }
//}

////调用数据库加载船舶 定时刷新
//setInterval(function () {
//    $.ajax({
//        type: "get",
//        //contentType: "application/json",
//        url: "./data.ashx?t=ships",
//        //data: "{}",  //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到       
//        dataType: 'json',   //WebService 会返回Json类型
//        success: function (result) {     //回调函数，result，返回值
//            shipsource.clear();
//            if (result.length > 0) {
//                for (var i = 0; i < result.length; i++) {
//                    //添加基站 
//                    var shippoint = new ol.Feature(new ol.geom.Point([result[i].Lon, result[i].Lat]));
//                    shippoint["type"] = "ship";
//                    shippoint["ShipID"] = result[i].ShipID;
//                    shippoint["ShipNO"] = result[i].ShipNO;
//                    shippoint["ShipName"] = result[i].ShipName;
//                    shippoint["Owner"] = result[i].Owner;
//                    shippoint["OwnerCompany"] = result[i].OwnerCompany;
//                    shippoint["Contact"] = result[i].Contact;

//                    shippoint["Lon"] = result[i].Lon;
//                    shippoint["Lat"] = result[i].Lat;
//                    shippoint["Lon0"] = result[i].Lon0;
//                    shippoint["Lat0"] = result[i].Lat0;

////                    var angle = getAngle(result[i].Lon0, result[i].Lat0, result[i].Lon, result[i].Lat);
////                    var shipstyle = new ol.style.Style({
////                        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
////                            anchor: [0.5, 46],
////                            anchorXUnits: 'fraction',
////                            anchorYUnits: 'pixels',
////                            opacity: 0.95,
////                            rotation:angle,
////                            src: './img/ship.png'
////                        }))
//////                        , text: function (feature) {
//////                          txtstyle.setText("测试") //txtstyle.setText("测试")labelStyle.getText().setText(feature.get('name'));
//////                          return txtstyle;
//////                        } //shippoint["ShipNO"]+"-"+shippoint["ShipName"]
////                    });
////                    
////                    //shipstyle.setRotation(angle); // 旋转
////                    shippoint.setStyle(shipstyle);
//                    shipsource.addFeature(shippoint);


//                }
//            }
//        },
//        error: function (err) {     //  出错s
//            console.log(err);
//        }
//    });
//}, 3000);

//var wgs84Sphere = new ol.Sphere(6378137);


////调用数据库加载基站和范围
//$.ajax({
//    type: "get",
//    //contentType: "application/json",
//    url: "./data.ashx?t=bs",
//    //data: "{}",  //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到       
//    dataType: 'json',   //WebService 会返回Json类型
//    success: function (result) {     //回调函数，result，返回值
//        if (result.length > 0) {
//            for (var i = 0; i < result.length; i++) {
//                //添加基站 
//                var bspoint = new ol.Feature(new ol.geom.Point([result[i].Lon, result[i].Lat]));
//                bspoint["type"] = "bs";
//                bspoint["BSID"]=result[i].BSID;
//                bspoint["BSNO"]=result[i].BSNO;
//                bspoint["BSName"]=result[i].BSName;
//                bspoint["Contact"]=result[i].Contact;
//                bspoint["Range"]=result[i].Range;
//                bssource.addFeature(bspoint);

//                //添加基站范围
//                var circle4326 = ol.geom.Polygon.circular(wgs84Sphere, [result[i].Lon, result[i].Lat], result[i].Range, 64);
//                var bsrange = new ol.Feature(circle4326);
//                //var circle3857 = circle4326.clone().transform('EPSG:4326', 'EPSG:3857');
//                bsrange["type"] = "bsrange";
//                bsrange["BSID"] = result[i].BSID;
//                bsrange["BSNO"] = result[i].BSNO;
//                bsrange["BSName"] = result[i].BSName;
//                bsrange["Contact"] = result[i].Contact;
//                bsrange["Range"] = result[i].Range;
//                bsrangesource.addFeature(bsrange);

//            }
//        }
//    },
//    error: function (err) {     //  出错s
//        console.log(err);
//    }
//});

//function showinfo(title,info) {
//    layer.alert(info, {
//        skin: 'layui-layer-lan'
//    , closeBtn: 1
//    , title: title
//    , anim: 4 //动画类型
//    });
//}

//var select = new ol.interaction.Select({
//    condition: ol.events.condition.click
//});

//map.addInteraction(select);
//select.on('select', function (e) {
//    if (e.selected[0]["type"] == 'ship') {
//        var bsname = getBSName(e.selected[0]);
//        var info = "编号:" + e.selected[0]["ShipNO"] + "<br>" +
//        "船名:" + e.selected[0]["ShipName"] + "<br>" +
//        "所有者:" + e.selected[0]["Owner"] + "<br>" +
//        "所属公司:" + e.selected[0]["OwnerCompany"] + "<br>" +
//        "联系方式:" + e.selected[0]["Contact"] + "<br>" +
//        "归属基站:" + bsname;
//        showinfo('船舶信息', info);
//    }
//    else if (e.selected[0]["type"] == 'bs' ) {
//        var info = "编号:" + e.selected[0]["BSNO"] + "<br>" +
//        "基站名称:" + e.selected[0]["BSName"] + "<br>" +
//        "联系方式:" + e.selected[0]["Contact"] + "<br>" +
//        "辐射范围:" + e.selected[0]["Range"] + " 米<br>";
//        showinfo('基站信息', info);
//    }
//    else {
//        //showinfo(e.selected[0]["type"]);
//    }
//    //console.log(e.target.getFeatures());

//});

////查找基站船舶所属基站名称
//function getBSName(shipfeature) {
//    var extent = shipfeature.getGeometry().getExtent();
//    var bfind = false;
//    var bsname="暂无"
//    bsrangesource.forEachFeatureIntersectingExtent(extent, function (feature) {
//        bfind = true;
//        bsname=feature["BSName"];
//    });
//    return bsname;
//}


//function getAngle(start, end) {
//    var diff_x = end.x - start.x,
//        diff_y = end.y - start.y;
//    //返回角度,不是弧度
//    return Math.atan(diff_y / diff_x); //  360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
//}

////function getAngle(x1, y1, x2, y2) {
////    var lengthAB = Math.sqrt(Math.pow(x2 - x1, 2) +
////                Math.pow(y1 - y1, 2)),
////    lengthAC = Math.sqrt(Math.pow(x2 - x2, 2) +
////                Math.pow(y1- y2, 2)),
////    lengthBC = Math.sqrt(Math.pow(x1 - x2, 2) +
////                Math.pow(y1 - y2, 2));
////    var cosA = (Math.pow(lengthAB, 2) + Math.pow(lengthAC, 2) - Math.pow(lengthBC, 2)) /
////                (2 * lengthAB * lengthAC);
////    return Math.round(Math.acos(cosA) * 180 / Math.PI);  
////}

//function getAngle(x1,y1,x2,y2) {
//    var diff_x = x2 - x1,
//        diff_y = y2 - y1;
//    //返回角度,不是弧度
//    var angle = 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
////    if (angle > 90 && angle <= 180) {
////        angle= 180 - angle;
////    }
////    else if(angle>180 && angle<270)
////    {
////        angle= angle-180;
////    }
////    else if(angle>=270)
////    {
////        angle= 360-angle;
////    }
////    else
////    {
////        angle= angle;
////    }
//    return 0 - Math.PI * angle/180;

//}

////
//function getAngle2(px, py, mx, my) {//获得人物中心和鼠标坐标连线，与y轴正半轴之间的夹角
//    var x = Math.abs(px - mx);
//    var y = Math.abs(py - my);
//    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
//    var cos = y / z;
//    var radina = Math.acos(cos); //用反三角函数求弧度
//    var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度

//    if (mx > px && my > py) {//鼠标在第四象限
//        angle = 180 - angle;
//    }

//    if (mx == px && my > py) {//鼠标在y轴负方向上
//        angle = 180;
//    }

//    if (mx > px && my == py) {//鼠标在x轴正方向上
//        angle = 90;
//    }

//    if (mx < px && my > py) {//鼠标在第三象限
//        angle = 180 + angle;
//    }

//    if (mx < px && my == py) {//鼠标在x轴负方向
//        angle = 270;
//    }

//    if (mx < px && my < py) {//鼠标在第二象限
//        angle = 360 - angle;
//    }



//    return angle;
//}
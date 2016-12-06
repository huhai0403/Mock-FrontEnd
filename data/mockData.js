/**
 * Created by huhai on 2016/11/14.
 */
/*报案*/
    /*保单查询*/
    Mock.mock(
        '/api/truckorder/list',[
            {
                "err_code":0,
                "err_msg":"",
                "truckorders":[
                    {
                        "id":"d350c1ec-b35c-11e5-b81a-6c400892aa6e",
                        "policyholder":"武汉测三二一公司",
                        "beneficiary":"武汉测试公司",
                        "plate_no":"鄂A4212",
                        "coverage":1500000,
                        "start_province":"湖北省",
                        "start_city":"咸宁市",
                        "end_province":"湖北省",
                        "end_city":"襄阳市",
                        "create_date":"2016-01-05",
                        "cargos":[
                            {
                                "id":"be1f3e16-b35b-11e5-8445-6c400892aa6e",
                                "tracking_no":"1234",
                                "name":"椅子",
                                "beginning":"咸宁市",
                                "destination":"襄阳市",
                                "quantity":"22.00",
                                "unit":"把"
                            }
                        ]
                    }
                ]
            },
            {
                "err_code":0,
                "err_msg":"",
                "truckorders":[
                    {
                        "id":"d350c1ec-b35c-11e5-b81a-6c400892aa66",
                        "policyholder":"武汉测试公司",
                        "beneficiary":"武汉测试公司",
                        "plate_no":"鄂A2222",
                        "coverage":1500000,
                        "start_province":"湖北省",
                        "start_city":"咸宁市",
                        "end_province":"湖北省",
                        "end_city":"襄阳市",
                        "create_date":"2016-01-05",
                        "cargos":[
                            {
                                "id":"be1f3e16-b35b-11e5-8445-6c400892aa6e",
                                "tracking_no":"1234",
                                "name":"椅子",
                                "beginning":"咸宁市",
                                "destination":"襄阳市",
                                "quantity":"22.00",
                                "unit":"把"
                            }
                        ]
                    }
                ]
            },
            {
                "err_code":0,
                "err_msg":"",
                "truckorders":[
                    {
                        "id":"d350c1ec-b35c-11e5-b81a-6c400892aa6e",
                        "policyholder":"武汉测试公司",
                        "beneficiary":"武汉测试公司",
                        "plate_no":"鄂A2222",
                        "coverage":1500000,
                        "start_province":"湖北省",
                        "start_city":"武汉市",
                        "end_province":"湖北省",
                        "end_city":"襄阳市",
                        "create_date":"2016-11-05",
                        "cargos":[
                            {
                                "id":"be1f3e16-b35b-11e5-8445-6c400892aa6e",
                                "tracking_no":"1234",
                                "name":"椅子",
                                "beginning":"咸宁市",
                                "destination":"襄阳市",
                                "quantity":"22.00",
                                "unit":"把"
                            }
                        ]
                    }
                ]
            },
            {
                "err_code":0,
                "err_msg":"",
                "truckorders":[
                    {
                        "id":"d350c1ec-b35c-11e5-b81a-6c400892aa6e",
                        "policyholder":"武汉测试公司",
                        "beneficiary":"武汉测试公司",
                        "plate_no":"鄂A2222",
                        "coverage":1500000,
                        "start_province":"湖北省",
                        "start_city":"武汉市",
                        "end_province":"湖北省",
                        "end_city":"襄阳市",
                        "create_date":"2016-11-05",
                        "cargos":[
                            {
                                "id":"be1f3e16-b35b-11e5-8445-6c400892aa6e",
                                "tracking_no":"1234",
                                "name":"椅子",
                                "beginning":"咸宁市",
                                "destination":"襄阳市",
                                "quantity":"22.00",
                                "unit":"把"
                            }
                        ]
                    }
                ]
            }
        ]
    );
    Mock.mock(
        '/api/truckorder/Searchlist',[
            {
                "err_code":0,
                "err_msg":"",
                "truckorders":[
                    {
                        "id":"d350c1ec-b35c-11e5-b81a-6c400892aa6e",
                        "policyholder":"武汉测222三二一公司",
                        "beneficiary":"武汉测试公司",
                        "plate_no":"鄂A53242",
                        "coverage":1500000,
                        "start_province":"湖北省",
                        "start_city":"咸宁市",
                        "end_province":"湖北省",
                        "end_city":"襄阳市",
                        "create_date":"2016-01-05",
                        "cargos":[
                            {
                                "id":"be1f3e16-b35b-11e5-8445-6c400892aa6e",
                                "tracking_no":"1234",
                                "name":"椅子",
                                "beginning":"咸宁市",
                                "destination":"襄阳市",
                                "quantity":"22.00",
                                "unit":"把"
                            }
                        ]
                    }
                ]
            },
            {
                "err_code":0,
                "err_msg":"",
                "truckorders":[
                    {
                        "id":"d350c1ec-b35c-11e5-b81a-6c400892aa6e",
                        "policyholder":"武汉523公司",
                        "beneficiary":"武汉测试公司",
                        "plate_no":"鄂A2342",
                        "coverage":1500000,
                        "start_province":"湖北省",
                        "start_city":"咸宁市",
                        "end_province":"湖北省",
                        "end_city":"襄阳市",
                        "create_date":"2016-01-05",
                        "cargos":[
                            {
                                "id":"be1f3e16-b35b-11e5-8445-6c400892aa6e",
                                "tracking_no":"1234",
                                "name":"椅子",
                                "beginning":"咸宁市",
                                "destination":"襄阳市",
                                "quantity":"22.00",
                                "unit":"把"
                            }
                        ]
                    }
                ]
            }
        ]
    );
    /*提交数据*/
    Mock.mock(
        '/api/truckorder/ygb/newReportInfo',
        function(options){
            //var reInfo = 111;
            //return reInfo;
        }
    );
/*上传图片*/
    Mock.mock(
        '/api/truckorder/ygb/reportImages',
        function(options){
            return Mock.Random.image()
        }
    );


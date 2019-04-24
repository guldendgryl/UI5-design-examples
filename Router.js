jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

sap.ui.core.routing.Router.extend("SapUI5Tutorial.Router",{
    constructor:function(){
        sap.ui.core.routing.Router.apply(this,arguments);
        this.oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(this);
    },
    myNavBack:function(sRoute,mData){
        var oHistory = sap.ui.core.routing.History.getInstance();
        var sUrl = this.getURL(sRoute,mData);
        var sDirection = oHistory.getDirection(sUrl);

        if("Backwards" === sDirection){
            window.history.go(-1);
        } else {
            var bReplace = true;
            this.navTo(sRoute,mData,bReplace);
        }
    },
    myNavToWithoutHash:function(viewName,viewType,master,data){
        var appView = sap.ui.getCore().byId("masterAppView");
        var oView = this.getView(viewName,viewType);
        appView.addPage(oView,master);
        appView.to(oView.getId(),"show",data);
    }
});
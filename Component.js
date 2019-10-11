'use strict'
jQuery.sap.require("sap.ui.core.IconPool"); 
jQuery.sap.require('SapUI5Tutorial.Router')
sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    "sap/ui/core/IconPool",
  ],
  function (UIComponent,IconPool) {
    return UIComponent.extend('SapUI5Tutorial.Component', {
      
      metadata: {
        routing: {
          config: {
            routerClass: SapUI5Tutorial.Router,
            viewType: 'XML',
            targetAggregation: 'pages',
            clearTarget: false
          },
          routes: [
            {
            pattern: 'documentManagement',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'DocumentManagementView',
            view: 'DocumentManagement',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'hasta',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'hastakayitView',
            view: 'hastakayit',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'admin',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'admindashboardView',
            view: 'admindashboard',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'clockapp',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'clockappView',
            view: 'clockapp',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'movie',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'movieView',
            view: 'movie',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'book',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'bookstoreappView',
            view: 'bookstoreapp',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'spotify',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'spotifyView',
            view: 'spotify',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'hesap',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'hesapmakinesiView',
            view: 'hesapmakinesi',
            targetControl: 'masterAppView'
          },

          {
            pattern: 'shopping',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'shoppingView',
            view: 'shopping',
            targetControl: 'masterAppView'
          },

          {
            pattern: 'product',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'productlistView',
            view: 'productlist',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'productbuy',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'productbuypageView',
            view: 'productbuypage',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'productbasket',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'productbasketView',
            view: 'productbasket',
            targetControl: 'masterAppView'
          },

          {
            pattern: 'bnet',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'BnetDashboardView',
            view: 'BnetDashboard',
            targetControl: 'masterAppView'
          },

          {
            pattern: 'font',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'fontawesome',
            view: 'fontawesome',
            targetControl: 'masterAppView'
          },

          {
            pattern: 'bnetActivity',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'bnetActivityView',
            view: 'bnetActivity',
            targetControl: 'masterAppView'
          },
     
          {
            pattern: 'calendar',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'calendarView',
            view: 'calendar',
            targetControl: 'masterAppView'
          },

          {
            pattern: 'clock',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'clockView',
            view: 'clock',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'shoppingWeb',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'shoppingWebView',
            view: 'shoppingWeb',
            targetControl: 'masterAppView'
          },
        ]

        }
      },
      init: function () {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        var mConfig = this.getMetadata().getConfig();
        this.getRouter().initialize();

        sap.ui.core.IconPool.addIcon("battery", "fa", {
          fontFamily : "FontAwesome",
          content : "\f241" ,
          // content: "\f007",
          
      });
    
      },


      createContent: function () {
        var oViewData = {
          component: this
        }
        return sap.ui.view({
          viewName: 'SapUI5Tutorial.RootApp',
          type: sap.ui.core.mvc.ViewType.XML,
          id: 'app',
          viewData: oViewData

        });
      }
      
    });


    
  });
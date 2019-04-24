'use strict'
jQuery.sap.require('SapUI5Tutorial.Router')
sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel'
  ],
  function (UIComponent, JSONModel) {
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
            pattern: 'hastakayıt',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'hastakayitView',
            view: 'hastakayit',
            targetControl: 'masterAppView'
          },
          {
            pattern: ' admindashboard',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'admindashboardView',
            view: 'admindashboard',
            targetControl: 'masterAppView'
          },
          {
            pattern: '',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'clockappView',
            view: 'clockapp',
            targetControl: 'masterAppView'
          },
          {
            pattern: 'fdfdf',
            viewPath: 'SapUI5Tutorial.Application.Main.views.DocumentManagement.view',
            name: 'movieView',
            view: 'movie',
            targetControl: 'masterAppView'
          },
        ]

        }
      },
      init: function () {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        var mConfig = this.getMetadata().getConfig();
        this.getRouter().initialize();
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
        })
      }
    })
  }
)
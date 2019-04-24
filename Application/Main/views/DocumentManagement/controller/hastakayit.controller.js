sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";
	var base;
	return Controller.extend("SapUI5Tutorial.Application.Main.views.DocumentManagement.controller.hastakayit", {
		onInit: function () {
			base = this;
			base.getView().setModel(oModel);

			var listData = [
				{
				   
				  "id": 1,
				  "title": "",
				  "body": "Clinic Id\nClinic Info Text"
				},
				{
				   
				  "id": 2,
					"title": "",
				  "body": "Clinic Id\nClinic Info Text"
				},
			
			
			];
			oModel.setProperty("/CustomListData", listData);
		}
	});
});
sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";
	var base;
	return Controller.extend("SapUI5Tutorial.Application.Main.views.DocumentManagement.controller.DocumentManagement", {
		onInit: function () {
			base = this;
			base.getView().setModel(oModel);
		}
	});
});
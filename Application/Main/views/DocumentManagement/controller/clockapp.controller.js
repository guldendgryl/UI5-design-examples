sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";
	var base;
	return Controller.extend("SapUI5Tutorial.Application.Main.views.DocumentManagement.controller.clockapp", {
		onInit: function () {
			base = this;
			base.getView().setModel(oModel);

			var clock = [
			{
				id: 1,
				firstimage:"/resources/images/clock1.jpg",
				info:"The Minimalist hand Black Leather watch",
				money:"$195.00"
				
			},
			{
			    id: 2,
				firstimage:"/resources/images/clock2.jpg",
				secondimage:"/resources/images/clock2-2.jpg",
				thirdimage:"/resources/images/clock2-3.jpg",
				info:"The Minimalist hand Black Leather watch",
				money:"$195.00"
			},
			{
				id: 3,
				firstimage:"/resources/images/clock3.jpg",
				secondimage:"/resources/images/clock3-2.jpg",
				thirdimage:"/resources/images/clock3-3.jpg",
				info:"The Minimalist hand Black Leather watch",
				money:"$195.00"
			},
			{
				id: 4,
				firstimage:"/resources/images/clock4.jpg",
				secondimage:"/resources/images/clock4-2.jpg",
				thirdimage:"/resources/images/clock4-3.jpg",
				info:"The Minimalist hand Black Leather watch",
				money:"$195.00"
			},
			{
				id: 5,
				firstimage:"/resources/images/clock5.jpg",
				secondimage:"/resources/images/clock4-2.jpg",
				thirdimage:"/resources/images/clock4-3.jpg",
				info:"The Minimalist hand Black Leather watch",
				money:"$195.00"
			},
			{
				id: 6,
				firstimage:"/resources/images/clock6.jpg",
				secondimage:"/resources/images/clock4-2.jpg",
				thirdimage:"/resources/images/clock4-3.jpg",
				info:"The Minimalist hand Black Leather watch",
				money:"$195.00"
				
			},
			
			

			]
			oModel.setProperty("/clockModel", clock);
		},
		Press:function(e){
			
			var carousel = this
                        .getView()
						.byId();
						oModel.setProperty("{/clockModel}");
       
                    
		}

	});
});
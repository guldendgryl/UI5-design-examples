sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";
	var base;
	var operator;
	var numInput = 0;
	var sonuc = 0;
	return Controller.extend("SapUI5Tutorial.Application.Main.views.DocumentManagement.controller.hesapmakinesi", {
		onInit: function () {
			base = this;
			base.getView().setModel(oModel);
			var text = this.byId("inputId");
			text.setText("0");

			
			sap.ui.getCore().attachInit(function () {
				// $.ajax({
				// 	type: "GET",
				// 	contentType: "application/json",
				// 	url: "/resources/font/fontawesome.icons.ui5.json",
				// 	success: function (data) {
				// 		$.each(data, function (i, icon) {
				// 			sap.ui.core.IconPool.addIcon(icon.name, "fontawesome-" + icon.brand, {
				// 				fontFamily: "fa-" + icon.brand,
				// 				text: icon.label,
				// 				content: icon.unicode
				// 			});
				// 		});
				// 	}
				// });
				sap.ui.core.IconPool.addIcon('register', 'customfont', 'fontAwesome', 'f0f3');
			});

		},

		onNumberPress: function (oEvent) {
			var button = oEvent.getSource();
			var num = button.getText();
			var text = this.byId("inputId");

			if (!this.isOperatorControl(text.getText()))
				num = text.getText() + num;
			text.setText(parseFloat(num));
			sonuc = text.getText();


		},

		onOperatorPress: function (oEvent) {
			var button = oEvent.getSource();
			var text = this.byId("inputId");
			var num = text.getText();
			num = parseFloat(num);
			if (numInput == operator) {

				numInput = 0;
				if (this.isOperatorControl(operator)) {
					// if (numInput == operator)
					// 	numInput = 0;
					numInput = this.calculate(num);
					var input = this.byId("inputId");
					input.setText(numInput);
				}
			}
			else {
				if (!isNaN(num))
					numInput = num;
			}
			operator = button.getText();
			text.setText(operator);

		},

		onResult: function (oEvent) {

			var button = oEvent.getSource();
			var text = this.byId("inputId");
			var num = text.getText()
			num = parseFloat(num);

			if (this.isOperatorControl(operator)) {
				numInput = this.calculate(num);
				text.setText(numInput);

			}

		},

		isOperatorControl: function (op) {
			return op == "+" || op == "x" || op == "/" || op == "-";
		},


		calculate: function (num) {
			// num = parseInt(num);
			// numInput = parseInt(numInput);
			switch (operator) {
				case "+":
					return numInput + num
				case "-":
					return numInput - num
				case "x":
					return numInput * num
				case "/":
					return numInput / num
			}

		},

		onDelete: function (oEvent) {

			var text = this.byId("inputId");
			var textContent = text.getText().slice(0, text.getText().length - 1)
			var deletedText = text.getText().slice(text.getText().length - 1, 1)
			text.setText(textContent);
			if (this.isOperatorControl(deletedText))
				operator = "";

		},

		onClear: function (oEvent) {
			var text = this.byId("inputId");
			text.setText("0");
			operator = "";
			sonuc = 0;
		}
	});
});
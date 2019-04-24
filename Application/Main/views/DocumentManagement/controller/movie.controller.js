sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";
	var base;
	return Controller.extend("SapUI5Tutorial.Application.Main.views.DocumentManagement.controller.movie", {
		onInit: function () {
			base = this;
            base.getView().setModel(oModel);
            this
                        .getView()
                        .setModel(oModel);
                    $.ajax({
                        type: "GET",
                        url: 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-movies-02.json',
                        data: "",
                        dataType: 'json',
                        success: function (firstmovies) {
                            oModel.setProperty("/firstmovies", firstmovies);
                        }
                        
                    }) 
                    var movie = [
                        {
                            
                            posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTYwZWQ4ZTQtZWU0MS00N2YwLWEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY446_SX290_AL_.jpg",
                            title:"Himlens barn",
                            
                        },
                        {
                            
                            posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500_AL_.jpg",
                            title:"Himlens barn",
                            
                        },
                        {
                            
                            posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRhY2QwM2UtNWRlNy00ZWQwLTg3MjktZThmNjQ3NTdjN2IxXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY500_CR0,0,358,500_AL_",
                            title:"Himlens barn",
                            
                        },
                    ]
                    oModel.setProperty("/movieModel", movie);
        }
        
	});
});
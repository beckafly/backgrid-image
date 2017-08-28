/*	
 	backgrid-image
	https://github.com/beckafly/backgrid-image
	Copyright (c)  2017 Alexander Becker
  	Licensed under the MIT @license.
*/
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(["backbone", "backgrid", "underscore"], factory);
  } else if (typeof exports == "object") {
    // CommonJS
    module.exports = factory(require("backbone"), require("backgrid"), require("underscore"));
  }
  // Browser
  else factory(root.Backbone, root.Backgrid, root._);

}(this, function (Backbone, Backgrid, _) {

	"use strict";

	var ImageCell = Backgrid.Extension.ImageCell = Backbone.View.extend({

		/** @property */
		className: "image-cell renderable",
		tagName: "td",


		/** Renders an image in a table cell. */

		render: function() {
			this.$el.empty();
			this.$el.append(this.make_image_src(this.model));
			this.delegateEvents();
			return this;
		},

		make_image_src: function(model) {
			var img_src = this.model.get("img_src");
			return typeof img_src === "string" ? '<img src="' + img_src + '" width="50" alt="" />' : "no image avalable";
		}

	});
}));
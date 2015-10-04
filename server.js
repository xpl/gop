require ('useless')

App = $singleton (Component, {

	//apiDebug: true,

	api: function () { return {
		'/':     this.file ('./index.html'),
		':file': this.file ('./') } },

	$traits: [
		
		require ('useless/server/exceptions'),
		require ('useless/server/tests'),
		require ('useless/server/deploy'),
		require ('useless/server/api'),
		require ('useless/server/io'),
		require ('useless/server/http') ],

	init: function (then) {

		then () } })

 var HtmlWebpackPlugin = require('html-webpack-plugin');
function getHtmlConfig(name){
	return {
		title:name,
		filename:'view/'+name+'.html',
		template:'src/view/'+name+'.html',
		inject: true,
		favicon:'',
		hash: true,
		chunks:[name]
	}
}
module.exports = {
    entry: {
    	'index':['./src/page/index/index.js'],
    	'login':['./src/page/login/index.js']
},
    output: {
        path: __dirname+'/bin',
        filename: "js/[name].js",
    },
    plugins: [new HtmlWebpackPlugin(getHtmlConfig('index')),new HtmlWebpackPlugin(getHtmlConfig('login'))]
   
};
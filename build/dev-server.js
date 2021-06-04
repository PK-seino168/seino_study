//Node.jsのrequiredスタイルでimport
const bodyParser = required('body-parser')

module.exports = app => {
	app.use(bodyParser.json())
	
	//ToDo以降のAPIの実装内容を記述

}
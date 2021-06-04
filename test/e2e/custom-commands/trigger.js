exports.command = funxtion (selector,value){
	return this.clearValue(selecter)
		.setValue(selector,value)
		.trigger(selector,'keyup',13)
}
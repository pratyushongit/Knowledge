let obj = {
	internal: [
		"mdsp:core:assetmanager.read",
		"mdsp:core:assetmanager.write",
		"mdsp:core:nose:user",
		"mdsp:core:agm:admin",
		"mdsp:core:iam:user"
	],
	external: [
		"tokenapiapp1.add",
		"tokenapiapp1.delete",
		"tokenapiapp1.merge",
		"tokenapiapp1.read"
	]
}

function internalArrayModify(input){
    finalArr = [];
    let uniqueArr = [];
    input.forEach(el => {
        let myEl = el.split(':')[2].split('.')[0];
        if(!uniqueArr.includes(myEl)){
            uniqueArr.push(myEl);
        }
    });
    uniqueArr.forEach(headerEl => {
        let everyObj = {};
        everyObj['name'] = headerEl;
        let valueArr = [];
        input.forEach(valueEl => {
            if(valueEl.includes(headerEl)){
                valueArr.push(valueEl);
            }
        });
        everyObj['value'] = valueArr;
        finalArr.push(everyObj);
    });
    console.log(finalArr);
}


function externalArrayModify(input){
    finalArr = [];
    let uniqueArr = [];
    input.forEach(el => {
        let myEl = el.split('.')[0];
        if(!uniqueArr.includes(myEl)){
            uniqueArr.push(myEl);
        }
    });
    uniqueArr.forEach(headerEl => {
        let everyObj = {};
        everyObj['name'] = headerEl;
        let valueArr = [];
        input.forEach(valueEl => {
            if(valueEl.includes(headerEl)){
                valueArr.push(valueEl);
            }
        });
        everyObj['value'] = valueArr;
        finalArr.push(everyObj);
    });
    console.log(finalArr);
}

internalArrayModify(obj.internal);
externalArrayModify(obj.external);
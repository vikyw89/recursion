const contains = (obj, searchValue) => {
    // recursive case
    for (let key in obj) {
		if(typeof obj[key] === 'object'){
			return contains(obj[key], searchValue);
		}
    }
    // break case
    if (Object.values(obj).filter(item=> item === searchValue).length === 1){
        return true
    } else {
        return false
    }
}

export { contains }
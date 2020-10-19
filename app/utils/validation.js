

const isValidInputArray = inputArray => {
    if (inputArray && Array.isArray(inputArray) && inputArray.length >= 1) {
        return true
    }
    return false
}

const isLocation = input => {
    if (typeof input === 'string' && isNaN(input)){
        return true
    }
    return false
}

const isPostalCode = input => {
    if (typeof input === 'string' || typeof input === 'number' && !isNaN(input)){
        return true
    }
    return false
}

const VALIDATION = {
    isValidInputArray,
    isLocation,
    isPostalCode
}

export default VALIDATION
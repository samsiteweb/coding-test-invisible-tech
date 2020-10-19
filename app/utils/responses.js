const SUCCESS = ( status, weather, currentTime ) => {
    const response = {
        message: 'success',
        status,
        weather,
        current_time : currentTime
    }

    return response
}

const ERROR = ( reason = null , status = 400) => {
    const response = {
        message: 'error',
        status,
        reason
    }

    return response
}

const RESPONSE = {
    SUCCESS,
    ERROR
}

export default RESPONSE
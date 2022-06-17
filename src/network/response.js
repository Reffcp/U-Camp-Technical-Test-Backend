exports.success = (res, message, status) => {
    let statusCode = status || 200;
    let statusMessage = message || 'Success';

    res.status(status).send({
        error: false,
        status: statusCode,
        body: statusMessage
    });
}

exports.error = (res, message, status) => {
    let statusCode = status || 500;
    let statusMessage = message || 'Internal Server Error';

    res.status(status).send({
        error: true,
        status: statusCode,
        body: statusMessage
    });
}
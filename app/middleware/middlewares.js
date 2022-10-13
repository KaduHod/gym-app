export const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

export const requestAlert = (req, res, next) => {
    console.log('\t Requisição');
    next();
}

export const auth = (req, res, next) => {
    console.log('\t Authentication success!!');
    next();
}
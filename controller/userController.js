exports.validateResponse =(req, res) =>{
    res.send({
            message: 'This user is valid!',
          });
}

exports.sanitizeResponse =(req, res) =>{
    res.send(req.body);
}

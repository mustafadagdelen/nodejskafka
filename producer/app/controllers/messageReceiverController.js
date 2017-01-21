'use strict';
var kafka = require('no-kafka');
var config = require('../../config/config.js');

module.exports = (app, config) => {
    return (req, res, next) => {

        var reqBody = req.body.toString();

        var producer = new kafka.Producer({ connectionString: config.kafkaServerUrl });

        return producer.init().then(function () {
            return producer.send({
                topic: config.topicName,
                partition: 0,
                message: {
                    value: reqBody
                }
            });
        })
            .then(function (result) {
                console.log("Message sent successfully");
                res.status(202).end();
            });
    }
};
/**
 * Created by User on 2013/12/21.
 */

var Contact = require('../models/contactModel');

/*
 * @desc:取得資料
 * 
 */
function getContacts(req, res) {
    Contact.find(function (error, contacts) {
        if (error) {
            res.send(error);
        }
        res.json(contacts);
    });
}

//新增資料
function saveContacts(req, res) {
    var contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    });

    contact.save(function (error, savedContact) {
        if (error) {
            res.send(error);
        }
        res.json(savedContact);
    })
}

function modifyContacts(req, res) {
    Contact.update({_id: req.params.id}, {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    }, function (error, numberAffected, raw) {
        if (error) {
            res.send(error);
        }
        res.json({
            number: numberAffected,
            raw: raw
        });
    });
}

function deleteContacs(req, res) {
    Contact.remove({_id: req.params.id}, function (errors) {
        res.json({'': 'ok'});
    });
}

exports.getContacts = getContacts;
exports.saveContacts = saveContacts;
exports.modifyContacts = modifyContacts;
exports.deleteContacts = deleteContacs;












/**
 * Created by IlyaLitvinov on 05.04.16.
 */
/**
 * Created by IlyaLitvinov on 12.03.16.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const CommentModel = require('./comments.model');
const PhoneModel = require('./phone');
const mongoose = require('mongoose');
const dbName = 'mobilestorev2-dev';

mongoose.connect(`mongodb://localhost/${dbName}`);

mongoose.set('debug', true);

function CreateCollection() {
    return PhoneModel.find({})
        .then(phones => {
            const pomises = phones.map((phone) => {
                const input = {
                    item_id: phone.id,
                    text: `Default comment for phone ${phone.name}`,
                    author: 'Default Author',
                    created_on: Date.now(),
                    item_rating: Math.round(Math.random()*5)
                };

                return new CommentModel(input).save()
            });

            return Promise.all(pomises)
        })
        .then(res => {
            process.exit();
        })
        .catch(e => {
            console.log(e);
        })



}
mongoose.connection.on('open', () => {
    mongoose.connection.db.dropCollection('comments', (err, result) => {
        mongoose.connection.db.collections().then(res => {
            //todo create auto droping db if exist
            CreateCollection()
        })
    });
});

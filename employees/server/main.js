/**
 * Created by jacxon4 on 10/09/2016.
 */

// only executed on the server
//Console.logs here will pop up to server terminal, no browser

//Lodash uses _ as variable Name
import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import  {Employees} from '../imports/collections/employees';
import {image, helpers} from 'faker';


Meteor.startup(()=>{
    //Great place to generate data;ç

    // Check to se if we need to add something or data exists

    // See if the collection has any records
    const numberRecords = Employees.find({}).count();
    if (!numberRecords){
        //Generate data
        _.times(5000,()=>{

            //ES6 desctructuring
            const {name, email, phone} = helpers.createCard();

            /*
             Employees.insert({
             name: name,
             email: email,
             phone: phone
             });
             */
            //If the value and the key is the same, use this
            Employees.insert({
                name, email, phone,
                avatar: image.avatar()
            });
        });
    }
});

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Employee = require('../app/models/employee.model.js');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'email'},(email,password,done)=> {
                //match user
                Employee.findOne({email : email})
                .then((employee)=>{
                 if(!employee) {
                     return done(null,false,{message : 'Email incorrect'});
                 }
                 //match pass
                 bcrypt.compare(password,employee.password,(err,isMatch)=>{
                     if(err) throw err;

                     if(isMatch) {
                         return done(null,Employee);
                     } else {
                         return done(null,false,{message : 'Password incorrect'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeEmployee(function(employee, done) {
        done(null, employee.id);
      });
      
      passport.deserializeEmployee(function(id, done) {
        Employee.findById(id, function(err, employee) {
          done(err, employee);
        });
      }); 
}; 
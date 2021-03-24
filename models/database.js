const fs= require('fs')

const filePath ="database.json";

module.exports = {
    getUsers: function( callback) {
        fs.readFile(filePath, function(err, data) {
            if (err) return callback(err);
            callback(null, data);
        });
    },
     adduser: function(newuser,callback){
         fs.writeFileSync(filePath, newuser, function(err, data){
            if (err) {
              console.error(err)
              return callback(err);
            }
          })
    },
    deleteUser:  function(deluser,callback){
    
          fs.readFileSync(filePath,function(err, data) {
            if (err) return callback(err);
            const newData= JSON.parse(data).filter(item=>item.id !=deluser );;
            const dataTostring= JSON.stringify(newDate);
            fs.writeFileSync(filePath,newData, function(err, data){
                if (err) {
                  console.error(err)
                  return callback(err);
                }
              });
         });
        
    }

}
/**
 * Created by nadir on 21/08/15.
 */

module.exports = function(mongoose, Product,User) {



    var products = [
        {productName: 'HDD 1 TB', productCode:'TPN:001',category:'Store', stock:'20', price: 120, imgUrl:'public/assets/hdd1To.jpg'},
        {productName: 'HDD 2 TB', productCode:'TPN:007',category:'Store', stock:'40', price: 120, imgUrl:'public/assets/hdd1To.jpg'},
        {productName: 'MoRIS Client', productCode:'TPN:002',category:'PC', stock:'10', price: 1120, imgUrl:'public/assets/tower.jpg', details: ['12343436', '964KHJ', 'JFGFKG'] },
        {productName: 'MATRIX 12', productCode:'TPN:003',category:'Store', stock:'8', price: 2220, imgUrl:'public/assets/hdd1To.jpg', details: ['12343436', '964KHJ', 'JFGFKG'] },
        {productName: 'Monitor 22p', productCode:'TPN:004',category:'Monitor', stock:'20', price: 120, imgUrl:'public/assets/asus22.jpg', details: ['12343436', '964KHJ', 'JFGFKG'] },
        {productName: 'Cable SCSCI', productCode:'TPN:005',category:'Cable', stock:'50', price: 50, imgUrl:'public/assets/hdd1To.jpg', details: ['12343436', '964KHJ', 'JFGFKG'] },
        {productName: 'Graphic card', productCode:'TPN:006',category:'Component', stock:'20', price: 320, imgUrl:'public/assets/hdd1To.jpg'}
    ];

    var users = [
                {name: 'adm', password: 'adm', roles: ['admin']},
                {name: 'user', password: 'user', roles: ['user']}
                ];

    var db = mongoose.connect('mongodb://localhost/RMA', function(){
        console.log('Connection to DB Ok ' )
        mongoose.connection.db.dropDatabase();

        for(var i=0; i< products.length; i++){
            new Product(products[i]).save(function(err, data){
                if(err)console.log(err)
            });
        }

        for(var i=0; i<users.length; i++){
            new User(users[i]).save();
        }

    });

}
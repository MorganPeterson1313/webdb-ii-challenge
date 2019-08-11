
const express = require('express');
const router = express.Router();
const db = require('./knexfile')


router.get('/', async (req, res) => {

    try{
        const cars = await 
        db.select('*').from('cars');
        res.status(200).json(cars);

    }catch (err){
        res.status(500).json({message:'error getting cars', error: err})
    }

});


router.get('/:id', async (req, res) => {
    try{
        const {car} = await db.select('*').from('cars').where('id');
        if (account){
            res.status(200).json(car);
        }else{
            res.status(404).json({message:"could not find the car with id"})
        }

    } catch (err){
        res.status(500).json({message:"failed to get car", error: err})
    }

});


router.post('/', async(req,res) =>{
const carData = req.body
    try{
        const car = await db('accounts').insert(carData);
        res.status(201).json(car)
        
    }catch(err){
res.status(500).json({message:'could not add your car'})
    }


});


router.put('/:id', async(req,res) =>{
    const {id} = req.params;
    const changes = req.body;

try{
    const count =await db('cars').where('id' , '=' , id).update(changes);
    if (count){
        res.status(201).json({updated: count})
    }else{
        res.status(404).json({message:` could not find car ${id}` });
    }

}catch(err){
    res.status(500).json({message: 'could not update car info', error: err})
}


});


router.delete('/', async(req,res) =>{
const {id} = req.params;
try{

    const count = await db('cars').where({id}).del()
    db.remove(req.params.id)
        if(count) {
            res.status(200).json({deleted: count});
        }else{
            res.status(404).json({ message: `could not find car ${id}`})
        }


}catch(err){
    res.status(500).json({message: 'could not delete car'})
}


})



module.exports = router;
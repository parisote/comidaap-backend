const allergyCtrl = {};
const { FoodAllergyClient, Ingredient } = require('../db/models');

allergyCtrl.checkAllergyByClientId = async (req,res) => {
    try{
        const { clientId } = req.body;
        if(isNaN(clientId))
            throw 'Parametro no correcto';

        const total = await FoodAllergyClient.findAll({ 
            where: { clientId: clientId },
            include: [Ingredient]
        })

        const hasAllergy = total.length > 0;
        const result = { clientId:clientId, hasAllergy: hasAllergy};
        res.status(200).send(result);
    } catch (error){
        res.status(500).send(error);
    }
}

allergyCtrl.checkAllergyByClientIdAndIngredientId = async (req,res) => {
    try{
        const { clientId, ingredientId } = req.body;
        if(isNaN(clientId)&&(ingredientId))
            throw 'Parametros no correctos';

        const total = await FoodAllergyClient.findAll({ 
            where: { clientId: clientId, ingredientId : ingredientId },
            include: [Ingredient]
        });

        const hasAllergy = total.length > 0;
        const ingredient = total.length > 0? total[0]['Ingredient']['name'] : '';
        const iId = total.length > 0? total[0]['Ingredient']['id'] : '';
        const result = { clientId:clientId, ingredientId:iId, ingredientName:ingredient, hasAllergy: hasAllergy};
        res.status(200).send(result);
    } catch (error){
        res.status(500).send(error);
    }
}

allergyCtrl.addAllergyToClient = async (req,res) => {
    try{
        const { clientId, ingredientId } = req.body;
        if(isNaN(clientId)&&(ingredientId))
            throw 'Parametros no correctos';

        const total = await FoodAllergyClient.findOne({ 
            where: { clientId: clientId, ingredientId : ingredientId }
        });

        let allergy = ''
        let result = ''
        if(!total || total.length == 0){
            allergy = await FoodAllergyClient.create({ clientId: clientId, ingredientId: ingredientId, createdAt: new Date } );
            result = { clientId:allergy.clientId, ingredientId:allergy.ingredientId, createdAt: allergy.createdAt};
            res.status(201).send(result);
        } else {
            result = { result: 'Alergia ya existente'}
            res.status(409).send(result);        }        
        
    } catch (error){
        res.status(500).send(error);
    }
}

allergyCtrl.deleteAllAllergiesToClient = async (req,res) => {
    try{
        const { clientId } = req.body;
        if(isNaN(clientId))
            throw 'Parametros no correctos';

        await FoodAllergyClient.destroy({ where: { clientId: clientId } } );
        result = { result: 'OK' };
        res.status(200).send(result);
    } catch(err){
        res.status(500).send(err);
    }
}

module.exports = allergyCtrl;

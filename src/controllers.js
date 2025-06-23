const express = require("express");
const myTask = require("./model/taskmodel")
const myHistory = require("./model/taskhistorymodel")


exports.createclicks = async (req,res)=>{

    const Click =  req.body.click
    
    try {
       
        const myClick = new myTask({
            taskname:Click
        })

        const mySaves = new myHistory({
            history:myClick.taskname
        })

        await myClick.save()
        await mySaves.save()
       

        res.status(200).json({
            status:"Success",
            message:"Click Saved"
        })

    } catch (error) {
                res.status(200).json({
            status:"Error",
            message:error
        })
         console.log(error)
    }
   


}


exports.getTracks =async  (req,res)=>{

    try {
        const userHistory =await  myHistory.find()

        res.status(200).json({
            status:"Success",
            message:userHistory
        })
        
    } catch (error) {

                res.status(400).json({
            status:"Success",
            message:error
        })
        
    }


}
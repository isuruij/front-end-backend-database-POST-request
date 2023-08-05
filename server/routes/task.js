const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.post("/tasks", async (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
 
  try {
    await task.save();
    res.status(201).send(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const tasks = await Task.find({owner:req.params.id});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);  
  } 
});
 
router.patch("/tasks/:id", async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updateTask) {
      return res.status(404).send();
    }
    res.status(200).send(updateTask);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.delete("/tasks/:id", async (req, res) => {
    try {
      const deleteTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      if (!deleteTask) {
        return res.status(404).send();
      }
      res.status(200).send(deleteTask); 
    } catch (error) { 
      res.status(400).send(error);
    }
  });

module.exports = router;
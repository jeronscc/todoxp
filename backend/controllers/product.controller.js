import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      console.log("Error in fetching products:", error.message);
      res.status(500).json({ success: false, message: "Server Error"});
    }
  };

export const createUser = async (req, res) => {
    const user = req.body;
  
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      return res.status(400).json({ success: false, message: "Please provide all fields"});
    }
  
    const newUser = new User(user)
  
    try {
      await newUser.save();
      res.status(201).json({ success: true, data: newUser});
    } catch (error) {
      console.error("Error in create user:", "Server Error");
      res.status(500).json({ success: false, message: "Server Error"});
    }
  };

export const updateUser = async (req, res) => {
    const {id} = req.params;
  
    const user = req.body;
  
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({ success: false, message: "Invalid user id"});
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(id, user, {new: true});
      res.status(200).json({ success: true, data: updatedUser });
    } catch(error) {
      res.status(500).json({ success: false, message: "Server Error"});
    }
  }

export const deleteUser = async (req, res) => {
    const {id} = req.params;
  
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Product deleted"});
    } catch(error) {
      console.log("Error in deleting product:", error.message);
      res.status(404).json({ success: false, message: "Product not found"});
    }
  }
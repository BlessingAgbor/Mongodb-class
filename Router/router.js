const express= require("express")

const route= express.Router()
const {postUser}= require("../Controller/controller")
const {getUser}= require("../Controller/controller")
const {getId}= require("../Controller/controller")



route.post("/post", postUser)
route.get("/users", getUser)
route.get("/:id", getId)

module.exports= route;
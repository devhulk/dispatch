const Dispatch = require('../dispatch')
const express = require('express')
const mongoose = require('mongoose')
let Node = require('../node')
class NotificationRoutes {

  getRoutes(app,router) {
      router.route('/sms')
        .post((req,res) => {
         let node = new Node(req.body)
          if (node.type == 'sms') {
            //This is where you need to call flow API
            Dispatch.notification(node) 
          }
          node.markModified(node)
          node.save((err) => {
            if (err) console.log(err)
          })
        console.log(req.body)
        //console.log(node)
        res.send(node)

      })
  }
}

module.exports = NotificationRoutes

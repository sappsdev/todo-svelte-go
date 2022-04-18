package main

import "github.com/gin-gonic/gin"

func Routes(r *gin.RouterGroup) {

	_ = r.Group("/todos")

}

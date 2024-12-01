package com.example

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.reflect.*

fun Application.configureRouting() {
    routing {
        get("/api") {
            call.respondText("Backend Api Service is working!")
        }
        post("/api") {
            call.respondText("Backend Api Service is working!")
        }
        post("/api/login") {
            // TODO create request to AuthService and check validate data here
            call.respondText("Test!")
        }
        post("/api/login/refresh") {
            call.respondText("Test!")
            // TODO create request to AuthService to get a new Access token
        }
        post("/api/unlogin") {
            call.respondText("Test!")
            // TODO create request to AuthService to end current session
        }
    }
}

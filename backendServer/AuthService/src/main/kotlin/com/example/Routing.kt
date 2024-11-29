package com.example

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable

fun Application.configureRouting() {
    routing {
        post("/api/auth/login") {
            call.respondText("Hello World!")
        }
        post("/api/auth/unlogin") {
        }
        get("/api/auth") {
            call.respondText("Auth service is working!")
        }
    }
}

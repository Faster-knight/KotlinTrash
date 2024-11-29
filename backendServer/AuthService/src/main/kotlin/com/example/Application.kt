package com.example

import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.server.application.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.configureSelization() {
    install(ContentNegotiation) {
        json()
    }
}
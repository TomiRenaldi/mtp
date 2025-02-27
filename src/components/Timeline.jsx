"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"

export function Timeline({ events }) {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative flex flex-col md:flex-row gap-8 md:gap-0",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
            )}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:block">
              <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
            </div>

            {/* Date column - mobile: top, desktop: side */}
            <div className="md:w-1/2 flex md:justify-center">
              <div className={cn("md:w-full md:px-8", index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 mb-2 md:mb-0">
                  {event.date}
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="md:w-1/2 md:px-8">
              <Card
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:shadow-md",
                  expandedId === event.id ? "shadow-md" : "",
                )}
                onClick={() => toggleExpand(event.id)}
              >
                <CardHeader className="pb-2">
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>

                  {event.image && expandedId === event.id && (
                    <div className="mt-4 overflow-hidden rounded-md">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


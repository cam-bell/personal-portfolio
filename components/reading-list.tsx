"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

const books = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    cover: "/placeholder.svg?height=300&width=200",
    status: "Currently Reading",
    rating: 5,
    note: "Essential read for understanding distributed systems and data architecture. The depth of technical detail is incredible.",
    category: "Technical",
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    cover: "/placeholder.svg?height=300&width=200",
    status: "Completed",
    rating: 5,
    note: "Timeless advice for software developers. Changed how I approach problem-solving and code craftsmanship.",
    category: "Development",
  },
  {
    title: "Weapons of Math Destruction",
    author: "Cathy O'Neil",
    cover: "/placeholder.svg?height=300&width=200",
    status: "Completed",
    rating: 4,
    note: "Eye-opening perspective on algorithmic bias and the social impact of data science. Must-read for any data practitioner.",
    category: "Data Science",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    cover: "/placeholder.svg?height=300&width=200",
    status: "Next Up",
    rating: 0,
    note: "Looking forward to diving deeper into software architecture principles and design patterns.",
    category: "Architecture",
  },
  {
    title: "The Hundred-Page Machine Learning Book",
    author: "Andriy Burkov",
    cover: "/placeholder.svg?height=300&width=200",
    status: "Currently Reading",
    rating: 4,
    note: "Concise yet comprehensive overview of ML concepts. Perfect for quick reference and review.",
    category: "Machine Learning",
  },
];

export function ReadingList() {
  return (
    <section id="reading" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Reading List</h2>
          </div>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Books that have shaped my thinking and continue to inspire my growth
            as a developer and data scientist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-32 h-48 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={`${book.title} cover`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {book.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {book.author}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        book.status === "Currently Reading"
                          ? "default"
                          : book.status === "Completed"
                          ? "secondary"
                          : "outline"
                      }
                      className="text-xs"
                    >
                      {book.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {book.category}
                    </Badge>
                  </div>

                  {book.rating > 0 && (
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < book.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-slate-300 leading-7">
                    {book.note}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Bot, Send } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { aiSuggestions } from "@/constants/dashboard";

export default function AIAssistant() {
  const [message, setMessage] = useState("");

  return (
    <Card className="rounded-3xl shadow-lg">
      <CardHeader className="flex flex-row items-center gap-3">
        <Bot className="h-6 w-6 text-primary" />

        <CardTitle>
          AI Career Coach
        </CardTitle>
      </CardHeader>

      <CardContent>

        <div className="space-y-3">

          <p className="text-sm text-muted-foreground">
            Suggested Questions
          </p>

          {aiSuggestions.map((question) => (
            <Button
              key={question}
              variant="outline"
              className="w-full justify-start"
            >
              {question}
            </Button>
          ))}

        </div>

        <div className="mt-6 flex gap-2">

          <Input
            placeholder="Ask anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>

        </div>

      </CardContent>
    </Card>
  );
}
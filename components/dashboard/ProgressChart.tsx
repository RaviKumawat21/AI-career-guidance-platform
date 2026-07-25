"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { progressChartData } from "@/constants/dashboard";

export default function ProgressChart() {
  return (
    <Card className="rounded-3xl shadow-lg">
      <CardHeader>
        <CardTitle>Learning Progress</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressChartData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="progress"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
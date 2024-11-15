import { Schema, model, type Document } from "mongoose";

// Define an interface for the Task document
export interface ITask extends Document {
  id: number;
  creator: string;
  assignees: string[];
  description: Text;
  status: boolean;
  created_at: Date;
  due_date: Date;
  date_completed: Date;
}

// Define the Task schema
const taskSchema = new Schema<ITask>({
  creator: { type: String, required: true },
  assignees: { type: [String], required: true },
  description: { type: Text, required: true },
  status: { type: Boolean, required: true },
  created_at: { type: Date, required: true },
  due_date: { type: Date, required: true },
  date_completed: { type: Date, required: true },
});

// Create the Task model
const TaskType = model<ITask>("Task", taskSchema);

export default TaskType;

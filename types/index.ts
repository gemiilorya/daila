export type UserProfile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
};

export type Task = {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  deadline: string | null;
  priority: "low" | "medium" | "high";
  completed: boolean;
  tag: "school" | "work" | "personal" | "other";
  created_at: string;
};

export type CalendarEvent = {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  start_time: string;
  end_time: string;
  created_at: string;
};

export type Expense = {
  id: string;
  user_id: string;
  amount: number;
  category: string;
  description: string | null;
  date: string;
  created_at: string;
};

export type Bill = {
  id: string;
  user_id: string;
  title: string;
  amount: number;
  due_date: string;
  is_paid: boolean;
  created_at: string;
};

export type Debt = {
  id: string;
  user_id: string;
  person_name: string;
  amount: number;
  direction: "i_owe" | "they_owe";
  note: string | null;
  settled: boolean;
  created_at: string;
};

export type WishlistItem = {
  id: string;
  user_id: string;
  title: string;
  estimated_price: number | null;
  priority: "low" | "medium" | "high";
  purchased: boolean;
  created_at: string;
};

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AIAction =
  | { action: "create_task"; title: string; deadline?: string; priority?: string; tag?: string }
  | { action: "create_event"; title: string; date: string; time: string; description?: string }
  | { action: "add_expense"; amount: number; category: string; description?: string }
  | { action: "general_reply"; message: string };
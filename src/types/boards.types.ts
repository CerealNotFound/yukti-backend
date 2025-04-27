export interface BoardWithAuthor {
  id: string;
  title: string;
  description: string;
  created_at: string;
  last_activity: string;
  who_can_see: 'everyone' | string; // You may want to make this more specific with allowed values
  labels: string[];
  is_starred: boolean;
  status: 'active' | string; // You may want to make this more specific with allowed values
  category: string;
  users: {
    name: string;
    email: string;
  }[];
}

export interface CreateBoard {
  title: string;
  description: string;
  author: string;
  who_can_see?: string;
  labels: string[];
  is_starred: boolean;
  status?: "active" | "archived";
  category?: string;
}

export interface UpdateBoard {
  title?: string;
  description?: string;
  lastActivity?: string;
  author?: string;
  whoCanSee?: string; // "Everyone", "Only me", "Team" etc.
  labels?: string[];
  isStarred?: boolean;
  status?: "active" | "archived";
  category?: string; // optional: eg. "Product", "Design"
}

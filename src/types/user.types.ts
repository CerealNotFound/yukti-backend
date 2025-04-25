export interface User {
  id: string;
  name: string;
  initials: string;
  avatar_url: string;
  theme: string;
  notification_preferences: Record<string, any>;
  created_at: string;
  last_login_at: string;
  is_onboarded: boolean;
  email: string;
}

export interface CreateUser {
  name: string;
  initials: string;
  avatar_url: string;
  theme: string;
  notification_preferences: Record<string, any>;
  email: string;
}

export interface UpdateUser {
  name?: string;
  initials?: string;
  avatar_url?: string;
  theme?: string;
  notification_preferences?: Record<string, any>;
  last_login_at?: string;
  is_onboarded?: boolean;
}

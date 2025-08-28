// utils/storage.ts - Simple localStorage utilities
import type { ID, UserListItem, UserDetail } from "../types";

// Keys for localStorage
const STORAGE_KEYS = {
  ALL_USERS: 'users_list',
  USER_PREFIX: 'user_',
};

/**
 * Save all users to localStorage
 */
export const saveUsersToStorage = (users: UserListItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(users));
    console.log(`Saved ${users.length} users to localStorage`);
  } catch (error) {
    console.error('Error saving users to localStorage:', error);
  }
};

/**
 * Get all users from localStorage
 */
export const getUsersFromStorage = (): UserListItem[] => {
  try {
    const users = localStorage.getItem(STORAGE_KEYS.ALL_USERS);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error getting users from localStorage:', error);
    return [];
  }
};

/**
 * Save a single user to localStorage
 */
export const saveUserToStorage = (user: UserDetail): void => {
  try {
    localStorage.setItem(`${STORAGE_KEYS.USER_PREFIX}${user.id}`, JSON.stringify(user));
    console.log(`Saved user ${user.id} to localStorage`);
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
  }
};

/**
 * Get a single user from localStorage
 */
export const getUserFromStorage = (userId: string | number): UserDetail | null => {
  try {
    const user = localStorage.getItem(`${STORAGE_KEYS.USER_PREFIX}${userId}`);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting user from localStorage:', error);
    return null;
  }
};

/**
 * Clear all stored data
 */
export const clearStorage = (): void => {
  try {
    // Clear users list
    localStorage.removeItem(STORAGE_KEYS.ALL_USERS);
    
    // Clear individual users
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(STORAGE_KEYS.USER_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
    
    console.log('All user data cleared from localStorage');
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
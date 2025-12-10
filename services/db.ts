import Dexie, { Table } from 'dexie';
import { HistoryItem } from '../types';

/**
 * The Persistence Layer (The Vault)
 * Handles all client-side storage using IndexedDB via Dexie.
 * Refactored to composition pattern to ensure strict typing and avoid inheritance conflicts.
 */

// Define the database type
type DesignSpecDatabase = Dexie & {
  history: Table<HistoryItem>;
};

// Singleton instance initialization
const db = new Dexie('DesignSpecFactoryDB') as DesignSpecDatabase;

// Define schema
// id: primary key
// timestamp: for sorting
// style.id: for filtering by style
db.version(1).stores({
  history: 'id, timestamp, style.id'
});

export { db };

// --- Data Access Object (DAO) Methods ---

export const saveHistoryItem = async (item: HistoryItem): Promise<void> => {
  try {
    await db.history.put(item);
  } catch (error) {
    console.error('Failed to save history item to Vault:', error);
    throw error;
  }
};

export const getHistoryItems = async (limit: number = 50): Promise<HistoryItem[]> => {
  try {
    return await db.history
      .orderBy('timestamp')
      .reverse()
      .limit(limit)
      .toArray();
  } catch (error) {
    console.error('Failed to retrieve history from Vault:', error);
    return [];
  }
};

export const deleteHistoryItem = async (id: string): Promise<void> => {
  try {
    await db.history.delete(id);
  } catch (error) {
    console.error(`Failed to delete item ${id}:`, error);
  }
};

export const clearAllHistory = async (): Promise<void> => {
  try {
    await db.history.clear();
  } catch (error) {
    console.error('Failed to clear Vault:', error);
  }
};
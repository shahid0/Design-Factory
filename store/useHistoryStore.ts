
import { create } from 'zustand';
import { HistoryItem } from '../types';
import { db, saveHistoryItem, getHistoryItems, deleteHistoryItem, clearAllHistory } from '../services/db';

interface HistoryState {
  items: HistoryItem[];
  isLoading: boolean;
  
  // Actions
  fetchHistory: () => Promise<void>;
  addItem: (item: HistoryItem) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  clear: () => Promise<void>;
}

export const useHistoryStore = create<HistoryState>((set, get) => ({
  items: [],
  isLoading: false,

  fetchHistory: async () => {
    set({ isLoading: true });
    try {
      const items = await getHistoryItems();
      set({ items });
    } catch (error) {
      console.error("Store: Failed to fetch history", error);
    } finally {
      set({ isLoading: false });
    }
  },

  addItem: async (item: HistoryItem) => {
    // Optimistic update
    set((state) => ({ items: [item, ...state.items] }));
    try {
      await saveHistoryItem(item);
    } catch (error) {
      console.error("Store: Failed to save item", error);
      // Revert on failure (reload from DB)
      get().fetchHistory();
    }
  },

  removeItem: async (id: string) => {
    set((state) => ({ items: state.items.filter(i => i.id !== id) }));
    try {
      await deleteHistoryItem(id);
    } catch (error) {
      console.error("Store: Failed to delete item", error);
    }
  },

  clear: async () => {
    set({ items: [] });
    await clearAllHistory();
  }
}));

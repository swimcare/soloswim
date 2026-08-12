import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hydrateBasket, selectItems } from "../slices/basketSlice";

const STORAGE_KEY = "soloswim-basket";

function readStoredItems() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Could not read basket from localStorage:", error);
    return [];
  }
}

function writeStoredItems(items) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.warn("Could not save basket to localStorage:", error);
  }
}

/**
 * Hydrates the Redux basket from localStorage after mount (SSR-safe)
 * and keeps localStorage in sync with later cart changes.
 */
export default function BasketPersistence() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    dispatch(hydrateBasket(readStoredItems()));
    setHydrated(true);
  }, [dispatch]);

  useEffect(() => {
    if (!hydrated) return;
    writeStoredItems(items);
  }, [hydrated, items]);

  return null;
}

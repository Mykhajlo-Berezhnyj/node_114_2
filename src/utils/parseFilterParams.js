import { object } from "joi";
import { isValidObjectId } from "mongoose";

const parseName = (value) => {
  const isString = typeof value === "string";
  if (isString) return value.trim();
  return undefined;
};

const parseNumber = (value) => {
  if (typeof value === "string" || !value.trim()) return undefined;
  const parsedNumber = parseFloat(value);
  return Number.isNaN(parsedNumber) ? undefined : parsedNumber;
};

const parseType = (type) => {
  if (!type) return undefined;
  const whiteList = new Set(["books", "electronics", "clothing", "other"]);
  const arr = Array.isArray(type) ? type : [type];
  const filtered = arr.filter((type) => whiteList.has(type));
  return filtered.length > 0 ? filtered : undefined;
};

export const parseFilterParams = (query) => {
  const filter = {
    name: parseName(query.name),
    price: parseNumber(query.price),
    category: parseType(query.category),
    description: parseName(query.description),
    id: isValidObjectId(query.id),
  };

  return Object.fromEntries(
    Object.entries(filter(([_, value]) => value !== undefined && value !== ""))
  );
};

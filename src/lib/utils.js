import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Function to capitalize the first letter
export const capitalizeFirstLetter = (string) => {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
};

// Function to lowercase the first letter
export const lowercaseFirstLetter = (string) => {
  return string?.charAt(0)?.toLowerCase() + string?.slice(1);
};

export const sentenceCase = (str) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1)?.toLowerCase();
};

export const lowerCase = (str) => {
  return str?.charAt(0)?.toLowerCase() + str?.slice(1)?.toLowerCase();
};

export const titleCase = (str) => {
  return str
    ?.toLowerCase()
    ?.split(' ')
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    ?.join(' ');
};


// utils/slugify.js
export default function slugify(text = "") {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")   // remove special chars
    .replace(/\s+/g, "-");      // spaces -> hyphens
}


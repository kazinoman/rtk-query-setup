// src/app/hooks.js
import { useDispatch, useSelector } from "react-redux";

// Global useDispatch
export const useAppDispatch = () => useDispatch();

// Global useSelector that returns full state by default, or accepts a selector
export const useAppSelector = (selector) => useSelector(selector || ((state) => state));

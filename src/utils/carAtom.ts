import { atom } from "jotai";
import { CarProps } from "../types/Car";

export const carAtom = atom<CarProps | null>(null)
import type Aspen from "aspen-api";
import { writable } from "svelte/store";

export const users = writable({} as Record<string, Aspen>);
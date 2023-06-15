import type Aspen from "aspen-api";
import { users } from "../stores";
import { get } from "svelte/store";

const grades = {
	"F": 60,
	"D-": 65,
	"D": 67,
	"D+": 69,
	"C-": 72,
	"C": 76,
	"C+": 79,
	"B-": 82,
	"B": 86,
	"B+": 89,
	"A-": 92,
	"A": 100,
}

export type LetterGrade = keyof (typeof grades);

export function getUser(sessionID: string): Aspen | null {
	const userStore = get(users);
	if (sessionID in userStore) {
		return userStore[sessionID];
	}
	return null;
}

export function letterGrade(grade: number): LetterGrade {
	Object.keys(grades).forEach(letter => {
		const threshold = grades[letter as LetterGrade];
		if (grade <= threshold) return letter;
	})

	return "A"; // if it's over 100, return the max
}

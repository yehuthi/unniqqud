/**
 * The char-codes in this array are in the niqqud range but aren't niqqud, so
 * they are excluded from {@link is_niqqud_code}.
 */
const NOT_NIQQUD: readonly number[] = [
	// The following are kept because they are not a vowel, they are...
    0x05be, // Maqaf (a word connector)
    0x05c0, // Paseq (a punctuation similar to a comma)
    0x05c3, // Sof Pasuq (a punctuation similar to a period)
    0x05c6, // Nun Hafukha (a glyph)
];

/**
 * @returns true if the given character code is a niqqud (vowel diacritic) character.
 */
function is_niqqud_code(charCode: number): boolean {
    return (0x05b0 <= charCode &&
        charCode <= 0x05c7 &&
        !NOT_NIQQUD.includes(charCode));
}

/**
 * @returns true if the given character code is a ta'am (cantillation diacritic) character.
 */
function is_taam_code(charCode: number): boolean {
    return 0x0591 <= charCode && charCode <= 0x05af;
}

/**
 * @returns true if the given character code is a diacritic character (either
 * niqqud or cantillation).
 */
function is_diacritic_code(charCode: number): boolean {
    return is_niqqud_code(charCode) || is_taam_code(charCode);
}

/**
 * @returns true if the given character is a diacritic character (either niqqud or cantillation).
 */
export function diacritic(charCode: string): boolean {
    return is_diacritic_code(charCode.charCodeAt(0));
}

/**
 * @returns true if the given character is a niqqud (vowel diacritic) character.
 */
export function niqqud(charCode: string): boolean {
    return is_niqqud_code(charCode.charCodeAt(0));
}

/**
 * @returns true if the given character is a ta'am (cantillation diacritic) character.
 */
export function taam(charCode: string): boolean {
    return is_taam_code(charCode.charCodeAt(0));
}

/**
 * Removes diacritics from the given string.
 * @param input The input string.
 * @param type The type of diacritics to remove. Must be one of:
 * - {@link diacritic}: removes all diacritics (default).
 * - {@link niqqud}: removes all niqqud diacritics.
 * - {@link taam}: removes all ta'am diacritics.
 * @returns The input string with the desired diacritics removed.
 */
function string(
	input: string,
	type: (charCode: string) => boolean = diacritic
): string {
	return [...input].filter(char => !type(char)).join("");
}

export default string;
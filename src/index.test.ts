import unniqqud, { niqqud, taam } from "./index";

const GENESIS_1_1 = {
	full: "בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃\t׆",
	stripped: "בראשית ברא אלהים את השמים ואת הארץ׃\t׆",
	taam: "בראש֖ית בר֣א אלה֑ים א֥ת השמ֖ים וא֥ת הארץ׃\t׆",
	niqqud: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָֽרֶץ׃\t׆",
}

describe("unniqqud", () => {
	it("should remove niqqud and cantillation", () => {
		expect(unniqqud(GENESIS_1_1.full)).toBe(GENESIS_1_1.stripped);
	});
	it("should remove niqqud", () => {
		expect(unniqqud(GENESIS_1_1.full, niqqud)).toBe(GENESIS_1_1.taam);
	});
	it("should remove cantillation", () => {
		expect(unniqqud(GENESIS_1_1.full, taam)).toBe(GENESIS_1_1.niqqud);
	});
})
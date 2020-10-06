import { Action } from '@inflect/core';
import setSemantics, { SetSemanticsOptions } from '@inflect/plugin-set-semantics';

const setEpubType: Action<Document, Element, SetSemanticsOptions> = (
	dom,
	el,
	parameter,
): void => {
	if (parameter?.values) {
		setSemantics(dom, el, {
			attribute: 'epub:type',
			values: parameter.values,
		});
	}
};

export default setEpubType;

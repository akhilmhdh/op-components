import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcNav } from '../src/opc-nav';

expect.extend(toHaveNoViolations);

describe('opc-nav', () => {

    const OPC_COMPONENT = 'opc-nav';
    const ELEMENT_ID = 'opc-nav';
    let opcElement: OpcNav;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        opcElement = window.document.createElement(OPC_COMPONENT) as OpcNav;
        document.body.appendChild(opcElement);
    });

    afterEach(() => {
       document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
    });

    it('is defined', async () => {
        expect(opcElement).toBeDefined();
    });

    it('has no axe violations', async () => {
        expect(await axe(opcElement)).toHaveNoViolations()
    });

    // Add more tests here
});

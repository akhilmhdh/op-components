import '../dist/opc-nav';
import readme from '../README.md';

export default {
    title: 'OpcNav',
    parameters: {
        notes: { readme },
    }
}

export const Primary = () => `
<opc-nav></opc-nav>
`;

Primary.storyName = `OpcNav`;

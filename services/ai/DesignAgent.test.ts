import { DesignAgent } from './DesignAgent';
import { SPEC_SYSTEM_INSTRUCTION } from './prompts';

// Simple unit tests to verify prompt logic without external dependencies.
// These can be run in any node environment or simply verified by code inspection.

// Polyfill for test runner functions to satisfy TypeScript and allow standalone execution
const describe = (name: string, fn: () => void) => {
  console.log(`\nSuite: ${name}`);
  fn();
};

const it = (name: string, fn: () => void) => {
  try {
    fn();
    console.log(`  ✔ ${name}`);
  } catch (e) {
    console.error(`  ✘ ${name}`);
    console.error(e);
  }
};

describe('DesignAgent Prompt Logic', () => {
  const agent = new DesignAgent();

  // --- SPEC GENERATION TESTS ---

  it('should include the system prompt in the spec request config', () => {
    const req = agent.constructSpecRequest('Cyberpunk', 'Modern/Tech', 'Dashboard', 'Inter', 3);
    
    // Check for core identity presence instead of exact match due to template replacement
    if (!req.systemInstruction.includes("Universal Design Systems Architect")) {
      throw new Error('FAILED: System instruction mismatch in Spec Request.');
    }
    console.log('PASSED: System instruction presence check (Spec).');
  });

  it('should include the risk budget in the user content', () => {
    const riskValue = 5;
    const req = agent.constructSpecRequest('Cyberpunk', 'Modern/Tech', 'Dashboard', 'Inter', riskValue);
    
    if (!req.contents.includes(`Risk Budget (1-5): ${riskValue}`)) {
      throw new Error('FAILED: Risk budget missing from contents.');
    }
    console.log('PASSED: Risk budget injection check.');
  });

  it('should handle single-value slider configuration (default)', () => {
    // Default risk usually 3
    const req = agent.constructSpecRequest('Minimal', 'Minimal', 'Landing', 'Roboto', 3);
    if (!req.contents.includes('Risk Budget (1-5): 3')) {
       throw new Error('FAILED: Default risk budget not handled correctly.');
    }
    console.log('PASSED: Default slider configuration check.');
  });

  it('should handle boundary slider configuration (min value 1)', () => {
    const req = agent.constructSpecRequest('Minimal', 'Minimal', 'Landing', 'Roboto', 1);
    if (!req.contents.includes('Risk Budget (1-5): 1')) {
       throw new Error('FAILED: Min risk budget not handled correctly.');
    }
    console.log('PASSED: Min slider configuration check.');
  });

  it('should handle boundary slider configuration (max value 5)', () => {
    const req = agent.constructSpecRequest('Minimal', 'Minimal', 'Landing', 'Roboto', 5);
    if (!req.contents.includes('Risk Budget (1-5): 5')) {
       throw new Error('FAILED: Max risk budget not handled correctly.');
    }
    console.log('PASSED: Max slider configuration check.');
  });

  // --- REFINEMENT TESTS ---

  it('should include the system prompt in the refinement request config', () => {
    const req = agent.constructRefineRequest('# Old Spec', 'Make it pop');
    
    if (req.systemInstruction !== SPEC_SYSTEM_INSTRUCTION) {
      throw new Error('FAILED: System instruction mismatch in Refine Request.');
    }
    console.log('PASSED: System instruction presence check (Refinement).');
  });

  it('should embed the user instruction in the refinement prompt', () => {
    const instruction = 'Make the buttons larger';
    const req = agent.constructRefineRequest('# Spec', instruction);
    
    if (!req.contents.includes(instruction)) {
      throw new Error('FAILED: User instruction missing from refinement prompt.');
    }
    console.log('PASSED: Refinement instruction injection check.');
  });

});
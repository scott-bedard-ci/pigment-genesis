// Central export for all design system components
// This file will be populated as components are created

// Atoms (Basic Building Blocks)
// export { Button } from './atoms/Button';
// export { Input } from './atoms/Input';
// export { Badge } from './atoms/Badge';
// export { Avatar } from './atoms/Avatar';

// Molecules (Simple Combinations)  
// export { Card } from './molecules/Card';
// export { FormField } from './molecules/FormField';
// export { SearchBar } from './molecules/SearchBar';
// export { Pagination } from './molecules/Pagination';

// Organisms (Complex Components)
// export { Header } from './organisms/Header';
// export { DataTable } from './organisms/DataTable';
// export { Modal } from './organisms/Modal';
// export { Form } from './organisms/Form';

// Types
export * from '../types/component';
export * from '../types/variants';
export * from '../types/tokens';

// Tokens
export * from '../tokens';

// Utilities (for advanced usage)
export { cn } from '../utils/classNames';
export type { 
  ButtonVariants, 
  InputVariants, 
  CardVariants 
} from '../utils/componentVariants';

// Note: Individual component exports will be added automatically as 
// components are created through the Figma-first workflow with Claude Code
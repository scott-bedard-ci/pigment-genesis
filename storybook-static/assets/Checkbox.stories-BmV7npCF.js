import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as I,r as h}from"./index-B2-qRKKC.js";import{c as S,a as me}from"./classNames-DCVBnSA0.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ue=me(["relative inline-flex items-center gap-2","cursor-pointer select-none","focus-within:outline-none"],{variants:{disabled:{true:"cursor-not-allowed opacity-50",false:"cursor-pointer"}},defaultVariants:{disabled:!1}}),xe=me(["relative w-[18px] h-[18px] rounded-[2.75px]","transition-all duration-200 ease-in-out","border-2 border-solid","focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e39d2]","min-h-[44px] min-w-[44px] flex items-center justify-center","font-['Sharp_Sans:Medium',_sans-serif]"],{variants:{checked:{true:["bg-[#1e39d2] border-[#1e39d2]","text-white"],false:["bg-white border-[rgba(0,0,0,0.74)]","hover:border-[#1e39d2]"]},disabled:{true:["border-[rgba(0,0,0,0.03)] bg-white","cursor-not-allowed"],false:"cursor-pointer"}},compoundVariants:[{checked:!0,disabled:!0,class:["bg-[rgba(0,0,0,0.18)] border-[rgba(0,0,0,0.18)]","text-[rgba(0,0,0,0.41)]"]}],defaultVariants:{checked:!1,disabled:!1}}),fe=({className:t})=>e.jsx("svg",{className:S("w-3.5 h-3.5",t),fill:"none",viewBox:"0 0 13 10","aria-hidden":"true",children:e.jsx("path",{clipRule:"evenodd",d:"M12.3671 0.320351C12.7943 0.747487 12.7943 1.44001 12.3671 1.86715L5.0609 9.17341C4.85532 9.37898 4.57636 9.49426 4.28563 9.49376C3.99491 9.49326 3.71634 9.37704 3.51147 9.17076L0.317717 5.95514C-0.107959 5.52655 -0.105595 4.83403 0.322996 4.40835C0.751587 3.98268 1.44411 3.98504 1.86978 4.41363L4.29014 6.85057L10.8204 0.320353C11.2475 -0.106784 11.94 -0.106784 12.3671 0.320351Z",fill:"currentColor",fillRule:"evenodd"})}),a=({label:t,checked:n,indeterminate:s=!1,disabled:r=!1,onCheckedChange:c,labelClassName:j,className:i,"data-testid":w,onChange:m,...l})=>{const d=I.useRef(null),[o,he]=I.useState(!1),E=n!==void 0,pe=E?n:o;I.useEffect(()=>{d.current&&(d.current.indeterminate=s)},[s]);const be=R=>{const F=R.target.checked;E||he(F),c==null||c(F),m==null||m(R)},D=s?!1:pe;return e.jsxs("label",{className:S(ue({disabled:r}),"w-full md:w-auto",i),"data-testid":w,children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:d,type:"checkbox",checked:D,disabled:r,onChange:be,className:"sr-only","aria-describedby":t?void 0:"checkbox-description",...l}),e.jsx("div",{className:S(xe({checked:D||s,disabled:r}),"min-h-[18px] min-w-[18px]"),role:"presentation",children:(D||s)&&e.jsx(fe,{className:"absolute inset-0 m-auto"})})]}),t&&e.jsx("span",{className:S("text-sm leading-5 select-none","font-['Sharp_Sans:Medium',_sans-serif]",r?"text-[rgba(0,0,0,0.41)]":"text-[rgba(0,0,0,0.86)]","md:select-text",j),children:t}),!t&&e.jsx("span",{id:"checkbox-description",className:"sr-only",children:"Checkbox"})]})};a.displayName="Checkbox";try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"Label text for the checkbox",name:"label",required:!1,type:{name:"string | undefined"}},checked:{defaultValue:null,description:"Whether the checkbox is checked",name:"checked",required:!1,type:{name:"boolean | undefined"}},indeterminate:{defaultValue:{value:"false"},description:"Whether the checkbox is in an indeterminate state",name:"indeterminate",required:!1,type:{name:"boolean | undefined"}},onCheckedChange:{defaultValue:null,description:"Called when the checked state changes",name:"onCheckedChange",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},labelClassName:{defaultValue:null,description:"Additional className for the label",name:"labelClassName",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Additional CSS classes to apply",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Child elements",name:"children",required:!1,type:{name:"ReactNode"}},"data-testid":{defaultValue:null,description:"Test identifier for automated testing",name:"data-testid",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Unique identifier for the component",name:"id",required:!1,type:{name:"string | undefined"}},"aria-label":{defaultValue:null,description:"ARIA label for accessibility",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-describedby":{defaultValue:null,description:"ARIA description for accessibility",name:"aria-describedby",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Custom CSS properties",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | null | undefined"}}}}}catch{}const ye={title:"Atoms/Checkbox",component:a,parameters:{layout:"centered",docs:{description:{component:`
## Checkbox Component

Checkbox component has multiple variants that lets you switch the state of the checkbox. Selected vs enabled and even disabled state.

### Key Features
- **State Management**: Enabled, Selected, and Disabled states
- **Interactive**: Click to toggle state with proper visual feedback
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Touch-Friendly**: Proper touch targets for mobile devices
- **Design Token Based**: Uses CustomInk's exact specifications from Figma

### Usage Guidelines
- Use for binary choices (yes/no, on/off, selected/unselected)
- Always provide clear labels to indicate what the checkbox controls
- Group related checkboxes logically
- Consider using in forms for optional selections or agreement confirmations

### Technical Notes
- Supports controlled and uncontrolled usage patterns
- Includes indeterminate state for partial selections
- Proper focus management for keyboard navigation
- Built-in support for form integration
        `}}},argTypes:{checked:{control:"boolean",description:"Whether the checkbox is checked"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"},indeterminate:{control:"boolean",description:"Whether the checkbox is in an indeterminate state"},label:{control:"text",description:"Label text for the checkbox"}},args:{label:"Item"}},p={name:"Default (Enabled)"},b={name:"All States",render:()=>e.jsx("div",{className:"flex flex-col gap-8 p-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Checkbox States"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-medium mb-3",children:"Enabled"}),e.jsx(a,{label:"Item"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-medium mb-3",children:"Selected"}),e.jsx(a,{label:"Item",checked:!0})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-medium mb-3",children:"Disabled"}),e.jsx(a,{label:"Item",disabled:!0})]})]})]})}),parameters:{docs:{description:{story:"All three checkbox states: Enabled (default), Selected (checked), and Disabled (non-interactive)."}}}},u={name:"Interactive Example",render:()=>{const[t,n]=h.useState(!1),[s,r]=h.useState(!1);return e.jsx("div",{className:"flex flex-col gap-8 p-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Interactive Checkbox"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Main checkbox item",checked:t,disabled:s,onCheckedChange:n}),e.jsxs("div",{className:"border-t pt-4 space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"Controls:"}),e.jsx(a,{label:"Disable checkbox",checked:s,onCheckedChange:r})]})]})]})})},parameters:{docs:{description:{story:"Interactive example showing checkbox state management and the effect of the disabled state."}}}},x={name:"Indeterminate State",render:()=>{const[t,n]=h.useState(!1),[s,r]=h.useState([!1,!1,!1]),c=s.filter(Boolean).length,j=c>0&&c<s.length,i=c===s.length,w=l=>{r(s.map(()=>l)),n(l)},m=(l,d)=>{const o=[...s];o[l]=d,r(o)};return React.useEffect(()=>{n(i)},[i]),e.jsxs("div",{className:"flex flex-col gap-6 p-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Parent-Child Relationship"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Select all items",checked:i,indeterminate:j,onCheckedChange:w}),e.jsx("div",{className:"ml-6 space-y-2 border-l-2 border-gray-200 pl-4",children:s.map((l,d)=>e.jsx(a,{label:`Item ${d+1}`,checked:l,onCheckedChange:o=>m(d,o)},d))})]})]}),e.jsx("div",{className:"text-sm text-gray-600 bg-gray-50 p-4 rounded-lg",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The parent checkbox shows an indeterminate state when some (but not all) child items are selected."]})})]})},parameters:{docs:{description:{story:"Example of indeterminate state for parent-child checkbox relationships."}}}},f={name:"Form Integration",render:()=>{const[t,n]=h.useState({newsletter:!1,terms:!1,marketing:!1}),s=r=>{r.preventDefault(),alert(`Form submitted with: ${JSON.stringify(t,null,2)}`)};return e.jsxs("div",{className:"flex flex-col gap-6 p-6",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Form Example"}),e.jsxs("form",{onSubmit:s,className:"space-y-4 max-w-md",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Subscribe to newsletter",checked:t.newsletter,onCheckedChange:r=>n(c=>({...c,newsletter:r}))}),e.jsx(a,{label:"I agree to the terms and conditions",checked:t.terms,onCheckedChange:r=>n(c=>({...c,terms:r}))}),e.jsx(a,{label:"Receive marketing communications",checked:t.marketing,onCheckedChange:r=>n(c=>({...c,marketing:r}))})]}),e.jsx("button",{type:"submit",className:"mt-6 px-4 py-2 bg-[#1e39d2] text-white rounded-md hover:bg-[#182ea8] disabled:opacity-50",disabled:!t.terms,children:"Submit"}),!t.terms&&e.jsx("p",{className:"text-sm text-red-600",children:"You must agree to the terms and conditions to submit."})]})]})},parameters:{docs:{description:{story:"Example of checkbox integration in forms with validation."}}}},g={name:"Responsive Behavior",render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 mb-2",children:"Mobile (< 768px)"}),e.jsx("div",{className:"max-w-sm border-2 border-dashed border-gray-300 p-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{label:"Full width touch target"}),e.jsx(a,{label:"Easy thumb interaction"})]})})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 mb-2",children:"Desktop (≥ 768px)"}),e.jsx("div",{className:"border-2 border-dashed border-gray-300 p-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{label:"Compact desktop layout"}),e.jsx(a,{label:"Mouse-optimized interaction"})]})})]})]}),parameters:{docs:{description:{story:"Responsive behavior: Full-width touch targets on mobile, compact layout on desktop."}}}},k={args:{checked:!0}},v={args:{disabled:!0}},C={name:"Disabled + Checked",args:{disabled:!0,checked:!0}},y={args:{indeterminate:!0}},N={name:"Without Label",args:{label:void 0},parameters:{docs:{description:{story:"Checkbox without visible label (still has screen reader accessible description)."}}}};var A,V,P;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Default (Enabled)'
}`,...(P=(V=p.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var q,_,L;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Checkbox States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium mb-3">Enabled</h4>
            <Checkbox label="Item" />
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-medium mb-3">Selected</h4>
            <Checkbox label="Item" checked />
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-medium mb-3">Disabled</h4>
            <Checkbox label="Item" disabled />
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All three checkbox states: Enabled (default), Selected (checked), and Disabled (non-interactive).'
      }
    }
  }
}`,...(L=(_=b.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var M,W,B;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Interactive Example',
  render: () => {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    return <div className="flex flex-col gap-8 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Interactive Checkbox</h3>
          <div className="space-y-4">
            <Checkbox label="Main checkbox item" checked={checked} disabled={disabled} onCheckedChange={setChecked} />
            
            <div className="border-t pt-4 space-y-2">
              <h4 className="font-medium">Controls:</h4>
              <Checkbox label="Disable checkbox" checked={disabled} onCheckedChange={setDisabled} />
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing checkbox state management and the effect of the disabled state.'
      }
    }
  }
}`,...(B=(W=u.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var T,$,U;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Indeterminate State',
  render: () => {
    const [parentChecked, setParentChecked] = useState(false);
    const [childStates, setChildStates] = useState([false, false, false]);
    const checkedCount = childStates.filter(Boolean).length;
    const isIndeterminate = checkedCount > 0 && checkedCount < childStates.length;
    const isParentChecked = checkedCount === childStates.length;
    const handleParentChange = (checked: boolean) => {
      setChildStates(childStates.map(() => checked));
      setParentChecked(checked);
    };
    const handleChildChange = (index: number, checked: boolean) => {
      const newStates = [...childStates];
      newStates[index] = checked;
      setChildStates(newStates);
    };
    React.useEffect(() => {
      setParentChecked(isParentChecked);
    }, [isParentChecked]);
    return <div className="flex flex-col gap-6 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Parent-Child Relationship</h3>
          <div className="space-y-3">
            <Checkbox label="Select all items" checked={isParentChecked} indeterminate={isIndeterminate} onCheckedChange={handleParentChange} />
            
            <div className="ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
              {childStates.map((checked, index) => <Checkbox key={index} label={\`Item \${index + 1}\`} checked={checked} onCheckedChange={checked => handleChildChange(index, checked)} />)}
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p><strong>Note:</strong> The parent checkbox shows an indeterminate state when some (but not all) child items are selected.</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of indeterminate state for parent-child checkbox relationships.'
      }
    }
  }
}`,...(U=($=x.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var G,O,z;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Form Integration',
  render: () => {
    const [formData, setFormData] = useState({
      newsletter: false,
      terms: false,
      marketing: false
    });
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(\`Form submitted with: \${JSON.stringify(formData, null, 2)}\`);
    };
    return <div className="flex flex-col gap-6 p-6">
        <h3 className="text-lg font-semibold">Form Example</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div className="space-y-3">
            <Checkbox label="Subscribe to newsletter" checked={formData.newsletter} onCheckedChange={checked => setFormData(prev => ({
            ...prev,
            newsletter: checked
          }))} />
            
            <Checkbox label="I agree to the terms and conditions" checked={formData.terms} onCheckedChange={checked => setFormData(prev => ({
            ...prev,
            terms: checked
          }))} />
            
            <Checkbox label="Receive marketing communications" checked={formData.marketing} onCheckedChange={checked => setFormData(prev => ({
            ...prev,
            marketing: checked
          }))} />
          </div>
          
          <button type="submit" className="mt-6 px-4 py-2 bg-[#1e39d2] text-white rounded-md hover:bg-[#182ea8] disabled:opacity-50" disabled={!formData.terms}>
            Submit
          </button>
          
          {!formData.terms && <p className="text-sm text-red-600">
              You must agree to the terms and conditions to submit.
            </p>}
        </form>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of checkbox integration in forms with validation.'
      }
    }
  }
}`,...(z=(O=f.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var J,Y,K;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Responsive Behavior',
  render: () => <div className="space-y-8">
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Mobile (&lt; 768px)</h4>
        <div className="max-w-sm border-2 border-dashed border-gray-300 p-4">
          <div className="space-y-2">
            <Checkbox label="Full width touch target" />
            <Checkbox label="Easy thumb interaction" />
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Desktop (≥ 768px)</h4>
        <div className="border-2 border-dashed border-gray-300 p-4">
          <div className="space-y-2">
            <Checkbox label="Compact desktop layout" />
            <Checkbox label="Mouse-optimized interaction" />
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Responsive behavior: Full-width touch targets on mobile, compact layout on desktop.'
      }
    }
  }
}`,...(K=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Z,H,Q;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(Q=(H=k.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var X,ee,ae;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,re;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Disabled + Checked',
  args: {
    disabled: true,
    checked: true
  }
}`,...(re=(se=C.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ce,ne,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(de=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var le,oe,ie;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Without Label',
  args: {
    label: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox without visible label (still has screen reader accessible description).'
      }
    }
  }
}`,...(ie=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Ne=["Default","AllStates","InteractiveDemo","IndeterminateState","FormIntegration","ResponsiveDemo","Checked","Disabled","DisabledChecked","Indeterminate","WithoutLabel"];export{b as AllStates,k as Checked,p as Default,v as Disabled,C as DisabledChecked,f as FormIntegration,y as Indeterminate,x as IndeterminateState,u as InteractiveDemo,g as ResponsiveDemo,N as WithoutLabel,Ne as __namedExportsOrder,ye as default};

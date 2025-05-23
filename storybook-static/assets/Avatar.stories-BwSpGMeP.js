import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as ie}from"./index-B2-qRKKC.js";import{c as S,a as ne}from"./classNames-DCVBnSA0.js";import"./_commonjsHelpers-Cpj98o6Y.js";const C={A:"bg-[#ff876e]",B:"bg-[#ffc3be]",C:"bg-[#b467c8]",D:"bg-[#caa2dd]",E:"bg-[#52c5b8]",F:"bg-[#7addd4]",G:"bg-[#a0e9e3]",H:"bg-[#6f9bf5]",I:"bg-[#9abdfb]",J:"bg-[#aeaeae]",K:"bg-[#c8c8c8]",L:"bg-[#ffdc1e]",M:"bg-[#ffe881]",N:"bg-[#cbdffe]",O:"bg-[#f38289]",P:"bg-[#76efbb]",Q:"bg-[#9ff6d3]",R:"bg-[#dfcbee]",S:"bg-[#5abc74]",T:"bg-[#ffc724]",U:"bg-[#ffe586]",V:"bg-[#ffaff7]",W:"bg-[#cdf2f0]",X:"bg-[#eba0a7]",Y:"bg-[#cefbea]",Z:"bg-[#fff4c0]","#":"bg-[#e3e3e3]"},de=ne(["inline-flex items-center justify-center","rounded-full font-medium text-center","select-none cursor-default","font-['Sharp_Sans:Medium',_sans-serif] tracking-[0.165px]","text-[rgba(0,0,0,0.86)]"],{variants:{size:{sm:["w-[26px] h-[26px] text-[11px] leading-[14px]","md:w-[28px] md:h-[28px] md:text-xs"],lg:["w-[40px] h-[40px] text-sm leading-4","md:w-[48px] md:h-[48px] md:text-base"]}},defaultVariants:{size:"sm"}}),s=({letter:a,size:l="sm",alt:i,src:m,onImageError:t,className:w,"data-testid":V,...L})=>{const[p,n]=ie.useState(!1),f=()=>{n(!0),t==null||t()},d=a.toUpperCase().charAt(0),c=C[d==="+"?"#":d]||C["#"],q=m&&!p;return e.jsx("div",{className:S(de({size:l}),!q&&c,q&&"bg-gray-100",w),role:"img","aria-label":i||`Avatar for ${a}`,"data-testid":V,...L,children:q?e.jsx("img",{src:m,alt:i||`Avatar for ${a}`,className:"w-full h-full object-cover rounded-full",onError:f}):e.jsx("span",{className:"block leading-[14px] whitespace-pre","aria-hidden":"true",children:a})})};s.displayName="Avatar";try{s.displayName="Avatar",s.__docgenInfo={description:"",displayName:"Avatar",props:{letter:{defaultValue:null,description:"Single letter or character to display in the avatar",name:"letter",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"Alternative text for the avatar",name:"alt",required:!1,type:{name:"string | undefined"}},src:{defaultValue:null,description:"Image source for photo avatar (overrides letter)",name:"src",required:!1,type:{name:"string | undefined"}},onImageError:{defaultValue:null,description:"Called when image fails to load",name:"onImageError",required:!1,type:{name:"(() => void) | undefined"}},className:{defaultValue:null,description:"Additional CSS classes to apply",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Child elements",name:"children",required:!1,type:{name:"ReactNode"}},"data-testid":{defaultValue:null,description:"Test identifier for automated testing",name:"data-testid",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Unique identifier for the component",name:"id",required:!1,type:{name:"string | undefined"}},"aria-label":{defaultValue:null,description:"ARIA label for accessibility",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-describedby":{defaultValue:null,description:"ARIA description for accessibility",name:"aria-describedby",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Custom CSS properties",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:'"sm" | "lg" | null | undefined'}}}}}catch{}const r=({max:a=5,size:l="sm",avatars:i,showExtras:m=!0,onClick:t,className:w,"data-testid":V,...L})=>{const p=i.slice(0,a),n=i.length-a,f=m&&n>0,d=f?p.slice(0,-1):p;return e.jsxs("div",{className:S("flex items-start","pl-0 pr-[3px] py-0",t&&"cursor-pointer",w),onClick:t,role:t?"button":void 0,tabIndex:t?0:void 0,"data-testid":V,...L,children:[d.map((o,c)=>e.jsx("div",{className:S("relative mr-[-3px]","border border-white rounded-full",c>0&&"ml-0"),style:{zIndex:d.length-c},children:e.jsx(s,{letter:o.letter,alt:o.alt,src:o.src,size:l})},`${o.letter}-${c}`)),f&&e.jsx("div",{className:S("relative mr-[-3px]","border border-white rounded-full"),style:{zIndex:0},children:e.jsx(s,{letter:`+${n}`,alt:`${n} more avatars`,size:l})})]})};r.displayName="AvatarGroup";try{r.displayName="AvatarGroup",r.__docgenInfo={description:"",displayName:"AvatarGroup",props:{max:{defaultValue:{value:"5"},description:'Maximum number of avatars to display before showing "+N" indicator',name:"max",required:!1,type:{name:"number | undefined"}},size:{defaultValue:{value:"sm"},description:"Avatar size for all avatars in the group",name:"size",required:!1,type:{name:'"sm" | "lg" | null | undefined'}},avatars:{defaultValue:null,description:"Array of avatar data",name:"avatars",required:!0,type:{name:"{ letter: string; alt?: string | undefined; src?: string | undefined; }[]"}},showExtras:{defaultValue:{value:"true"},description:'Whether to show the "+N" indicator when avatars exceed max',name:"showExtras",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:'Called when the group or "+N" indicator is clicked',name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},className:{defaultValue:null,description:"Additional CSS classes to apply",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Child elements",name:"children",required:!1,type:{name:"ReactNode"}},"data-testid":{defaultValue:null,description:"Test identifier for automated testing",name:"data-testid",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Unique identifier for the component",name:"id",required:!1,type:{name:"string | undefined"}},"aria-label":{defaultValue:null,description:"ARIA label for accessibility",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-describedby":{defaultValue:null,description:"ARIA description for accessibility",name:"aria-describedby",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Custom CSS properties",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const fe={title:"Atoms/Avatar",component:s,parameters:{layout:"centered",docs:{description:{component:`
## Avatar Component

Avatar component can be used for single use cases such as profile or email and even used in groups. Each letter has a specific color defined to it to give it variation when grouped.

### Key Features
- **Letter-Based Colors**: Each letter has a specific color defined for visual variation
- **Group Support**: Can be used individually or in groups with overlapping design
- **Image Support**: Supports both letter avatars and photo avatars with fallback
- **Responsive Design**: Scales appropriately across different screen sizes
- **Accessible**: Proper ARIA labels and semantic markup

### Usage Guidelines
- **Individual Use**: Profile pictures, user identification
- **Group Use**: Team members, collaborators, participant lists
- **Interaction**: Avatar groups can be clicked but have no hover or pressed state
        `}}},argTypes:{letter:{control:"text",description:"Letter or character to display in the avatar"},size:{control:"select",options:["sm","lg"],description:"Size of the avatar"},src:{control:"text",description:"Image URL for photo avatar"},alt:{control:"text",description:"Alternative text for accessibility"}},args:{letter:"A"}},u={name:"Default (Letter A)"},x={name:"All Letter Colors",render:()=>e.jsx("div",{className:"flex flex-col gap-8 p-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Complete Alphabet with Unique Colors"}),e.jsx("div",{className:"grid grid-cols-6 md:grid-cols-13 gap-6",children:["A","B","C","D","E","F"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{letter:a}),e.jsx("span",{className:"text-xs text-gray-600",children:a})]},a))}),e.jsx("div",{className:"grid grid-cols-6 md:grid-cols-13 gap-6 mt-4",children:["G","H","I","J","K","L"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{letter:a}),e.jsx("span",{className:"text-xs text-gray-600",children:a})]},a))}),e.jsx("div",{className:"grid grid-cols-6 md:grid-cols-13 gap-6 mt-4",children:["M","N","O","P","Q","R"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{letter:a}),e.jsx("span",{className:"text-xs text-gray-600",children:a})]},a))}),e.jsx("div",{className:"grid grid-cols-6 md:grid-cols-13 gap-6 mt-4",children:["S","T","U","V","W","X"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{letter:a}),e.jsx("span",{className:"text-xs text-gray-600",children:a})]},a))}),e.jsx("div",{className:"grid grid-cols-6 md:grid-cols-13 gap-6 mt-4",children:["Y","Z","+2"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{letter:a}),e.jsx("span",{className:"text-xs text-gray-600",children:a})]},a))})]})}),parameters:{docs:{description:{story:"Complete alphabet showing the unique color assigned to each letter for visual variation when grouped."}}}},g={name:"Avatar Sizes",render:()=>e.jsx("div",{className:"flex flex-col gap-8 p-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Available Sizes"}),e.jsxs("div",{className:"flex items-end gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{letter:"A",size:"sm"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Small (26px)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{letter:"A",size:"lg"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Large (40px)"})]})]})]})}),parameters:{docs:{description:{story:"Different avatar sizes available. Small is commonly used in groups, Large for individual profiles."}}}},v={name:"Photo Avatar",render:()=>e.jsx("div",{className:"flex flex-col gap-8 p-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Photo Avatar with Fallback"}),e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{letter:"J",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",alt:"John Doe"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Valid Image"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{letter:"J",src:"invalid-url.jpg",alt:"John Doe"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Fallback to Letter"})]})]})]})}),parameters:{docs:{description:{story:"Photo avatars with automatic fallback to letter when image fails to load."}}}},h={name:"Avatar Groups",render:()=>{const a=[{letter:"A",alt:"Alice"},{letter:"E",alt:"Emma"},{letter:"J",alt:"John"},{letter:"M",alt:"Mike"},{letter:"S",alt:"Sarah"}],l=[{letter:"M",alt:"Mike"},{letter:"B",alt:"Bob"},{letter:"V",alt:"Victoria"},{letter:"H",alt:"Henry"},{letter:"G",alt:"Grace"},{letter:"T",alt:"Tom"},{letter:"L",alt:"Lisa"}];return e.jsxs("div",{className:"flex flex-col gap-8 p-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Avatar Group Variations"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"2 Avatars"}),e.jsx(r,{avatars:a.slice(0,2)})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"4 Avatars"}),e.jsx(r,{avatars:a.slice(0,4)})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"5 Avatars"}),e.jsx(r,{avatars:a})]})]}),e.jsxs("div",{className:"border-t pt-6",children:[e.jsx("h4",{className:"text-md font-medium mb-4",children:"Has Extras Variant"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"3 avatars, no extras"}),e.jsx(r,{avatars:a.slice(0,3),showExtras:!1})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"3 avatars, has extras (+4)"}),e.jsx(r,{avatars:l,max:3,showExtras:!0})]})]})]})]})]}),e.jsx("div",{className:"text-sm text-gray-600 bg-gray-50 p-4 rounded-lg",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," The avatar group can be clicked on but there is no hover or pressed state"]})})]})},parameters:{docs:{description:{story:'Different avatar group configurations showing overlapping avatars and the "+N" extras indicator.'}}}},b={args:{size:"sm"}},N={args:{size:"lg"}},y={args:{letter:"B"}},A={args:{letter:"Z"}},j={name:"+2 Extra Indicator",args:{letter:"+2"}};var G,z,E;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Default (Letter A)'
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var I,k,_;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'All Letter Colors',
  render: () => <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Complete Alphabet with Unique Colors</h3>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6">
          {/* First row: A-F */}
          {['A', 'B', 'C', 'D', 'E', 'F'].map(letter => <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>)}
        </div>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6 mt-4">
          {/* Second row: G-L */}
          {['G', 'H', 'I', 'J', 'K', 'L'].map(letter => <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>)}
        </div>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6 mt-4">
          {/* Third row: M-R */}
          {['M', 'N', 'O', 'P', 'Q', 'R'].map(letter => <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>)}
        </div>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6 mt-4">
          {/* Fourth row: S-X */}
          {['S', 'T', 'U', 'V', 'W', 'X'].map(letter => <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>)}
        </div>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6 mt-4">
          {/* Fifth row: Y-Z and extras */}
          {['Y', 'Z', '+2'].map(letter => <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>)}
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete alphabet showing the unique color assigned to each letter for visual variation when grouped.'
      }
    }
  }
}`,...(_=(k=x.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var D,R,J;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Avatar Sizes',
  render: () => <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Available Sizes</h3>
        <div className="flex items-end gap-8">
          <div className="flex flex-col items-center gap-2">
            <Avatar letter="A" size="sm" />
            <span className="text-sm text-gray-600">Small (26px)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar letter="A" size="lg" />
            <span className="text-sm text-gray-600">Large (40px)</span>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different avatar sizes available. Small is commonly used in groups, Large for individual profiles.'
      }
    }
  }
}`,...(J=(R=g.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var P,M,T;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Photo Avatar',
  render: () => <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Photo Avatar with Fallback</h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <Avatar letter="J" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="John Doe" />
            <span className="text-sm text-gray-600">Valid Image</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar letter="J" src="invalid-url.jpg" alt="John Doe" />
            <span className="text-sm text-gray-600">Fallback to Letter</span>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Photo avatars with automatic fallback to letter when image fails to load.'
      }
    }
  }
}`,...(T=(M=v.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var B,F,U;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Avatar Groups',
  render: () => {
    const sampleAvatars = [{
      letter: 'A',
      alt: 'Alice'
    }, {
      letter: 'E',
      alt: 'Emma'
    }, {
      letter: 'J',
      alt: 'John'
    }, {
      letter: 'M',
      alt: 'Mike'
    }, {
      letter: 'S',
      alt: 'Sarah'
    }];
    const largeGroup = [{
      letter: 'M',
      alt: 'Mike'
    }, {
      letter: 'B',
      alt: 'Bob'
    }, {
      letter: 'V',
      alt: 'Victoria'
    }, {
      letter: 'H',
      alt: 'Henry'
    }, {
      letter: 'G',
      alt: 'Grace'
    }, {
      letter: 'T',
      alt: 'Tom'
    }, {
      letter: 'L',
      alt: 'Lisa'
    }];
    return <div className="flex flex-col gap-8 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Avatar Group Variations</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">2 Avatars</span>
                <AvatarGroup avatars={sampleAvatars.slice(0, 2)} />
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">4 Avatars</span>
                <AvatarGroup avatars={sampleAvatars.slice(0, 4)} />
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">5 Avatars</span>
                <AvatarGroup avatars={sampleAvatars} />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium mb-4">Has Extras Variant</h4>
              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium">3 avatars, no extras</span>
                  <AvatarGroup avatars={sampleAvatars.slice(0, 3)} showExtras={false} />
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium">3 avatars, has extras (+4)</span>
                  <AvatarGroup avatars={largeGroup} max={3} showExtras={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p><strong>Notes:</strong> The avatar group can be clicked on but there is no hover or pressed state</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Different avatar group configurations showing overlapping avatars and the "+N" extras indicator.'
      }
    }
  }
}`,...(U=(F=h.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var H,Z,W;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(W=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:W.source}}};var $,K,O;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(O=(K=N.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var X,Y,Q;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    letter: 'B'
  }
}`,...(Q=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var ee,ae,se;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    letter: 'Z'
  }
}`,...(se=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,re,le;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '+2 Extra Indicator',
  args: {
    letter: '+2'
  }
}`,...(le=(re=j.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const ue=["Default","AllLetters","AvatarSizes","WithImage","GroupVariations","Small","Large","LetterB","LetterZ","PlusExtra"];export{x as AllLetters,g as AvatarSizes,u as Default,h as GroupVariations,N as Large,y as LetterB,A as LetterZ,j as PlusExtra,b as Small,v as WithImage,ue as __namedExportsOrder,fe as default};

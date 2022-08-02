/// <reference types="react" />
import { palette } from "../tokens/tokens.json";
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    mobile: string;
    desktop: string;
}, {
    colors: {
        cream: string;
        aurometalSaurus: string;
        deepAquamarine: string;
        deepAquamarineHover: string;
        gunmetal: string;
        pureWhite: string;
        black: string;
    };
    fonts: {
        fraunces: string;
        montserrat: string;
    };
    fontSizes: {
        display: any;
        body: any;
        overline: any;
    };
    fontWeights: {
        medium: number;
        bold: number;
    };
    lineHeights: {
        display: any;
        body: any;
        overline: any;
    };
    zIndices: {
        header: number;
        overlay: number;
        dialog: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    focusRing: (color: keyof typeof palette) => {
        outlineColor: string;
        outlineStyle: string;
        outlineWidth: number;
    };
    noSpace: () => {
        margin: number;
        padding: number;
    };
    smoothTransition: (properties: string[]) => {
        transitionDuration: string;
        transitionProperty: string;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    mobile: string;
    desktop: string;
}, import("@stitches/react/types/css-util").CSS<{
    mobile: string;
    desktop: string;
}, {
    colors: {
        cream: string;
        aurometalSaurus: string;
        deepAquamarine: string;
        deepAquamarineHover: string;
        gunmetal: string;
        pureWhite: string;
        black: string;
    };
    fonts: {
        fraunces: string;
        montserrat: string;
    };
    fontSizes: {
        display: any;
        body: any;
        overline: any;
    };
    fontWeights: {
        medium: number;
        bold: number;
    };
    lineHeights: {
        display: any;
        body: any;
        overline: any;
    };
    zIndices: {
        header: number;
        overlay: number;
        dialog: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    focusRing: (color: keyof typeof palette) => {
        outlineColor: string;
        outlineStyle: string;
        outlineWidth: number;
    };
    noSpace: () => {
        margin: number;
        padding: number;
    };
    smoothTransition: (properties: string[]) => {
        transitionDuration: string;
        transitionProperty: string;
    };
}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    mobile: string;
    desktop: string;
}, {
    colors: {
        cream: string;
        aurometalSaurus: string;
        deepAquamarine: string;
        deepAquamarineHover: string;
        gunmetal: string;
        pureWhite: string;
        black: string;
    };
    fonts: {
        fraunces: string;
        montserrat: string;
    };
    fontSizes: {
        display: any;
        body: any;
        overline: any;
    };
    fontWeights: {
        medium: number;
        bold: number;
    };
    lineHeights: {
        display: any;
        body: any;
        overline: any;
    };
    zIndices: {
        header: number;
        overlay: number;
        dialog: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    focusRing: (color: keyof typeof palette) => {
        outlineColor: string;
        outlineStyle: string;
        outlineWidth: number;
    };
    noSpace: () => {
        margin: number;
        padding: number;
    };
    smoothTransition: (properties: string[]) => {
        transitionDuration: string;
        transitionProperty: string;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    mobile: string;
    desktop: string;
}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
        mobile: string;
        desktop: string;
    }, {
        colors: {
            cream: string;
            aurometalSaurus: string;
            deepAquamarine: string;
            deepAquamarineHover: string;
            gunmetal: string;
            pureWhite: string;
            black: string;
        };
        fonts: {
            fraunces: string;
            montserrat: string;
        };
        fontSizes: {
            display: any;
            body: any;
            overline: any;
        };
        fontWeights: {
            medium: number;
            bold: number;
        };
        lineHeights: {
            display: any;
            body: any;
            overline: any;
        };
        zIndices: {
            header: number;
            overlay: number;
            dialog: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        focusRing: (color: keyof typeof palette) => {
            outlineColor: string;
            outlineStyle: string;
            outlineWidth: number;
        };
        noSpace: () => {
            margin: number;
            padding: number;
        };
        smoothTransition: (properties: string[]) => {
            transitionDuration: string;
            transitionProperty: string;
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
    mobile: string;
    desktop: string;
}, {
    colors: {
        cream: string;
        aurometalSaurus: string;
        deepAquamarine: string;
        deepAquamarineHover: string;
        gunmetal: string;
        pureWhite: string;
        black: string;
    };
    fonts: {
        fraunces: string;
        montserrat: string;
    };
    fontSizes: {
        display: any;
        body: any;
        overline: any;
    };
    fontWeights: {
        medium: number;
        bold: number;
    };
    lineHeights: {
        display: any;
        body: any;
        overline: any;
    };
    zIndices: {
        header: number;
        overlay: number;
        dialog: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    focusRing: (color: keyof typeof palette) => {
        outlineColor: string;
        outlineStyle: string;
        outlineWidth: number;
    };
    noSpace: () => {
        margin: number;
        padding: number;
    };
    smoothTransition: (properties: string[]) => {
        transitionDuration: string;
        transitionProperty: string;
    };
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        mobile: string;
        desktop: string;
    }, {
        colors: {
            cream: string;
            aurometalSaurus: string;
            deepAquamarine: string;
            deepAquamarineHover: string;
            gunmetal: string;
            pureWhite: string;
            black: string;
        };
        fonts: {
            fraunces: string;
            montserrat: string;
        };
        fontSizes: {
            display: any;
            body: any;
            overline: any;
        };
        fontWeights: {
            medium: number;
            bold: number;
        };
        lineHeights: {
            display: any;
            body: any;
            overline: any;
        };
        zIndices: {
            header: number;
            overlay: number;
            dialog: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        focusRing: (color: keyof typeof palette) => {
            outlineColor: string;
            outlineStyle: string;
            outlineWidth: number;
        };
        noSpace: () => {
            margin: number;
            padding: number;
        };
        smoothTransition: (properties: string[]) => {
            transitionDuration: string;
            transitionProperty: string;
        };
    }>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        cream: import("@stitches/react/types/theme").Token<"cream", string, "colors", "">;
        aurometalSaurus: import("@stitches/react/types/theme").Token<"aurometalSaurus", string, "colors", "">;
        deepAquamarine: import("@stitches/react/types/theme").Token<"deepAquamarine", string, "colors", "">;
        deepAquamarineHover: import("@stitches/react/types/theme").Token<"deepAquamarineHover", string, "colors", "">;
        gunmetal: import("@stitches/react/types/theme").Token<"gunmetal", string, "colors", "">;
        pureWhite: import("@stitches/react/types/theme").Token<"pureWhite", string, "colors", "">;
        black: import("@stitches/react/types/theme").Token<"black", string, "colors", "">;
    };
    fonts: {
        fraunces: import("@stitches/react/types/theme").Token<"fraunces", string, "fonts", "">;
        montserrat: import("@stitches/react/types/theme").Token<"montserrat", string, "fonts", "">;
    };
    fontSizes: {
        display: import("@stitches/react/types/theme").Token<"display", string, "fontSizes", "">;
        body: import("@stitches/react/types/theme").Token<"body", string, "fontSizes", "">;
        overline: import("@stitches/react/types/theme").Token<"overline", string, "fontSizes", "">;
    };
    fontWeights: {
        medium: import("@stitches/react/types/theme").Token<"medium", string, "fontWeights", "">;
        bold: import("@stitches/react/types/theme").Token<"bold", string, "fontWeights", "">;
    };
    lineHeights: {
        display: import("@stitches/react/types/theme").Token<"display", string, "lineHeights", "">;
        body: import("@stitches/react/types/theme").Token<"body", string, "lineHeights", "">;
        overline: import("@stitches/react/types/theme").Token<"overline", string, "lineHeights", "">;
    };
    zIndices: {
        header: import("@stitches/react/types/theme").Token<"header", string, "zIndices", "">;
        overlay: import("@stitches/react/types/theme").Token<"overlay", string, "zIndices", "">;
        dialog: import("@stitches/react/types/theme").Token<"dialog", string, "zIndices", "">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        cream?: string | number | boolean | undefined;
        aurometalSaurus?: string | number | boolean | undefined;
        deepAquamarine?: string | number | boolean | undefined;
        deepAquamarineHover?: string | number | boolean | undefined;
        gunmetal?: string | number | boolean | undefined;
        pureWhite?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        fraunces?: string | number | boolean | undefined;
        montserrat?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        display?: string | number | boolean | undefined;
        body?: string | number | boolean | undefined;
        overline?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        display?: string | number | boolean | undefined;
        body?: string | number | boolean | undefined;
        overline?: string | number | boolean | undefined;
    } | undefined;
    zIndices?: {
        header?: string | number | boolean | undefined;
        overlay?: string | number | boolean | undefined;
        dialog?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        cream?: string | number | boolean | undefined;
        aurometalSaurus?: string | number | boolean | undefined;
        deepAquamarine?: string | number | boolean | undefined;
        deepAquamarineHover?: string | number | boolean | undefined;
        gunmetal?: string | number | boolean | undefined;
        pureWhite?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        fraunces?: string | number | boolean | undefined;
        montserrat?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        display?: string | number | boolean | undefined;
        body?: string | number | boolean | undefined;
        overline?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        display?: string | number | boolean | undefined;
        body?: string | number | boolean | undefined;
        overline?: string | number | boolean | undefined;
    } | undefined;
    zIndices?: {
        header?: string | number | boolean | undefined;
        overlay?: string | number | boolean | undefined;
        dialog?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "">), config: {
    prefix: "";
    media: {
        mobile: string;
        desktop: string;
    };
    theme: {
        colors: {
            cream: string;
            aurometalSaurus: string;
            deepAquamarine: string;
            deepAquamarineHover: string;
            gunmetal: string;
            pureWhite: string;
            black: string;
        };
        fonts: {
            fraunces: string;
            montserrat: string;
        };
        fontSizes: {
            display: any;
            body: any;
            overline: any;
        };
        fontWeights: {
            medium: number;
            bold: number;
        };
        lineHeights: {
            display: any;
            body: any;
            overline: any;
        };
        zIndices: {
            header: number;
            overlay: number;
            dialog: number;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        focusRing: (color: keyof typeof palette) => {
            outlineColor: string;
            outlineStyle: string;
            outlineWidth: number;
        };
        noSpace: () => {
            margin: number;
            padding: number;
        };
        smoothTransition: (properties: string[]) => {
            transitionDuration: string;
            transitionProperty: string;
        };
    };
};

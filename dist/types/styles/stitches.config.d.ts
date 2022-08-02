/// <reference types="react" />
import { palette } from "../tokens/tokens.json";
import type { FontStyleType } from "../@types/types";
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    mobile: string;
    tablet: string;
    desktop: string;
}, {
    colors: {
        galacticBlue: string;
        summerYellow: string;
        pink: string;
        lightRed: string;
        cyan: string;
        darkPurple: string;
        mediumBrown: string;
        lightCream: string;
        white: string;
        black: string;
    };
    fonts: {
        jakarta: string;
    };
    fontSizes: {
        default: any;
        h1: any;
        h2: any;
        h3: any;
    };
    fontWeights: {
        medium: number;
        bold: number;
    };
    lineHeights: {
        default: any;
        h1: any;
        h2: any;
        h3: any;
    };
    zIndices: {
        header: number;
        overlay: number;
        dialog: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    textStyle: (type: FontStyleType) => {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
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
    tablet: string;
    desktop: string;
}, import("@stitches/react/types/css-util").CSS<{
    mobile: string;
    tablet: string;
    desktop: string;
}, {
    colors: {
        galacticBlue: string;
        summerYellow: string;
        pink: string;
        lightRed: string;
        cyan: string;
        darkPurple: string;
        mediumBrown: string;
        lightCream: string;
        white: string;
        black: string;
    };
    fonts: {
        jakarta: string;
    };
    fontSizes: {
        default: any;
        h1: any;
        h2: any;
        h3: any;
    };
    fontWeights: {
        medium: number;
        bold: number;
    };
    lineHeights: {
        default: any;
        h1: any;
        h2: any;
        h3: any;
    };
    zIndices: {
        header: number;
        overlay: number;
        dialog: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    textStyle: (type: FontStyleType) => {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
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
    tablet: string;
    desktop: string;
}, {
    colors: {
        galacticBlue: string;
        summerYellow: string;
        pink: string;
        lightRed: string;
        cyan: string;
        darkPurple: string;
        mediumBrown: string;
        lightCream: string;
        white: string;
        black: string;
    };
    fonts: {
        jakarta: string;
    };
    fontSizes: {
        default: any;
        h1: any;
        h2: any;
        h3: any;
    };
    fontWeights: {
        medium: number;
        bold: number;
    };
    lineHeights: {
        default: any;
        h1: any;
        h2: any;
        h3: any;
    };
    zIndices: {
        header: number;
        overlay: number;
        dialog: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    textStyle: (type: FontStyleType) => {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
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
    tablet: string;
    desktop: string;
}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
        mobile: string;
        tablet: string;
        desktop: string;
    }, {
        colors: {
            galacticBlue: string;
            summerYellow: string;
            pink: string;
            lightRed: string;
            cyan: string;
            darkPurple: string;
            mediumBrown: string;
            lightCream: string;
            white: string;
            black: string;
        };
        fonts: {
            jakarta: string;
        };
        fontSizes: {
            default: any;
            h1: any;
            h2: any;
            h3: any;
        };
        fontWeights: {
            medium: number;
            bold: number;
        };
        lineHeights: {
            default: any;
            h1: any;
            h2: any;
            h3: any;
        };
        zIndices: {
            header: number;
            overlay: number;
            dialog: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        textStyle: (type: FontStyleType) => {
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
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
    tablet: string;
    desktop: string;
}, {
    colors: {
        galacticBlue: string;
        summerYellow: string;
        pink: string;
        lightRed: string;
        cyan: string;
        darkPurple: string;
        mediumBrown: string;
        lightCream: string;
        white: string;
        black: string;
    };
    fonts: {
        jakarta: string;
    };
    fontSizes: {
        default: any;
        h1: any;
        h2: any;
        h3: any;
    };
    fontWeights: {
        medium: number;
        bold: number;
    };
    lineHeights: {
        default: any;
        h1: any;
        h2: any;
        h3: any;
    };
    zIndices: {
        header: number;
        overlay: number;
        dialog: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    textStyle: (type: FontStyleType) => {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
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
        tablet: string;
        desktop: string;
    }, {
        colors: {
            galacticBlue: string;
            summerYellow: string;
            pink: string;
            lightRed: string;
            cyan: string;
            darkPurple: string;
            mediumBrown: string;
            lightCream: string;
            white: string;
            black: string;
        };
        fonts: {
            jakarta: string;
        };
        fontSizes: {
            default: any;
            h1: any;
            h2: any;
            h3: any;
        };
        fontWeights: {
            medium: number;
            bold: number;
        };
        lineHeights: {
            default: any;
            h1: any;
            h2: any;
            h3: any;
        };
        zIndices: {
            header: number;
            overlay: number;
            dialog: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        textStyle: (type: FontStyleType) => {
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
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
        galacticBlue: import("@stitches/react/types/theme").Token<"galacticBlue", string, "colors", "">;
        summerYellow: import("@stitches/react/types/theme").Token<"summerYellow", string, "colors", "">;
        pink: import("@stitches/react/types/theme").Token<"pink", string, "colors", "">;
        lightRed: import("@stitches/react/types/theme").Token<"lightRed", string, "colors", "">;
        cyan: import("@stitches/react/types/theme").Token<"cyan", string, "colors", "">;
        darkPurple: import("@stitches/react/types/theme").Token<"darkPurple", string, "colors", "">;
        mediumBrown: import("@stitches/react/types/theme").Token<"mediumBrown", string, "colors", "">;
        lightCream: import("@stitches/react/types/theme").Token<"lightCream", string, "colors", "">;
        white: import("@stitches/react/types/theme").Token<"white", string, "colors", "">;
        black: import("@stitches/react/types/theme").Token<"black", string, "colors", "">;
    };
    fonts: {
        jakarta: import("@stitches/react/types/theme").Token<"jakarta", string, "fonts", "">;
    };
    fontSizes: {
        default: import("@stitches/react/types/theme").Token<"default", string, "fontSizes", "">;
        h1: import("@stitches/react/types/theme").Token<"h1", string, "fontSizes", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "fontSizes", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "fontSizes", "">;
    };
    fontWeights: {
        medium: import("@stitches/react/types/theme").Token<"medium", string, "fontWeights", "">;
        bold: import("@stitches/react/types/theme").Token<"bold", string, "fontWeights", "">;
    };
    lineHeights: {
        default: import("@stitches/react/types/theme").Token<"default", string, "lineHeights", "">;
        h1: import("@stitches/react/types/theme").Token<"h1", string, "lineHeights", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "lineHeights", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "lineHeights", "">;
    };
    zIndices: {
        header: import("@stitches/react/types/theme").Token<"header", string, "zIndices", "">;
        overlay: import("@stitches/react/types/theme").Token<"overlay", string, "zIndices", "">;
        dialog: import("@stitches/react/types/theme").Token<"dialog", string, "zIndices", "">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        galacticBlue?: string | number | boolean | undefined;
        summerYellow?: string | number | boolean | undefined;
        pink?: string | number | boolean | undefined;
        lightRed?: string | number | boolean | undefined;
        cyan?: string | number | boolean | undefined;
        darkPurple?: string | number | boolean | undefined;
        mediumBrown?: string | number | boolean | undefined;
        lightCream?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        jakarta?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        default?: string | number | boolean | undefined;
        h1?: string | number | boolean | undefined;
        h2?: string | number | boolean | undefined;
        h3?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        default?: string | number | boolean | undefined;
        h1?: string | number | boolean | undefined;
        h2?: string | number | boolean | undefined;
        h3?: string | number | boolean | undefined;
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
        galacticBlue?: string | number | boolean | undefined;
        summerYellow?: string | number | boolean | undefined;
        pink?: string | number | boolean | undefined;
        lightRed?: string | number | boolean | undefined;
        cyan?: string | number | boolean | undefined;
        darkPurple?: string | number | boolean | undefined;
        mediumBrown?: string | number | boolean | undefined;
        lightCream?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        jakarta?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        default?: string | number | boolean | undefined;
        h1?: string | number | boolean | undefined;
        h2?: string | number | boolean | undefined;
        h3?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        default?: string | number | boolean | undefined;
        h1?: string | number | boolean | undefined;
        h2?: string | number | boolean | undefined;
        h3?: string | number | boolean | undefined;
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
        tablet: string;
        desktop: string;
    };
    theme: {
        colors: {
            galacticBlue: string;
            summerYellow: string;
            pink: string;
            lightRed: string;
            cyan: string;
            darkPurple: string;
            mediumBrown: string;
            lightCream: string;
            white: string;
            black: string;
        };
        fonts: {
            jakarta: string;
        };
        fontSizes: {
            default: any;
            h1: any;
            h2: any;
            h3: any;
        };
        fontWeights: {
            medium: number;
            bold: number;
        };
        lineHeights: {
            default: any;
            h1: any;
            h2: any;
            h3: any;
        };
        zIndices: {
            header: number;
            overlay: number;
            dialog: number;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        textStyle: (type: FontStyleType) => {
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
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
